
// const doc = (el) => document.querySelector(el);
// const docAll = (el) => document.querySelectorAll(el);
// let modalQt = 1;
// let modalKey = null;
// let cart = [];

// const discountCoupon = 0.1;
 

// async function liberar() {
    
// }

// //Inserção dos item ao HTMl
// pizzaJson.map((item, index) => {

//     //preenche as informações em pizza-item;
//     let pizzaItem = doc(".models .pizza-item").cloneNode(true);
//     pizzaItem.querySelector(".pizza-item--img img").src = item.img
//     pizzaItem.setAttribute('data-key', index);
//     pizzaItem.querySelector(".pizza-item--name").textContent = item.name;
//     pizzaItem.querySelector(".pizza-item--desc").textContent = item.description;
//     pizzaItem.querySelector(".pizza-item--price").textContent = `R$ ${item.price.toFixed(2)}`;
    
//     //Evento de abertura do Modal
//     pizzaItem.querySelector("a").addEventListener("click", (e) => {

//         //Desativando o evento padrão
//         e.preventDefault();

//         //Selecionando a pizza em que foi clicada
//         let key = e.target.closest(".pizza-item").getAttribute("data-key");
//         modalKey = key

//         //Adicionando informação/imagens da pizza selecionada
//         doc(".pizzaBig img").src = pizzaJson[key].img;
//         doc(".pizzaInfo h1").textContent = pizzaJson[key].name;
//         doc(".pizzaInfo .pizzaInfo--desc").textContent = pizzaJson[key].description;
//         doc(".pizzaInfo .pizzaInfo--actualPrice").textContent = `R$ ${pizzaJson[key].price.toFixed(2)}`
//         doc(".pizzaInfo--size.selected").classList.remove('selected')

//         //Adiciona o peso de cada tamanho e seleciona o produto principal
//         docAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
//             if(sizeIndex === 2) {
//                 size.classList.add("selected");
//             }
//             size.querySelector("span").textContent = pizzaJson[key].sizes[sizeIndex];
//         })

//         doc(".pizzaInfo--qt").textContent =modalQt;

//         //Evento de abertura ao clicar em uma pizza
//         doc(".pizzaWindowArea").style.opacity = "0";
//         doc(".pizzaWindowArea").style.display = "flex";
//         setTimeout(() => doc(".pizzaWindowArea").style.opacity = "1", 1);

//     });

//     doc(".pizza-area").appendChild(pizzaItem);

// })

// //EVENTOS DO MODAL:
// //Evento de fechamento do modal
// function closeModel () {
//     doc(".pizzaWindowArea").style.opacity = "0";
//     setTimeout(() => doc(".pizzaWindowArea").style.display = "none", 500);
//     modalQt = 1;
// }
// docAll(".pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton").forEach((button) => {
//     button.addEventListener("click", closeModel);
// })


// //Almentos a quantidade de pizza
// doc(".pizzaInfo--qtmais").addEventListener("click", () => {
//     modalQt++
//     doc(".pizzaInfo--qt").textContent = modalQt;
// })

// //Abaixando a quantidade de pizza
// doc(".pizzaInfo--qtmenos").addEventListener("click", () => {
//     if(modalQt > 1) {
//         modalQt--
//         doc(".pizzaInfo--qt").textContent = modalQt;
//         return
//     } else if(modalQt == 1) {
//         closeModel();
//         return
//     }
// })

// //Seleção do tamanho do produto
// docAll(".pizzaInfo--size").forEach((size) => {
//     size.addEventListener("click", () => {
//         doc(".pizzaInfo--size.selected").classList.remove("selected")
//         size.classList.add("selected");
//     })
// })


// //
// doc(".pizzaInfo--addButton").addEventListener("click", () => {

//     let size = parseInt(doc(".pizzaInfo--size.selected").getAttribute("data-key"))
//     let identifier =pizzaJson[modalKey].id + "#" + size
//     let key = cart.findIndex((item) => item.identifier == identifier)

//     if(key > -1) {
//         cart[key].qt += modalQt;
//     } else {
//         cart.push({
//             identifier,
//             id: pizzaJson[modalKey].id,
//             size,
//             qt: modalQt
//         })
//     }



//     updateCart();
//     closeModel();
// })

// doc(".menu-openner").addEventListener("click", () => {
//     if(cart.length > 0) {
//         doc("aside").style.left = 0;
//     }
// })
// doc(".menu-closer").addEventListener("click", () => {
//     doc("aside").style.left = 100 + "vw"
// })

// function updateCart() {

//     doc(".menu-openner").textContent = cart.length
    

//     if(cart.length > 0) {
//         doc("aside").classList.add("show");
//         doc(".cart").innerHTML = "";

//         let subTotal = null;
//         let desconto = null;
//         let total = null;

//         for (let i in cart) {
//             const pizzaItem = pizzaJson.find((item) => item.id === cart[i].id);

//             subTotal = pizzaItem.price * cart[i].qt;

//             let cartItem = doc(".models .cart--item").cloneNode(true);

//             let pizzaNameSize;
//             switch (cart[i].size) {
//                 case 0:
//                     pizzaNameSize = "P";
//                     break;
//                 case 1:
//                     pizzaNameSize = "M";
//                     break;
//                 case 2:
//                     pizzaNameSize = "G";
//                     break;

//                 default:
//                     break;
//             }



//             let pizzaName = `${pizzaItem.name} (${pizzaNameSize})`;

//             cartItem.querySelector("img").src = pizzaItem.img;
//             cartItem.querySelector(".cart--item-nome").textContent = pizzaItem.name;
//             cartItem.querySelector(".cart--item-nome").textContent = pizzaName;
//             cartItem.querySelector(".cart--item--qt").textContent = cart[i].qt;

//             cartItem.querySelector(".cart--item-qtmais").addEventListener("click", () => {
//                 cart[i].qt++
//                 updateCart()
//             });
//             cartItem.querySelector(".cart--item-qtmenos").addEventListener("click", () => {
//                 //
//                 cart[i].qt > 1 ? cart[i].qt-- : cart.splice(i, 1);
//                 updateCart()
//             })


//             doc(".cart").append(cartItem)
//         }

//         desconto = subTotal * discountCoupon;
//         total = subTotal - desconto;

//         doc(".subtotal span:last-child").textContent = subTotal.toFixed(2)
//         doc(".desconto span:last-child").textContent = desconto.toFixed(2)
//         doc(".total span:last-child").textContent = total.toFixed(2)

//         return;
//     } else {
//         doc("aside").classList.remove("show");
//         doc("aside").style.left = 100 + "vw"
//         return;
//     }
// }


