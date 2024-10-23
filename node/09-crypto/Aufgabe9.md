Übungsaufgabe: Verschlüsseln und Entschlüsseln eines Textes mit einem Passwort

Aufgabe:

Erstelle ein Node.js-Programm, das einen Text mithilfe eines Passworts verschlüsselt und später wieder entschlüsselt. Du verwendest dabei die Web Crypto API in Node.js.

Anforderungen:

	1.	Verschlüsselung:
	•	Implementiere eine Funktion encrypt(text, password), die einen Text mit einem Passwort verschlüsselt.
	2.	Entschlüsselung:
	•	Implementiere eine Funktion decrypt(encryptedText, password), die den verschlüsselten Text wieder entschlüsselt.
	3.	Verwendung:
	•	Führe die Verschlüsselung und anschließend die Entschlüsselung durch, um sicherzustellen, dass der Text korrekt zurückgegeben wird.

  1.	PBKDF2 zur Schlüsselerzeugung:
	•	Verwende subtle.importKey mit PBKDF2, um das Passwort in ein Schlüsselmaterial zu konvertieren.
	•	Verwende dann subtle.deriveKey, um einen sicheren Schlüssel für AES-GCM zu erzeugen.
	2.	Verschlüsseln mit AES-GCM:
	•	Verwende subtle.encrypt mit den Parametern { name: 'AES-GCM', iv: iv }, wo iv ein Initialisierungsvektor ist, um die Daten sicher zu verschlüsseln.
	3.	Entschlüsseln mit AES-GCM:
	•	Der Schlüssel, der für die Verschlüsselung verwendet wurde, muss aus dem Passwort und Salt generiert werden.
	•	Verwende subtle.decrypt mit den gleichen Parametern wie bei der Verschlüsselung (einschließlich des IVs), um die verschlüsselten Daten wiederherzustellen.