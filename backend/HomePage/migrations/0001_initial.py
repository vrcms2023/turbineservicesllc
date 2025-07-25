# Generated by Django 4.2.5 on 2025-07-17 05:05

import common.BaseModel
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Carousel',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('created_by', models.CharField(blank=True, max_length=50, null=True)),
                ('updated_by', models.CharField(blank=True, max_length=50, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('path', models.FileField(blank=True, null=True, upload_to=common.BaseModel.image_upload_path)),
                ('category', models.CharField(blank=True, max_length=100, null=True)),
                ('originalname', models.CharField(blank=True, max_length=500, null=True)),
                ('contentType', models.CharField(blank=True, max_length=500, null=True)),
                ('alternitivetext', models.CharField(blank=True, max_length=500, null=True)),
                ('carouse_title', models.CharField(blank=True, max_length=200, null=True)),
                ('carouse_sub_title', models.CharField(blank=True, max_length=200, null=True)),
                ('carouse_description', models.CharField(blank=True, max_length=5000, null=True)),
                ('carouse_position', models.IntegerField(blank=True, default=0, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='ClientLogo',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('created_by', models.CharField(blank=True, max_length=50, null=True)),
                ('updated_by', models.CharField(blank=True, max_length=50, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('path', models.FileField(blank=True, null=True, upload_to=common.BaseModel.image_upload_path)),
                ('category', models.CharField(blank=True, max_length=100, null=True)),
                ('originalname', models.CharField(blank=True, max_length=500, null=True)),
                ('contentType', models.CharField(blank=True, max_length=500, null=True)),
                ('alternitivetext', models.CharField(blank=True, max_length=500, null=True)),
                ('client_title', models.CharField(blank=True, max_length=500, null=True)),
                ('client_description', models.CharField(blank=True, max_length=5000, null=True)),
                ('client_position', models.IntegerField(blank=True, default=0, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='HomeIntro',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('created_by', models.CharField(blank=True, max_length=50, null=True)),
                ('updated_by', models.CharField(blank=True, max_length=50, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('intro_title', models.CharField(blank=True, max_length=100, null=True)),
                ('intro_desc', models.CharField(blank=True, max_length=5000, null=True)),
                ('intro_morelink', models.CharField(blank=True, max_length=100, null=True)),
                ('subTitle', models.JSONField(blank=True, null=True)),
                ('pageType', models.CharField(max_length=100)),
                ('intro_position', models.IntegerField(blank=True, default=0, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
