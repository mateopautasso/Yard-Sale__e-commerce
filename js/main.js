// Pliegue y despliegue de menú
const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconShoppingCart = document.querySelector('.navbar-shopping-cart img');
const shoppingCartMenu = document.querySelector('.shopping-cart-container');
const productDetail = document.querySelector('.add-product-detail');
const iconCloseProductDetail = document.querySelector('.product-detail-close img')
const imgAddProductDetail = document.querySelector('.img-add-product-detail');
const shoppingCartContainerArrow = document.querySelector('.shopping-cart-container__arrow')

const cardsContainer = document.querySelector('.cards-container');

navbarEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
iconShoppingCart.addEventListener('click', toggleShoppingCart)
iconCloseProductDetail.addEventListener('click', closeProductDetail)
shoppingCartContainerArrow.addEventListener('click',toggleShoppingCart)


function toggleDesktopMenu() {
    const isShoppingCartClosed = shoppingCartMenu.classList.contains('inactive');
    if(isShoppingCartClosed === false) {
        shoppingCartMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetail.classList.contains('inactive');
    if (isProductDetailClosed === false) {
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCartClosed = shoppingCartMenu.classList.contains('inactive')
    if(isShoppingCartClosed === false) {
        shoppingCartMenu.classList.add('inactive')
    }

    const isProductDetailClosed = productDetail.classList.contains('inactive')
    if(isProductDetailClosed === false) {
        productDetail.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}

function openProductDetail() {
    const isShoppingCartClosed = shoppingCartMenu.classList.contains('inactive');
    if (isShoppingCartClosed === false) {
        shoppingCartMenu.classList.add('inactive')
    }

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(isDesktopMenuClosed === false) {
        desktopMenu.classList.add('inactive');
    }

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if(isMobileMenuClosed === false) {
        mobileMenu.classList.add('inactive');
    }


    productDetail.classList.toggle('inactive');
}

function closeProductDetail() {
    productDetail.classList.add('inactive');
}

function toggleShoppingCart() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(isDesktopMenuClosed === false) {
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetail.classList.contains('inactive')
    if(isProductDetailClosed === false) {
        productDetail.classList.add('inactive')
    }

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (isMobileMenuClosed === false) {
        mobileMenu.classList.add('inactive')
    }

    shoppingCartMenu.classList.toggle('inactive');
}


// Lista de productos en el main
const productList = [];

// function para automatizar la construccion de los objetos que van a ir dentro del array 'productList'
function almacenarProductoEnArray(name, price, image) {
    productList.push({
        name: name,
        price: price,
        image: image
    })
}


almacenarProductoEnArray('Bike', '69.99', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
almacenarProductoEnArray('Blue Igloo Refrigerator', '89.99', './images/refrigeratorBlue.jpg');
almacenarProductoEnArray('Pink Igloo Refrigerator', '89.99', './images/refrigeratorPink.jpg');
almacenarProductoEnArray('Aesthetic Shelf', '39.49', './images/AestheticShelf.jpg');
almacenarProductoEnArray('Bike', '69.99', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
almacenarProductoEnArray('Blue Igloo Refrigerator', '89.99', './images/refrigeratorBlue.jpg');
almacenarProductoEnArray('Pink Igloo Refrigerator', '89.99', './images/refrigeratorPink.jpg');
almacenarProductoEnArray('Aesthetic Shelf', '39.49', './images/AestheticShelf.jpg');
almacenarProductoEnArray('Bike', '69.99', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
almacenarProductoEnArray('Blue Igloo Refrigerator', '89.99', './images/refrigeratorBlue.jpg');
almacenarProductoEnArray('Pink Igloo Refrigerator', '89.99', './images/refrigeratorPink.jpg');
almacenarProductoEnArray('Aesthetic Shelf', '39.49', './images/AestheticShelf.jpg');
almacenarProductoEnArray('Bike', '69.99', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
almacenarProductoEnArray('Blue Igloo Refrigerator', '89.99', './images/refrigeratorBlue.jpg');
almacenarProductoEnArray('Pink Igloo Refrigerator', '89.99', './images/refrigeratorPink.jpg');
almacenarProductoEnArray('Aesthetic Shelf', '39.49', './images/AestheticShelf.jpg');
almacenarProductoEnArray('Bike', '69.99', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
almacenarProductoEnArray('Blue Igloo Refrigerator', '89.99', './images/refrigeratorBlue.jpg');
almacenarProductoEnArray('Pink Igloo Refrigerator', '89.99', './images/refrigeratorPink.jpg');
almacenarProductoEnArray('Aesthetic Shelf', '39.49', './images/AestheticShelf.jpg');


/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/


// Misma card construida con JS:

function renderProducts(array) {
    for(product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
        productImg.classList.add('product-card__img')
        productImg.addEventListener('click', openProductDetail)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info-main');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const figureAddCart = document.createElement('figure');
    
        const imgAddCart = document.createElement('img');
        imgAddCart.setAttribute('src', '/icons/bt_add_to_cart.png')
    
    
        cardsContainer.appendChild(productCard);
        productCard.append(productImg, productInfo);
            productInfo.append(productInfoDiv, figureAddCart);
                productInfoDiv.append(productPrice, productName);
                figureAddCart.appendChild(imgAddCart);

    }
}
renderProducts(productList);
