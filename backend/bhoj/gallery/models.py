from django.db import models
from PIL import Image

class Gallery(models.Model):
    image = models.ImageField(upload_to='gallery/')  
    
    def save(self, *args, **kwargs):
        # Open the image file
        image = Image.open(self.image)

        # Resize the image to a maximum size of 400x400 pixels
        max_size = (400, 400)
        image.thumbnail(max_size)

        # Save the resized image
        image.save(self.image.path)

        super().save(*args, **kwargs)

