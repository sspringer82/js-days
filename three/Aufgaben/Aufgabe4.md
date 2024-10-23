In dieser Aufgabe lernst du, wie du Animationen in Three.js implementierst, um Objekte in einer 3D-Szene zu bewegen, rotieren oder skalieren. Du erstellst eine Szene mit einem animierten Würfel, der sich gleichmäßig dreht, und fügst weitere Animationseffekte hinzu.

Schritte:

	1.	Grundlegende 3D-Szene erstellen:
	•	Erstelle eine 3D-Szene mit Three.js, in der ein Würfel dargestellt wird.
	•	Verwende eine PerspectiveCamera und einen WebGLRenderer, um die Szene zu rendern.
	2.	Einfaches Animationsloop erstellen:
	•	Füge eine Funktion animate() hinzu, die mithilfe von requestAnimationFrame() kontinuierlich aufgerufen wird.
	•	Lasse den Würfel um seine X- und Y-Achse rotieren.
	3.	Zeitbasierte Animation (Frame-unabhängig):
	•	Verwende eine Clock, um die Rotation des Würfels unabhängig von der Framerate zu steuern.
	•	Lasse den Würfel mit einer konstanten Geschwindigkeit rotieren.
	4.	Kombiniere Animationen:
	•	Füge eine weitere Animation hinzu, die den Würfel langsam in der Szene auf und ab bewegt (position.y).
	•	Steuere die Bewegung mit der Sinusfunktion, um eine gleichmäßige Auf- und Abwärtsbewegung zu simulieren.
	5.	Bonus-Aufgabe: Skalierung hinzufügen:
	•	Füge eine zusätzliche Animation hinzu, bei der sich der Würfel pulsierend vergrößert und verkleinert.
	•	Verwende ebenfalls die Sinusfunktion, um die scale-Eigenschaften des Würfels zu verändern.