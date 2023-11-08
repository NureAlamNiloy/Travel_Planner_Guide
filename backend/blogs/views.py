from .models import blog
from .serializers import BlogSerializer
from rest_framework import viewsets

class BlogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = blog.objects.all()
    serializer_class = BlogSerializer
