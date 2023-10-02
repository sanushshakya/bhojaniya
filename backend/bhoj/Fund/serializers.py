from rest_framework import serializers
from .models import FundContribution
from users.serializers import CustomUserSerializer 

class FundContributionSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    class Meta:
        model = FundContribution
        fields = '__all__'
        
    def get_user(self, obj):
        # Use your CustomUserSerializer to serialize the user field
        user_serializer = CustomUserSerializer(obj.user)
        return user_serializer.data
