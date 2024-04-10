from rest_framework import serializers
from .models import Posts, User, Subs, Comments, Likes, Tegs

class Posts_serialiser(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ("id", "header", "content", "image", "author", "created_at")

class User_serialiser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "email", "name", "nikname", "avatar", "rate", "password", "created_at")

class User_serialiser_make(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("nikname", "avatar", "rate", "created_at")

class Subs_serialiser(serializers.ModelSerializer):
    class Meta:
        model = Subs
        fields = ("id", "who", "to_whom", "created_at")


class Comments_serialiser(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ("id", "text", "to_post", "author", "created_at")

class Likes_serialiser(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = ("id", "who", "to_whom", "" "created_at")

class Tegs_serialiser(serializers.ModelSerializer):
    class Meta:
        model = Tegs
        fields = ("id", "text", "to_post", "created_at")