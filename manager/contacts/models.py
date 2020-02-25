from django.db import models


class Contact(models.Model):
    title = models.CharField(max_length=20, blank=False)
    email = models.EmailField(max_length=100, blank=False)
    message = models.CharField(max_length=400, blank=False)
    create_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
