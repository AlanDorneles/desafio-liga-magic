import fetchData from './service.mjs';

const typeCard = document.querySelector('.type');
const numberCard = document.querySelector('.number-card');
const collection = document.querySelector('.collection');
const nameCard = document.querySelector('.name-card-title');
const nameCardEN= document.querySelector('.name-card-title-en');
const typeCardM = document.querySelector('.type-card-m');
const cardColor = document.querySelector('.card-color');
const containerMana = document.querySelector('.container-mana');
const minPrice = document.querySelector('.min-price')
const averagePrice = document.querySelector('.mid-price')
const maxPrice = document.querySelector('.max-price')
const imageG = document.querySelector(".img-card")
const containerImgCarousel = document.querySelector('.container-img-carousel')
const favorite = document.querySelector('.span-favorite');

favorite.addEventListener('click', fillFavorite)


function fillFavorite(){
    const currentSrc = favorite.children[0].src;
    console.log(favorite.children[0].src)
    if (currentSrc == "http://127.0.0.1:5500/img/icons/favorite_fill.svg") {
        favorite.children[0].src = "./img/icons/favorite.svg";
    } else{
        favorite.children[0].src = "./img/icons/favorite_fill.svg";
    }
}

async function fetchDataAndLog() {
    try {
      var cards = await fetchData();
      console.log('Variável dadosRecebidos:', cards[0].acronimo);

      typeCard.textContent =cards[0].acronimo;
      numberCard.textContent = cards[0].numero_serie;
      collection.textContent = cards[0].colecao;
      nameCard.innerHTML = cards[0].nome;
      nameCardEN.innerHTML = cards[0].name_english;
      typeCardM.textContent = cards[0].detalhe.tipo
      cardColor.textContent = cards[0].detalhe.cor

      for (let index = 0; index < cards[0].detalhe.custo_de_mana; index++) {
        const imgElement = document.createElement('img');
        imgElement.src = './img/icons/mana.svg';
        imgElement.classList.add('mana-img'); 
        containerMana.appendChild(imgElement); 
      }

      minPrice.textContent = "R$ " + cards[0].preco.menor_preco ; 
      averagePrice.textContent = "R$ " + cards[0].preco.medio_preco  ;
      maxPrice.textContent = "R$ " + cards[0].preco.maior_preco ;
      console.log(cards[0].path[0])
      
      imageG.src = cards[0].path[0];
      imageG.classList.add('img-card'); 

      for (let index = 1; index < 4; index++) {
        const imgElement = document.createElement('img');
        imgElement.src = cards[0].path[index];
        imgElement.classList.add(`${"image-carousel-"+index}`); 
        containerImgCarousel.appendChild(imgElement); 
      }


    } catch (error) {
      console.error('Erro em main.mjs:', error);
    }
  }
  
  // Chame a função que utiliza async/await
  fetchDataAndLog();

const addButton = document.querySelector('.button-add')
const subtractButton = document.querySelector('.button-subtract');


function addQuantity(){
    let quantityItem = document.getElementById('quantity-item');
    quantityItem.value = Number(quantityItem.value) + 1;
    console.log(quantityItem.value)
}

function subtractQuantity() {
    let quantityItem = document.getElementById('quantity-item');
    if (quantityItem.value > 1) {
      quantityItem.value = Number(quantityItem.value) - 1;
    }
  }


addButton.addEventListener('click', addQuantity);
subtractButton.addEventListener('click', subtractQuantity);

