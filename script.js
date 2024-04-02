var btn = document.querySelector("button");
var text = document.querySelector("h3");

var flag = 1;

btn.addEventListener("click", function () {
  if (flag == 1) {
    text.innerHTML = "Friend";
    text.style.color = "green";
    btn.innerHTML = "Remove Friend";
    flag = 0;
  } else {
    text.innerHTML = "Stranger";
    text.style.color = "Red";
    btn.innerHTML = "Add friend";
    flag = 1;
  }
});

var box2 = document.querySelector(".box2");
var dill = document.querySelector(".box2>i");

box2.addEventListener("dblclick", function () {
  dill.style.transform = " translate(-50%,-50%) scale(0.8)";
  dill.style.opacity = "0.7";
  setTimeout(function () {
    dill.style.opacity = "0";
  }, 1000);

  setTimeout(function () {
    dill.style.transform = " translate(-50%,-50%) scale(0)";
  }, 2000);
});

var cursor = document.querySelector(".cursor");

document.querySelector(".main").addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});

var arr = [
  {
    profile:
      "https://i.pinimg.com/236x/cb/bf/c2/cbbfc2d6dfbdb6ec7b5ad8af3f91b829.jpg",
    story:
      "https://i.pinimg.com/236x/d4/80/0b/d4800b43b9214d4f9699e3396a861709.jpg",
  },
  {
    profile:
      "https://i.pinimg.com/236x/22/92/41/229241f7cb54086f46ee3ada5fec8644.jpg",
    story:
      "https://i.pinimg.com/564x/61/b5/74/61b574f82014078828b39df2194934a4.jpg",
  },
  {
    profile:
      "https://i.pinimg.com/236x/3f/fe/8c/3ffe8c9ccf7f0fa122bda8fba9c1e73b.jpg",
    story:
      "https://i.pinimg.com/236x/78/3f/a8/783fa861c21e4d81b135177446da6259.jpg",
  },
  {
    profile:
      "https://i.pinimg.com/564x/6a/c6/4b/6ac64b5cd5c60c9c8c3c38add28f1eee.jpg",
    story:
      "https://i.pinimg.com/236x/f5/70/e3/f570e35f52ca732ee78021da56cddc56.jpg",
  },
  {
    profile:
      "https://i.pinimg.com/236x/55/bd/bb/55bdbbdaadc9ac2f0c365f13ac5147ea.jpg",
    story:
      "https://i.pinimg.com/736x/a2/ba/cd/a2bacdda8616cdb92f17de76c1a1db3c.jpg",
  },
];

var filler = "";

arr.forEach(function (elem, idx) {
  filler =
    filler +
    `<div  class="story">
    <img id="${idx}" src="${elem.profile}" alt="">
</div>`;
  console.log(elem, idx);
});

var statu = document.querySelector("#status");
statu.innerHTML = filler;

var screen = document.querySelector(".screen");

statu.addEventListener("click", function (elem) {
  screen.style.display = "block";
  screen.style.backgroundImage = `url(${arr[elem.target.id].story})`;

  setTimeout(function () {
    screen.style.display = "None";
  }, 3000);
});
