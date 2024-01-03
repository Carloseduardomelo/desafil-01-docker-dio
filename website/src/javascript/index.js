const fraze = document.getElementById('phrase')
const button = document.getElementById('cubo')
const idhtml = document.getElementById('days')
let frazevist;
let id;


const dadosApi = async () =>{
    const dados = await fetch("https://api.adviceslip.com/advice").then((res) => res.json())
    frazevist = dados.slip.advice
    id = dados.slip.id
    
    fraze.innerHTML = `"${dados.slip.advice}"`
}
dadosApi()

button.addEventListener('click' , () =>{
    dadosApi()
    fraze.innerHTML =`"${frazevist}"`
    idhtml.innerHTML = `${id}`
})
