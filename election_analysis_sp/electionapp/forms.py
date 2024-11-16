from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
class SearchForm(forms.Form):
    search_query = forms.CharField(label='Search', max_length=100)
    
class SignUpForm(UserCreationForm):
          email=forms.EmailField()
          class Meta:
                  model=User
                  fields=('username','email','password')