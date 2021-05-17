class Item {
  constructor(name, price, qnt, img, c) {
    this.img = img;
    this.name = name;
    this.price = price;
    this.qnt = qnt;
    this.c = c;
  }
  static bg = 0;
  static add(item) {
    let arr;
    if (localStorage.items) {
      arr = JSON.parse(localStorage.items);
      arr.push(item);
      arr = JSON.stringify(arr);
      localStorage.items = arr;
    } else {
      arr = [item];
      arr = JSON.stringify(arr);
      localStorage.items = arr;
    }
  }
  static show(item) {
    const showRoom = document.querySelector(".showRoom");
    if (localStorage.items) {
      showRoom.innerHTML = "";
      let arr = JSON.parse(localStorage.items);
      let div;
      let imgDiv;
      let p;
      for (let item of arr) {
        div = document.createElement("div");
        div.classList.add("item");
        for (let i in item) {
          if (i === "img") {
            imgDiv = document.createElement("div");
            imgDiv.classList.add("itemImg");
            let img = document.createElement("img");
            img.src = item[i];
            imgDiv.append(img);
            div.append(imgDiv);
          } else {
            p = document.createElement("p");
            if (i === "price") {
              p.innerHTML = `${item[i]}$`;
              p.classList.add(`${i}`);
            } else {
              p.innerHTML = `${item[i]}`;
              p.classList.add(`${i}`);
            }
            div.append(p);
          }
        }
        let button = document.createElement("button");
        button.innerHTML = "Add to Cart";
        button.classList.add("btn");
        div.append(button);
        showRoom.append(div);
      }
    } else {
      const h1 = document.createElement("h1");
      h1.innerHTML = "No Item";
      showRoom.append(h1);
    }
  }
  static addToCart(item) {
    let arr;
    if (localStorage.cart) {
      arr = JSON.parse(localStorage.cart);
      arr.push(item);
      arr = JSON.stringify(arr);
      localStorage.cart = arr;
    } else {
      arr = [item];
      arr = JSON.stringify(arr);
      localStorage.cart = arr;
    }
  }
  static showCart() {
    let total = 0;
    const showRoom = document.querySelector(".showRoom");
    let div;
    if (Item.bg === 0) {
      div = document.createElement("div");
      div.classList.add("bg");
      Item.bg++;
    } else {
      div = document.querySelector(".bg");
    }

    let cart = document.createElement("div");
    cart.classList.add("cart");
    let h3 = document.createElement("h3");
    h3.innerHTML = "In Cart";
    cart.append(h3);
    let items = document.createElement("div");
    items.classList.add("cont");

    if (localStorage.cart) {
      let arr = JSON.parse(localStorage.cart);
      for (let item of arr) {
        let divch = document.createElement("div");
        divch.classList.add("cartChild");
        for (let i in item) {
          if (i === "qnt") {
            let inp = document.createElement("input");
            inp.type = "number";
            inp.value = item["c"];
            inp.max = item[i];
            inp.min = 0;
            inp.addEventListener("change", () => {
              if (inp.value == 0) {
                arr.splice(arr.indexOf(item), 1);
                arr = JSON.stringify(arr);
                localStorage.cart = arr;
                arr = JSON.parse(localStorage.cart);
                Item.showCart();
              } else {
                item["c"] = inp.value;
                arr = JSON.stringify(arr);
                localStorage.cart = arr;
                arr = JSON.parse(localStorage.cart);
                Item.showCart();
              }
            });
            divch.append(inp);
          } else if (i === "c" || i === "img") {
          } else {
            if (i === "price") {
              total += parseInt(item[i]) * item["c"];
            }
            let p = document.createElement("p");
            p.innerHTML = item[i];
            divch.append(p);
          }
        }

        items.append(divch);
      }
      const p = document.createElement("p");
      p.innerHTML = `Total:${total} $`;
      items.append(p);
    } else {
    }
    cart.append(items);
    div.append(cart);
    showRoom.append(div);
  }
}
