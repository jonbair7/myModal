'use strict';
document.addEventListener('DOMContentLoaded', function () {
// const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');


 // gets rid of hidden stuff in the in the index.html
const open = function (modalID) { 
    const modal = document.getElementById(modalID);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    }
 // function that closes out whether clicked on X or anywhere else
 const exit = function(modal) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
 }
for (let x = 0; x < btnsShowModal.length; x++) {
    btnsShowModal[x].addEventListener('click', function () {
        const modalID = btnsShowModal[x].getAttribute('data-modal-target')
        open(modalID);
    });  
};

for (let x = 0; x < btnCloseModal.length; x++) {
    btnCloseModal[x].addEventListener('click', function () {
        const modal = btnCloseModal[x].closest('.modal');
        exit(modal);
    });
}
    overlay.addEventListener('click', function () {
        for (let x =0; x < btnsShowModal.length; x++){
            const modalID = btnsShowModal[x].getAttribute('data-modal-target');
            exit(document.getElementById(modalID));
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape'){
            for (let x = 0; x < btnsShowModal.length; x++){
                const modalID = btnsShowModal[x].getAttribute('data-modal-target');
                exit(document.getElementById(modalID));  
            }
        }
    });
});