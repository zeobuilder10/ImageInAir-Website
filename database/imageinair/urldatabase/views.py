from django.shortcuts import render
from .serializers import UrlSerializer
from rest_framework import viewsets, permissions
from .models import url

class UrlView(viewsets.ModelViewSet):
    serializer_class = UrlSerializer 
    queryset = url.objects.all()
    permission_classes = [permissions.AllowAny]