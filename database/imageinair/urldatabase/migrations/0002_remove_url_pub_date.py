# Generated by Django 4.0.1 on 2022-05-06 09:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('urldatabase', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='url',
            name='pub_date',
        ),
    ]
