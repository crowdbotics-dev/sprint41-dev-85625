# Generated by Django 2.2.28 on 2023-05-23 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20230523_1908'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='mithilesh',
        ),
        migrations.AddField(
            model_name='user',
            name='vinay',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]
