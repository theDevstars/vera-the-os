panels().forEach(function(p){p.remove();});
var bar=new Panel; bar.location="top"; bar.height=28;
bar.addWidget("org.kde.plasma.appmenu"); bar.addWidget("org.kde.plasma.panelspacer");
bar.addWidget("org.kde.plasma.systemtray"); bar.addWidget("org.kde.plasma.digitalclock");
var dock=new Panel; dock.location="bottom"; dock.height=56; dock.alignment="center";
dock.floating=true; dock.hiding="none"; // "autohide" enables auto-hide
var t=dock.addWidget("org.kde.plasma.icontasks"); t.currentConfigGroup=["General"];
t.writeConfig("launchers",["applications:helium.desktop","applications:org.kde.dolphin.desktop",
"applications:vera-bible.desktop","applications:org.kde.konsole.desktop","applications:org.kde.kate.desktop",
"applications:org.kde.kcalc.desktop","applications:org.kde.gwenview.desktop","applications:org.kde.elisa.desktop",
"applications:org.kde.merkuro.calendar.desktop","applications:org.kde.discover.desktop","applications:systemsettings.desktop",
"applications:vera-downloads.desktop"]);
dock.addWidget("org.kde.plasma.trash");
var d=desktops()[0]; d.wallpaperPlugin="org.kde.image";
d.currentConfigGroup=["Wallpaper","org.kde.image","General"]; d.writeConfig("Image","file:///usr/share/vera/wallpapers/aurora.svg");
d.addWidget("org.vera.verse",60,60,420,180);
