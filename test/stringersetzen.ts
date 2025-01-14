function processString(input: string, replaceE: boolean, removeA: boolean): string {
  if (replaceE) {
    input = input.replace(/e/g, "ee");
  }
  if (removeA) {
    input = input.replace(/a/g, "");
  }
  return input;
}

// Beispiel-String
const input = "Ananas schmeckt sehr lecker";

// Beispiel 1: e's durch ee ersetzen
console.log("Alle 'e' durch 'ee' ersetzen:", processString(input, true, false));
// Beispiel 2: a's entfernen
console.log("Alle 'a' entfernen:", processString(input, false, true));
// Beispiel 3: Beides kombinieren
console.log("Kombiniert:", processString(input, true, true));

  