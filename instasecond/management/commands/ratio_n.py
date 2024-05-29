from django.core.management.base import BaseCommand, CommandError
from django.contrib.auth.models import User
from instasecond.models import Posts, Comments, Tegs, Subs, Likes, Profile


class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument("amount", type=int)

    def handle(self, *args, **options):
        #users = User.objects.all()
        last_user = 0
        for i in range(options["amount"]):
            som_user = User()
            som_user.username = f"absaa{i}"
            som_user.password = f"123aaa{i}"
            som_user.save()
            some_user = Profile()
            some_user.owner = som_user;
            some_user.email = f"email21aa{i}@mail.ru"
            some_user.name = f"name2a1a{i}"
            some_user.nikname = f"nikname2112aaa{i}"
            some_user.save()
        
            for i in range(10):
                some_post = Posts()
                some_post.header = f"header21aaa{i} {some_user.nikname}"
                some_post.content = f"content22aa{i}  {some_user.nikname}"
                some_post.author = some_user
                some_post.save()

                for i in range(10):
                    some_comment = Comments()
                    some_comment.text = f"text2aa{i} {some_user.nikname} {some_post.header}"
                    some_comment.to_post = some_post
                    some_comment.author = some_user
                    some_comment.save()
                
                    some_teg = Tegs()
                    some_teg.text = f"text1aa{i} {some_user.nikname} {some_post.header}"
                    some_teg.to_post = some_post
                    some_teg.save()

                    some_like = Likes()
                    some_like.who = some_user
                    some_like.to_post = some_post
                    some_like.save()


            
            if(last_user!=0):
                some_sub = Subs()
                some_sub.who = some_user
                some_sub.to_whom = last_user
                some_sub.save()

            last_user = some_user
