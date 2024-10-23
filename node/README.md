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

# 1. Globals

## Allgemein

- Globale Variablen: vordefinierte Variablen wie `__dirname`, `__filename`, `global` und `process` sind in allen Node.js-Umgebungen verfügbar
- Kein `import` notwendig: Globale Objekte sind ohne Import verfügbar, sie sind teil des globalen Namensraums
- Vermeiden von `global`: Das globale Objekt `global`ist zwar verfügbar, sollte aber nicht verwendet werden, da es Konfliktpotenzial bietet und zu schwer nachvollziehbarem Code führt
- Eingebaute globale Funktionen: `setTimeout`, `setInterval`und fetch sind global und überall verfügbar.
- `fetch`-API zur Serverkommunikation
- `process`-Objekt: bietet die wichtigsten Informationen über den aktuellen Prozes. z.B. Umgebung, Argumente und Möglichkeiten zur Interaktion mit dem OS

## Achtung 

In älteren Node-Versionen gab es `__dirname` und `__filename`. Mit dem ES-Modulsystem gibt es sie nicht mehr. Workaround:

siehe ./node/01-globals/01-globals.js

## Beispiel

siehe ./node/01-globals/02-globals.js

## Aufgabe1

siehe ./node/01-globals/Aufgabe1.md

# 2. File System

## Allgemein
- Dateisystem-Interaktionen: Das fs-Modul bietet Funktionen zur Interaktion mit dem Dateisystem, wie das Erstellen, Lesen, Schreiben, Löschen und Bearbeiten von Dateien und Verzeichnissen.
- Synchrone und asynchrone API: Die meisten Funktionen im fs-Modul gibt es sowohl in synchronen als auch in asynchronen Varianten. Die asynchronen Funktionen verwenden Callbacks oder Promises, um nicht blockierend zu arbeiten.
- Streams für große Dateien: Das fs-Modul unterstützt Streams, was besonders nützlich ist, um große Dateien stückweise zu lesen oder zu schreiben, ohne den Speicher zu überlasten.
-	Pfadbasierte Operationen: Alle Operationen im fs-Modul verwenden Dateipfade. Diese können absolut oder relativ sein, und es können zusätzliche Module wie path verwendet werden, um Pfade plattformübergreifend sicher zu handhaben.
-	Datei- und Verzeichnis-Überwachung: Mit fs.watch() können Änderungen an Dateien oder Verzeichnissen überwacht werden, was praktisch für Anwendungen ist, die auf Echtzeit-Updates reagieren müssen.
-	Rechteverwaltung: Das fs-Modul bietet Funktionen, um Datei- und Verzeichnisberechtigungen zu lesen und zu setzen, wie z.B. chmod und chown, was für den sicheren Betrieb von Dateisystemen wichtig ist.
-	Fehlerbehandlung: Da viele Operationen im Dateisystem fehlschlagen können (z. B. fehlende Berechtigungen oder nicht vorhandene Dateien), ist eine gründliche Fehlerbehandlung bei der Verwendung des fs-Moduls essenziell, vor allem bei asynchronen Operationen.

## Beispiel

siehe ./node/02-fs/01-fs.js

## Aufgabe2

siehe ./node/02-fs/Aufgabe2.md

# 3. Modules

## Allgemein

-	Modulverwaltung: Das modules Modul stellt die Kernlogik für das Laden und Verwalten von Node.js-Modulen bereit. Es verarbeitet sowohl die Auflösung von Modulpfaden als auch das Laden und Ausführen von Modulen.
- CommonJS-Unterstützung: Node.js verwendet standardmäßig das CommonJS-Modulformat, bei dem Module mit require() geladen und mit module.exports exportiert werden. Das modules Modul ist dafür verantwortlich, diese Mechanik zu ermöglichen.
- ECMAScript Module (ESM): Neben CommonJS unterstützt Node.js auch ES Modules (ESM). Diese nutzen die import- und export-Syntax, und das modules Modul hilft, die Koexistenz und Kompatibilität zwischen CommonJS und ESM zu ermöglichen.
- Caching von Modulen: Beim Laden eines Moduls wird dieses in den require.cache eingefügt. Dies verhindert, dass ein Modul mehrfach geladen und ausgeführt wird, und steigert die Performance.
 Pfadauflösung: Das modules Modul implementiert eine Logik zur Pfadauflösung, die versucht, Module relativ zum aktuellen Verzeichnis, den node_modules-Verzeichnissen oder als absolute Pfade zu laden.
- Zirkuläre Abhängigkeiten: Node.js unterstützt das Laden von Modulen mit zirkulären Abhängigkeiten. Das modules Modul lädt die Module in einer Reihenfolge, die sicherstellt, dass ein Modul bereits teilweise exportiert werden kann, bevor alle Module vollständig geladen sind.
- Dynamisches Laden: Neben statischen Imports mit require() und import unterstützt Node.js dynamisches Laden von Modulen zur Laufzeit, etwa durch import() in ESM oder bedingtes Laden in CommonJS.

## Beispiel

siehe ./node/03-modules/01-modules/index.js

## Aufgabe3

siehe ./node/03-modules/Aufgabe3.md

# 4. Performance hooks

## Allgemein

- Messung von Performance: Das performance_hooks-Modul bietet Funktionen, um präzise Messungen der Ausführungszeit von Code zu ermöglichen, basierend auf der High-Resolution-Timing-API, die in Node.js integriert ist.
- performance API: Über das performance-Objekt können Zeitstempel gesetzt und gemessen werden, um die Ausführungszeit von Operationen zu ermitteln. Es ähnelt der Web API performance.now() und ermöglicht Messungen in Millisekunden mit Mikrosekunden-Genauigkeit.
- PerformanceObserver: Mit dem PerformanceObserver können Entwickler Ereignisse überwachen und auf Performance-Einträge reagieren, die z.B. durch performance.mark() oder performance.measure() generiert wurden.
- performance.mark(): Diese Methode ermöglicht das Setzen von benannten Markierungen an bestimmten Stellen im Code. Diese können später für Messungen und Analysen verwendet werden.
- performance.measure(): Diese Funktion misst die Zeit zwischen zwei mark()-Punkten und gibt die Dauer der Operation als Performance-Eintrag zurück, der anschließend beobachtet oder geloggt werden kann.
- GC (Garbage Collection) Events: Das Modul kann genutzt werden, um Performance-Daten in Bezug auf die Garbage Collection (GC) zu überwachen. So kann analysiert werden, wie lange bestimmte GC-Phasen dauern und wie oft sie ausgeführt werden.
- Integration mit anderen Tools: Das performance_hooks-Modul ist nützlich, um Node.js-Anwendungen zu optimieren, indem es ermöglicht, detaillierte Einblicke in die Laufzeit und das Ressourcenmanagement zu erhalten. Diese Daten können in Performance-Monitoring-Tools und -Dashboards integriert werden.

## Beispiel

siehe ./node/04-perf-hooks/01-perf-hooks.js

## Aufgabe4

siehe ./node/04-perf-hooks/Aufgabe4.md

# 5. Child Process

## Allgemein

- Prozesse starten: Das child_process-Modul ermöglicht das Starten neuer Systemprozesse direkt aus einer Node.js-Anwendung. Dies wird genutzt, um externe Skripte, Programme oder Shell-Befehle auszuführen.
- Methoden: Das Modul bietet vier Hauptmethoden zum Erstellen von Child-Prozessen: spawn(), exec(), execFile() und fork(). Jede Methode hat ihre eigenen Anwendungsfälle, je nachdem, wie du den Prozess steuern möchtest.
- spawn(): Mit spawn() wird ein neuer Prozess erstellt, der einen Befehl ausführt und es erlaubt, Daten über Streams (stdin, stdout, stderr) zu verarbeiten. Diese Methode eignet sich gut für langlaufende oder datenschwere Prozesse.
- exec(): exec() führt einen Shell-Befehl aus und ruft einen Callback mit dem gesamten Ergebnis auf, sobald der Prozess abgeschlossen ist. Es eignet sich für einfache Befehle mit begrenzten Datenmengen.
- fork(): fork() erstellt speziell Child-Prozesse, die ein Node.js-Skript ausführen, und ermöglicht eine einfache Kommunikation zwischen dem Eltern- und dem Kindprozess über Nachrichten, ideal für die Verteilung von Rechenaufgaben.
- Datenströme: Über die Standard-Input-, Output- und Error-Streams (stdin, stdout, stderr) kann ein Node.js-Prozess mit den gestarteten Child-Prozessen kommunizieren. Dies ermöglicht das Senden von Eingaben und das Empfangen von Ausgaben direkt im Node.js-Code.
- Fehlerbehandlung: Child-Prozesse können Fehler generieren, die über Ereignis-Emitter wie error, exit, oder close abgefangen werden. Es ist wichtig, Fehler zu behandeln, um zu verhindern, dass ein Prozess abstürzt oder hängen bleibt.

## Beispiel

siehe ./node/05-child-process/parent.js

## Aufgabe5

siehe ./node/05-child-process/Aufgabe5.md
# 6. Worker Threads

## Allgemein

- Multithreading in Node.js: Das worker_threads-Modul ermöglicht die Ausführung von JavaScript in separaten Threads (Workern), was in Node.js zu echter Parallelität führt. Dies löst das traditionelle Problem von Node.js, das standardmäßig auf einem einzigen Thread läuft.
- Worker-Threads für CPU-intensive Aufgaben: Das Modul wird hauptsächlich verwendet, um CPU-intensive Aufgaben in separaten Threads auszuführen, ohne den Haupt-Thread (Event Loop) zu blockieren. Dies verbessert die Performance von Anwendungen, die parallel rechnen müssen.
- Worker-Klasse: Jeder Thread wird durch eine Instanz der Worker-Klasse repräsentiert. Ein Worker-Objekt wird erstellt, indem ein neues Skript oder eine Funktion in einem separaten Thread ausgeführt wird.
- Nachrichtenbasierte Kommunikation: Worker-Threads kommunizieren mit dem Haupt-Thread über Nachrichten. Dies erfolgt asynchron über das Event-Emitter-Pattern mit postMessage() und on('message'), um Daten hin und her zu senden.
- Gemeinsamer Speicher: Neben der Nachrichtenkommunikation können Worker-Threads auch über geteilte ArrayBuffer-Objekte auf gemeinsamen Speicher zugreifen. Dies erlaubt eine effiziente, speicherschonende Kommunikation zwischen Threads.
- Thread-Sicherheit: Da Node.js normalerweise single-threaded ist, muss bei der Nutzung von Worker-Threads auf Thread-Sicherheit geachtet werden, insbesondere bei der Arbeit mit gemeinsamem Speicher, um Race Conditions und Deadlocks zu vermeiden.
- Einfacher Einstieg, aber Vorsicht bei Nebenwirkungen: Die Nutzung von Worker-Threads ist relativ einfach zu implementieren, jedoch sollte sie mit Bedacht eingesetzt werden. Threads verursachen Overhead, und bei unsachgemäßer Verwendung kann es zu Leistungsproblemen und schwer auffindbaren Bugs kommen.

## Beispiel

siehe ./node/06-worker-threads/main.js

## Aufgabe6

siehe ./node/06-worker-threads/Aufgabe6.md
# 7. Permissions

## Allgemein

- Zugriff auf Systemressourcen kontrollieren: Das Permissions-Modul in Node.js ermöglicht es, den Zugriff auf verschiedene Systemressourcen (z.B. Dateisystem, Netzwerk) explizit zu erlauben oder zu verweigern, um die Sicherheit der Anwendung zu erhöhen.
- Experimental: Das Permissions-Modell befindet sich noch in der experimentellen Phase und muss über die Kommandozeilenoption --experimental-permission aktiviert werden, um die Berechtigungen zur Laufzeit zu kontrollieren.
- Granulare Berechtigungen: Mithilfe von Flags wie --allow-fs-read und --allow-fs-write können Berechtigungen für das Lesen und Schreiben im Dateisystem granular festgelegt werden. Es können bestimmte Pfade zugelassen oder gesperrt werden.
- Laufzeitüberprüfung: Mit der Funktion permission.has(scope[, reference]) kann geprüft werden, ob die aktuelle Node.js-Instanz über bestimmte Berechtigungen verfügt, z.B. ob sie auf das Dateisystem schreiben oder Netzwerkverbindungen herstellen darf.
- Einschränkungen bei Child-Prozessen: Der Permission-Model-Mechanismus wirkt sich nicht automatisch auf Kindprozesse oder Worker-Threads aus. Sie benötigen eigene Flags, wie --allow-child-process oder --allow-worker, um diese Aktionen zu ermöglichen.
- Feingranularer Zugriff auf Module: Das Modul verhindert standardmäßig den Zugriff auf native Addons oder das Verwenden des WebAssembly-Systeminterfaces (WASI), es sei denn, der Zugriff wird explizit über Flags wie --allow-addons oder --allow-wasi erlaubt.
- Limitierungen: Symbolische Links werden weiterhin gefolgt, auch wenn der Zugriff auf andere Pfade beschränkt ist. Dies kann eine Sicherheitslücke darstellen, die bei der Konfiguration der Berechtigungen berücksichtigt werden muss.

## Beispiel

node --experimental-permission --allow-fs-read=./read --allow-fs-read=07-permission.js --allow-fs-write=./write 07-permission.js

# 8. Test Runner

## Allgemein

- Testmodul: Das node:test-Modul ist ein integriertes Modul in Node.js, das die Erstellung und Ausführung von Tests erleichtert, ohne externe Bibliotheken zu benötigen.
- Testtypen: Es unterstützt sowohl synchrone als auch asynchrone Tests. Ein Test schlägt fehl, wenn er eine Ausnahme auslöst oder ein zurückgegebener Promise abgelehnt wird.
- Subtests: Tests können Subtests enthalten, um Tests hierarchisch zu strukturieren. Subtests werden innerhalb eines Haupttests definiert und können parallel oder nacheinander ausgeführt werden.
- Hooks: Es gibt beforeEach, afterEach, before, und after Hooks, die vor oder nach jedem Test oder Subtest ausgeführt werden können.
- Test-Auswahl: Mit Optionen wie skip, todo, und only können Tests selektiv ausgeführt oder übersprungen werden.
- Befehlzeilenoptionen: Der Test-Runner kann mit node --test ausgeführt werden, um alle Testdateien auszuführen. Mit --watch wird der Watch-Modus aktiviert, der Tests bei Dateiveränderungen neu ausführt.
- Snapshot Testing: Das Modul unterstützt Snapshot-Tests, die sicherstellen, dass der Zustand einer Ausgabe von Testläufen gleich bleibt, um unerwartete Änderungen zu erkennen.

## Beispiel

siehe ./node/08-test-runner/math.test.js

`node --test math.test.js`

## Aufgabe8

siehe ./node/08-test-runner/Aufgabe8.md

# 9. Web Crypto

## Allgemein

- Kryptografische Funktionen: Das Web Crypto API ermöglicht die Durchführung von sicheren kryptografischen Operationen wie Verschlüsselung, Entschlüsselung, Signierung, und Verifizierung.
- SubtleCrypto API: Der Hauptzugang zu den kryptografischen Funktionen erfolgt über das subtle-Objekt, das Methoden zur asymmetrischen und symmetrischen Verschlüsselung bereitstellt.
- Schlüsselgenerierung: Es unterstützt die Generierung von symmetrischen (AES, HMAC) und asymmetrischen (RSA, ECDSA) Schlüsseln.
- Digitale Signaturen: Es kann digitale Signaturen erstellen und verifizieren, um die Authentizität und Integrität von Daten zu gewährleisten.
- Schlüsselimport/Export: Schlüssel können in verschiedenen Formaten wie JWK und raw exportiert und importiert werden.
- Random Values: Die API stellt crypto.getRandomValues() zur Verfügung, um kryptografisch sichere Zufallszahlen zu erzeugen.
- Browser-Kompatibilität: Die Web Crypto API in Node.js ist so konzipiert, dass sie mit der Web-Crypto-Spezifikation im Browser kompatibel ist.

## Beispiel

siehe ./node/09-crypto/index.js

## Aufgabe9

siehe ./node/09-crypto/Aufgabe9.md

# 10. Web Streams 

## Allgemein

- WHATWG-Standard: Das Web Streams API implementiert den WHATWG-Standard für Streaming-Daten und ähnelt der Node.js-Streams-API, bietet jedoch plattformübergreifende Kompatibilität für JavaScript-Umgebungen.
- Hauptkomponenten: Es bietet drei Hauptkomponenten: ReadableStream (Quelle von Daten), WritableStream (Ziel von Daten) und TransformStream (Transformation von Datenströmen).
- Lesbare Streams: ReadableStream ermöglicht das Lesen von Streaming-Daten und kann mit asynchronen Iterationen verarbeitet werden.
- Schreibbare Streams: WritableStream wird verwendet, um Daten an eine Quelle zu senden, z. B. um Dateien oder Netzwerkverbindungen zu schreiben.
- Transformation: TransformStream ermöglicht die Modifikation von Datenströmen, bevor sie an das Ziel weitergeleitet werden.
- Async Iteration: Die API unterstützt asynchrone Iterationen (for await), um Daten bequem in Streams zu verarbeiten.
- Kompression: Es bietet eingebaute CompressionStream- und DecompressionStream-Klassen, um Datenströme effizient zu komprimieren und zu dekomprimieren.

## Beispiel

siehe ./node/10-streams/01-streams.js

## Aufgabe

siehe ./node/10-streams/Aufgabe10.md
