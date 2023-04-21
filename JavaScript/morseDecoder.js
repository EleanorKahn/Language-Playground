decodeMorse = function(morseCode){
    return morseCode.split("   ")
        .map((morseWord) => morseWord.split(" ")
        .map((morseLetter) => MORSE_CODE[morseLetter])
        .join("").toUpperCase()).join(" ").trim();
  }