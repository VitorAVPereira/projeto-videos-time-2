let label = document.getElementById("label");
let carrinho = document.getElementById("shopping-cart");

let infos = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = infos.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let gerarItems = () => {
  if (infos.length !== 0) {
    return (carrinho.innerHTML = infos
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
      <div class="cart-item">
        <img width="100" src=${search.img} alt="" />
        <div class="details">

          <div class="title-price-x">
              <h4 class="title-price">
                <p>${search.nome}</p>
                <p class="cart-item-price">R$ ${search.preco.toFixed(2)}</p>
              </h4>
              <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
          </div>

          <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>

          <h3>R$ ${(item * search.preco).toFixed(2)}</h3>
        </div>
      </div>
      `;
      })
      .join(""));
  } else {
    carrinho.innerHTML = ``;
    label.innerHTML = `
    <h2>Carrinho vazio</h2>
    <a href="index.html">
      <button class="HomeBtn">Volte ao inicio</button>
    </a>
    `;
  }
};

gerarItems();

let increment = (id) => {
  let selectedItem = id;
  let search = infos.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    infos.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  gerarItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(infos));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = infos.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  infos = infos.filter((x) => x.item !== 0);
  gerarItems();
  localStorage.setItem("data", JSON.stringify(infos));
};

let update = (id) => {
  let search = infos.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  infos = infos.filter((x) => x.id !== selectedItem.id);
  gerarItems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(infos));
};

let clearCart = () => {
  infos = [];
  gerarItems();
  localStorage.setItem("data", JSON.stringify(infos));
};

let TotalAmount = () => {
  if (infos.length !== 0) {
    let amount = infos
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];

        return item * search.preco;
      })
      .reduce((x, y) => x + y, 0);
    console.log(infos);
    label.innerHTML = `
    <h2>Total: R$ ${amount.toFixed(2)}</h2>
    <button class="checkout">Confimar</button>
    <button onclick="clearCart()" class="removeAll">Limpar carrinho</button>
    `;
  } else return;
};

TotalAmount();