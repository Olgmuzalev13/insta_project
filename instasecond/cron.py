from .models import Posts, Profile, Subs, Tegs, Likes, Comments
from django.core.cache import cache

def cach_maker():
    post = Tegs.objects.order_by("text")
    cache.set('tegs', post, 600)
    post = Subs.objects.order_by("to_whom")
    cache.set('popusers', post, 600)