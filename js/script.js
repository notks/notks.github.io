var sec1 = document.getElementById("1");

var sec2 = document.getElementById("2");
var sec3 = document.getElementById("3");
var sec4 = document.getElementById("4");
var about = document.getElementById("about");
var work = document.getElementById("work");
var skills = document.getElementById("skills");
var contact = document.getElementById("contact");
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function elementInViewport2(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < window.pageYOffset + window.innerHeight &&
    left < window.pageXOffset + window.innerWidth &&
    top + height > window.pageYOffset &&
    left + width > window.pageXOffset
  );
}
function changeActiveClass() {
  if (elementInViewport2(sec1)) {
    about.classList.add("active_nav");
    work.classList.remove("active_nav");
    skills.classList.remove("active_nav");
    contact.classList.remove("active_nav");
  }
  if (elementInViewport2(sec2)) {
    about.classList.remove("active_nav");
    work.classList.add("active_nav");
    skills.classList.remove("active_nav");
    contact.classList.remove("active_nav");
  }
  if (elementInViewport2(sec3)) {
    about.classList.remove("active_nav");
    work.classList.remove("active_nav");
    skills.classList.add("active_nav");
    contact.classList.remove("active_nav");
  }
  if (elementInViewport2(sec4)) {
    about.classList.remove("active_nav");
    work.classList.remove("active_nav");
    skills.classList.remove("active_nav");
    contact.classList.add("active_nav");
  }
  /*console.log("a");
  console.log(isInViewport(sec1));
  console.log(isInViewport(sec2));
  console.log(isInViewport(sec3));
  console.log(isInViewport(sec4));
*/
}

addEventListener("scroll", () => {
  changeActiveClass();
});
//to make better
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var clickcount = 0;
var card1 = document.getElementById("s1");
var card2 = document.getElementById("s2");
var card3 = document.getElementById("s3");
var card4 = document.getElementById("s4");
var card5 = document.getElementById("s5");
var card6 = document.getElementById("s6");

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