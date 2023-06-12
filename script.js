
const doc = (el) => document.querySelector(el);
const docAll = (el) => document.querySelectorAll(el);
let modalQt = 1;
let modalKey = null;
let cart = [];

//Inserção dos item ao HTMl
pizzaJson.map((item, index) => {

    //preenche as informações em pizza-item;
    let pizzaItem = doc(".models .pizza-item").cloneNode(true);
    pizzaItem.querySelector(".pizza-item--img img").src = item.img
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector(".pizza-item--name").textContent = item.name;
    pizzaItem.querySelector(".pizza-item--desc").textContent = item.description;
    pizzaItem.querySelector(".pizza-item--price").textContent = `R$ ${item.price.toFixed(2)}`;
    
    //Evento de abertura do Modal
    pizzaItem.querySelector("a").addEventListener("click", (e) => {

        //Desativando o evento padrão
        e.preventDefault();

        //Selecionando a pizza em que foi clicada
        let key = e.target.closest(".pizza-item").getAttribute("data-key");
        modalKey = key

        //Adicionando informação/imagens da pizza selecionada
        doc(".pizzaBig img").src = pizzaJson[key].img;
        doc(".pizzaInfo h1").textContent = pizzaJson[key].name;
        doc(".pizzaInfo .pizzaInfo--desc").textContent = pizzaJson[key].description;
        doc(".pizzaInfo .pizzaInfo--actualPrice").textContent = `R$ ${pizzaJson[key].price.toFixed(2)}`
        doc(".pizzaInfo--size.selected").classList.remove('selected')

        //Adiciona o peso de cada tamanho e seleciona o produto principal
        docAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
            if(sizeIndex === 2) {
                size.classList.add("selected");
            }
            size.querySelector("span").textContent = pizzaJson[key].sizes[sizeIndex];
        })

        doc(".pizzaInfo--qt").textContent =modalQt;

        //Evento de abertura ao clicar em uma pizza
        doc(".pizzaWindowArea").style.opacity = "0";
        doc(".pizzaWindowArea").style.display = "flex";
        setTimeout(() => doc(".pizzaWindowArea").style.opacity = "1", 1);

    });

    doc(".pizza-area").appendChild(pizzaItem);

})

//EVENTOS DO MODAL:
//Evento de fechamento do modal
function closeModel () {
    doc(".pizzaWindowArea").style.opacity = "0";
    setTimeout(() => doc(".pizzaWindowArea").style.display = "none", 500);
    modalQt = 1;
}
docAll(".pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton").forEach((button) => {
    button.addEventListener("click", closeModel);
})


//Almentos a quantidade de pizza
doc(".pizzaInfo--qtmais").addEventListener("click", () => {
    modalQt++
    doc(".pizzaInfo--qt").textContent =modalQt;
})

//Abaixando a quantidade de pizza
doc(".pizzaInfo--qtmenos").addEventListener("click", () => {
    if(modalQt > 1) {
        modalQt--
        doc(".pizzaInfo--qt").textContent = modalQt;
        return
    } else if(modalQt == 1) {
        closeModel();
        return
    }
})

//Seleção do tamanho do produto
docAll(".pizzaInfo--size").forEach((size) => {
    size.addEventListener("click", () => {
        doc(".pizzaInfo--size.selected").classList.remove("selected")
        size.classList.add("selected");
    })
})


//
doc(".pizzaInfo--addButton").addEventListener("click", () => {

    let size = parseInt(doc(".pizzaInfo--size.selected").getAttribute("data-key"))

    cart.push({
        id: pizzaJson[modalKey].id,
        size,
        qt: modalQt
    })



    doc("aside").style.width = 20 + "vw";
    modalQt = 1
    closeModel();
})

