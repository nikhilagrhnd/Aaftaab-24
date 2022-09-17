from django.db import models


EVENT_CHOICES = (
    ('prompt_poetry','Prompt Poetry'),
    ('noob_quiz','Noob Quiz'),
    ('word_games','Word Games'),
    ('hindi_debate','Hindi Debate'),
    ('english_debate','English Debate'),
    ('video_making_workshop','Video Making Workshop'),
    ('creative_writing_workshop','Creative Writing Workshop'),
    ('acting_workshop','Acting Workshop'),
    ('regional_literature_colloquium','Regional Literature Colloquium'),
    ('treasure_hunt','Treasure Hunt'),
    ('standup_comedy','Standup Comedy'),
    ('just_a_minute_speech','Just A Minute Speech'),
    ('prompt_based_character_re_enactment','Prompt Based Character Re-enactment'),
    ('mythology_quiz','Mythology Quiz'),
    ('theatre_performance','Theatre Performance'),
    ('english_author_book_signing','English Author Book Signing'),
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

