# Guten Morgen

## Repo
https://github.com/sspringer82/js-days

# Links
- Lizenzen: https://choosealicense.com/
- Releases: https://nodejs.org/en/about/previous-releases
- NICHT INSTALLIEREN: https://github.com/joaojeronimo/rimrafall
- Modules
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

# Globals
- Globale Variablen: vordefinierte Variablen wie `__dirname`, `__filename`, `global` und `process` sind in allen Node.js-Umgebungen verfügbar
- Kein `import` notwendig: Globale Objekte sind ohne Import verfügbar, sie sind teil des globalen Namensraums
- Vermeiden von `global`: Das globale Objekt `global`ist zwar verfügbar, sollte aber nicht verwendet werden, da es Konfliktpotenzial bietet und zu schwer nachvollziehbarem Code führt
- Eingebaute globale Funktionen: `setTimeout`, `setInterval`und fetch sind global und überall verfügbar.
- `fetch`-API zur Serverkommunikation
- `process`-Objekt: bietet die wichtigsten Informationen über den aktuellen Prozes. z.B. Umgebung, Argumente und Möglichkeiten zur Interaktion mit dem OS

# File System
- Dateisystem-Interaktionen: Das fs-Modul bietet Funktionen zur Interaktion mit dem Dateisystem, wie das Erstellen, Lesen, Schreiben, Löschen und Bearbeiten von Dateien und Verzeichnissen.
- Synchrone und asynchrone API: Die meisten Funktionen im fs-Modul gibt es sowohl in synchronen als auch in asynchronen Varianten. Die asynchronen Funktionen verwenden Callbacks oder Promises, um nicht blockierend zu arbeiten.
- Streams für große Dateien: Das fs-Modul unterstützt Streams, was besonders nützlich ist, um große Dateien stückweise zu lesen oder zu schreiben, ohne den Speicher zu überlasten.
-	Pfadbasierte Operationen: Alle Operationen im fs-Modul verwenden Dateipfade. Diese können absolut oder relativ sein, und es können zusätzliche Module wie path verwendet werden, um Pfade plattformübergreifend sicher zu handhaben.
-	Datei- und Verzeichnis-Überwachung: Mit fs.watch() können Änderungen an Dateien oder Verzeichnissen überwacht werden, was praktisch für Anwendungen ist, die auf Echtzeit-Updates reagieren müssen.
-	Rechteverwaltung: Das fs-Modul bietet Funktionen, um Datei- und Verzeichnisberechtigungen zu lesen und zu setzen, wie z.B. chmod und chown, was für den sicheren Betrieb von Dateisystemen wichtig ist.
-	Fehlerbehandlung: Da viele Operationen im Dateisystem fehlschlagen können (z. B. fehlende Berechtigungen oder nicht vorhandene Dateien), ist eine gründliche Fehlerbehandlung bei der Verwendung des fs-Moduls essenziell, vor allem bei asynchronen Operationen.

# Modules

-	Modulverwaltung: Das modules Modul stellt die Kernlogik für das Laden und Verwalten von Node.js-Modulen bereit. Es verarbeitet sowohl die Auflösung von Modulpfaden als auch das Laden und Ausführen von Modulen.
- CommonJS-Unterstützung: Node.js verwendet standardmäßig das CommonJS-Modulformat, bei dem Module mit require() geladen und mit module.exports exportiert werden. Das modules Modul ist dafür verantwortlich, diese Mechanik zu ermöglichen.
- ECMAScript Module (ESM): Neben CommonJS unterstützt Node.js auch ES Modules (ESM). Diese nutzen die import- und export-Syntax, und das modules Modul hilft, die Koexistenz und Kompatibilität zwischen CommonJS und ESM zu ermöglichen.
- Caching von Modulen: Beim Laden eines Moduls wird dieses in den require.cache eingefügt. Dies verhindert, dass ein Modul mehrfach geladen und ausgeführt wird, und steigert die Performance.
 Pfadauflösung: Das modules Modul implementiert eine Logik zur Pfadauflösung, die versucht, Module relativ zum aktuellen Verzeichnis, den node_modules-Verzeichnissen oder als absolute Pfade zu laden.
- Zirkuläre Abhängigkeiten: Node.js unterstützt das Laden von Modulen mit zirkulären Abhängigkeiten. Das modules Modul lädt die Module in einer Reihenfolge, die sicherstellt, dass ein Modul bereits teilweise exportiert werden kann, bevor alle Module vollständig geladen sind.
- Dynamisches Laden: Neben statischen Imports mit require() und import unterstützt Node.js dynamisches Laden von Modulen zur Laufzeit, etwa durch import() in ESM oder bedingtes Laden in CommonJS.