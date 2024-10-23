Aufgabe: Integration eines weiteren Planeten und Bewegung

In dieser Aufgabe erweiterst du die bestehende Three.js-Szene, um einen zweiten Planeten, Merkur (Mercury.glb), hinzuzufügen. Beide Planeten (Sonne und Merkur) sollen sich um ihre eigene Achse drehen, während Merkur zusätzlich die Sonne umkreist. Du wirst dabei lernen, wie du framerate-unabhängige Rotation und Orbit-Bewegung implementierst.

Schritte:

	1.	Merkur hinzufügen:
	•	Füge den Planeten Merkur mit dem GLTFLoader in die Szene ein.
	•	Setze seine Position so, dass er in der Nähe der Sonne platziert wird.
	2.	Rotation der Planeten:
	•	Implementiere eine Methode, die sowohl die Sonne als auch Merkur um ihre eigene Achse rotieren lässt.
	•	Achte darauf, dass die Rotation framerate-unabhängig ist (mit Delta-Zeit).
	3.	Merkur umkreist die Sonne:
	•	Implementiere eine Methode, die Merkur um die Sonne kreisen lässt.
	•	Die Umlaufbahn soll nicht von der Framerate abhängen, sondern konstant bleiben.
	4.	Szene aktualisieren und testen:
	•	Stelle sicher, dass die Animationen kontinuierlich laufen, während du die Szene renderst.

Bonus-Aufgabe:

	•	Umlaufgeschwindigkeit anpassen: Experimentiere mit verschiedenen Geschwindigkeiten für die Rotation und den Orbit von Merkur.

Hinweis:
Parameter für die Darstellung von Merkur:
- Dateiname: 'Mercury.glb',
- Skalierung: -0.001,
- Position: new THREE.Vector3(7, 0, -5),


Venus: -0.002
Erde: -0.002
Mars: -0.0015
Jupiter: -0.005
Saturn: -0.004
Uranus: -0.003
Neptun: -0.003