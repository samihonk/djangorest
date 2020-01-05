from rest_framework import routers
from .api import ContactViewset

router = routers.DefaultRouter()
router.register('contacts', ContactViewset, 'contacts')

urlpatterns = router.urls
