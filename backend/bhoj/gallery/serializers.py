from rest_framework import serializers
from .models import Gallery

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = '__all__'
        
    def to_representation(self, instance):
        data = super().to_representation(instance)
        # Modify the 'image' field to return a relative path
        data['image'] = instance.image.url
        return data
