Übungsaufgabe: Parallelisierte Berechnungen mit dem child_process-Modul

Aufgabe:

Erstelle ein Node.js-Projekt, in dem der Elternprozess eine Reihe von Berechnungen an mehrere Kindprozesse delegiert. Jeder Kindprozess soll die Primzahlen innerhalb eines Bereichs berechnen und das Ergebnis an den Elternprozess zurücksenden. Der Elternprozess soll die Ergebnisse der Kindprozesse sammeln und zusammenführen.

Schritte:

	1.	Elternprozess:
	•	Erstelle mehrere Kindprozesse mit fork(), um parallele Berechnungen durchzuführen.
	•	Sende jedem Kindprozess einen Bereich von Zahlen, für den Primzahlen berechnet werden sollen.
	•	Empfange die Ergebnisse von jedem Kindprozess und füge sie zusammen.
	2.	Kindprozess:
	•	Implementiere eine Funktion zur Berechnung von Primzahlen in einem bestimmten Bereich.
	•	Sende die Liste der Primzahlen zurück an den Elternprozess.

Anforderungen:

	•	Verwende das child_process-Modul.
	•	Teile den Bereich in mehrere Teilbereiche auf, um die Berechnungen zu parallelisieren.
	•	Gib das finale Ergebnis (alle Primzahlen) im Elternprozess aus.

Bonus:

	•	Führe eine Laufzeitanalyse durch, um zu sehen, wie sich die Parallelisierung auf die Berechnungszeit auswirkt.

Beispiel (Eingabe und Ausgabe):

	•	Input: Berechne Primzahlen im Bereich von 1 bis 100.
	•	Output: Liste aller Primzahlen und die Laufzeit der Berechnung.