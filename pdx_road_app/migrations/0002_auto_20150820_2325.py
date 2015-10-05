# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pdx_road_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='submission',
            old_name='catagory',
            new_name='category',
        ),
        migrations.RenameField(
            model_name='submission',
            old_name='otherCatagoryExplain',
            new_name='otherCategoryExplain',
        ),
    ]
