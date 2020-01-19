from django.conf import settings

def hot_load(context):
  if hasattr(settings, 'HOT_LOAD'):
    return {'HOT_LOAD': settings.HOT_LOAD} 
  else:
    return ''