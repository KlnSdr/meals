let meals = [
    "Nudeln",
    "Bratkartoffeln",
    "Gemüseauflauf",
    "Holy Cottage",
    "Kloßteigpizza",
    "Kartoffelsuppe",
    "Nudelsuppe",
    "Kartoffelpuffer",
    "Kartoffelröstie",
    "Kartoffelecken",
    "Kartoffeln und Quark",
    "Nudelauflauf",
    "Kartoffelbrei und Blub-Sticks",
    "Pudding",
    "Tomatensuppe",
    "Kartoffeltaschen",
    "Pizza",
    "Tiefkühlpizza",
    "Hefeklöße",
    "Morzarellabrötchen",
    "Kartoffelklöße und Rotkraut",
    "Grillkäse",
    "Lasagne",
    "saure Gurkensuppe",
    "Sauerkrautsuppe",
    "Kartoffelsalat",
    "gebratener Blumenkohl",
    "Ofengemüse, Kartoffeln und Haloumi/Feta",
    "Kartoffeln, Blumenkohl und Soße"
];

function next() {
    document.getElementById("output").innerText = meals[Math.floor(Math.random() * meals.length)];
}