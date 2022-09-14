from django.db import models


EVENT_CHOICES = (
    ('treasure_hunt','Treasure Hunt'),
    ('prompt_poetry','Prompt Poetry'),
    ('noob_quiz','Noob Quiz'),
    ('word_games','Word Games'),
    ('just_a_minute_speech','Just A Minute Speech'),
    ('hindi_debate','Hindi Debate'),
    ('english_debate','English Debate'),
    ('netflix_and_quiz','Netflix and Quiz'),
    ('mela_quiz','Mela Quiz'),

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

