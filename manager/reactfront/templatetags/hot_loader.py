from django.conf import settings
from django import template

register = template.Library()

@register.simple_tag
def hot_load(string):
  if (settings.DEBUG == True and hasattr(settings, 'HOT_LOAD') ):
    return settings.HOT_LOAD + string
  else:
    return settings.STATIC_URL + string