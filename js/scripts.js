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

            item.classList.add('animate__animated', 'animate__'+animateMode);
          
            item.classList.remove('animate');
        }
    
    
    })
}
checkItems();
window.addEventListener('scroll', function(e){
    checkItems();
    })

let map, infoWindow;
let centerMap = {lat: 47.092298, lng: 37.530807};
let center = {lat: 47.09153, lng: 37.531007};
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: centerMap,
      zoom: 17,
      
    });  
  const contentString = 'проспект Нахимова, 178 Мариуполь, Донецкая область, Украина 87500 тел. <a href="tel:+380977795034">+38(097)779-50-34</a> <a href="tel:+380956626444">+38(095)662-64-44</a>';
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
const image = '../favicon.png'
const marker = new google.maps.Marker({
    position: center,
    title: 'проспект Нахимова, 178 Мариуполь, Донецкая область, Украина 87500 тел. +38(097)779-50-34, +38(095)662-64-44',
    map: map,
    icon: image,

    });  
marker.addListener("click", () => {
      infowindow.open(map, marker);
      });
  }
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    
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
    
