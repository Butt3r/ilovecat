export default class Loading {
    constructor({$target}) {
        const loadingWrapper = document.createElement('section');
        this.loadingWrapper = loadingWrapper;
        loadingWrapper.className = 'loading-wrapper';
        loadingWrapper.classList.add('hide');

        $target.appendChild(loadingWrapper);

        this.render();
    }

    onLoad() {
        const loader = document.querySelector('.loading-wrapper');
        loader.classList.toggle('hide');
    }

    render() {
        const loadImg = document.createElement('img');
        loadImg.className = 'load-image';
        //loadImg.src = 'https://64.media.tumblr.com/8cd6f4b191a910289ea89ce27a7f598c/tumblr_mtko6skRYl1qd1gobo1_500.gifv';
        loadImg.src = 'https://i.pinimg.com/originals/45/3f/46/453f4641a03bb700bd7be269d070bb33.gif';

        this.loadingWrapper.appendChild(loadImg)
    }
}

//124