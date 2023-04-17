
const unsplashAccessKey = "rV9W-xUYi5SZQDCPTztGkX60p1p0ElNRb_0bkKn9lXM"; 
let url="https://kontests.net/api/v1/all"
let response=fetch(url)
response.then((value)=>{
    return value.json();
}).then((contests)=>{
    console.log(contests)
    ihtml=""
   
    for(item in contests){
        console.log(contests[item])
        
        ihtml+=`
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=900&t=st=1681728350~exp=1681728950~hmac=727ef0fc28e15c088252573ef7b02b3c25a04d1b5a322e0738b56616e4c3a40e" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text">Status: ${contests[item].status}</p>
          <p class="card-text">In 24 hours: ${contests[item].in_24_hours}</p>
          <p class="card-text">Site: ${contests[item].site}</p>
          
          <p>Starts at: ${contests[item].start_time}</p>
          <p>Ends at: ${contests[item].end_time}</p>
          <a href="${contests[item].url}" class="btn btn-primary">Visit Contest</a>
        </div>
      </div>`
      
    }
    cardContainer.innerHTML=ihtml
})


let cardContainer=document.getElementById('cardContainer')
cardContainer.innerHTML="allcards";




