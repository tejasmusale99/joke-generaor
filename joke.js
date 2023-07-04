const jokeBtn=document.getElementById("btn");
const getJoke=document.getElementById("jokes");

const serverURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"
const apikey="jiabtGijAVi2nmY3eHpD0w==Se6fmYKDhAke5DlX"

const options={
    method:"GET",
    headers:{
        "X-Api-key":apikey,
    },
};
async function clickHandler(){
    const response=await fetch(serverURL,options)
    const Data=await(response.json())
    console.log(getJoke.innerText=Data[0].joke)

// using promises

    // .then(response=>response.json())
    // .then(json=>console.log(json))
    // .then(json=>getJoke.innerText=json[0].joke)
}
jokeBtn.addEventListener("click",clickHandler)