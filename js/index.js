const accordionItems = document.querySelectorAll(".accr-item");

accordionItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      return;
    }
    //remove active class from all items
    accordionItems.forEach((item) => {
      item.classList.remove("active");
    });
    //add active class to the clicked item
    item.classList.add("active");
  });
});
