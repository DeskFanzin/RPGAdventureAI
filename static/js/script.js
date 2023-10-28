document.addEventListener("DOMContentLoaded", function () {
    const characterForm = document.getElementById("character-form");
    const characterText = document.getElementById("character_text");
    const generateCharacterButton = document.getElementById("generate-character-button");
    const characterImage = document.getElementById("character-image");
  
    characterForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const characterTextValue = characterText.value;
  
      fetch("/character", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `character_text=${characterTextValue}`,
      })
        .then((response) => response.json())
        .then((data) => {
          characterImage.src = data.character_image;
        });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const backgroundForm = document.getElementById("background_form");
    const backgroundText = document.getElementById("background_text");
    const generateBackgroundButton = document.getElementById("generate-background-button");
    const backgroundImage = document.getElementById("background_image");
  
    backgroundForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const backgroundTextValue = backgroundText.value;
  
      fetch("/background", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `background_text=${backgroundTextValue}`,
      })
        .then((response) => response.json())
        .then((data) => {
          backgroundImage.src = data.background_image;
        });
    });
  });


