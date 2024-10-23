Übungsaufgabe: Zeichen- und Wortzählung mit Worker Threads und Shared Memory

Aufgabe:

Erstelle ein Node.js-Programm, das mithilfe von Worker Threads und Shared Memory die Anzahl der Zeichen und Wörter in einem Text berechnet. Der Hauptthread übergibt dem Worker-Thread einen Text, und der Worker zählt die Zeichen und Wörter. Die Ergebnisse werden in einem gemeinsam genutzten Speicherbereich gespeichert, auf den sowohl der Hauptthread als auch der Worker zugreifen können.

Anforderungen:

	1.	Shared Memory: Verwende SharedArrayBuffer, um Speicherplatz für zwei Werte (Zeichenanzahl und Wortanzahl) bereitzustellen.
	2.	Worker Thread: Implementiere einen Worker, der den Text analysiert und die Zeichen- sowie Wortanzahl berechnet.
	3.	Hauptthread: Übergibt den Text an den Worker und zeigt die Ergebnisse an, sobald die Berechnung abgeschlossen ist.

Schritte:

	1.	SharedArrayBuffer erstellen, um die Ergebnisse zu speichern.
	2.	Den Text an den Worker übergeben.
	3.	Den Worker die Berechnungen durchführen lassen.
	4.	Ergebnisse im Hauptthread anzeigen.

•	Füge mehrere Texte hinzu und lasse den Worker die Berechnungen parallel ausführen.