from django.urls import path,include
from .views import create_participant,create_team

urlpatterns = [
    path('create_participant/', create_participant),
    path('create_team/', create_team),
]