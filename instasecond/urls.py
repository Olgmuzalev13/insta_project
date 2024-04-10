from django.urls import include, path
from .views import PostsView, Posts_serialiser_post, UserView, Users_serialiser_post, \
      SubsView, Subs_serialiser_post, Comments_View, Comments_serialiser_post, GetPost_by_id, Tegs_View, \
      Likes_View
urlpatterns = [
    path('posts', PostsView.as_view()),
    path('mposts', Posts_serialiser_post.as_view()),
    path('get-post', GetPost_by_id.as_view()),

    path('users', UserView.as_view()),
    path('musers', Users_serialiser_post.as_view()),

    path('subs', SubsView.as_view()),
    path('msubs', Subs_serialiser_post.as_view()),

    path('comments', Comments_View.as_view()),
    path('mcomments', Comments_serialiser_post.as_view()),

    path('tegs', Tegs_View.as_view()),

    path('likes', Likes_View.as_view()),
]
