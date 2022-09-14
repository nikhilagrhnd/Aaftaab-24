from django.urls import path,include
from .views import create_participant,create_team,login_participant

urlpatterns = [
    path('create_participant/', create_participant),
    path('create_team/', create_team),
    path('login_participant/', login_participant),
]