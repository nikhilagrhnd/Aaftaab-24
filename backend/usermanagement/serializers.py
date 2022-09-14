from rest_framework import serializers
from .models import Participant,Team,EmailIds

class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = '__all__'


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'


class EmailIdsSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailIds
        fields = '__all__'
