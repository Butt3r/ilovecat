//const TEMPLATE = '<input type="text">';
import { setItem } from '../storage/localStorage.js';


export default class SearchInput {
  onSearch = null
  constructor({ $target, recenKeywords, onSearch, onRandClick }) {
    const $searchInput = document.createElement("section");
    this.$searchInput = $searchInput;
    $searchInput.className = 'search-input';

    this.recent = recenKeywords;
    this.onSearch = onSearch;
    this.onRandClick = onRandClick;

    $target.appendChild($searchInput);

    // window.addEventListener("load", e => {
    //   const lastKeyword = this.recent[0];
    //   onSearch(lastKeyword);
    // });
    

    this.render();

    console.log("SearchInput created.", this);
  }

  onSave(val) {

    if(this.recent.length > 4){
      this.recent.pop();
    }
   
    this.recent.unshift(val);
    setItem('keywords', this.recent);

    this.render();
  }


  render() {

    this.$searchInput.innerHTML = '';

    const randBtn = document.createElement("span");
    randBtn.className = "rand-btn";
    randBtn.innerHTML = `🐈`;

    const darkModeBtn = document.createElement("span");
    darkModeBtn.className = "dark-mode-btn";
    darkModeBtn.innerHTML = `🌞`;

    const searchWrapper = document.createElement('div');
    searchWrapper.className = 'search-wrapper';

    const searchBox = document.createElement('input');
    searchBox.className = 'search-box';
    searchBox.placeholder = '고양이를 검색하세요.';
    searchBox.autofocus = true;


    const keywords = document.createElement("section");
    keywords.className ='keywords';

    console.log(this.recent);
    if(this.recent !== null){
   
    this.recent.map(item => {
      const keyword = document.createElement('span');
      keyword.className = 'keyword';
      keyword.innerHTML = item;

      keyword.addEventListener('click', () => {this.onSearch(item)});

      keywords.appendChild(keyword);
    });

  }
    searchBox.addEventListener('click', ({target}) => {
    target.value = "";
    });
    searchBox.addEventListener('keypress', ({target, key}) => {
    if (key === 'Enter' && target.value !== "") {
      this.onSave(target.value);
      this.onSearch(target.value);
    }
    });  
    randBtn.addEventListener('click', this.onRandClick);
  

     searchWrapper.appendChild(searchBox);
     searchWrapper.appendChild(keywords)
     this.$searchInput.appendChild(searchWrapper);
     this.$searchInput.appendChild(randBtn);
     this.$searchInput.appendChild(darkModeBtn);
    
    
  }
}