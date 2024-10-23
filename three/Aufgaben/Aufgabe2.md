Aufgabe 2: Erweiterung der Szene mit Licht, Materialien und Schatten

Erweitere die zuvor erstellte 3D-Szene, um realistische Lichteffekte, verschiedene Materialtypen und Schattenwurf zu integrieren. Diese Aufgabe soll dir helfen, die Konzepte von Licht und Schatten sowie von Materialien in Three.js besser zu verstehen.

Schritte:

	1.	Lichtquellen hinzufügen:
	•	Aufgabe 1: Füge zwei Lichtquellen zur Szene hinzu:
	•	Ein AmbientLight (Umgebungslicht) für eine gleichmäßige Grundbeleuchtung.
	•	Ein PointLight (Punktlicht), das eine Lichtquelle wie eine Lampe simuliert. Platziere das Punktlicht so, dass es beide Würfel von oben beleuchtet.
	•	Stelle sicher, dass das Punktlicht Schatten werfen kann.
	2.	Materialien anwenden:
	•	Aufgabe 2: Ändere das Material des ersten Würfels zu einem MeshStandardMaterial mit metallischen und rauen Eigenschaften, um ein realistisches Aussehen zu erzielen.
	•	Verändere das Material des zweiten Würfels zu einem MeshPhongMaterial, das glatte und glänzende Oberflächen simuliert. Verwende eine andere Farbe als für den ersten Würfel.
	3.	Schattenwurf aktivieren:
	•	Aufgabe 3: Aktiviere den Schattenwurf in der Szene.
	•	Der erste und zweite Würfel sollten Schatten auf den Boden werfen.
	•	Füge eine Plane (Fläche) unter den Würfeln hinzu, die die Schatten empfängt.
	•	Verwende die castShadow- und receiveShadow-Eigenschaften, um den Schattenwurf und den Empfang zu konfigurieren.
	4.	Schattenqualität verbessern:
	•	Aufgabe 4: Stelle die Qualität der Schatten ein, indem du die shadow.mapSize des Punktlichts erhöhst. Reduziere pixelige Schatten, indem du die shadow.bias anpasst.
	5.	Szene rendern:
	•	Aufgabe 5: Render die Szene erneut mit den hinzugefügten Lichtquellen, Materialien und Schatteneffekten. Verwende die Kamera, um die Szene aus einer Perspektive zu betrachten, in der beide Würfel und deren Schatten sichtbar sind.

Bonus-Aufgabe:

	•	Reflexionen und Glanz: Experimentiere mit den Eigenschaften des MeshStandardMaterial und MeshPhongMaterial. Verändere die Werte für metalness, roughness und shininess, um zu sehen, wie sich die Reflexion und Glanz der Würfel verändern.