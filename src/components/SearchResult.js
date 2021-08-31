import Card from './Card.js';
import { lazyLoad } from '../utils/lazyLoad.js';
import { infiniteScroll } from '../utils/infiniteScroll.js';
import { getItem } from '../storage/localStorage.js';

export default class SearchResult {
  $searchResult = null;
  isLoading = null;
  onClick = null;
  onScroll = null;

  constructor({ $target, isLoading, localData, onClick, onScroll,}) {
    this.data = localData;
    this.onClick = onClick;
    this.onScroll = onScroll;
    this.isLoading = isLoading; 
    this.$searchResult = document.createElement('section');
    this.$searchResult.className = "search-result";

    const observerPos = document.createElement('footer');
    observerPos.className = "observer";
    observerPos.classList.remove('hidden');
  
    $target.appendChild(this.$searchResult);
    $target.appendChild(observerPos);
  
    this.render();

    lazyLoad();
    if(this.data.length > 0){
    infiniteScroll(onScroll);
    }

  }
  

  setState(nextData) {
    this.data = nextData.data;
    this.isLoading = nextData.isLoading;
    this.render();
    lazyLoad();
  }


  render() {

    console.log(this.isLoading, this.data);
    if(!this.data) return;
    this.$searchResult.innerHTML = '';

    const obs = document.querySelector('.observer');
    obs.classList.add('hidden');

    if(this.data.length > 0){
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';
    this.data.map(cat => {
      new Card({
        $target: cardContainer,
        data: cat,
      });
    });
    this.$searchResult.appendChild(cardContainer);  
    obs.classList.remove('hidden');
    
    this.$searchResult.addEventListener("click", ({target}) => {
      if(!target.matches('.card-image')) return;
      const targetData = this.data.find(item => item.id === target.id);
      this.onClick(targetData);
    });

  }else{
    if(this.isLoading === false || !getItem('keywords').length > 0) return;
    this.data = [];
    const noResultWrapper = document.createElement('section');
    noResultWrapper.className = 'no-result-wrapper';
    const noResult = document.createElement('h2');
    noResult.className = 'no-result';
    noResult.innerHTML = "❕ 검색 결과가 없습니다.";
    const noResultImg = document.createElement('img');
    noResultImg.className = 'no-result-image';
    noResultImg.src = 'https://c.tenor.com/KOZLvzU0o4kAAAAM/no-results.gif';

    this.$searchResult.appendChild(noResultWrapper);
    noResultWrapper.appendChild(noResultImg);
    noResultWrapper.appendChild(noResult);
  }
  // const observerTrigger = document.createElement('footer');
  // observerTrigger.className = 'observer';
  // this.$searchResult.appendChild(observerTrigger);
 }
}