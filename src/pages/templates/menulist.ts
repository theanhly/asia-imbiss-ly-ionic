export class MenuList {
  public soupItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;
  public starterItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;
  public noodleItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;
  public riceItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;
  public riceNoodleItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;
  public vegetarianItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;
  public pigItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;
  public beefItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;
  public chickenItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;
  public duckItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;
  public fishItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;
  public shrimpItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;
  public squidItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;
  public houseSpecialItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;
  public asiaSpecialItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;
  public dessertItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;
  public drinkItems: Array<{number: string, name: string, information: string, ingredients: string, price: number}>;

  constructor() {
    this.soupItems = [
      {number: "1", name: "Sauer-Scharf-Suppe", information:"", ingredients: "mit Rindfleisch", price: 1.70},
      {number: "2", name: "Eierblumen",information:"C,I", ingredients: "mit Gemüse", price: 1.80},
      {number: "3", name: "Wan-Tan-Suppe",information:"F,I", ingredients: "", price: 1.80},
      {number: "4", name: "Fen-Tze-Suppe",information:"A,C,F,H,I", ingredients: "mit Hühnerfleisch, Morcheln & Glasnudeln", price: 1.80},
      {number: "5", name: "Tomaten‑Suppe",information:"A,C,F,H,I", ingredients: "mit Hühnerfleisch", price: 1.90},
      {number: "6", name: "Hühnerfleisch",information:"F,I", ingredients: "mit Spargel", price: 1.90},
    ];

    this.starterItems = [
      {number: "10", name: "Krupuk (Shrimps‑Chip)", information:"B,12 ", ingredients: "", price: 1.70},
      {number: "11", name: "Gebackene Tintenfischringe", information:"A,B,C", ingredients: "mit Süß-Saurer-Sauce [5]", price: 2.70},
      {number: "12", name: "Frühlingsrolle Peking-Art (2 Stück)", information:"A,G,J", ingredients: "mit Rindfleisch und Gemüse", price: 2.20},
      {number: "12a", name: "Frühlingsrolle vegetarisch (7 Stück)", information:"A,G,J", ingredients: "", price: 1.90},
      {number: "13", name: "Saigon‑Frühlingsrolle (3 Stück)", information:"A,G,J", ingredients: "mit Schweinefleisch, Glasnudeln, Morcheln, Gemüse und Reispapier", price: 2.50},
      {number: "14", name: "Gebackene Wan‑Tan", information:"A,G,J", ingredients: "mit Süß‑Sauer-Sauce [5]", price: 2.50},
      {number: "15", name: "Gemischter Salat", information:"", ingredients: "", price: 2.20},
      {number: "16", name: "Gemischter Salat", information:"", ingredients: "mit Hühnerfleisch", price: 2.70},
    ];

    this.noodleItems = [
      {number: "20", name: "Gebratene Nudeln", information:"A,C,G", ingredients: "mit Hühnerfleisch und Gemüse", price: 5.00},
      {number: "21", name: "Gebratene Nudeln", information:"A,C,G", ingredients: "mit Schweinefleisch und Gemüse", price: 5.00},
      {number: "22", name: "Gebratene Nudeln", information:"A,C,G", ingredients: "mit Rindfleisch und Gemüse", price: 5.50},
      {number: "23", name: "Bami‑Goreng", information:"A,C,G", ingredients: "Gebratene Nudeln mit Hühner‑, Rind‑, Schweinefleisch und Gemüse (Curry [I,J,5], scharf)", price: 5.50},
      {number: "24", name: "Yangchou‑Art", information:"A,B,C,G", ingredients: "Gebratene Nudeln mit Shrimps, Hühnerfleisch, gegrilltem Schweinefleisch & Gemüse", price: 5.70},
      {number: "25", name: "Gebratene Nudeln", information:"A,C,G", ingredients: "mit Entenfleisch und Gemüse", price: 6.70},
      {number: "26", name: "Gebratene Nudeln", information:"A,C,G", ingredients: "mit Ente kross und verschiedenem Gemüse", price: 7.00},
      {number: "27", name: "Gebratene Nudeln", information:"A,C,G", ingredients: "mit gebackenem Hähnchenbustfilet und versch. Gemüse", price: 6.00},
    ];

    this.riceItems = [
      {number: "30", name: "Gebratener Eierreis", information:"A", ingredients: "mit Hühnerfleisch und Gemüse", price: 5.00},
      {number: "31", name: "Gebratener Eierreis", information:"A", ingredients: "mit Schweinefleisch und Gemüse", price: 5.00},
      {number: "32", name: "Sam‑Sien‑Art", information:"A,B", ingredients: "Gebratener Eierreis mit Shrimps, Hühnerfleisch, gegrilltem Schweinefleisch & Gemüse", price: 5.70},
      {number: "33", name: "Gebratener Eierreis", information:"A", ingredients: "mit Rindfleisch und Gemüse", price: 5.50},
      {number: "34", name: "Nasi‑Goreng", information:"A", ingredients: "gebratener Eierreis mit Hühner‑, Rind‑, Schweinefleisch und Gemüse (Curry [I,J,5], scharf)", price: 5.50},
    ];

    this.riceNoodleItems = [
      {number: "40", name: "Sien‑Chow‑Art (scharf)", information:"A,B,C,G", ingredients: "Gebratene Reisnudeln mit Shrimps, Hühnerfleisch & Gemüse", price: 5.50},
      {number: "41", name: "Sam‑Sien‑Art", information:"A,B,C,G", ingredients: "Gebratene Reisnudeln mit Shrimps, Hühner‑, gegrilltem Schweinefleisch und Gemüse", price: 5.50},
    ];
    
    this.vegetarianItems = [
      {number: "50", name: "Gemüse Chop Suey", information:"", ingredients: "", price: 4.40},
      {number: "51", name: "Bambus", information:"", ingredients: "mit Glasnudeln & Morcheln", price: 4.50},
      {number: "52", name: "ASIA‑Gemüse", information:"A,G,J", ingredients: "mit Tofu (Sojabohnenquark)", price: 4.50},
      {number: "53", name: "Tofu", information:"A,G,J", ingredients: "mit Ananas und Süß‑Sauer-Sauce [5]", price: 4.70},
      {number: "54", name: "Tofu (scharf)", information:"A,G,J", ingredients: "mit Curry [I,J,5], Gemüse und Kokosmilch", price: 5.00},
      {number: "55", name: "Nudeln gebraten", information:"A,C,G", ingredients: "mit Gemüse", price: 3.50},
      {number: "56", name: "Eierreis gebraten", information:"A", ingredients: "mit Gemüse", price: 3.50},
      {number: "57", name: "Tofu (scharf)", information:"A,G,J", ingredients: "mit grünem oder rotem Curry [I,J,5], Kokosmilch und Gemüse (scharf)", price: 5.30},
    ];

    this.pigItems = [
      {number: "60", name: "Schweinefleisch Chop Suey", information:"", ingredients: "(verschiedene Gemüse)", price: 5.00},
      {number: "61", name: "Schweinefleisch mit Curry", information:"I,J,5", ingredients: "mit Kokosmilch und Gemüse (scharf)", price: 5.50},
      {number: "62", name: "Schweinefleischbällchen", information:"", ingredients: "mit Ananas und Süß-Sauer-Sauce [5]", price: 5.50},
      {number: "62a", name: "Schweinefleischbällchen", information:"", ingredients: "mit Gemüse und Knoblauch (scharf)", price: 5.50},
      {number: "63", name: "Schweinefleisch mit Glasnudeln", information:"A,G", ingredients: "Morcheln und Bambus", price: 5.20},
      {number: "64", name: "Schweinefleisch", information:"", ingredients: "mit Bambus, Paprika, Zwiebeln, schwarzen Bohnen u. Knoblauch (scharf)", price: 5.50},
      {number: "65", name: "Schweinefleisch mit Cashewnüsse", information:"H", ingredients: "Gemüse und Knoblauch (scharf)", price: 5.50},
      {number: "66", name: "Schweinefleisch", information:"", ingredients: "mit Champignons, Spargel und Gemüse", price: 5.50},
      {number: "67", name: "Zweimal gebackenes Schweinefleisch", information:"", ingredients: "mit Ananas und Süß‑Sauer-Sauce [5]", price: 5.50},
      {number: "68", name: "Zweimal gebackenes Schweinefleisch", information:"", ingredients: "mit Gemüse und Knoblauch (scharf)", price: 5.50},
      {number: "69", name: "Pak-Bao", information:"", ingredients: "mit gebackenem Hähnchenbustfilet und versch. Gemüse", price: 7.00},
    ];

    this.beefItems = [
      {number: "70", name: "Rindfleisch Chop Suey", information:"", ingredients: "(verschiedene Gemüse)", price: 5.50},
      {number: "71", name: "Rindfleisch", information:"", ingredients: "mit Zwiebeln und Knoblauch (scharf)", price: 5.50},
      {number: "72", name: "Rindfleisch mit Curry", information:"I,J,5", ingredients: "Kokosmilch und Gemüse (scharf)", price: 6.00},
      {number: "73", name: "Rindfleisch", information:"", ingredients: "mit Bambus, Paprika, Zwiebeln, schwarzen Bohnen und Knoblauch (scharf)", price: 5.70},
      {number: "74", name: "Sukiyaki", information:"", ingredients: "Rindfleisch mit Glasnudeln, Morcheln und Bambus", price: 5.70},
      {number: "75", name: "Rindfleisch zweimal gebacken", information:"", ingredients: "mit Gemüse und Knoblauch (scharf)", price: 6.00},
      {number: "76", name: "Rindfleisch", information:"", ingredients: "zweimal gebacken, mit Ananas und Süß‑Sauer‑Sauce [5]", price: 6.00},
      {number: "77", name: "Drei Kostbarkeiten", information:"", ingredients: "Hühner-, Schweine-, Rindfleisch mit Bambus, Champignons, Paprika und Knoblauch (scharf)", price: 6.30},
      {number: "78", name: "Rindfleisch gebraten", information:"", ingredients: "mit Sojasprossen [J]", price: 5.20},
      {number: "79", name: "Rindfleisch gebraten", information:"", ingredients: "mit grünen Bohnen und Gemüse", price: 5.50},
    ];

    this.chickenItems = [
      {number: "80", name: "Hühnerfleisch Chop Suey", information:"", ingredients: "(verschiedene Gemüse)", price: 5.00},
      {number: "81", name: "Hühnerfleisch", information:"", ingredients: "mit Glasnudeln, Morcheln und Bambus", price: 5.20},
      {number: "82", name: "Hühnerfleisch", information:"", ingredients: "mit Champignons, Spargel und Gemüse", price: 5.00},
      {number: "83", name: "Hühnerfleisch", information:"", ingredients: "mit Curry, Kokosmilch [G] und Gemüse (scharf)", price: 5.50},
      {number: "84", name: "Gebackenes Hühnerfleisch", information:"", ingredients: "mit Süß‑Sauer‑Sauce [5]", price: 5.50},
      {number: "85", name: "Hühnerfleisch", information:"", ingredients: "mit Bambus, Paprika, Zwiebeln, schwarzen Bohnen und Knoblauch (scharf)", price: 5.50},
      {number: "86", name: "SHANGHAI‑KAI", information:"", ingredients: "gebackenes Hühnerfleisch mit Gemüse und Knoblauch (scharf)", price: 5.50},
      {number: "87", name: "Zweimal gebackenes Hühnerfleisch", information:"", ingredients: "mit Gemüse und Knoblauch (scharf)", price: 5.50},
      {number: "88", name: "Zweimal gebackenes Hühnerfleisch", information:"", ingredients: "mit Ananas und Süß‑Sauer‑Sauce [5]", price: 5.50},
      {number: "89", name: "Sate (Hühnerfleischspieß)", information:"", ingredients: "mit Erdnußsauce [H], Salat und Reis (mittelscharf)", price: 5.70},
    ];

    this.duckItems = [
      {number: "90", name: "Entenfleisch Chop Suey", information:"", ingredients: "(verschiedenes Gemüse)", price: 6.00},
      {number: "91", name: "Entenfleisch", information:"", ingredients: "mit Champignons, Spargel und Gemüse", price: 6.30},
      {number: "92", name: "Entenfleisch", information:"", ingredients: "mit Paprika, Zwiebeln, Bambussprossen, schw. Bohnen (Knoblauch, scharf)", price: 6.30},
      {number: "93", name: "Kanton-Ente", information:"", ingredients: "Kross gebacken mit Süß‑Sauer‑Sauce [5] und Ananas", price: 7.00},
      {number: "94", name: "Ente", information:"", ingredients: "Kross gebacken mit Morcheln, Glasnudeln und Gemüse", price: 7.00},
      {number: "95", name: "Shanghai-Ente - Knusprig gebacken", information:"", ingredients: "mit chinesischem Gemüse", price: 7.00},
      {number: "96", name: "Hongkong-Ente (mittel-scharf)", information:"", ingredients: "Kross gebacken mit Sojasprossen, Gemüse und Spezial‑Sauce [5]", price: 7.00},
      {number: "97", name: "Kross gebackene Ente", information:"", ingredients: "mit Großgarnelen [B] und Gemüse", price: 8.20},
    ];

    this.fishItems = [
      {number: "100", name: "Fischfilet gebacken Chop Suey", information:"D", ingredients: "", price: 5.50},
      {number: "101", name: "Fischfilet gebacken", information:"D", ingredients: "mit Ananas und Süß‑Sauer‑Sauce [5]", price: 5.50},
      {number: "102", name: "Fischfilet gebacken", information:"D", ingredients: "mit Curry, Kokosmilch und Gemüse (scharf)", price: 6.00},
      {number: "103", name: "Fischfilet (Knoblauch, scharf)", information:"D", ingredients: "gebacken mit Paprika, Zwiebeln, Bambussprossen und schwarzen Bohnen", price: 5.50},
    ];

    this.shrimpItems = [
      {number: "110", name: "Großgarnelen Chop Suey", information:"B", ingredients: "", price: 8.00},
      {number: "111", name: "Großgarnelen (scharf)", information:"B", ingredients: "mit Curry [I,J,5], Kokosmilch & Gemüse", price: 8.00},
      {number: "112", name: "Rindfleisch mit Curry", information:"B", ingredients: "paniert, gebacken mit Süß‑Sauer‑Sauce", price: 8.50},
      {number: "113", name: "Großgarnelen und Tintenfisch", information:"B,N", ingredients: "mit Bambus, Paprika, Zwiebeln und schwarzen Bohnen (Knoblauch, scharf)", price: 9.00},
      {number: "114", name: "Großgarnelen", information:"B", ingredients: "mit Sojasprossen", price: 7.80},
    ];

    this.squidItems = [
      {number: "120", name: "Tintenfisch (scharf)", information:"N", ingredients: "mit Curry [I,J,5], Kokosmilch und Gemüse", price: 5.50},
      {number: "121", name: "Tintenfisch (Knoblauch, scharf)", information:"N", ingredients: "mit schwarzen Bohnen, Paprika, Zwiebeln & Bambus", price: 5.50},
    ];

    this.houseSpecialItems = [
      {number: "130", name: "Schweinefleisch (scharf)", information:"", ingredients: "mit Zitronengras und Gemüse", price: 5.60},
      {number: "131", name: "Hühnerfleisch (scharf)", information:"", ingredients: "mit Zitronengras und Gemüse", price: 5.60},
      {number: "132", name: "Rindfleisch (scharf)", information:"", ingredients: "mit Zitronengras und Gemüse", price: 6.00},
    ];

    this.asiaSpecialItems = [
      {number: "T1", name: "Großgarnelen", information:"B", ingredients: "mit grünem oder rotem Curry [I,J,5], Kokosmilch und Gemüse (scharf)", price: 9.00},
      {number: "T2", name: "Asia-Schweinefleisch (scharf)", information:"", ingredients: "mit grünem oder rotem Curry [I,J,5] und Kokosmilch [G]", price: 7.20},
      {number: "T3", name: "Asia-Hühnerbrust", information:"", ingredients: "mit grünem oder rotem Curry [I,J,5], Kokosmilch [G] und Gemüse (scharf)", price: 7.20},
      {number: "T4", name: "Rindfleisch", information:"", ingredients: "mit grünem oder rotem Curry, Kokosmilch [G] und Gemüse (scharf)", price: 7.50},
      {number: "T5", name: "Asia-Hühnerbrust", information:"", ingredients: "gebacken mit rotem oder grünem Curry [I,J,5] und Gemüse (scharf)", price: 7.50},
      {number: "T6", name: "Ente kross gebacken mit Gemüse", information:"", ingredients: "Kokosmilch [G] und grünem oder rotem Curry [I,J,5]", price: 8.50},
    ];

    this.dessertItems = [
      {number: "140", name: "Gebackene Banane mit Honig", information:"A,C", ingredients: "", price: 2.20},
      {number: "141", name: "Gebackene Ananas mit Honig", information:"A,C", ingredients: "", price: 2.20},
      {number: "142", name: "Gebackene Äpfel mit Honig", information:"A,C", ingredients: "", price: 2.20},
      {number: "143", name: "Chinesische Lycheefrüchte", information:"", ingredients: "", price: 2.20},
    ];

    this.drinkItems = [
      {number: "157", name: "Becks Bier", information:"A", ingredients: "Fl. 0,33 l", price: 1.50},
      {number: "158", name: "Schultheiss Bier", information:"A", ingredients: "Fl. 0,33 l", price: 1.20},
      {number: "159", name: "Berliner Kindl", information:"A", ingredients: "Fl. 0,33 l", price: 1.20},
      {number: "171", name: "Tsingtao Bier", information:"A", ingredients: "Fl. 0,33 l", price: 2.00},
      {number: "172", name: "Cola", information:"2,8", ingredients: "Fl. 1,00 l", price: 2.00},
      {number: "172", name: "Fanta", information:"2,7", ingredients: "Fl. 1,00 l", price: 2.00},
      {number: "172", name: "Sprite", information:"", ingredients: "Fl. 1,00 l", price: 2.00},
      {number: "174", name: "Pflaumenwein", information:"12", ingredients: "Fl. 0,50 l", price: 7.00},
      {number: "174", name: "Lycheewein", information:"", ingredients: "Fl. 0,50 l", price: 7.00},
      {number: "179", name: "Bier (6 er-Pack): Berliner Kindl oder Schultheiss", information:"A", ingredients: "6 x 0,33 l", price: 5.00},
    ];
  }
}