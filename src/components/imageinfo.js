export default class ImageInfo {
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

  onToggle() {
    console.log("click"); 
    const wrapper = document.querySelector(".ImageInfo");
    wrapper.classList.toggle("hide");
  }

  setState(nextData) {
    this.onToggle();
    this.data = nextData;
    this.render();
  }

  onClose() {
    this.onToggle();
    this.data = null;
    setTimeout(() => {
      this.$imageInfo.innerHTML = '';
    },800)
  }

  render() {
    if (!this.data.visible) return;

      this.$imageInfo.classList.remove('hide');
      const { name, url } = this.data.image;
      const { temperament, origin } = this.data.detail;
      //console.log(this.data.detail);

      const modalContents = document.createElement('section');
      modalContents.className = 'modal-contents';

      const modalHeader = document.createElement('header');
      modalHeader.className = 'modal-header';

      const modalTitle = document.createElement('article');
      modalTitle.className = 'modal-title';
      modalTitle.innerText = name;

      const cloaseBtn = document.createElement('button');
      cloaseBtn.className = 'close-btn';
      cloaseBtn.innerHTML = "✖";

      const modalImage = document.createElement('img');
      modalImage.className = 'modal-image';
      modalImage.src = url;

      const modalDes = document.createElement('article');
      modalDes.className = 'modal-description';

      const catTemper = document.createElement('p');
      catTemper.className = 'cat-temper';
      catTemper.innerText = temperament;

      const catOrigin = document.createElement('p');
      catOrigin.className = 'cat-origin';
      catOrigin.innerText = origin;


      const overlay = document.createElement('div');
      overlay.className = 'overlay';
   
      cloaseBtn.addEventListener("click", () => {this.onClose()});
      overlay.addEventListener("click", () => {this.onClose()});
      window.addEventListener("keydown", ({key}) => {
        if(key === 'Escape'){
        this.onClose();
        }
      });

      modalHeader.appendChild(modalTitle);
      modalHeader.appendChild(cloaseBtn);

      modalDes.appendChild(catOrigin);
      modalDes.appendChild(catTemper);
      
      modalContents.appendChild(modalHeader);
      modalContents.appendChild(modalImage);
      modalContents.appendChild(modalDes);

      this.$imageInfo.appendChild(overlay);
      this.$imageInfo.appendChild(modalContents);
    
    }
}
