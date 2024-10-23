Aufgabe: Integration von Controls in eine Three.js-Szene

In dieser Aufgabe wirst du lernen, wie du OrbitControls in eine Three.js-Szene integrierst, um die Kamera interaktiv zu steuern. Du wirst eine 3D-Szene mit einem Würfel erstellen und dann OrbitControls hinzufügen, sodass du die Kamera um den Würfel drehen, zoomen und schwenken kannst.

Schritte:

	1.	Grundgerüst der Szene aufbauen:
	•	Erstelle eine einfache 3D-Szene mit einem statischen, grünen Würfel.
	•	Verwende PerspectiveCamera und WebGLRenderer, um die Szene zu rendern.
	•	Setze die Kamera so, dass sie den Würfel gut sichtbar macht.
	2.	OrbitControls integrieren:
	•	Füge OrbitControls hinzu, um die Kamera interaktiv zu steuern.
	•	Erlaube das Drehen, Zoomen und Schwenken der Kamera durch Mausbewegungen und Scrollen.
	3.	OrbitControls anpassen:
	•	Aktiviere enableDamping, um die Kamerabewegungen weicher zu machen.
	•	Teste das Verhalten der Kamera, indem du verschiedene dampingFactor-Werte ausprobierst.
	4.	Test der Interaktivität:
	•	Stelle sicher, dass du die Kamera um den Würfel drehen und hinein- und herauszoomen kannst.
	•	Verändere die Position der Kamera und prüfe, wie sich das Verhalten der Controls anpasst.

Bonus-Aufgabe:

	•	Zoom-Begrenzungen hinzufügen: Begrenze den Zoom der Kamera, sodass sie nicht zu nah an den Würfel herangehen oder zu weit hinauszoomen kann (z. B. minDistance und maxDistance).
	•	Schwenkbereich einschränken: Beschränke das Schwenken der Kamera (z. B. durch maxPolarAngle und minPolarAngle).

Hinweise:

	•	Du kannst auf den Controls zugreifen und sie mit den verfügbaren Parametern anpassen, z. B. Zoom-Geschwindigkeit, Dämpfungseffekte usw.