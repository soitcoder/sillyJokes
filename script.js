let jokes=document.querySelector('.jokes');
let nextJoke=document.querySelector('.next');
generateJokes();

nextJoke.addEventListener('click',generateJokes);

function generateJokes(){
  fetch('https://icanhazdadjoke.com/',{
    headers:{
      'accept':'application/json',
    },
  })

  .then((res)=>res.json())
  .then((data)=>{
    jokes.innerHTML=data.joke;
  })
}
// {
//   jokes.innerHTML=data.joke;
// })
