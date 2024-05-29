from django.urls import path
from .views import index

from django.views.decorators.cache import cache_page

urlpatterns = [
    path('', index),
    path('interesting', index),
    path('create', index),
    path('chats', index),
    path('profile', index),
    path('registration', index),
    path('login', index),
    path('search', cache_page(600)(index)),
]