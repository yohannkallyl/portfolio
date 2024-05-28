function scrollToElement(elementSelector, instance = 0){
    //Seleciona todos os elementos que correspondem ao seletor dado

    const elements = document.querySelectorAll(elementSelector)

    //Verifica se existe elementos correspondentes ao seletor e se a instância solicitada existe

    if(elements.length > instance){
        //"Scroll" até a instância especificada do elemento

        elements[instance].scrollIntoView({ behavior: "smooth"})
    }
}

const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")

link1.addEventListener("click", () => {
    scrollToElement(".header")
})

link2.addEventListener("click", () => {
    //Segundo elemento com a classe "header"
    scrollToElement(".header", 1)
})

link3.addEventListener("click", () =>{
    scrollToElement(".column")
})