from django.urls import path, include
from .api import LoginAPI, UserAPI
from knox.views import LogoutView as LogoutAPI

urlpatterns = [
    path('auth', include('knox.urls')),
    path('auth/login', LoginAPI.as_view()),
    path('auth/user', UserAPI.as_view()),
    path('auth/logout', LogoutAPI.as_view()),
]
