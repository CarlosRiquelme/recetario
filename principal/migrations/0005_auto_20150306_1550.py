# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('principal', '0004_auto_20150306_1549'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bebida',
            name='nombre',
            field=models.CharField(max_length=50),
            preserve_default=True,
        ),
    ]
