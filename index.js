const input = document.querySelector(".input");
const btnSearch = document.getElementById("search");
const infos = document.querySelector(".infos");
const err = document.querySelector(".err");

btnSearch.addEventListener("click", () => {
  let word = input.value;
  const url = "https://restcountries.com/v3.1/name/" + word;

  fetch(url).then((response) =>
    response.json().then((data) => {
      try {
        const country = data[0];
        const nameCountry = country.name.common;
        const capital = country.capital[0];
        const population = country.population;
        const continent = country.continents[0];
        const flag = country.flags.svg;

        infos.classList.add("infosClass");
        infos.style.display = "grid";
        err.style.display = "none";

        infos.innerHTML = `<div class="infosCountry"><h1>${nameCountry}</h1><img src="${flag}"></div> 
        <div class="infosBis">

         <p class="title">Capital : <span> ${capital}</span> </p>
         <p class="title">Population : <span> ${population} habitants</span></p> 
         <p class="title">Continent :  <span> ${continent} </span> </p>
        
        </div>`;
      } catch (error) {
        err.innerHTML = `<h2>Il y a une erreur merci d'ecrire un nom de Pays.</h2>`;
        infos.classList.remove("infosClass");
        infos.style.display = "none";
        err.style.display = "block";
      }
    })
  );
});
