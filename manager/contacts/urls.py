from rest_framework import routers
from .views import ContactViewset

router = routers.DefaultRouter()
router.register('contacts', ContactViewset, 'contacts')

urlpatterns = router.urls
