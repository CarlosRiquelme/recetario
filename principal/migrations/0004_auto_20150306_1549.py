# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('principal', '0003_comentario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bebida',
            name='nombre',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
    ]
