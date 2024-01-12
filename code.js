let container = document.querySelector('.container');
let containerTwo = document.querySelector('.rating-container');
let submitBtn = document.querySelector('.submit-btn');
let rating = document.getElementById('rating');


submitBtn.addEventListener('click', function() {
    container.innerHTML = containerTwo.innerHTML;
    selectedNumber();

})


function selectedNumber(num) {
    rating.innerHTML = num;
};



