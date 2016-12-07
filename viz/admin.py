from django.contrib import admin
from .models import *


from django.utils.safestring import mark_safe
from django.utils.translation import ugettext as _
from django.contrib.admin import SimpleListFilter



class HorseTechAdmin(admin.ModelAdmin):

    list_display = ('name','added',)




admin.site.register(HorseTech, HorseTechAdmin)

