#custom_filters.py
from django import template

register = template.Library()

@register.filter(name='dict_keys')
def dict_keys(dictionary):
    return dictionary.keys()

@register.filter(name='dict_values')
def dict_values(dictionary):
    return dictionary.values()
