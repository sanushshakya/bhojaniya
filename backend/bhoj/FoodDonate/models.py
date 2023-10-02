from django.db import models
from users.models import CustomUser

class FoodDonation(models.Model):
    location = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    time = models.TimeField()
    date = models.DateField()
    quantity = models.PositiveIntegerField()
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
