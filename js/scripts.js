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
      input = input.replace(/\b(\w)(.*?)\b/g, "$2$1"+ayORway);
    }
  }
  $("#result").append(input);
};


//front end
$(document).ready(function() {
  $("#pigLatinButton").click(function() {
    var regularText = $("#pigLatinInput").val();
    var regularTextArray = regularText.split(/\b/g);
    for(var x = 0; x < regularTextArray.length; x++){
      pigLatinify(regularTextArray[x]);
    }
  });
});
