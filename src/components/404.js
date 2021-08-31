export default class Error {
    constructor({$target}) {
        this.$target = $target;
        this.error = null;

        this.render();
    }

    setState(nextData){
        this.error = nextData;
        this.render();
    }


    onclick() {
        const status = document.querySelector('.error-status');
        const msg = document.querySelector('.error-message');
        status.classList.remove('hide');
        msg.classList.remove('hide');

    }

    render() {

        console.log(this.error);
        if(!this.error) return;

        this.$target.innerHTML = '';


        const errorWrapper = document.createElement('section');
        errorWrapper.className = 'error-wrapper';

        const errorBtns = document.createElement('div');
        errorBtns.className = 'error-btns';
        

        const errorImage = document.createElement('img');
        errorImage.className = 'error-image';
        errorImage.src = 'https://media4.giphy.com/media/WTL02R1L7YCGUEunFy/200w.gif?cid=82a1493bschorfc4iid3md9gl2uei8ridud4pg1isp7dn7pa&rid=200w.gif&ct=g';
        //errorImage.src = 'https://media4.giphy.com/media/unQ3IJU2RG7DO/200.gif';

        const errorTitle = document.createElement('h2');
        errorTitle.className = 'error-title';
        errorTitle.innerHTML = 'Page Not Found';

        const errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.innerHTML = `Sorry, we can't find the page you're looking for.`;
        
        const errorDetail = document.createElement('footer');
        errorDetail.className = 'error-detail';
        errorDetail.innerHTML = `status: ${this.error.status}<br> message: ${this.error.message}`;
        errorDetail.classList.toggle('hide');

        const returnBtn = document.createElement('button');
        returnBtn.className = 'return-button';
        returnBtn.innerHTML = 'BACK TO HOME';

        const moreInfoBtn = document.createElement('button');
        moreInfoBtn.className = 'more-info-button';
        moreInfoBtn.innerHTML = 'READ MORE';

        returnBtn.addEventListener('click', () => { location.reload()});
        moreInfoBtn.addEventListener('click', () => {
            errorDetail.classList.toggle('hide');
        });

        errorBtns.appendChild(returnBtn);
        errorBtns.appendChild(moreInfoBtn);
        
        errorWrapper.appendChild(errorImage);
        errorWrapper.appendChild(errorTitle);
        errorWrapper.appendChild(errorMessage);
        errorWrapper.appendChild(errorBtns);
        errorWrapper.appendChild(errorDetail);

        this.$target.appendChild(errorWrapper);

    }
}