/* Global Variables */
const APIurl = "http://api.openweathermap.org/data/2.5/weather?zip=";
const APIKey = "&appid=c69385de2a6968fd2990ab1c471a2eb2";
let feelingInput = document.getElementById("feelings").innerText;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

async function postData(url = '', datat= {}){
    const response = await fetch(url, {
        method: 'POST',
        credential: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    try{
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error){
        console.log("Error in postdata", error);
    }
}

//TODO: eventlistenner on "generate button"
document.getElementById("generate").addEventListener("click", generateWeather);

function generateWeather(e){
    let zipInput = document.getElementById("zip").value;
    getWeather(APIurl, zipInput, APIKey);
}

//asyn get function to get weather info from weather API
const getWeather = async (baseURL, zip, key)=>{
    const res = await fetch(baseURL+zip+key);
    try{
        const data = await res.json();
        console.log(data);
        return data;
    }catch(error){
        console.log("error from API ", error);
    }
}

//TODO: call postData onbuttonclick sending data in textboxes