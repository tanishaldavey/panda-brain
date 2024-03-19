class Cards {
    constructor() {
        this.cards = [ 
            'panda-1.jpeg',
            'panda-2.jpeg',
            'panda-3.jpeg',
            'panda-4.jpeg',
            'panda-5.jpeg',
            'panda-6.jpeg',
            'panda-7.jpeg',
            'panda-8.jpeg',
            'panda-9.jpeg',
             'panda-10.jpeg',
             'panda-11.jpeg',
             'panda-12.jpeg',
             'panda-13.jpeg',
             'panda-14.jpeg',
             'panda-15.jpeg',
        ];
        this.cardSet = [];
    }

    dealCards (mode) {
        for (let i = 0; i < mode; i++) {
            let selection = Math.floor(Math.random() * this.cards.length)
            if (this.cardSet.includes(this.cards[selection])) {
                mode += 1;
            } else {
                this.cardSet.push(this.cards[selection])
            }
        }
        console.log(this.cardSet)
        return this.cardSet;
    }

}
