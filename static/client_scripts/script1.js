const city=document.getElementById('city')
const cityName=city.innerText;
// const curTem=document.getElementById("current-temp");
const apiKey='7c8b1f6df5c9c92e659c03b6231c3a33'
// console.log(cityName)
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then(res=>res.json())
    .then(data=>{
        
        if(data.cod=='404')
        {
            // console.log("city not found");
            let des=document.getElementById("edit")
        //    console.log(des);
            des.innerHTML=`<div> Error: 404 City( ${cityName} ) Not found</div>
            <div>   Please enter city again correctly</div>`
        }
        let currentTemp=data.main.temp;
        let countryName=data.sys.country;
        let wetCondition=data.weather[0].main;
        let weatherDes=data.weather[0].description;
        let minTemp=data.main.temp_min
        let maxTemp=data.main.temp_max
        let wicon=data.weather[0].icon;
        description.innerText="Weather : "+wetCondition+" | "+weatherDes
        city.innerText=cityName+" | "+countryName
        ctemp.innerText=currentTemp+" °C"
        mntp.innerText=minTemp+" °C"
        mxtp.innerText=maxTemp+" °C"
        const weIcon=document.getElementById("weather_icon");
         weIcon.innerHTML=`<img id="weather-logo" src=http://openweathermap.org/img/wn/${wicon}.png>`;
    
    })

    