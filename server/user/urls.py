from django.urls import include, path
from user.views import loginView, registerView, CookieTokenRefreshView, logoutView, user
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'individuals', IndividualViewSet)
router.register(r'cameras', CameraViewSet)
router.register(r'dress-code-rules', DressCodeRuleViewSet)
router.register(r'violations', ViolationViewSet)
router.register(r'movement-tracking', MovementTrackingViewSet)
router.register(r'violation-history', ViolationHistoryViewSet)
router.register(r'notifications', NotificationViewSet)
router.register(r'sms-alerts', SMSAlertViewSet)
router.register(r'analytics', AnalyticsViewSet)

app_name = "user"

urlpatterns = [
    path('', include(router.urls)),
    path('login', loginView),
    path('register', registerView),
    path('refresh-token', CookieTokenRefreshView.as_view()),
    path('logout', logoutView),
    path("user", user),
]
