//backend
function isVowel(x) {
    var result;
    result = x == "a" || x == "e" || x == "i" || x == "o" || x == "u";
    return result;
}

function pigLatinify (input) {
  if (isNaN(input.charAt(0))) {
    var ayORway = "ay";
    if (isVowel(input.charAt(0))) {
        ayORway = "way"
      }
    if (input.substring(0,2) == "qu") {
      input = input.replace(/\b(\w)(.*?)\b/g, "$2qu"+ayORway);
    }
    else {
      if (input.length < 3) {
        input = input.replace(/\b(\w)(.*?)\b/g, "$2$1"+ayORway);
      }
      else {
        input = input.replace(/\b(.*?)([aeiou])(.*?)\b/g, "$2$3$1"+ayORway);
      }
    }
  }
  $("#result").append(input);
}
/*
fix consonant issue by comparing with dictionary and known names
*/

/*
function unPigLatinify (input) {
  if (isNaN(input.charAt(0))) {
    input = input.replace(/\b(.*?)quay\b/g, "q$1");
    if (input != "ayway") {
      if (input.length < 6) {
        input = input.replace(/\b(.*?)(\w)way\b/g, "$2$1");
      }
    }
    if (input == "ayway") {
      input = "way";
    }
    if (input.slice(-2) == "ay" && input.slice(-3) != "way") {
      input = input.replace(/\b(.*?)(\w)ay\b/g, "$2$1");
    }
  }
  $("#unResult").append(input);
}
*/

//front end
$(document).ready(function() {
  $("#pigLatinButton").click(function() {
    $("#result").html('');
    var regularText = $("#pigLatinInput").val();
    var regularTextArray = regularText.split(/\b/g);
    for(var x = 0; x < regularTextArray.length; x++){
      pigLatinify(regularTextArray[x]);
    }
  })
  $("#unPigLatinButton").click(function() {
    $("#unResult").html('');
    var regularText = $("#unPigLatinInput").val();
    var regularTextArray = regularText.split(/\b/g);
    for(var x = 0; x < regularTextArray.length; x++){
      unPigLatinify(regularTextArray[x]);
    }
  })
});
