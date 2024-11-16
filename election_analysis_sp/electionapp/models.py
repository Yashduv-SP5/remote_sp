# election_app/models.py
from django.db import models

class ElectionResult(models.Model):
    state_name = models.CharField(max_length=255)
    party_abbreviation = models.CharField(max_length=10)
    total_votes_polled = models.IntegerField()
    position = models.IntegerField()

    def __str__(self):
        return f"{self.state_name} - {self.party_abbreviation}"
