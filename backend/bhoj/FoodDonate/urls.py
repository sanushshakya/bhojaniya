from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FoodDonationViewSet

router = DefaultRouter()
router.register(r'fooddonations', FoodDonationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('create_food/', FoodDonationViewSet.create_food, name='create_food'),
]
