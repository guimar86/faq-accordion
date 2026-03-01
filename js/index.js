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

document.querySelectorAll(".accr-header .title").forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);
    const content = document.getElementById(
      button.getAttribute("aria-controls"),
    );
    content.classList.toggle("active", !isExpanded);
  });
});
