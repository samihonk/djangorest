# Generated by Django 3.0.1 on 2020-02-25 14:18

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='email',
            field=models.EmailField(max_length=100, validators=[django.core.validators.EmailValidator, django.core.validators.MaxLengthValidator]),
        ),
        migrations.AlterField(
            model_name='contact',
            name='message',
            field=models.CharField(max_length=400, validators=[django.core.validators.MaxLengthValidator]),
        ),
        migrations.AlterField(
            model_name='contact',
            name='title',
            field=models.CharField(max_length=20, validators=[django.core.validators.MaxLengthValidator]),
        ),
    ]