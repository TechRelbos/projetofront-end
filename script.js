//Troca o tema quando clica no botao
function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    //if(html.classList.contains('light')) {
    //    html.classList.remove('light')
    //} else {
    //    html.classList.add('light')
    //}


//pegar a tag 
const img = document.querySelector("#profile img")
//substituir a imagem
if(html.classList.contains("light")) {
//se light mode
    img.setAttribute("src", "./assets/Avatar_light.png")
} else {
//se dark mode
    img.setAttribute("src", "./assets/Avatar_dark.png")
}
}