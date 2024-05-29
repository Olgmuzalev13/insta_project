from django.db import models
from django.contrib.auth.models import User
# Create your models here.


def subsrubed_on():
    return

class Profile(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.CharField(max_length=40, default="IvanIvanov@mail.ru")
    name = models.CharField(max_length=50, default="Ivan Ivanov")
    nikname = models.CharField(max_length=50, unique=True)
    avatar = models.ImageField(null=True, blank=True)
    rate = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'email: {self.email} nikname: {self.nikname}'
    

class Posts(models.Model):
    header = models.CharField(max_length=50)
    content = models.CharField(max_length=250)
    image = models.ImageField(upload_to="instameter/frontend/static/images", null=True, blank=True)
    author = models.ForeignKey(Profile, on_delete=models.CASCADE, default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'header: {self.header} image: {self.image} author: {self.author}'

class Comments(models.Model):
    text = models.CharField(max_length=50, unique=True)
    to_post = models.ForeignKey(Posts, on_delete=models.CASCADE)
    author = models.ForeignKey(Profile, on_delete=models.CASCADE, default=1)
    created_at = models.DateTimeField(auto_now_add=True)

class Likes(models.Model):
    who = models.ForeignKey(Profile, on_delete=models.CASCADE)
    to_post = models.ForeignKey(Posts, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f'who: {self.who} to_post: {self.to_post}'

class Subs(models.Model):
    who = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='who')
    to_whom = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='to_whom')
    created_at = models.DateTimeField(auto_now_add=True)

class Tegs(models.Model):
    text = models.CharField(max_length=50, unique=True)
    to_post = models.ForeignKey(Posts, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    