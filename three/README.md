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
