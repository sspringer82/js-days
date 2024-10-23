Implementiere ein Node.js-Programm, das eine Datei zeilenweise liest, die Daten mit einem TransformStream in Großbuchstaben umwandelt und in eine neue Datei schreibt. Verwende dabei Web Streams des fs-Moduls.

Hinweise zu den Funktionen:

	1.	open() aus fs/promises: Öffne eine Datei für Lese- oder Schreiboperationen. Es erzeugt Dateihandles, die Web Streams bereitstellen.
	2.	readableWebStream(): Erstellt einen Web Stream, der die Datei zeilenweise liest.
  3.  TextDecoderStream: wandelt den Byte-Strom in lesbaren Text um
	4.	TransformStream: Nutze diesen, um jede Zeile in Großbuchstaben zu transformieren.
  5.  TextEncoderStream: wandelt den Text in einen Byte-Strom um
	4.	writableWebStream(): Erstellt einen Web Stream, um die transformierten Daten in eine Datei zu schreiben.
  5. Nutze die pipeThrough-Mehtode zur Verknüpfung der Streams

Ergebnis:

Lies aus der Datei, transformiere die Daten und speichere sie in einer neuen Datei.