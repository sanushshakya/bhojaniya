from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FundContributionViewSet

router = DefaultRouter()
router.register(r'fundcontributions', FundContributionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('create_fund/', FundContributionViewSet.create_fund, name='create_fund')
]
