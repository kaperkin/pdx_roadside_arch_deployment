# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Submission',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('firstName', models.CharField(max_length=200)),
                ('lastName', models.CharField(max_length=200)),
                ('emailAddress', models.CharField(max_length=200)),
                ('catagory', models.CharField(max_length=200)),
                ('otherCatagoryExplain', models.TextField()),
                ('caption', models.CharField(max_length=200)),
                ('geoLocation', models.CharField(max_length=200)),
                ('photo', models.CharField(max_length=200)),
                ('link', models.CharField(max_length=200)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
