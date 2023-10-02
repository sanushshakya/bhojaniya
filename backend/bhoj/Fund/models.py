from django.db import models
from users.models import CustomUser

class FundContribution(models.Model):
    phone = models.TextField(max_length=20)
    organization = models.TextField(max_length=255)
    amount = models.TextField(max_length=20)
    message = models.TextField()
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
