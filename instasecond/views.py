#from django.shortcuts import render
#from django.http import HttpResponse

from django.shortcuts import render
from rest_framework import generics, status
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from .serialisers import MPosts_serialiser, Profile_serialiser, Subs_serialiser, \
      Comments_serialiser, Profile_serialiser_make, Tegs_serialiser, Likes_serialiser, \
          Posts_serialiser, UserSerializer
from .models import Posts, Profile, Subs, Tegs, Likes, Comments

# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class PostListCreate(generics.ListCreateAPIView):
    serializer_class = Posts_serialiser
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        postauthor = Profile.objects.filter(owner = user)
        return Posts.objects.filter(author = postauthor)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            postauthor = Profile.objects.filter(owner = self.request.user)
            serializer.save(author = postauthor)
        else:
            print(serializer.errors)


class PostsView(generics.ListAPIView):
    queryset = Posts.objects.all()
    serializer_class = Posts_serialiser

class ProfileView(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = Profile_serialiser

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

class Profile_serialiser_post(APIView):
    serializer_class = Profile_serialiser

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.data.get('email')
            name = serializer.data.get('name')
            nikname = serializer.data.get('nikname')
            #password = serializer.data.get('password')
            avatar = serializer.data.get('avatar')
            user = Profile(name=name, email = email, nikname=nikname, avatar=avatar)#, password=password)
            user.save()
            return Response(Profile_serialiser(user).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
    
class Posts_serialiser_post(APIView):
    serializer_class = MPosts_serialiser

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            print(serializer.data)
            header = serializer.data.get('header')
            content = serializer.data.get('content')
            author = serializer.data.get('author')
            image = serializer.data.get('image')
            print(serializer.data)
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

class GetPost_likes_by_post_id(APIView):
    permission_classes = [AllowAny]
    serializer_class = Likes
    lookup_url_kwarg = 'id'

    def get(self, request, format=None):
        id = request.GET.get(self.lookup_url_kwarg)
        if id != None:
            post = Likes.objects.filter(to_post=int(id))
            if len(post) > 0:
                #data = 
                #data = Posts_serialiser(post[0]).data
                #data['is_host'] = self.request.session.session_key == post[0].host
                return HttpResponse(f"{len(post)}")
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
    

class Make_Like(APIView):
    permission_classes = [AllowAny]
    serializer_class = Likes_serialiser

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            print(serializer.data)
            who = serializer.data.get('who')
            to_post = serializer.data.get('to_post')
            post = Likes(who=who, to_post=to_post)
            post.save()
            return Response(Posts_serialiser(post).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
    
class Get_popular_tags(APIView):

    permission_classes = [AllowAny]
    serializer_class = Tegs
    lookup_url_kwarg = 'id'

    def get(self, request, format=None):
        if id != None:
            post = Tegs.objects.order_by("text")
            query = []
            for i in range(len(post)):
                if len(query)>0 and query[-1][0] == Tegs_serialiser(post[i]).data["text"]:
                    query[-1][1]+=1
                else:
                    query.append([Tegs_serialiser(post[i]).data["text"], 1])
            sorted(query, key=lambda x: x[1], reverse=True)

            if len(post) > 0:
                #data = []
                data1 = []
                for i in range(10):
                    #data.append(Tegs_serialiser(post[i]).data["text"])
                    data1.append(query[i][0])
                return Response(data1, status=status.HTTP_201_CREATED)
                #return HttpResponse(data)
            return Response({'Room Not Found': 'Invalid Post Id.'}, status=status.HTTP_404_NOT_FOUND)