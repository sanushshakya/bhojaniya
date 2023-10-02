# project_name/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('users.urls')),  
    path('api/', include('FoodDonate.urls')),
    path('api/', include('Fund.urls')),
    path('api/', include('gallery.urls')),
]
