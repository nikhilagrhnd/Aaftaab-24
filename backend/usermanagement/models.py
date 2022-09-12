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
    userid = models.CharField(max_length=255,primary_key=True,unique=True,blank=False)
    name = models.CharField(max_length=255,blank=False,default='name')
    password = models.CharField(max_length=255,blank=False,default='password')
    email = models.EmailField(max_length=255,unique=True,blank=False)
    phone_number = models.CharField(max_length=10,blank=True)

    def __str__(self):
        return self.userid

class Team(models.Model):
    teamid = models.CharField(max_length=255,primary_key=True,unique=True,blank=False)
    max_teamsize = models.IntegerField(blank=False)
    min_teamsize = models.IntegerField(blank=False)
    teamname = models.CharField(max_length=255,blank=False)
    team_leader = models.ForeignKey(Participant,on_delete=models.CASCADE,related_name='team_leader')
    participation_type = models.CharField(max_length=255,blank=False,default='individual',choices=PARTICIPATION_CHOICES)
    event_registed = models.CharField(max_length=255,blank=False,choices=EVENT_CHOICES)
    def __str__(self):
        return self.teamid


class EmailIds(models.Model):
    emailid = models.EmailField(max_length=255,unique=True,blank=False)
    teamid = models.ForeignKey(Team,on_delete=models.CASCADE)
    def __str__(self):
        return self.emailid

