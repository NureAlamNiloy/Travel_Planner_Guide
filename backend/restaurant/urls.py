from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from django.conf import settings
from django.conf.urls.static import static

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'restaurant', views.RestaurantViewSet,basename="restaurant")
router.register(r'items', views.FoodItemViewSet,basename="items")
router.register(r'FoodOrder', views.FoodOrderViewSet,basename="FoodOrder")

urlpatterns = [
    path('', include(router.urls)),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)