let btns = document.querySelectorAll("button");

let arr = ["808080", "fe0000", "0000fe", "ffff00"];

btns.forEach((item, index) => {
  item.addEventListener("click", () => {
    document.body.style.backgroundColor = "#" + arr[index];
  });
});
