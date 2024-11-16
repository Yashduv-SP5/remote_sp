# election_app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('analyze/', views.analyze_election, name='analyze'),
    path('signup/',views.signup_view,name='signup'),
    path('login/',views.login_view,name='login'),
    path('logout/',views.logout_view,name='logout'),
    path('search_2009/',views.search_view_1,name='search1'),
    path('search_2014/',views.search_view_2,name='search2'),
    path('search_2019/',views.search_view_3,name='search3'),
]
