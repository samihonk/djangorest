import json
from django.contrib.auth.models import User
from django.urls import reverse
from django.core.exceptions import ValidationError

from rest_framework.test import APITestCase
from rest_framework import status
from knox.auth import AuthToken

from .models import Contact
from .serializers import ContactSerializer

# from django.utils import timezone

# Create your tests here.

def create_contact(title, email, message):
    return Contact.objects.create(title=title, email=email, message=message)

class ContactModelTestCase(APITestCase):

    def test_email_validation_wrong_expression(self):
        title = 'test'
        message = 'test'
        contact = None
        email = 'test'
        try:
            contact = create_contact(title,email,message)
        except ValidationError:
            pass
        self.assertEquals(contact, None)

    def test_email_validation_empty(self):
        title = 'test'
        message = 'test'
        contact = None
        email = ''
        try:
            contact = create_contact(title,email,message)
        except ValidationError:
            pass
        self.assertEquals(contact, None)

    def test_email_validation_long(self):
        title = 'test'
        message = 'test'
        contact = None
        email = 'x'*100+'@test.test'
        try:
            contact = create_contact(title,email,message)
        except ValidationError:
            pass
        self.assertEquals(contact, None)

    def test_email_validation_true(self):
        title = 'test'
        message = 'test'
        email = 'test@test.test'
        contact = create_contact(title,email,message)
        self.assertEquals(contact.email, email)

    def test_title_validation_long(self):
        message = 'test'
        email = 'test@test.test'
        contact = None
        title = 'test_over_20_12345678901234567890'
        try:
            contact = create_contact(title,email,message)
        except ValidationError:
            pass
        self.assertEquals(contact, None)

    def test_title_validation_empty(self):
        message = 'test'
        email = 'test@test.test'
        contact = None
        title = ''
        try:
            contact = create_contact(title,email,message)
        except ValidationError:
            pass
        self.assertEquals(contact, None)

    def test_title_validation_true(self):
        title = 'test'
        message = 'test'
        email = 'test@test.test'
        contact = None
        try:
            contact = create_contact(title,email,message)
        except ValidationError:
            pass
        self.assertEquals(contact.title, title)

    def test_message_validation_empty(self):
        title = 'test'
        email = 'test@test.test'
        contact = None
        message = ''
        try:
            contact = create_contact(title,email,message)
        except ValidationError:
            pass
        self.assertEquals(contact, None)

    def test_message_validation_long(self):
        title = 'test'
        email = 'test@test.test'
        contact = None
        message = 'x'*400+'test'
        try:
            contact = create_contact(title,email,message)
        except ValidationError:
            pass
        self.assertEquals(contact, None)

    def test_message_validation_true(self):
        title = 'test'
        email = 'test@test.test'
        contact = None
        message = 'test'
        try:
            contact = create_contact(title,email,message)
        except ValidationError:
            pass
        self.assertEquals(contact.message, message)