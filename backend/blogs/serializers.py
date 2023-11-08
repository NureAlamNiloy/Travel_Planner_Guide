from rest_framework import serializers
from .models import blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = blog
        fields = '__all__'