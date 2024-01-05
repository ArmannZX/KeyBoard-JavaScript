//This function checks the key pressed by the user and change its style

document.body.addEventListener("keydown", function (event) {
  const Char = document.getElementsByClassName("KeyST1");
  const Show = document.getElementById("h1");
  function KeyDown(key, code) {
    if (event.code == "Key" + code) {
      Char[key].classList.toggle("KeyST2");
      if (event.repeat == true) {
        Char[key].classList = "KeyST1 KeyST2";
      }
      // Show.innerHTML += event.key;
    }
  }
  KeyDown(0, "Q");
  KeyDown(1, "W");
  KeyDown(2, "E");
  KeyDown(3, "R");
  KeyDown(4, "T");
  KeyDown(5, "Y");
  KeyDown(6, "U");
  KeyDown(7, "I");
  KeyDown(8, "O");
  KeyDown(9, "P");
  KeyDown(10, "A");
  KeyDown(11, "S");
  KeyDown(12, "D");
  KeyDown(13, "F");
  KeyDown(14, "G");
  KeyDown(15, "H");
  KeyDown(16, "J");
  KeyDown(17, "K");
  KeyDown(18, "L");
  KeyDown(19, "Z");
  KeyDown(20, "X");
  KeyDown(21, "C");
  KeyDown(22, "V");
  KeyDown(23, "B");
  KeyDown(24, "N");
  KeyDown(25, "M");
});

document.body.addEventListener("keyup", function (event) {
  const Char = document.getElementsByClassName("KeyST1");
  for (i = 0; i < Char.length; i++) {
    Char[i].classList = "KeyST1";
  }
});

// Change The language of Keyboard
let IsEnglish = true;
document.body.addEventListener("keydown", function (event) {
  const Char = document.getElementsByClassName("KeyST1");
  const CharEnglish = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];
  const CharFarsi = [
    "ض",
    "ص",
    "ث",
    "ق",
    "ف",
    "غ",
    "ع",
    "ه",
    "خ",
    "ح",
    "ش",
    "س",
    "ی",
    "ب",
    "ل",
    "ا",
    "ت",
    "ن",
    "م",
    "ظ",
    "ط",
    "ز",
    "ر",
    "ذ",
    "د",
    ",",
  ];
  if (IsEnglish == true) {
    if (event.altKey && event.shiftKey) {
      for (let i = 0; i < Char.length; i++) {
        Char[i].innerHTML = CharFarsi[i];
      }
      document.getElementById("h1").style.direction = "rtl";
      console.log("Change To Farsi");
      IsEnglish = false;
    }
  } else {
    if (event.altKey && event.shiftKey) {
      for (let i = 0; i < Char.length; i++) {
        Char[i].innerHTML = CharEnglish[i];
      }
      document.getElementById("h1").style.direction = "ltr";
      console.log("Change To English");
      IsEnglish = true;
    }
  }
});
