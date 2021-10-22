function test() {
  alert("hey there");
}
function selectedCategory(event) {
  event.stopPropagation();
  $(".category-text span").removeClass("active");
  $(event.target).addClass("active");
}

function selectCategory(event) {
  event.stopPropagation();
  $(".boxes span").removeClass("up-arrow");
  $(event.target).addClass("up-arrow");
}
