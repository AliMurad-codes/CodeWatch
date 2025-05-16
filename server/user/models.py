from enum import unique
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **kwargs):

        if not email:
            raise ValueError("Email is required")

        user = self.model(
            email=self.normalize_email(email)
        )

        user.set_password(password)
        user.save(using=self._db)

        return user


    def create_superuser(self, email, password, **kwargs):
        user = self.create_user(
            email=self.normalize_email(email),
            password=password
        )

        user.first_name = kwargs.get('first_name')
        user.last_name = kwargs.get('last_name')
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return


class User(AbstractBaseUser):
    email = models.EmailField(null=False, blank=False, unique=True)
    first_name = models.CharField(max_length=50, blank=False, null=False, default='Default first name')
    last_name = models.CharField(max_length=50, blank=False, null=False, default='Default last name')
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True
    
class Profile(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    image = models.ImageField(upload_to='profile/', default='media/profile/avatar.png')
    about = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'{self.user.email} Profile'

@receiver(post_save, sender=get_user_model())
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=get_user_model())
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

class Individual(models.Model):
    name = models.CharField(max_length=255)
    gender = models.CharField(max_length=10)
    unique_id = models.CharField(max_length=100, unique=True)
    image_url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Camera(models.Model):
    camera_name = models.CharField(max_length=255)
    location_latitude = models.FloatField()
    location_longitude = models.FloatField()
    coverage_area = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class DressCodeRule(models.Model):
    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
    )
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    allowed_clothing_items = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Violation(models.Model):
    individual = models.ForeignKey(Individual, on_delete=models.CASCADE)
    camera = models.ForeignKey(Camera, on_delete=models.CASCADE)
    rule = models.ForeignKey(DressCodeRule, on_delete=models.CASCADE)
    violation_type = models.CharField(max_length=255)
    timestamp = models.DateTimeField()
    location_latitude = models.FloatField()
    location_longitude = models.FloatField()
    is_resolved = models.BooleanField(default=False)

class MovementTracking(models.Model):
    individual = models.ForeignKey(Individual, on_delete=models.CASCADE)
    camera = models.ForeignKey(Camera, on_delete=models.CASCADE)
    location_latitude = models.FloatField()
    location_longitude = models.FloatField()
    timestamp = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

class ViolationHistory(models.Model):
    violation = models.ForeignKey(Violation, on_delete=models.CASCADE)
    action_taken = models.TextField()
    resolver = models.ForeignKey(User, on_delete=models.CASCADE)
    resolution_notes = models.TextField()
    timestamp = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

class Notification(models.Model):
    violation = models.ForeignKey(Violation, on_delete=models.CASCADE)
    sent_to = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

class SMSAlert(models.Model):
    violation = models.ForeignKey(Violation, on_delete=models.CASCADE)
    sent_to = models.ForeignKey(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=20)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Analytics(models.Model):
    violation = models.ForeignKey(Violation, on_delete=models.CASCADE)
    time_period = models.CharField(max_length=100)
    gender_based_analysis = models.TextField()
    location_based_analysis = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)