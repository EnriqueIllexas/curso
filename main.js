const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const productDetailAside = document.querySelector("#product-detail")
const productDetailContainer = document.querySelector("#productDetail")
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProducDetailAside)

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  
    if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
  } 
  function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  
    if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive'); 
    }
    closeProducDetailAside();
    
    mobileMenu.classList.toggle('inactive');
  }
  function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive'); 
    }
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
      productDetailContainer.classList.add('inactive'); 
    }

    shoppingCartContainer.classList.toggle('inactive');


  }
  function openProductDetailAside() {
    desktopMenu.classList.add("inactive")
    shoppingCartContainer.classList.add("inactive");

    productDetailContainer.classList.remove("inactive");
  }
  function closeProducDetailAside(){
    productDetailContainer.classList.add("inactive");
    /*cuando es add le agrega el active y cuando es remuve le quita */
  }

  const productList = [];
  productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Con frenos de disco de última generación, disfrutarás de un frenado seguro y confiable en todas las condiciones climáticas. Además, su cómodo asiento ergonómico y manubrio ajustable garantizan una experiencia de conducción placentera y sin esfuerzo.",
    category: "Others",
  });
  productList.push({
    name: "Piano",
    price: 320,
    image: "https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Cada tecla esculpida con precisión te brinda una respuesta táctil excepcional, permitiendo una interpretación emocional y expresiva. Desde sus suaves tonos en los registros bajos hasta sus brillantes notas en los agudos, este piano te envolverá en una experiencia musical inolvidable.",
    category: "instruments",
  });
  productList.push({
    name: "Zapatilla",
    price: 100,
    image: "https://images.pexels.com/photos/8559045/pexels-photo-8559045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Camina con estilo y comodidad con nuestras zapatillas azules. Este calzado urbano fusiona moda y funcionalidad para que puedas destacar en cualquier ocasión. El color azul vibrante y moderno agrega un toque de frescura a tu outfit, haciéndote lucir a la moda en cada paso.",
    category: "calzado",
  });
  productList.push({
    name: "reloj Rolex",
    price: 828,
    image: "https://images.pexels.com/photos/9978940/pexels-photo-9978940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Descubre la excelencia relojera con este magnífico Rolex en tono rojo. Este icónico reloj de lujo personifica el estilo y la sofisticación, siendo el accesorio perfecto para aquellos que aprecian la elegancia y la precisión.",
    category: "electronico",
  });
  productList.push({
    name: "Iphone 14",
    price: 1210,
    image: "https://images.pexels.com/photos/7947956/pexels-photo-7947956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "La pantalla OLED de borde a borde de 6.5 pulgadas brinda colores vibrantes y detalles asombrosos, sumergiéndote en una experiencia visual inigualable. Su resolución mejorada y tasa de refresco suave hacen que cada interacción sea fluida y cautivadora.",
    category: "electronico",
  });
  productList.push({
    name: "Desk",
    price: 320,
    image: "https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "Monopoly",
    price: 100,
    image: "https://images.pexels.com/photos/4004426/pexels-photo-4004426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "Room",
    price: 5000,
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "Car Audi",
    price: 500000 ,
    image: "https://images.pexels.com/photos/193991/pexels-photo-193991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "Motorcycle",
    price: 203,
    image: "https://images.pexels.com/photos/2830762/pexels-photo-2830762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "room Clasic",
    price: 4000,
    image: "https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "Games",
    price: 80,
    image: "https://images.pexels.com/photos/21067/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "Books",
    price: 44,
    image: "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "cubo rubik",
    price: 50,
    image: "https://images.pexels.com/photos/1500610/pexels-photo-1500610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "Zapatilla nike",
    price: 210,
    image: "https://images.pexels.com/photos/13236696/pexels-photo-13236696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "lentes",
    price: 20,
    image: "https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  productList.push({
    name: "TV apple",
    price: 700,
    image: "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });
  
  function renderProducts(arr){
    for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener("click", function(){
        renderDetailsAside(product);
        openProductDetailAside();
        
      });
    
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
    
      const productInfoDiv = document.createElement('div');
    
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name;
    
      productInfoDiv.appendChild(productPrice);
      /*appendchild: En este caso la propiedad apeenChild esta envolviendo a el elemento que recibe como nombre productPrice */
      productInfoDiv.appendChild(productName);
    
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
      /*SerAtrribute: Esta propiedad agarra a la variable productImgCart va hacia el atributo src y le da un valor de atributo src que en este caso es un icono */
    
      productInfoFigure.appendChild(productImgCart);
    
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
    
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
    
      cardsContainer.appendChild(productCard);
    }
  }

  function renderDetailsAside(product){
    productDetailAside.classList.remove("inactive");

    const productImgeDetail = document.querySelector(".detail-img")
    const productPrice = document.querySelector(".product-info-aside .product-price-detail");
    const productName = document.querySelector(".product-info-aside .product-name-detail");
    const productDescription = document.querySelector(".product-description-detail");
    productPrice.innerHTML = "$ " + product.price;
    productName.innerHTML = product.name;
    productImgeDetail.setAttribute('src', product.image);
    productDescription.innerHTML = product.description;
}
  renderProducts(productList);