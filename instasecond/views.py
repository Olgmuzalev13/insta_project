#from django.shortcuts import render
#from django.http import HttpResponse

from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serialisers import Posts_serialiser, User_serialiser, Subs_serialiser, \
      Comments_serialiser, User_serialiser_make, Tegs_serialiser, Likes_serialiser
from .models import Posts, User, Subs, Comments, Tegs, Likes

# Create your views here.

class PostsView(generics.ListAPIView):
    queryset = Posts.objects.all()
    serializer_class = Posts_serialiser

class UserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = User_serialiser

class SubsView(generics.ListAPIView):
    queryset = Subs.objects.all()
    serializer_class = Subs_serialiser

class Comments_View(generics.ListAPIView):
    queryset = Comments.objects.all()
    serializer_class = Comments_serialiser

class Tegs_View(generics.ListAPIView):
    queryset = Tegs.objects.all()
    serializer_class = Tegs_serialiser

class Likes_View(generics.ListAPIView):
    queryset = Likes.objects.all()
    serializer_class = Likes_serialiser

class Users_serialiser_post(APIView):
    serializer_class = User_serialiser

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.data.get('email')
            name = serializer.data.get('name')
            nikname = serializer.data.get('nikname')
            password = serializer.data.get('password')
            avatar = serializer.data.get('avatar')
            user = User(name=name, email = email, nikname=nikname, avatar=avatar, password=password)
            user.save()
            return Response(User_serialiser(user).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
    
class Posts_serialiser_post(APIView):
    serializer_class = Posts_serialiser

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            header = serializer.data.get('header')
            content = serializer.data.get('content')
            author = serializer.data.get('author')
            image = serializer.data.get('image')
            print(image)
            #host = self.request.session.session_key
            #queryset = Posts.objects.filter(header=header)
            #if queryset.exists():
            #    room = queryset[0]
            #    room.guest_can_pause = guest_can_pause
            #    room.votes_to_skip = votes_to_skip
            #    room.save(update_fields=['guest_can_pause', 'votes_to_skip'])
            #    return Response(Posts_serialiser(room).data, status=status.HTTP_200_OK)
            #else:
            post = Posts(header=header, content=content, image=image)
            post.save()
            return Response(Posts_serialiser(post).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class GetPost_by_id(APIView):
    serializer_class = Posts_serialiser
    lookup_url_kwarg = 'id'

    def get(self, request, format=None):
        id = request.GET.get(self.lookup_url_kwarg)
        if id != None:
            post = Posts.objects.filter(id=int(id))
            if len(post) > 0:
                data = Posts_serialiser(post[0]).data
                #data['is_host'] = self.request.session.session_key == post[0].host
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Room Not Found': 'Invalid Post Id.'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Id paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)

class Subs_serialiser_post(APIView):
    serializer_class = Subs_serialiser

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            who = serializer.data.get('who')
            to_whom = serializer.data.get('to_whom')
            table_line = Subs(who=who, to_whom=to_whom)
            table_line.save()
            return Response(Subs_serialiser(table_line).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class Comments_serialiser_post(APIView):
    serializer_class = Comments_serialiser

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            text = serializer.data.get('text')
            to_post = serializer.data.get('to_post')
            author = serializer.data.get('author')
            table_line = Comments(text=text, to_post=to_post, author=author)
            table_line.save()
            return Response(Subs_serialiser(table_line).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)