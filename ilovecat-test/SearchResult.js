class SearchResult {
  $searchResult = null;
  data = null;
  isLoading = null;
  onClick = null;

  constructor({ $target, initialData, onClick, isLoading}) {
    this.$searchResult = document.createElement("section");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);


    this.data = initialData;
    this.onClick = onClick;
    this.isLoading = isLoading;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.isLoading = this.data.isLoading;
    this.render();
  }

  render() {
  
    if(!this.isLoading && this.isLoading !== null){
      this.$searchResult.innerHTML = `<div>data loading...</div>`;
    }else if(this.isLoading){
      this.data.catData.length !== 0 ? 
    this.$searchResult.innerHTML = this.data.catData
      .map(cat =>     
        `<article class="item">
            <img src=${cat.url} alt=${cat.name}/>
            <div class="item-name">${cat.name.split('/').slice(1).join('')}</div>
          </article>
        `
      )
      .join("") : 
      this.$searchResult.innerHTML = `<h1>oOps! can't find result</h1>`;
    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        console.log(this.data.catData[index]);
        this.onClick(this.data.catData[index]);
      });
    });
}
 }
}
