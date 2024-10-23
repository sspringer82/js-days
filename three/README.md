# Setup

```bash
npm create vite@latest three -- --template vanilla
cd three
npm install
npm install three
npm run dev
```

Browser öffnen: http://localhost:5173/

## Three.js

	1.	JavaScript 3D Library: Three.js ist eine plattformunabhängige JavaScript-Bibliothek, die es Entwicklern ermöglicht, 3D-Grafiken direkt im Browser zu rendern.
	2.	WebGL Wrapper: Es dient als Abstraktionsschicht für WebGL und vereinfacht die Nutzung der WebGL-API.
	3.	Scene Graph: Three.js nutzt ein Szenengraphensystem, um 3D-Objekte, Kameras und Lichter hierarchisch zu organisieren.
	4.	Einfache Integration: Die Bibliothek lässt sich einfach in moderne JavaScript-Anwendungen integrieren und funktioniert mit Frameworks wie React, Vue und Angular.
	5.	Cross-Browser-Kompatibilität: Three.js läuft in allen modernen Browsern und nutzt WebGL für hardwarebeschleunigtes Rendering.
	6.	Erweiterbar: Es gibt viele Erweiterungen, die auf Three.js aufbauen und Funktionen wie Physik-Engines oder AR/VR-Unterstützung hinzufügen.
	7.	Umfangreiche Features: Die Bibliothek bietet eine breite Palette an Features, die es ermöglichen, komplexe Szenen zu erstellen, darunter Geometrien, Materialien, Lichter und Kameras.
	8.	Leistungsoptimierung: Three.js bietet verschiedene Techniken zur Optimierung der Leistung, wie das Culling nicht sichtbarer Objekte und Level-of-Detail-Rendering.
	9.	Echtzeit-Rendering: Three.js ist für Echtzeit-Anwendungen ausgelegt und eignet sich gut für Spiele, Visualisierungen oder interaktive 3D-Erfahrungen im Browser.
	10.	Open-Source: Es ist eine Open-Source-Bibliothek, die ständig von einer großen Community weiterentwickelt wird, was regelmäßige Updates und neue Features garantiert.

### Alternativen
- Babylon.js: Eine sehr umfassende und leistungsstarke 3D-Engine, die WebGL unterstützt. Sie bietet fortgeschrittene Features wie Physik, Echtzeit-Beleuchtung und Virtual Reality.
- 8th Wall: : 8th Wall ist eine Plattform, die sich auf die Erstellung von AR-Erlebnissen spezialisiert hat und es ermöglicht, AR direkt über den Browser (WebAR) ohne den Einsatz von Apps zu realisieren. Es ist besonders geeignet für mobile AR-Anwendungen, die auf Web-Technologien wie WebGL und WebXR basieren.

## Renderer
	1.	Rendering Engine: Der Renderer ist die Komponente, die die 3D-Szene in ein 2D-Bild konvertiert und es auf dem Bildschirm anzeigt.
	2.	WebGLRenderer: Der am häufigsten verwendete Renderer in Three.js ist der WebGLRenderer, der WebGL verwendet, um hardwarebeschleunigtes Rendering zu ermöglichen.
	3.	Canvas Element: Der Renderer erstellt ein HTML-Canvas-Element, in dem die Szene gerendert wird. Dieses Canvas kann in das DOM eingefügt und angepasst werden.
	4.	Methoden: Der Renderer verfügt über eine render()-Methode, die die Szene basierend auf der Kamera zeichnet und dabei alle Objekte, Beleuchtung und Materialien berücksichtigt.
	5.	Konfiguration: Man kann den Renderer anpassen, z. B. die Größe (mit setSize()), den Hintergrund (Farbe oder Textur), die Antialiasing-Optionen und andere Grafikeinstellungen.
	6.	Echtzeit-Rendering: Der Renderer wird in einem Animationsloop aufgerufen, um kontinuierlich Bilder basierend auf der aktuellen Szene und Kamera zu generieren, besonders wichtig für interaktive oder animierte Anwendungen.
	7.	Post-Processing: Der Renderer unterstützt auch erweiterte Effekte wie Shader-basierte Post-Processing-Effekte, die nach dem Rendern angewendet werden können (z. B. Bloom, Depth of Field).

## Scene

	1.	Container für 3D-Objekte: Die Szene ist der Container, in dem alle 3D-Objekte, Lichter und Kameras organisiert und verwaltet werden.
	2.	Hierarchie: Sie nutzt ein hierarchisches System (Scene Graph), in dem Objekte in einer Eltern-Kind-Struktur organisiert sind. Bewegungen oder Transformationen des Elternobjekts wirken sich auf alle Kindobjekte aus.
	3.	Globale Koordinaten: Die Szene definiert das globale Koordinatensystem, innerhalb dessen alle Objekte positioniert und transformiert werden.
	4.	Lichter und Kamera: Neben 3D-Objekten wie Meshes kann die Szene auch Lichter und Kameras enthalten, die benötigt werden, um die Objekte sichtbar zu machen und korrekt zu rendern.
	5.	Background: Die Szene kann einen Hintergrund haben, der entweder eine Farbe, ein Bild oder sogar ein 3D-Objekt (z. B. ein CubeMap für eine Umgebung) sein kann.
	6.	Ebenen (Layers): Die Szene unterstützt Layer, sodass bestimmte Objekte auf verschiedenen Ebenen gezeichnet werden können, um bestimmte Kamera- oder Render-Effekte zu erzielen.
	7.	Management von Objekten: Über Methoden wie add() und remove() können Objekte dynamisch zur Szene hinzugefügt oder entfernt werden, was eine flexible Verwaltung ermöglicht.
	8.	Rendering-Ziel: Die Szene wird jedes Mal vom Renderer in Kombination mit der Kamera gerendert, um das endgültige Bild zu erzeugen, das auf dem Canvas angezeigt wird.

## Camera

	1.	Betrachtungsperspektive: Die Kamera bestimmt, aus welcher Perspektive die 3D-Szene gerendert wird, ähnlich wie ein „virtuelles Auge“ in der Szene.
	2.	Typen von Kameras: Es gibt verschiedene Kameratypen, die häufigsten sind:
	•	PerspectiveCamera: Simuliert das menschliche Sehvermögen mit einem Fluchtpunkt und einem realistischen Tiefeneffekt.
	•	OrthographicCamera: Rendert ohne Perspektivverzerrung, ideal für 2D-Spiele oder technische Visualisierungen.
	3.	Field of View (FoV): Bei der PerspectiveCamera gibt das FoV an, wie weit die Kamera sieht, ähnlich wie der Blickwinkel eines realen Objektivs.
	4.	Position und Rotation: Die Kamera kann innerhalb der Szene wie ein Objekt positioniert, rotiert und skaliert werden, um den gewünschten Betrachtungswinkel festzulegen.
	5.	Near und Far Clipping Plane: Die Kamera hat zwei Clipping-Ebenen, die definieren, welche Objekte sichtbar sind. Alles, was vor dem Near-Clipping-Plane oder hinter dem Far-Clipping-Plane liegt, wird nicht gerendert.
	6.	LookAt-Funktion: Eine Methode, mit der die Kamera auf ein bestimmtes Objekt oder einen Punkt in der Szene ausgerichtet werden kann.
	7.	Viewport: Die Kamera kann in Kombination mit mehreren Viewports verwendet werden, um verschiedene Teile der Szene gleichzeitig aus verschiedenen Perspektiven anzuzeigen.
	8.	Animationsfähig: Die Kamera kann animiert werden, z. B. für Kamerafahrten oder dynamische Perspektivwechsel in interaktiven Szenen oder Spielen.

## Meshes

	1.	Grundbaustein für 3D-Objekte: Ein Mesh ist das grundlegende 3D-Objekt in Three.js, das aus Geometrie (Form) und Material (Oberfläche) besteht.
	2.	Geometrie: Die Geometrie eines Meshes definiert seine Struktur. Three.js bietet Standard-Geometrien wie Würfel, Kugel oder Plane, und es können auch eigene Geometrien erstellt werden.
	3.	Material: Das Material bestimmt das Aussehen des Meshes, einschließlich Farbe, Transparenz, Textur und Reflexionen. Es gibt viele vordefinierte Materialtypen wie MeshBasicMaterial, MeshPhongMaterial, MeshStandardMaterial usw.
	4.	Positionierung und Transformationen: Ein Mesh kann in der Szene frei positioniert, rotiert und skaliert werden. Diese Transformationen wirken sich auf die gesamte Geometrie des Objekts aus.
	5.	Sichtbarkeit: Meshes können ein- oder ausgeblendet werden, indem die Sichtbarkeitsattribute angepasst werden. So können Objekte z. B. nur in bestimmten Szenarien angezeigt werden.
	6.	Interaktivität: Meshes können mit Maus- und Touch-Events interagieren, was sie besonders nützlich für interaktive Anwendungen macht. Dies geschieht oft in Kombination mit Raycasting.
	7.	Physik: Ein Mesh kann mit einer Physik-Engine kombiniert werden, um realistische Simulationen wie Gravitation, Kollisionen oder Kräfte auf das Objekt anzuwenden.
	8.	Instanzierung: Wenn mehrere gleiche Objekte benötigt werden, können Meshes instanziiert werden, um die Speichernutzung und Performance zu optimieren, indem dieselbe Geometrie mehrfach verwendet wird.

## Aufgabe1

# Light + Shadow + Material

### Beispiel

siehe ./02/index.js

## Licht

	1.	Beleuchtung von Szenen: Lichtquellen in Three.js bestimmen, wie Objekte in der Szene beleuchtet werden, um realistische Darstellungen zu erzeugen.
	2.	Typen von Lichtquellen:
	•	DirectionalLight: Ein Lichtstrahl, der aus einer Richtung kommt, wie Sonnenlicht.
	•	PointLight: Ein Punktlicht, das in alle Richtungen strahlt, wie eine Glühbirne.
	•	SpotLight: Ein fokussiertes Licht, ähnlich einem Scheinwerfer.
	•	AmbientLight: Umgebungslicht, das die gesamte Szene gleichmäßig beleuchtet, ohne Schatten zu erzeugen.
	•	HemisphereLight: Licht mit zwei Farben, das den Himmel und die Erde simuliert.
	3.	Lichtparameter: Jedes Licht hat Parameter wie Farbe, Intensität und Position, die das Verhalten der Beleuchtung steuern.
	4.	Shadows (Schatten): Einige Lichtquellen (z. B. DirectionalLight, SpotLight) unterstützen Schatten und können Schatten auf Objekte in der Szene werfen.
	5.	Mehrere Lichtquellen: Du kannst mehrere Lichtquellen in einer Szene kombinieren, um komplexe Beleuchtungseffekte zu erzeugen.

## Schatten

	1.	Schattenwurf aktivieren: Um Schatten in einer Szene zu verwenden, musst du sowohl beim Renderer als auch bei den Lichtquellen und Objekten den Schattenwurf aktivieren.
	2.	Lichtquellen für Schatten: Nur bestimmte Lichtquellen wie DirectionalLight und SpotLight können Schatten werfen. Du musst castShadow auf true setzen.
	3.	Objekte werfen und empfangen Schatten:
	•	castShadow: Objekte können so eingestellt werden, dass sie Schatten werfen.
	•	receiveShadow: Objekte können Schatten empfangen, die von anderen Objekten geworfen werden.
	4.	Schattenqualität: Die Qualität des Schattens kann durch Parameter wie shadow.mapSize angepasst werden (größere Werte = bessere Schattenqualität).
	5.	Realistische Schatten: Schatten in Three.js basieren auf der Position und dem Winkel der Lichtquellen sowie der Entfernung der Objekte zueinander.

## Material

	1.	Materialien definieren das Aussehen: Materialien bestimmen, wie ein 3D-Objekt in Bezug auf Farbe, Glanz, Transparenz, Reflexion und Textur aussieht.
	2.	Haupttypen von Materialien:
	•	MeshBasicMaterial: Einfaches Material ohne Lichtinteraktionen, ideal für flache Farben oder Texturen.
	•	MeshStandardMaterial: Physically-based Rendering (PBR)-Material, das Licht und Schatten realistisch berücksichtigt.
	•	MeshPhongMaterial: Erzeugt glatte, glänzende Oberflächen mit reflektierendem Licht und Schattierungen.
	•	MeshLambertMaterial: Mattematerial, das Licht berechnet, aber keine Reflexionen unterstützt.
	3.	Parameter: Materialien können Eigenschaften wie Farbe, Textur, Transparenz, Glanz (shininess), Metallizität (metalness) und Rauheit (roughness) haben.
	4.	Texturen: Materialien können mit Texturen kombiniert werden, um detaillierte Oberflächen wie Holz, Metall oder Stein darzustellen.
	5.	Doppeltes Rendering (Double-Sided): Materialien können so eingestellt werden, dass sie auf beiden Seiten eines Meshes sichtbar sind (side: THREE.DoubleSide), was besonders bei flachen Geometrien wie Planes nützlich ist.

## Aufgabe2

# Controls

### Beispiel

siehe ./03/index.js

## Controls

Controls in Three.js ermöglichen es dem Benutzer, die Kamera interaktiv zu steuern und die Szene zu erkunden. Sie bieten Funktionen wie Drehen, Zoomen oder Bewegen der Kamera.

Typen von Controls:

	1.	OrbitControls:
	•	Ermöglicht das Drehen, Zoomen und Schwenken der Kamera um einen festen Punkt (Orbit).
	•	Ideal, um ein Objekt aus allen Winkeln zu betrachten.
	2.	TrackballControls:
	•	Bietet vollständige Kamerabewegung ohne feste Einschränkungen.
	•	Gut für Szenen, bei denen die Kamera in jede Richtung bewegt werden soll.
	3.	FlyControls:
	•	Ermöglicht freies Fliegen durch die Szene, wie in einem Flug- oder First-Person-Simulator.
	4.	PointerLockControls:
	•	Steuert die Kamera durch Mausbewegungen, wie in First-Person-Shootern.
	5.	FirstPersonControls:
	•	Kamera bewegt sich wie in einem First-Person-Spiel, kombiniert Maus und Tastatur für volle Kontrolle.

## Animationsloop

Der Animationsloop in Three.js ist ein Mechanismus, um eine Szene kontinuierlich zu aktualisieren und zu rendern, wodurch dynamische Inhalte oder Animationen möglich werden.

	•	Kontinuierliches Rendering: Der Animationsloop sorgt dafür, dass die Szene kontinuierlich gerendert wird, um Animationen oder Veränderungen sichtbar zu machen.
	•	requestAnimationFrame(): Die Methode wird verwendet, um den Loop zu starten. Sie sorgt für eine optimierte Frame-Rate und pausiert automatisch, wenn der Tab nicht sichtbar ist.
	•	Kamera- und Objektausgabe: Bewegt die Kamera oder Objekte (wie Rotation eines Würfels) und aktualisiert sie im Loop.
	•	Controls Update: Bei Verwendung von Interaktionsmechanismen (wie OrbitControls) wird controls.update() im Animationsloop aufgerufen, um Bewegungen zu aktualisieren.
	•	Wiederholte Aufrufe: Durch requestAnimationFrame(animate) wird die Funktion rekursiv aufgerufen und die Szene stetig neu gerendert.

```js
function animate() {
  requestAnimationFrame(animate); // Loop starten
  controls.update();              // Kamera- oder Szenenbewegungen aktualisieren
  renderer.render(scene, camera); // Szene neu rendern
}

animate(); // Animationsloop starten
```

## Aufgabe 3

# Animations

### Beispiel

siehe ./04/index.js

## Animationen

	•	Grundidee: Animationen in Three.js bestehen darin, Eigenschaften von Objekten (Position, Rotation, Skalierung, Materialeigenschaften) über die Zeit zu verändern.
	•	requestAnimationFrame(): Wird verwendet, um einen Animationsloop zu erstellen. Es sorgt dafür, dass die Szene kontinuierlich neu gerendert wird, was flüssige Animationen ermöglicht.
	•	Animierte Transformationen:
	•	Position: Objekte können verschoben werden, indem ihre position-Eigenschaft über den Loop angepasst wird.
	•	Rotation: Die rotation-Eigenschaft eines Objekts kann verändert werden, um das Objekt zu drehen.
	•	Skalierung: Die scale-Eigenschaft eines Objekts kann genutzt werden, um das Objekt zu vergrößern oder zu verkleinern.
	•	Zeitschritt: Animationsänderungen basieren oft auf der Zeit, um gleichmäßige Bewegungen sicherzustellen, unabhängig von der Framerate.
  •	Materialanimationen: Auch Materialeigenschaften (wie Farbe, Transparenz) können animiert werden, um interessante visuelle Effekte zu erzeugen.
	•	Physikbasierte Animationen: Durch den Einsatz von Physik-Engines wie Cannon.js oder Ammo.js können realistische, physikbasierte Animationen (z. B. Fall, Kollision) in Three.js integriert werden.
	•	Morph Targets: Ermöglicht die Animation von Geometrien durch Morphing von einer Form in eine andere. Oft für Gesichtsanimationen oder andere organische Bewegungen verwendet.

## Aufgabe 4

# External Models

### Beispiel

siehe ./05/index.js

## Externe Modelle

	•	Externe 3D-Modelle sind in anderen Softwareanwendungen erstellte Modelle (wie Blender, Maya etc.) und werden in Three.js geladen, um sie in WebGL-Szenen zu verwenden.
	•	Formate: Häufig verwendete Dateiformate für externe Modelle sind .gltf, .glb, .obj, .fbx und mehr.
	•	Optimierung: Externe Modelle werden oft optimiert, um sie in Web-Anwendungen effizient zu rendern, z. B. durch Reduzierung der Dateigröße oder Polygonanzahl.

## Loader

	•	Loader sind spezialisierte Klassen in Three.js, die es ermöglichen, verschiedene Arten von externen Dateien (wie 3D-Modelle, Texturen, Animationen) in eine Szene zu laden.
	•	Haupttypen von Loadern:
	  • GLTFLoader: Lädt .gltf und .glb-Dateien.
	  •	OBJLoader: Lädt .obj-Dateien.
	  •	FBXLoader: Lädt .fbx-Dateien.
	•	TextureLoader: Lädt Bilddateien wie .jpg, .png als Texturen.
	•	Asynchrones Laden: Loader verwenden oft asynchrone Methoden, um Modelle im Hintergrund zu laden, ohne die Webanwendung zu blockieren.

## GLTF

	•	Definition: GLTF ist ein standardisiertes Dateiformat für die effiziente Übertragung und Darstellung von 3D-Modellen in WebGL.
	•	Formate:
  	•	.gltf: Enthält JSON-Daten, die Geometrie, Materialien, Animationen und andere 3D-Informationen beschreiben.
  	•	.glb: Binäres GLTF-Format, das JSON und die binären Daten (Texturen, Geometrie) in einer Datei zusammenfasst.
	•	Vorteile:
  	•	Kompakt: .glb ist kleiner und daher ideal für das Web.
  	•	Schnell: Speziell für die schnelle Verarbeitung und effizientes Rendering in WebGL entwickelt.
  	•	Unterstützt Animationen: Kann rigged Models (Skelett-Animationen) und Morph Targets enthalten.
  	•	Integrierte Texturen: Texturen und Materialien können direkt eingebettet sein.

## Aufgabe 5

# Particles

## Beispiel

siehe ./06/index.js

## Particles

Points sind eine Sammlung von Punkten (Vertices), die in einer 3D-Szene als einzelne Punkte dargestellt werden.
	•	Points-Objekt: Ein Points-Objekt in Three.js besteht aus einer Geometrie (für die Position der Punkte) und einem Material (für das Aussehen der Punkte).
	•	Verwendung: Wird häufig verwendet, um Punktwolken, Sterne, Partikel und andere ähnliche Darstellungen zu erzeugen.
	•	Geometry:	Punkte benötigen eine Geometry, die die Positionen der einzelnen Punkte im Raum definiert (z. B. THREE.BufferGeometry).
	  •	Punkte werden mit geometry.setAttribute festgelegt, um Positionsdaten der Punkte anzugeben.
	•	PointsMaterial:	Das Material für Points wird in Three.js mit THREE.PointsMaterial erstellt.
	  •	Einstellungen wie Größe, Farbe, transparenz und Texturen sind über PointsMaterial konfigurierbar.
	•	Punktgröße:	Die Größe der Punkte kann über den Parameter size im PointsMaterial festgelegt werden.
	  •	Standardmäßig haben alle Punkte die gleiche Größe, können aber auch variieren, wenn ein spezieller Shader verwendet wird.
	•	Partikelsysteme: Points eignen sich hervorragend, um Partikelsysteme zu erstellen, indem viele kleine Punkte verwendet werden, um Effekte wie Rauch, Feuer, Staub oder Schnee zu simulieren.
	•	Effizienz: Points sind in Three.js sehr effizient, da viele Punkte in einem einzigen Draw-Call gerendert werden können, was eine hohe Anzahl von Punkten ermöglicht.

## Aufgabe 6

# Raycaster + Overlays

## Beispiel

siehe ./07/index.js

## Raycaster

Ein Raycaster ist ein Tool in Three.js, das einen unsichtbaren Strahl (Ray) von einem Punkt aus in eine bestimmte Richtung schickt, um zu prüfen, welche Objekte in der Szene der Strahl trifft.
	•	Verwendung:
	  •	Wird häufig für Interaktionen wie Mausklicks, Hover-Effekte oder Kollisionsabfragen verwendet.
	  •	Besonders nützlich in Anwendungen, bei denen der Benutzer mit 3D-Objekten interagieren muss, z. B. um festzustellen, welches Objekt angeklickt oder ausgewählt wurde.
	•	Arbeitsweise:
	  1.	Strahl erstellen: Der Strahl wird von einem Ursprung (z. B. der Kameraposition oder der Mausposition) aus in eine Richtung geschossen.
	  2.	Abfragen: Der Strahl prüft, welche Objekte er schneidet, und gibt eine Liste der getroffenen Objekte zurück.
	•	Hauptmethoden:
	  •	Raycaster.set(): Setzt den Ursprung und die Richtung des Strahls.
	  •	Raycaster.intersectObjects(): Gibt eine Liste von Objekten zurück, die vom Strahl getroffen werden.

## Text anzeigen

Um Text in Three.js anzuzeigen, gibt es verschiedene Möglichkeiten, abhängig davon, ob der Text als 2D-Overlay oder als 3D-Objekt in der Szene erscheinen soll.

### 2D Text (html)
Text, der in einem HTML-Element (z. B. <div>) angezeigt wird, das über dem Canvas liegt.
	•	Verwendung: Einfach zu implementieren, kann jedoch nicht in der 3D-Szene selbst erscheinen.

### 3D Text (three)

3D-Text wird direkt in der Szene als Mesh gerendert, wodurch er wie jedes andere 3D-Objekt behandelt werden kann.
	•	Verwendung: Erfordert die Verwendung von THREE.TextGeometry oder THREE.TextBufferGeometry sowie eine Schriftartdatei (z. B. .json-Datei).
	•	Schritte:
  	1.	Schriftart laden: Verwende den FontLoader, um eine Schriftart zu laden.
  	2.	Text-Objekt erstellen: Erstelle ein TextGeometry-Objekt und füge es zur Szene hinzu.

```js
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

const loader = new FontLoader();
loader.load('path/to/font.json', function(font) {
  const textGeometry = new TextGeometry('Hello Three.js!', {
    font: font,
    size: 1,
    height: 0.1
  });

  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const textMesh = new THREE.Mesh(textGeometry, material);

  textMesh.position.set(0, 0, 0); // Text in der Szene positionieren
  scene.add(textMesh);
});
```

## Aufgabe 7

# Planet .glb files
From Nasa https://nasa3d.arc.nasa.gov/