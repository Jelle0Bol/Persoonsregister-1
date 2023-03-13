// JSON-gegevens
var persoon = {
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
  };
  
  // DOM-manipulatie
  document.getElementById("voornaam").innerHTML = persoon.voornaam;
  document.getElementById("achternaam").innerHTML = persoon.achternaam;
  document.getElementById("nationaliteit").innerHTML = persoon.nationaliteit;
  document.getElementById("leeftijd").innerHTML = persoon.leeftijd;
  document.getElementById("gewicht").innerHTML = persoon.gewicht;
  