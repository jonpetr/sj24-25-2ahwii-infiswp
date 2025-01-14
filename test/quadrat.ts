// Funktion, die das Quadrat berechnet
function quadrat(x: number): number {
    return x ** 2;
  }
  
  // Benutzeraufforderung
  const input = prompt("Gib eine Zahl ein: ");
  if (input) {
    const number = Number(input);
    if (!isNaN(number)) {
      console.log(`Das Quadrat von ${number} ist ${quadrat(number)}`);
    } else {
      console.log("Bitte eine gültige Zahl eingeben!");
    }
  } else {
    console.log("Eingabe erforderlich!");
  }
  