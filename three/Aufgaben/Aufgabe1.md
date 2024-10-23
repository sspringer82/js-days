# Aufgabe 1: Grundlegende Szene

Erstelle eine einfache 3D-Szene mit Three.js, die einen statischen Würfel anzeigt. Anschließend erweiterst du die Szene, um die Grundlagen von Three.js zu vertiefen.

Schritte:

	1.	Grundgerüst der Szene aufbauen:
	•	Erstelle eine HTML-Datei, die ein Canvas enthält, auf dem die Szene gerendert wird.
	•	Verwende initiale Beispiel, um eine Szene mit einem statischen, grünen Würfel und einer Kamera zu erstellen.
	•	Nutze PerspectiveCamera und WebGLRenderer zum Rendern der Szene.
	2.	Szene erweitern:
	•	Aufgabe 1: Füge einen zweiten Würfel zur Szene hinzu, der eine andere Größe und Farbe hat. Positioniere diesen Würfel so, dass er nicht direkt auf dem ersten Würfel liegt.
	•	Nutze dazu verschiedene Werte für BoxGeometry und MeshBasicMaterial.
	•	Ändere die position.x, position.y oder position.z des zweiten Würfels.
	4.	Kamera anpassen:
	•	Aufgabe 3: Verschiebe die Kamera an eine neue Position und ändere ihren Blickwinkel mit der lookAt() Methode, sodass beide Würfel klar sichtbar sind.
	5.	Szene rendern:
	•	Aufgabe 4: Render die Szene erneut mit den hinzugefügten Objekten und der angepassten Kamera.

`BoxGeometry(x, y, z)`
`cube.position.set(x, y, z);`