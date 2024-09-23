import "./style.css";
const location = document.querySelector('.loc-span');
const temp = document.querySelector('.temp-span');
const currentConditions = document.querySelector('.cond-span');
const searchInput = document.getElementById('search');
const searchButton = document.querySelector('.searchBtn');
const picture = document.querySelector('img');




//Promise practice
// function getInfo(name) {
//   fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/essen?unitGroup=us&key=TJ25Z6C9PYFFGQFM5G7R8JEVV&contentType=json`, {mode: 'cors'})
//   .then(resp => resp.json())
//   .then(resp => console.log(resp))
//   .catch(error => {
//     console.log(error);
//     alert('Search failed');
//   });
// }

//Async Function Practice
async function getInfo(name) {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?unitGroup=us&key=TJ25Z6C9PYFFGQFM5G7R8JEVV&contentType=json`, {mode: 'cors'});
    const weatherData = await response.json();

    location.textContent = weatherData.resolvedAddress;
    temp.textContent = `${weatherData.currentConditions.temp} °F`;
    currentConditions.textContent = weatherData.currentConditions.conditions;
    // picture.src = weatherData.currentConditions.icon;
    // selectImg('cloudy');
    // console.log(weatherData.currentConditions.icon);

    console.log(weatherData);
  } catch (error) {
    console.log(error);
    alert('Search failed, input only takes City Names');
  }
}

function inputSearch() {
  const value = searchInput.value;
  console.log(value);
  getInfo(value);
}


searchButton.addEventListener('click', inputSearch);


getInfo('Dusseldorf');

// function selectImg(weather) {
//   if (weather === 'cloudy' || weather === 'Overcast') {
//     picture.src = 'https://img.icons8.com/ios-filled/100/000000/cloud.png'; // Correct direct image link
//   } else {
//     picture.src = ''; // Clear image or set a default for other conditions
//   }
// }

// function selectImg(weather) {
//   if (weather === 'cloudy' || weather === 'Overcast') {
//     picture.src = 'https://img.icons8.com/?size=50&id=2854&format=png&color=000000';
//   }

// }

