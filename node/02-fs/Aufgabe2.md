Übungsaufgabe: Einfache Dateiverwaltung mit dem fs-Modul

Aufgabe:

Erstelle ein Node.js-Skript, das eine einfache Notizverwaltung simuliert. Du sollst dabei verschiedene Funktionen des fs-Moduls verwenden, um Dateien zu erstellen, zu lesen, zu aktualisieren und zu löschen. Ziel ist es, einen Einblick in das Dateisystem-Handling von Node.js zu bekommen.

Anforderungen:

	1.	Erstellen einer Datei:
     -	Schreibe eine Funktion createNote(noteName, content), die eine Datei mit dem Namen noteName.txt erstellt und den übergebenen content in die Datei schreibt.
	2.	Lesen einer Datei:
	  -	Schreibe eine Funktion readNote(noteName), die den Inhalt der Datei noteName.txt liest und in der Konsole anzeigt.
	3.	Aktualisieren einer Datei:
	  -	Schreibe eine Funktion updateNote(noteName, newContent), die der bestehenden Datei noteName.txt neuen Inhalt hinzufügt, ohne den ursprünglichen Inhalt zu überschreiben.
	4.	Löschen einer Datei:
	  -	Schreibe eine Funktion deleteNote(noteName), die die Datei noteName.txt löscht.
	5.	Test der Funktionen:
	  -	Führe das Skript so aus, dass folgende Aktionen automatisch ablaufen:
	    1.	Erstellen der Notiz “Meine Notiz” mit dem Inhalt “Dies ist eine neue Notiz.”
  	    2.	Anzeigen des Inhalts von “Meine Notiz”.
	    3.	Hinzufügen von “Dies ist ein zusätzlicher Text.” zu “Meine Notiz”.
	    4.	Anzeigen des aktualisierten Inhalts.
	    5.	Löschen der Notiz.