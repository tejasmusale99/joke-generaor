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
function clickHandler(){
    // console.log("click")
    const response=fetch(serverURL,options)
    .then(response=>response.json())
    .then(json=>getJoke.innerText=json[0].joke)
}
jokeBtn.addEventListener("click",clickHandler)