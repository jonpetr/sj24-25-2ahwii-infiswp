// Benutzeraufforderung für eine Zahl
const input = prompt("Gib eine Zahl ein: ");

if (input) {
  const zahl = Number(input);

  // Überprüfen, ob die Eingabe eine gültige Zahl ist
  if (isNaN(zahl)) {
    console.log("Das ist keine gültige Zahl!");
  } else {
    // If/Else-Bedingungen
    if (zahl > 0) {
      console.log("Die Zahl ist positiv.");
    } else if (zahl < 0) {
      console.log("Die Zahl ist negativ.");
    } else {
      console.log("Die Zahl ist null.");
    }
  }
} else {
  console.log("Du hast keine Zahl eingegeben.");
}
