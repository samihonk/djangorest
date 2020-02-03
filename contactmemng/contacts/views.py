from .models import Contact
from rest_framework import viewsets, permissions
from .serializers import ContactSerializer
from .perms import IsPostOrIsAuthenticated

class ContactViewset(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    permission_classes = [
        IsPostOrIsAuthenticated
    ]
    serializer_class = ContactSerializer
