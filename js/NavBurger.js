var menu = document.getElementsByClassName("nav_items_menu")[0];
var isBurgerOpen = false;
var burger = document.getElementById("burger");

burger.addEventListener("click", () => {
  if (!isBurgerOpen) {
    menu.style.transform = "translateX(50px)";
    // menu.style.position = "fixed";

    menu.style.zIndex = "10";
    burger.style.zIndex = "100";

    isBurgerOpen = !isBurgerOpen;
  } else if (isBurgerOpen) {
    //document.getElementsByClassName("nav_items_menu")[0].style.display = "none";
    menu.style.transform = "translateX(250px)";

    burger.style.zIndex = "100";
    menu.style.zIndex = "10";
    isBurgerOpen = !isBurgerOpen;
  }
});

if (window.innerWidth < 500) {
  document.addEventListener("click", (e) => {
    if (e.target !== menu && e.target !== burger) {
      // menu.style.display = "none";
      menu.style.transform = "translateX(250px)";
      menu.style.zIndex = "10";

      burger.style.zIndex = "100";
      isBurgerOpen = !isBurgerOpen;
    }
  });
}
