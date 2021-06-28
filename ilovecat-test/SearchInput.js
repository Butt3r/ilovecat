const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onRandClick }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    const randBtn = document.createElement("span");
    randBtn.className = "RandBtn";
    randBtn.innerHTML = `😸`;

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);
    $target.appendChild(randBtn);
    $searchInput.focus();

    


    $searchInput.addEventListener("click", e => {
      e.target.value = "";
    });
    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });
    randBtn.addEventListener("click", e => {
      if(e) { onRandClick(); }
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
