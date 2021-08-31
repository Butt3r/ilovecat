import SearchInput from './components/SearchInput.js';
import SearchResult from './components/SearchResult.js';
import ImageInfo from './components/imageinfo.js';
import Loading from './components/Loading.js';
import Error from './components/404.js';

import { baseApi, randApi, detailApi } from './api/api.js';
import { getItem, setItem } from './storage/localStorage.js';



console.log("app is running!");

export default class App {
  $target = null;
  data = [];
  isLoading = null;
  constructor($target) {
    const recenKeywords = getItem('keywords');
    const localData = getItem('data');
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      recenKeywords,
      onSearch: async (keyword) => {
        loading.onLoad();
        this.searchResult.setState({
          data: this.data,
          isLoading: false
        });
        console.log("loading...");
        const response = await baseApi.fetchCats(keyword);
        if(!response.hasError){
        setItem('data', response.data);
        this.setState(response.data);
        loading.onLoad();
        }else{
          error.setState(response.data);
        }
      },
      onRandClick: async () => {
        loading.onLoad();
        this.searchResult.setState({
          data: this.data,
          isLoading: false
        });
        console.log("loading...");
        const response = await randApi.fetchRandom();
        if(!response.hasError){
          this.setState(response.data);
          loading.onLoad();
        }else{
          error.setState(response.data);
        }
      }
    });

    this.searchResult = new SearchResult({
      $target,
      isLoading: this.isLoading,
      localData,
      onClick: async (image) => {
        const response = await detailApi.fetchCatsDetail(image.id);
        if(!response.hasError){
          this.imageInfo.setState({
            visible: true,
            image,
            detail: response.data
          })
        }else{
          error.setState(response.data);
        }
      },
      onScroll: async () => {
        loading.onLoad();
        const response = await randApi.fetchRandom();
        if(!response.hasError){
            const initData = getItem('data');
            const nextData = initData.concat(response.data);
            this.setState(nextData);
            loading.onLoad();
        }else{
          error.setState(response.data);
        }
      } 
    })

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });


    const loading = new Loading({
      $target
    });

    const error = new Error({
      $target
    });

  }

  setState(nextData) {
    this.data = nextData;
    this.searchResult.setState({
      data: nextData,
      isLoading: true
    });
    console.log(this);
  }

}
