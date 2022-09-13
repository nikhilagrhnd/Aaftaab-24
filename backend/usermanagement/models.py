from django.db import models


EVENT_CHOICES = (
    ('kavi_sammelan', 'Kavi Sammelan'),
    ('music_concert', 'Music Concert'),
    ('dance_show', 'Dance Show'),
    ('theatre_play', 'Theatre Play'),
    ('other', 'Other'),
)
PARTICIPATION_CHOICES = (
    ('individual', 'Individual'),
    ('group', 'Group'),
)

class Participant(models.Model):
    email = models.EmailField(max_length=255,unique=True,primary_key=True)
    name = models.CharField(max_length=255,blank=False,default='name')
    password = models.CharField(max_length=255,blank=False,default='password')
    phone_number = models.CharField(max_length=10,blank=True)
    def __str__(self):
        return self.email

class Team(models.Model):
    teamid = models.CharField(max_length=255,primary_key=True,unique=True,blank=False)
    teamname = models.CharField(max_length=255,blank=False)
    team_leader = models.ForeignKey(Participant,on_delete=models.CASCADE,related_name='team_leader')
    event_registered = models.CharField(max_length=255,blank=False,choices=EVENT_CHOICES)
    def __str__(self):
        return self.teamid


class EmailIds(models.Model):
    emailid = models.EmailField(max_length=255,blank=False)
    teamid = models.ForeignKey(Team,on_delete=models.CASCADE)
    def __str__(self):
        return self.emailid

