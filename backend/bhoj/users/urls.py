from django.urls import path
from .views import user_register, user_login, get_csrf_token


urlpatterns = [
    path('register/', user_register, name='user-register'),
    path('login/', user_login, name='user-login'),
     path('get-csrf-token/', get_csrf_token, name='get_csrf_token'),
]
