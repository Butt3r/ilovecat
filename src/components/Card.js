export default class Card {
    constructor({$target, data}) {
        this.data = data;
        const $card = document.createElement('article');
        this.card = $card;
        $card.className = 'cat-card';

        $target.appendChild($card);

        this.render();
    }


    render() {
        const { name, url, id }  = this.data;

        const cardItem = document.createElement('article');
        cardItem.className = 'card-item';

        const cardImg = document.createElement('img');
        cardImg.className = 'card-image';
        cardImg.classList.add('lazy');
        cardImg.dataset.src = url;
        cardImg.id = id;

        const cardName = document.createElement('p');
        cardName.className = 'card-name';
        cardName.innerText = name.split('/').slice(1).join('');

        cardItem.appendChild(cardName);
        this.card.appendChild(cardImg);
        this.card.appendChild(cardItem);
       

    }
}