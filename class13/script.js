Item.show();
const addItem = () => {
  const name = inp1.value;
  let inp;
  let bool = true;
  const price = inp2.value;
  const qnt = inp3.value;
  const img = inp4.value;
  if (!name) {
    inp = document.querySelector("#inp1");
    inp.classList.add("req");
    inp.placeholder = "This field is requied";
    inp.placeholder.color = "red";
    bool = false;
  }
  if (!price) {
    inp = document.querySelector("#inp2");
    inp.classList.add("req");
    inp.placeholder = "This field is requied";
    inp.placeholder.color = "red";
    bool = false;
  }
  if (!qnt) {
    inp = document.querySelector("#inp3");
    inp.classList.add("req");
    inp.placeholder = "This field is requied";
    inp.placeholder.color = "red";
    bool = false;
  }
  if (!img) {
    inp = document.querySelector("#inp4");
    inp.classList.add("req");
    inp.placeholder = "This field is requied";
    inp.placeholder.color = "red";
    bool = false;
  }
  if (!bool) {
    return 0;
  }

  const item = new Item(name, price, qnt, img);
  Item.add(item);
  location.reload();
  return false;
};
let items = document.querySelectorAll(".btn");
for (var i = items.length - 1; i >= 0; i--) {
  items[i].addEventListener("click", function () {
    let incart = new Item(
      this.parentElement.children[1].innerHTML,
      this.parentElement.children[2].innerHTML,
      this.parentElement.children[3].innerHTML,
      "",
      "1"
    );
    Item.addToCart(incart);
  });
}
const showCart = () => {
  Item.showCart();
};
