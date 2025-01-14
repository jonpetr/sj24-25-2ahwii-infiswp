// Benutzeraufforderung, um Text einzugeben
const input = prompt("Gib einen Text ein: ");

if (input) {
  // Zerlege den Text in Wörter
  const worte = input.split(" ");

  // Gib jedes Wort in einer neuen Zeile aus
  for (const wort of worte) {
    console.log(wort);
  }
} else {
  console.log("Kein Text eingegeben.");
}
// deno run --allow-read text_ausgabe.ts ,wichtig