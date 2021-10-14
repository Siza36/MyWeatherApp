const cityNameInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector(".btn");
const apiKey = "65b9fabc81ee2604e5e21c47059db69f";
const list = document.querySelector(".cities");
const msg = document.querySelector(".msg");

searchBtn.addEventListener("click",search);

function search(eve){
    eve.preventDefault();
    let inpVal = cityNameInput.value;
    console.log(inpVal)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inpVal}&appid=${apiKey}&units=metric`;
    fetch(url)
  .then(response => response.json())
  .then(data => { 
    const {main,name,sys,weather}=data;
    const temperature = main.temp;
    const city = name;
    const country = sys.country;
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
    const li = document.createElement("li");
    li.classList.add("city");
    const markup=`
    <div class ="containerr">
        <p class = "cityy">${city}</p>
        <p class = "countryy">${country}</p>
        <p class ="temp" >${Math.round(temperature)}°</p>
        <h4>${weather[0].description}</h4>
        <img class='img' w src="${icon}" alt="">
    </div>
    `;
    li.innerHTML =markup;
    list.append(li);
    msg.innerText = "";
})
.catch(()=>{
    msg.innerText = "Please Enter a valid city";
})
cityNameInput.value = "";
}