from rest_framework import serializers
from .models import Posts, Profile, Subs, Comments, Likes, Tegs
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user

class Posts_serialiser(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ("id", "header", "content", "image", "author", "created_at")

class Profile_serialiser(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ("id", "owner", "email", "name", "nikname", "avatar", "rate", "created_at")
        extra_kwargs = {"owner": {"write_only": True}}

class Profile_serialiser_make(serializers.ModelSerializer):
    class Meta:
        model = Profile
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
        fields = ("id", "who", "to_post", "created_at")

class Tegs_serialiser(serializers.ModelSerializer):
    class Meta:
        model = Tegs
        fields = ("id", "text", "to_post", "created_at")

class MPosts_serialiser(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ("header", "content", "image", "author")