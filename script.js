

let res = fetch("https://restcountries.com/v2/all");
  res.then((data)=> data.json()).then((data1)=>{
      // console.log(data1)
     for(var i = 0; i<data1.length;i++){
      // console.log(data1[i].flags.svg);


  let a = document.createElement("div")
     a.innerHTML = `
  
     <div class="card" style="width: 18rem;">
     <h5 class="card-title">${data1[i].name}</h5>
   
     <img class="card-img-top" src="${data1[i].flags.svg}"  alt="Card image cap">
     <div class="card-body">
       
       <p class="card-text">Capital:${data1[i].capital}</p>
       <p class="card-text">Region:${data1[i].region}</p>
       <p class="card-text">Country Code:${data1[i].alpha3Code}</p>
       <a href='https://api.openweathermap.org/data/2.5/weather?q=${data1[i].capital}&appid=165dcf2ec874d701859e4f3e304dfaef' class="btn btn-primary" onclick="verify()">Click For Weather</a>
     </div>
   
   </div>`
   

    
  let n = document.getElementById("row")
n.append(a)
   document.body.append(n);   

}}).catch((error)=>console.log("error"))