from argparse import Namespace
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from urldatabase import views

router = routers.DefaultRouter()
router.register(r'urls', views.UrlView, 'url')

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include(router.urls)),
    path('api/', include('rest_framework.urls', namespace='rest_framework'))
]
