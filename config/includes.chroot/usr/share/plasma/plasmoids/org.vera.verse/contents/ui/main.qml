import QtQuick
import org.kde.plasma.plasmoid
import org.kde.plasma.plasma5support as P5
PlasmoidItem {
  id: root; property string verse: "..."
  P5.DataSource { engine: "executable"; connectedSources: ["/usr/local/bin/vera-verse"]; interval: 3600000
    onNewData: (s, d) => root.verse = d["stdout"] }
  preferredRepresentation: fullRepresentation
  fullRepresentation: Rectangle { color: "#55000000"; radius: 18; implicitWidth: 420; implicitHeight: 160
    Text { anchors.fill: parent; anchors.margins: 20; text: root.verse; color: "white"; wrapMode: Text.Wrap; font.pointSize: 14; font.italic: true } }
}
