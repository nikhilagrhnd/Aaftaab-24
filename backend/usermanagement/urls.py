from django.urls import path,include
from .views import create_participant,create_team,login_participant,get_all_events_for_an_user,check_login

urlpatterns = [
    path('create_participant/', create_participant),
    path('create_team/', create_team),
    path('login_participant/', login_participant),
    path('get_all_events_for_an_user/', get_all_events_for_an_user),
    path('check_login/', check_login),
    
]