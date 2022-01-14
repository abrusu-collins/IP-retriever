
let container=document.getElementById("container")
let regex=/\/(\w+)/
let ipObject=new XMLHttpRequest();
ipObject.open("GET","http://ip-api.com/json")
ipObject.send();
ipObject.onreadystatechange=function(){

  if(ipObject.readyState==4){
    let repliesStore=localStorage.setItem("replies",ipObject.responseText);
    





    let repliesRetrieved=JSON.parse(localStorage.getItem("replies"));
  let div=document.createElement("div");
  div.innerHTML=`<ul class="list-group mt-5">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    IP Adddress
    <span class="badge bg-primary rounded-pill">${repliesRetrieved.query}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Continent
    <span class="badge bg-primary rounded-pill">${repliesRetrieved.timezone.replace(regex,"")}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Country
    <span class="badge bg-primary rounded-pill">${repliesRetrieved.country}, ${repliesRetrieved.countryCode}</span>
  </li>

  <li class="list-group-item d-flex justify-content-between align-items-center">
    Capital City
    <span class="badge bg-primary rounded-pill">${repliesRetrieved.city}</span>
  </li>
</ul>`
console.log(repliesRetrieved);
container.appendChild(div);
  }

  
}




