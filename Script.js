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

      // To display fetched data in display section box
      displayText.innerText = data.contents.translated;
      displayText.style.border = "1px solid #ccc";

      // To display error message in output textarea  section box
    } catch (error) {
      displayText.style.border = "2px solid red";
      displayText.innerText = `Something went wrong 💥💥 ${
        error.status || ""
      } ${error.message || " "}. Try again!`;
    } finally {
      displayText.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Adding event listner for translation
  btnTranslate.addEventListener("click", getYodaTranslation);
}
