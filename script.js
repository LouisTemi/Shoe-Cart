let count = 0;

const countResult = document.getElementById('count-result');
const btns = document.querySelectorAll('.count-button');


btns.forEach(function (btn) { // loops through the two buttons selected
     //remember that 'btn could be anything even orange
    btn.addEventListener('click', function(e) { // adds onclick function for the buttons
        const styles = e.currentTarget.classList // targets the classes in each button from the html
        if(styles.contains('decrease')) {
            if (count > 0) {
                count--
            }
        }
        if (styles.contains('increase')) {
            count ++;
        }

        countResult.textContent = count;
    })
})


// FOR THE THUMBNAIL IMAGES
const thumbnailShoe = document.querySelectorAll('.thumbnail');
const mainShoe = document.getElementById('main-shoe');

thumbnailShoe.forEach(function (thumbnail) {

    thumbnail.addEventListener('click', function(e) {
        const styles =  e.currentTarget.classList

        if(styles.contains ('one')) {
            mainShoe.src = 'designs/image-product-1.jpg';
        }
        if (styles.contains('two')) {
            mainShoe.src = 'designs/image-product-2.jpg';
        }
        if (styles.contains('three')) {
            mainShoe.src = 'designs/image-product-3.jpg';
        }
        if (styles.contains('four')) {
            mainShoe.src = 'designs/image-product-4.jpg';
        }
    })
})

//MODAL
const openModal  = document.querySelector('#icon-cart');
const modalOverlay = document.querySelector('.modal');

//Open modal
openModal.addEventListener('click', function(){
    //console.log("open modal")
    modalOverlay.classList.add('open-modal');
});

window.addEventListener('click', function(event) {
     if (event.target !== modalOverlay && event.target !== openModal) {
       //console.log("close modal");
       modalOverlay.classList.remove('open-modal');
     }
});


//ADD TO CART
const addToCart = document.querySelector('.add-cart-btn');
const shoesNumber = document.querySelector('.number-shoes');
const totalAmount = document.querySelector('.total-amount');

addToCart.addEventListener('click', function() {
    var price = 125;
    var numberOfShoes = parseInt(countResult.innerHTML);
    var totalPrice = price * numberOfShoes;
    
    shoesNumber.textContent = count;
    totalAmount.textContent = totalPrice;
})

