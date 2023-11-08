from .models import RestaurantModel, FoodItem,FoodOrder
from .serializers import RestaurantSerializer,FoodItemSerializer,FoodOrderSerializer
from rest_framework import viewsets

class RestaurantViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = RestaurantModel.objects.all()
    serializer_class = RestaurantSerializer

class FoodItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer
class FoodOrderViewSet(viewsets.ModelViewSet):
    queryset = FoodOrder.objects.all()
    serializer_class = FoodOrderSerializer
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
