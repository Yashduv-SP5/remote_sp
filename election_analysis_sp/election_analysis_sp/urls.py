# election_analysis/urls.py
from django.contrib import admin
from django.urls import path, include
from electionapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/',include('django.contrib.auth.urls')), 
    path('election/', include('electionapp.urls')),
]
