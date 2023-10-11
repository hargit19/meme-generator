const btn = document.querySelector("#btn");
const memeImage = document.querySelector(".image-output img");


const changeimg = (url)=>{
memeImage.setAttribute("src",url);
}



const genMene = ()=>{
    fetch("https://meme-api.com/gimme/wholesomememes").then( (response) => (response.json())).then( (data) => {
        changeimg(data.url)
    })
}
genMene()
btn.addEventListener('click',genMene)