Emulationstation Gamelist Manager
=================================

Download on Recalbox
--------------------

```bash
wget https://github.com/neolao/emulationstation-gamelist-manager/releases/latest/download/egm-linux-armv7 -O egm
chmod +x egm
```

Commands
--------

### Check gamelist
```bash
./egm check /path/to/gamelist.xml
```
```
Number of games: 42
Not found: 3
Missing images: 2
Missing videos: 1
```

### Delete games not found
```bash
./egm deleteGamesNotFound /path/to/gamelist.xml
```
```
Deleted games: 3
```
