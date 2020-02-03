from rest_framework.permissions import BasePermission

class IsPost(BasePermission):
    def has_permission(self, request, view):
        return request.method == 'POST'