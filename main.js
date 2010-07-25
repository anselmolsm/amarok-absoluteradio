/*#########################################################################
#                                                                         #
#   Simple script for testing the scriptable service browser              #
#   by creating a simple static browser with some cool radio              #
#   streams. URLs shamelessly stolen from Cool-Streams.xml.               #
#                                                                         #
#   Copyright                                                             #
#   (C) 2010, Anselmo Lacerda Silveira de Melo <anselmolsm@gmail.com>     #
#   (C) 2007, 2008 Nikolaj Hald Nielsen  <nhnFreespirit@gmail.com>        #
#   (C)       2008 Peter ZHOU <peterzhoulei@gmail.com>                    #
#   (C)       2008 Mark Kretschmann <kretschmann@kde.org>                 #
#                                                                         #
#   This program is free software; you can redistribute it and/or modify  #
#   it under the terms of the GNU General Public License as published by  #
#   the Free Software Foundation; either version 2 of the License, or     #
#   (at your option) any later version.                                   #
#                                                                         #
#   This program is distributed in the hope that it will be useful,       #
#   but WITHOUT ANY WARRANTY; without even the implied warranty of        #
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         #
#   GNU General Public License for more details.                          #
#                                                                         #
#   You should have received a copy of the GNU General Public License     #
#   along with this program; if not, write to the                         #
#   Free Software Foundation, Inc.,                                       #
#   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.         #
##########################################################################*/

function Station( name, url )
{
    this.name = name;
    this.url = url;
}

var stationArray = new Array (
    new Station( "Absolute Radio", "http://network.absoluteradio.co.uk/core/audio/ogg/live.pls?service=vrbb"),
    new Station( "Absolute Classic Rock", "http://network.absoluteradio.co.uk/core/audio/ogg/live.pls?service=vcbb"),
    new Station( "Absolute 80s", "http://network.absoluteradio.co.uk/core/audio/ogg/live.pls?service=a8bb"),
    new Station( "dabbl", "http://network.absoluteradio.co.uk/core/audio/ogg/live.pls?service=albb")
);

function AbsoluteRadios()
{
    ScriptableServiceScript.call( this, "Absolute Radios", 1, "Absolute radio stations", "Absolute radio stations, from the UK (ogg streams)", false );
}

function onPopulating( level, callbackData, filter )
{
    for ( i = 0; i < stationArray.length; i++ )
    {
        item = Amarok.StreamItem;
        item.level = 0;
        item.callbackData = "";
        item.itemName = stationArray[i].name;
        item.playableUrl = stationArray[i].url;
        item.infoHtml = item.itemName;
        script.insertItem( item );
    }
    script.donePopulating();
}

script = new AbsoluteRadios();
script.populate.connect( onPopulating );
