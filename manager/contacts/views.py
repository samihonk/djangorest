from .models import Contact
from rest_framework import viewsets, permissions
from .serializers import ContactSerializer
from .perms import IsPost

class ContactViewset(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    permission_classes = [
        IsPost|permissions.IsAuthenticated
    ]
    serializer_class = ContactSerializer
