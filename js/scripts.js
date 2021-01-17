'use strict'


function closeMenu(){
    document.querySelector('#toggler').click();
}




var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function checkItems(){
    
    let items = document.querySelectorAll('.animate');

    items.forEach(item=>{
        if (isInViewport(item)){
            let animateMode = item.getAttribute('data-animate');
                // delay       = item.getAttribute('data-delay');

            item.classList.add('animate__animated', 'animate__'+animateMode);
            // if (delay) {
            //     item.classList.add(`animate__delay-${delay}s`);

            // }

            item.classList.remove('animate');
        }
    
    
    })
}
checkItems();
window.addEventListener('scroll', function(e){
    checkItems();
    })

let map, infoWindow;
let center = {lat: 47.091558, lng: 37.530807};
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: 17,
      
    });  

const marker = new google.maps.Marker({
    position: center,
    map: map,
    });  
  }

  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    //   loopFillGroupWithBlank: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  