# Generated by Django 4.2.11 on 2024-04-09 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('instasecond', '0005_alter_user_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='password',
            field=models.CharField(default='1234', max_length=50),
        ),
    ]