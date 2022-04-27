// What will this application do?
//1. Allow user to input a search
//2. Display  Digimon  based on sea/2021rch
//3. Display the picture of he Digimon
//4. Display the level of the gym

//Pseudocode
//create an event listener for the form
//when the form is submitted, it will call the API
//make call to Digimon API

const app = {};
// figure out how to get the value from  text input after the user has typed in a search term and pressed the submit button
//2. once that has happened and have key word , pass it to the get Digimon  method and use it in my API call  and put  it in your API end point then you will get a return of an array of 1 digimon
//
// Once you get in the user name ,   follow the example that is listed on the site.  in the below we hard coded to get the result
// follow code along from December 9,2021



app.getDigimon = function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    const selectedDigimon = $("#search-input").val();
    $.ajax({
      url: `https://digimon-api.vercel.app/api/digimon/name/${selectedDigimon}`,
      method: "GET",
      dataType: "json",
    }).then(function (response) {
      console.log(response);
      app.displayDigimon(response[0]);
    });
    
    
    
  });
};


app.displayDigimon= function (response) {
  console.log("hey" , response)
  const digimonItemGenerator= `<div><img src="${response.img}" alt="${response.name}" id="digimonImage"><p>${response.name}</p><p>${response.level}</p></div>`;
  $("#imageContainer").append(digimonItemGenerator);
  
};

$(document).ready(() => {
  app.getDigimon();
});
