# Generated by Django 4.2.11 on 2024-05-27 10:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('instasecond', '0013_remove_comments_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='comments',
            name='author',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='instasecond.profile'),
        ),
    ]