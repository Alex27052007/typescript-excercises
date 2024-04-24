// wenn Document geladen wurde
document.addEventListener('DOMContentLoaded', () => {
  // Div-Element mit der ID "output" aus dem DOM holen
  const outputDiv = document.getElementById('output');

  // Überprüfen, ob das Div-Element gefunden wurde
  if (outputDiv) {
    // Zwei Strings erstellen
    const hello: string = 'Hello, ';
    const world: string = 'world!';

    outputDiv.textContent = `${hello} ${world}`;
  } else {
    console.error("Div element with id 'output' not found.");
  }
});
