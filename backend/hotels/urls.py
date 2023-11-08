from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from django.conf import settings
from django.conf.urls.static import static

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'hotels', views.HotelViewSet,basename="hotel")
router.register(r'ratings', views.RatingViewSet,basename="rating")
router.register(r'reservations', views.HotelReservationViewSet,basename="reservation")

urlpatterns = [
    path('', include(router.urls)),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)