# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pdx_road_app', '0005_auto_20150825_0223'),
    ]

    operations = [
        migrations.AlterField(
            model_name='submission',
            name='photo',
            field=models.ImageField(upload_to=b'/media/'),
            preserve_default=True,
        ),
    ]
