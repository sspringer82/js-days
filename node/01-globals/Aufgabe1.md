Aufgabe:

Du sollst ein kleines Task-Scheduling-System in Node.js entwickeln, das verschiedene Aufgaben in regelmäßigen Abständen ausführt. Dabei werden globale Objekte und Funktionen wie `setInterval`, `clearInterval` und das `process`-Objekt verwendet. Ziel der Aufgabe ist es, eine einfache Simulation zu erstellen, bei der verschiedene Aufgaben in regelmäßigen Intervallen laufen und die Anwendung intelligent mit diesen Tasks umgehen kann.

Szenario:

Stell dir vor, du musst ein System implementieren, das verschiedene wiederkehrende Aufgaben verwaltet, wie z.B. Daten von einem API-Endpunkt abrufen, Protokolldaten schreiben und Ressourcen überwachen. Du sollst dieses System so schreiben, dass die Aufgaben parallel laufen und nach einer festgelegten Zeit beendet werden.

Anforderungen:

	1.	Globale Aufgabenverwaltung:
Erstelle ein globales Objekt global.tasks, das ein Array enthält, in dem jede Aufgabe als Objekt gespeichert wird. Jede Aufgabe soll folgende Eigenschaften haben:
	•	name: Der Name der Aufgabe (z.B. “Daten abrufen”, “Protokoll schreiben”)
	•	intervalId: Die ID des Timers, der die Aufgabe ausführt
	•	interval: Der Zeitintervall, in dem die Aufgabe ausgeführt wird (in Millisekunden)
	2.	Aufgaben hinzufügen:
Schreibe eine Funktion addTask(name, interval, taskFunction), die eine neue Aufgabe zu global.tasks hinzufügt und diese in regelmäßigen Abständen mit setInterval ausführt. Die Funktion soll außerdem den intervalId in der Task speichern.
	4.	Aufgaben beenden:
Implementiere eine Funktion stopTask(name), die eine bestimmte Aufgabe anhand ihres Namens beendet. Verwende dafür clearInterval und entferne die Aufgabe aus global.tasks.
	

Optional:
	1.	Aufgaben überwachen:
	•	Verwende setInterval, um regelmäßig (alle 5 Sekunden) eine Statusmeldung auszugeben, die anzeigt, wie viele Aufgaben aktiv sind und welche Intervalle sie haben.
	•	Gib auch die aktuelle Speicherverwendung des Node.js-Prozesses mithilfe von process.memoryUsage() aus.
  2.	Beenden nach Zeitlimit:
Beende das gesamte Programm nach 30 Sekunden, indem du alle laufenden Aufgaben stoppst und eine Abschlussmeldung ausgibst.
	3.	Fehlerbehandlung:
	•	Implementiere eine Fehlerbehandlungsroutine mit process.on('uncaughtException'), um sicherzustellen, dass das Programm nicht abstürzt, wenn ein Fehler in einer der Aufgaben auftritt.
	•	Simuliere einen Fehler in einer der Aufgaben (z.B. durch Zugriff auf eine undefinierte Variable) und stelle sicher, dass die Anwendung den Fehler korrekt behandelt und die restlichen Aufgaben weiterlaufen.
