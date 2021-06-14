document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  var handleNewFav = function(e) {
    e.preventDefault();

    const new_fav = document.querySelector('.favorite-input');
    const favorite_input = new_fav.value;
    new_fav.value = "";

    const newli = document.createElement("li");
    newli.textContent = favorite_input;

    const sfLists = document.getElementById("sf-places");
    sfLists.appendChild(newli);
  }

  const favsub = document.querySelector('.favorite-submit');
  favsub.addEventListener("click", handleNewFav);




  // adding new photos

  // --- your code here!



});
