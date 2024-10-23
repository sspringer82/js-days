Du sollst ein einfaches Konfigurationssystem in Node.js entwickeln, das eine Konfigurationsdatei dynamisch importiert und zur Laufzeit basierend auf bestimmten Bedingungen neu lädt. Ziel ist es, die Funktionsweise des Modulcaches in Verbindung mit dynamischen Imports kennenzulernen und zu sehen, wie man den Cache bewusst umgehen oder nutzen kann.

Anforderungen:

	1.	Erstelle eine Konfigurationsdatei (config.js):
	•	Die Datei exportiert ein Objekt mit mehreren Konfigurationswerten (z.B. mode, apiEndpoint, retryCount).
	•	Jedes Mal, wenn das Modul geladen wird, soll ein console.log ausgegeben werden, um zu sehen, wann die Konfiguration neu geladen wird.
	2.	Erstelle eine Hauptdatei (index.js):
	•	Lade das Konfigurationsmodul dynamisch und zeige die aktuellen Konfigurationswerte an.
	•	Simuliere eine Änderung der Konfiguration während der Laufzeit, indem du das Modul neu lädst und überprüfst, ob der Cache genutzt wird oder die Konfiguration tatsächlich neu geladen wird.
	3.	Dynamische Neuladung mit Cache-Umgehung:
	•	Implementiere eine Funktion, die das Konfigurationsmodul erneut lädt und dabei den Modulcache umgeht.

  Optional:
  - Verändere die Konfiguration zwischen dem Laden und dem Neuladen mithilfe des fs-Moduls