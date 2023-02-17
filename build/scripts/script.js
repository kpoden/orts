

class mainSlider {
    constructor(container, dir='l', folder='1') {
        this.line = container;
        this.folder = folder;
        this.dir = dir;
        this.lastChild = this.line.lastElementChild;
        this.movePercent = 0;
        this.picNum = 1;
        this.choosePic();
        this.init();

    }
    
    choosePic() {
        let picName = `images/cards/header/${this.folder}/header-${this.picNum}.jpg`;
        if(this.picNum < 7) {
            this.picNum += 1;
        } else {
            this.picNum = 1;
        }
        return picName;
    }

    moveSlider() {
        let m = '';
        (this.dir=='r') ? m='' : m='-';
        this.line.style.transform = `translateX(${m}${this.movePercent}%)`;
        this.movePercent+=0.1;
        if(Math.abs(this.movePercent % 25) > 24.85 ) {
            this.addNewChild();
        }
    }
    
    addNewChild() {
     
        this.newChild = this.lastChild.cloneNode(true);
        this.newChild.setAttribute('src', this.choosePic());
        (this.dir=='r') ? this.line.prepend(this.newChild) : this.line.append(this.newChild);
        
    }


    init() {
        setInterval(() => {
            this.moveSlider();  
        }, 5);
        
    }

}

const sliderContainer = document.querySelectorAll('.main__illustration-line');

const slider1 = new mainSlider(sliderContainer[0]);
const slider2 = new mainSlider(sliderContainer[1], 'r', '2');
const slider3 = new mainSlider(sliderContainer[2]);




class feedbackForm {
    constructor(id) {
        this.id = id;
        this.getData();
    }

    getData() {
        document.querySelector(`#${this.id}`).addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            console.log(formData);
            
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'formSend.php');
            xhr.send(formData);
          });
    }
}

const form = new feedbackForm('feedbackForm');