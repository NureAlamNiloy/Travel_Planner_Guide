from .models import Place, PlacesRating,TripTracker
from .serializers import PlacesSerializer, PlacesRatingSerializer, TripTrackerSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

class PlacesViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlacesSerializer

class PlacesRatingViewSet(viewsets.ModelViewSet):
    queryset = PlacesRating.objects.all()
    serializer_class = PlacesRatingSerializer
    permission_classes = [IsAuthenticated]
            
    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(user=self.request.user)
        else:
            raise PermissionDenied("User must be authenticated to create a rating.")
        

class TripTrackerViewSet(viewsets.ModelViewSet):
    queryset = TripTracker.objects.all()
    serializer_class = TripTrackerSerializer
    