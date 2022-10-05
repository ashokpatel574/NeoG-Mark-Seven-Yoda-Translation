"use strict";

/* API - Yoda Translation
 https://api.funtranslations.com/translate/yoda.json

 */

{
  const userInput = document.querySelector(".user-input-box");
  const displayText = document.querySelector(".display-box");
  const btnTranslate = document.querySelector(".btn-translate");

  async function getYodaTranslation() {
    try {
      const text = userInput.value;

      // If no input for translation is entered then throw alert message
      if (text === "") {
        throw new Error(
          "Please enter your message below in input box for translation"
        );
      }

      const URLInput = `https://api.funtranslations.com/translate/yoda.json?text=${text}`;
      const response = await fetch(URLInput);

      // If no response, throw response error
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const data = await response.json();

      // to display fetched data in display section box
      displayText.innerText = data.contents.translated;
    } catch (error) {
      alert(
        `Something went wrong!! 💥💥 ${error.status || ""} ${
          error.message || ""
        }. Try Again!`
      );
    }
  }

  // Adding event listner for translation
  btnTranslate.addEventListener("click", getYodaTranslation);
}
