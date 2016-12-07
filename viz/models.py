from __future__ import unicode_literals

from django.db import models

class HorseTechTag(models.Model):
    """
    A class to record all the times when the strategy was enabled/disabled
    """

    tag = models.CharField(max_length=60, unique=True)
    type = models.CharField(max_length=1, choices=(('T','Technology'), ('H', 'Horse')), default='T')

    def __str__(self):
        return "%s" % self.tag





class HorseTech(models.Model):
    """
    A class to record all the times when the strategy was enabled/disabled
    """
    name = models.CharField(max_length=60, unique=True)
    description = models.TextField(blank=True, null=True)
    img = models.ImageField(blank=True, null=True)
    country = models.CharField(max_length=30, blank=True, null=True)
    url = models.URLField(blank=True, null=True)
    added = models.DateTimeField(auto_now_add=True)
    price = models.IntegerField(default=0, help_text="Price in Euro")
    tags = models.ManyToManyField(HorseTechTag)
    def __str__(self):
        return "%s" % self.name


