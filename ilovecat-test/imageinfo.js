class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("section");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    this.$imageInfo.classList.add('hide');
    $target.appendChild($imageInfo);

    this.data = data;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  onClose() {
    console.log("click"); 
    const wrapper = document.querySelector(".ImageInfo");
    wrapper.classList.toggle("hide");
  }

  render() {
    if (this.data.visible) {
      this.$imageInfo.classList.remove('hide');
      
      const { name, url} = this.data.image;
      const { temperament, origin } = this.data.detail;
      console.log(this.data.detail);

      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <article class="title">
            <p>${name}</p>
            <button class="close">x</button>
          </article>
          <img src="${url}" alt="${name}"/>        
          <article class="description">
            <p>성격: ${temperament}</p>
            <p>태생: ${origin}</p>
          </article>
        </div>
        <div class="overlay"></div>
        `;

      this.$imageInfo.style.display = "block";
      this.$imageInfo.querySelector(".close").addEventListener("click", () => {this.onClose()});
      this.$imageInfo.querySelector(".overlay").addEventListener("click", () => {this.onClose()});
      window.addEventListener("keydown", (e) => {
        if(e.key === 'Escape'){
        this.onClose();
        }
      });

    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
