var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var clickcount = 0;

nextBtn.addEventListener("click", () => {
  let children = document.getElementsByClassName("containers_container")[0]
    .children;
  if (clickcount < children.length - 3) {
    clickcount++;
  } else {
    clickcount = 0;
  }

  for (let i = 0; i < children.length; i++) {
    let val = -380 * clickcount;
    children[i].style.transform = `translateX(${val}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  let children = document.getElementsByClassName("containers_container")[0]
    .children;
  if (clickcount <= children.length - 3 && clickcount > 0) {
    clickcount--;
  } else {
    clickcount = children.length - 3;
  }

  for (let i = 0; i < children.length; i++) {
    let val = -380 * clickcount;

    children[i].style.transform = `translateX(${val}px)`;
  }
});
