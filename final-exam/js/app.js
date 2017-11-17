const viewDog = document.querySelector("#viewDog")
const selectBreed = document.querySelector("#selectBreed")

// Create the ajaxSearch function to load the options into the select html using JavaScript
const ajaxSearch = function () {

  const DOG_API = 'https://dog.ceo/api/breeds/list'

  $.ajax({
    type: "GET",
    url: DOG_API,
    async: true,
    dataType: "json",
    success: function (data) {
      console.log(data);

      for(let i in data.message){
        // console.log(data.message[i]);
        selectBreed.innerHTML += `
          <option value="${data.message[i]}">${data.message[i]}</option>
        `
      }
      // on load apply the getRandomDog function.
      getRandomDog()
    },
    error: function (err) {
      console.log("There was an error");
    }

  })
}

const getRandomDog = function () {
  let breedName = selectBreed.options[selectBreed.selectedIndex].text
  console.log(breedName);

  const RANDOM_DOG_IMAGE_URL = `https://dog.ceo/api/breed/${breedName}/images/random`

  $.ajax({
    typr: "GET",
    url: RANDOM_DOG_IMAGE_URL,
    async: true,
    dataType: "json",
    success: function (data) {
      console.log(data.message);

      document.getElementById("breedImage").setAttribute("src", `${data.message}`)
    },
    error: function (err) {
      console.log("There was an error");
    }
  })
}

// On window load, apply and run the ajaxSearch function.
window.onload = ajaxSearch()

// On clicking the view dog button run the below code.
viewDog.addEventListener("click", getRandomDog)
