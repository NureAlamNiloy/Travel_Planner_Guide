from .models import Hotel, Rating, HotelReservation
from .serializers import HotelSerializer, RatingSerializer, HotelReservationSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated

class HotelViewSet(viewsets.ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    permission_classes = [IsAuthenticated]
            
    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(user=self.request.user)
        else:
            raise PermissionDenied("User must be authenticated to create a rating.")
    
class HotelReservationViewSet(viewsets.ModelViewSet):
    queryset = HotelReservation.objects.all()
    serializer_class = HotelReservationSerializer
    def perform_create(self, serializer):
        serializer.save()