let shop = document.getElementById("shop");

let items = [
  {
    id: "item01",
    name: "Item Name 01",
    image: "img/item-1.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: 45,
  },
  {
    id: "item02",
    name: "Item Name 02",
    image: "img/item-2.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: 30,
  },
  {
    id: "item03",
    name: "Item Name 03",
    image: "img/item-3.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: 15,
  },
  {
    id: "item04",
    name: "Item Name 04",
    image: "img/item-4.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: 200,
  },
];

let basket = [];

let generateShop = () => {
  return (shop.innerHTML = items.map((x) => {
    let {id,name,image,desc,price} = x
    return `
        <div id="product-id-${id}" class="item">
            <img src=${image} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">0</div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    `
  }).join(""));
};

generateShop();

let increment = (id) => {
    let selectedItem = id;

    let search = basket.find((x)=>x.id === selectedItem.id)

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            qty: 1,
        })
    }else {
        search.qty += 1;
    }

    update(selectedItem.id);
}

let decrement = (id) => {
    let selectedItem = id;

    let search = basket.find((x)=>x.id === selectedItem.id)

    if(search.qty === 0){
        return;
    }else {
        search.qty -= 1;
    }

    update(selectedItem.id);
}

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.qty;
    calculation();
}

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.qty).reduce((x,y) => x + y, 0);
}