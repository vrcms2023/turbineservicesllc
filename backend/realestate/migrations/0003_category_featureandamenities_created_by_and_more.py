# Generated by Django 4.2.5 on 2025-06-02 09:22

import common.BaseModel
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('realestate', '0002_projects_seo_author_projects_seo_description_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('created_by', models.CharField(blank=True, max_length=50, null=True)),
                ('updated_by', models.CharField(blank=True, max_length=50, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('path', models.FileField(blank=True, null=True, upload_to=common.BaseModel.image_upload_path)),
                ('category', models.CharField(blank=True, max_length=100, null=True)),
                ('originalname', models.CharField(blank=True, max_length=500, null=True)),
                ('contentType', models.CharField(blank=True, max_length=100, null=True)),
                ('alternitivetext', models.CharField(blank=True, max_length=500, null=True)),
                ('category_Label', models.CharField(max_length=50)),
                ('category_Value', models.CharField(max_length=50)),
                ('category_description', models.CharField(blank=True, max_length=500, null=True)),
                ('readMore_link', models.CharField(blank=True, max_length=100, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='featureandamenities',
            name='created_by',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='featureandamenities',
            name='updated_by',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='featureandamenities',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='featureandamenities',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='projects',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='projects',
            name='created_by',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='projects',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='projects',
            name='updated_by',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='specifications',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='specifications',
            name='created_by',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='specifications',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='specifications',
            name='updated_by',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
