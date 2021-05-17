let play = () => {
  document.querySelector("button").remove();
  let table = document.createElement("table");
  let tr;
  let td;
  for (let i = 0; i < 3; i++) {
    tr = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      td = document.createElement("td");
      td.setAttribute("tox", i);
      td.setAttribute("syun", j);
      tr.append(td);
    }
    table.append(tr);
  }
  document.body.append(table);
  cont();
};
let cont = () => {
  let tds = document.querySelectorAll("td");
  for (let i = 0; i < tds.length; i++) {
    tds[i].addEventListener("click", () => {
      tds[i].innerHTML = "x";
      tds[i].classList.add("x");
      check();
      Comp();
    });
  }
};
let Comp = () => {
  let arr = document.querySelectorAll("td");
  let i = rand(9);
  if (arr[i].innerHTML === "x" || arr[i].innerHTML === "o") {
    return Comp();
  } else {
    arr[i].innerHTML = "o";
    arr[i].classList.add("o");
  }
};
let rand = (a) => {
  return Math.floor(Math.random() * a);
};

let check = () => {
  let arr = document.querySelectorAll("td");
  for (let i = 0; i < arr.length; i += 3) {
    if (
      arr[i].innerHTML === "x" &&
      arr[i].innerHTML === arr[i + 1].innerHTML &&
      arr[i + 1].innerHTML === arr[i + 2].innerHTML
    ) {
      console.log("you win");
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      arr[i].innerHTML === "x" &&
      arr[i].innerHTML === arr[i + 3].innerHTML &&
      arr[i + 3].innerHTML === arr[i + 6].innerHTML
    ) {
      console.log("you win");
    }
  }
  if (
    arr[0].innerHTML === "x" &&
    arr[0].innerHTML === arr[4].innerHTML &&
    arr[4].innerHTML === arr[8].innerHTML
  ) {
    console.log("you win ");
  } else if (
    arr[2].innerHTML === "x" &&
    arr[2].innerHTML === arr[4].innerHTML &&
    arr[4].innerHTML === arr[6].innerHTML
  ) {
    console.log("you win ");
  }
};
