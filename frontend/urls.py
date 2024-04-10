from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('interesting', index),
    path('create', index),
    path('chats', index),
    path('profile', index),
    path('registration', index),
    path('login', index),
]