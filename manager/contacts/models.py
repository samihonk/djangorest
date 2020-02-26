from django.db import models
from django.core.validators import EmailValidator, MaxLengthValidator


class Contact(models.Model):
    title = models.CharField(max_length=20, blank=False, validators=[MaxLengthValidator])
    email = models.EmailField(max_length=100, blank=False, validators=[EmailValidator, MaxLengthValidator])
    message = models.CharField(max_length=400, blank=False, validators=[MaxLengthValidator])
    create_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)
