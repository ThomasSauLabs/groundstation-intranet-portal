#!/usr/bin/env python3
"""Affiche le type de connecteur choisi, sans ouvrir de connexion."""
import json
import sys
from pathlib import Path

root = Path(__file__).resolve().parents[1]
settings_file = root / 'config/environments.json'
settings = json.loads(settings_file.read_text(encoding='utf-8'))
name = sys.argv[1] if len(sys.argv) > 1 else settings['default']
if name not in settings['environments']:
    raise SystemExit('Environnement inconnu : ' + name)
profile_file = settings_file.parent / settings['environments'][name]['profile']
profile = json.loads(profile_file.read_text(encoding='utf-8'))
print(name + ' : ' + profile['driver'])
if 'origin' in profile:
    print('Service : ' + profile['origin'])
