from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views
#from .views import PostsView, Posts_serialiser_post, ProfileView, Profile_serialiser_post, \
#      SubsView, Subs_serialiser_post, Comments_View, Comments_serialiser_post, GetPost_by_id, Tegs_View, \
#      Likes_View, CreateUserView
urlpatterns = [
    path('posts', views.PostsView.as_view()),
    path('mposts', views.Posts_serialiser_post.as_view()),
    path('get-post', views.GetPost_by_id.as_view()),

    path('profile', views.ProfileView.as_view()),
    path('mprofile', views.Profile_serialiser_post.as_view()),

    path('subs', views.SubsView.as_view()),
    path('msubs', views.Subs_serialiser_post.as_view()),

    path('comments', views.Comments_View.as_view()),
    path('mcomments', views.Comments_serialiser_post.as_view()),

    path('tegs', views.Tegs_View.as_view()),
    path('tegs10', views.Get_popular_tags.as_view()),

    path('likes', views.Likes_View.as_view()),
    path('get-like', views.GetPost_likes_by_post_id.as_view()),
    path('mlikes', views.Make_Like().as_view()),

    path('mpost', views.PostListCreate.as_view(), name='post-list'),
]
