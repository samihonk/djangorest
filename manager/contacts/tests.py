import json
from django.contrib.auth.models import User
from django.urls import reverse

from rest_framework.test import APITestCase
from rest_framework import status
from knox.auth import AuthToken

from .models import Contact
from .serializers import ContactSerializer

# from django.utils import timezone

# Create your tests here.

def create_contact(title, email, message):
    return Contact.objects.create(title=title, email=email, message=message)


# class ContactTestCase(APITestCase):
#     def test_testcase(self):
#         self.assertEquals(True, True)