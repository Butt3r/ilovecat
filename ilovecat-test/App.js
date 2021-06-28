console.log("app is running!");

class App {
  $target = null;
  data = [];
  isLoading = null;


  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        this.searchResult.setState({
          data: this.data,
          isLoading: false
        });
        console.log("loading...");
        api.fetchCats(keyword).then(({ data }) => this.setState(data));
      },
      onRandClick: event => {
        this.searchResult.setState({
          data: this.data,
          isLoading: false
        });
        console.log("loading...");
        randApi.fetchRandom(event).then(({ data }) => this.setState(data));
      }
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      isLoading: this.isLoading,
      onClick: image => {
        api2.fetchCatsDetail(image.id).then(({ data }) => this.imageInfo.setState({
          visible: true,
          image,
          detail: data
        }));
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState({
      catData: nextData,
      isLoading: true
    });
  }
}
