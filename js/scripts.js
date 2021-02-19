'use strict'

let toggler = document.getElementById('toggler-input');
// toggler.addEventListener('onclick', hideBody());


function closeMenu(){
    document.querySelector('#toggler').click();   
}


function hideBody(){

  let body = document.querySelector('body').style;
    if (toggler.checked) {
      setTimeout(() =>{body.overflow = 'hidden'}, 500)
      console.log('123')

    }
    
    else{
      body.overflow = 'visible';
    }
}


let isInViewport = function (elem) {

const rect = elem.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
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
const image = 'favicon.png'
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


let swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    lazy: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: true,
    },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,        
      },
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        
      },      
    });    


function sentInTelegram(){
  
      let chatid = "-1001416729031";
      // let chatid = "-1001334344421";
      // let chatid = "392696305";
      let token = "1614825886:AAHyzg2qZSI3ugGSHJi5NxwB6ZpdK8stovs",
          messName = document.getElementById("recipientName").value,
          messPhone = document.getElementById("recipientPhone").value,
          messMore = document.getElementById("messageText").value;
          // if (messPhone !== null){
          //     if (isNaN(messPhone)) {
          //     alert("Введите телефон цифрами");
          //     return;
          //     }
          //      else if (messPhone < 0){
          //         alert("Введите телефон в правильном формате с плюсом");
          //         return;

          //     }
          //     else if (messPhone == 0){
          //         alert("Введите телефон");
          //         return;
          //     }
          // }
          // let a = messPhone.charAt(0),
          //     b = messPhone.charAt(1);
          //     a = a+b;
          // if (a !== '38'){
          //   alert("Телефон должен начинаться с 38");
          //   return;
          // }

          // console.log(messPhone.length);
          // if (messPhone.length !== 12){
          //   alert("Телефон должен состоять из 12 знаков");
          //   return;
          // }
          
          if (messName !== null){
              if (messName.length < 1){
                  alert("Введите ваше имя");
                  return;
              }
          }
          // messPhone = messPhone.slice(2);          
          // console.log(messName, messPhone, messMore); 
          let text = `Имя: <b>${messName}</b>\nТелефон: <a>${messPhone}</a>`;
          if (messMore.length >= 1){
              text = `Имя: <b>${messName}</b>\nТелефон: <a>${messPhone}</a>\n${messMore}`;
          }
              text = encodeURIComponent(text);
              console.log(text);         

          let url = `https://api.telegram.org/bot${token}/sendMessage?chat_type=private&chat_id=${chatid}&parse_mode=HTML&text=${text}`;
          
  fetch(url);
          
let btnSended = document.getElementById('btnsend');
  btnSended.innerHTML = 'Ваш запрос отравлен';
  btnSended.setAttribute("disabled", "disabled");
  document.getElementById("recipientName").value = '';
  document.getElementById("recipientPhone").value = '';
  document.getElementById("messageText").value = '';
};


const myModal = new HystModal({
  linkAttributeName: 'data-hystmodal',
  catchFocus: true,
  waitTransitions: true,
  closeOnEsc: true,
  beforeOpen: function(modal){
    console.log('Message before opening the modal');
    console.log(modal); //modal window object
    // Отменяем ввод не цифр
    let inp = document.getElementById("recipientPhone");
  
    inp.addEventListener('keypress', e => {
        if(!/\d/.test(e.key))
          e.preventDefault();
      });
    // Отменяем ввод не цифр end
  },
  afterClose: function(modal){
    console.log('Message after modal has closed');
    console.log(modal); //modal window object
  },
});
let phoneMask = IMask(
  document.getElementById('recipientPhone'), {
    mask: '+{38}(000)000-00-00'
  });