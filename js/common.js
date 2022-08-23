// 네비게이션 슬라이드
$('#gnb').on('mouseenter', function() {
  $('#header').addClass('on')
})
$("#header").on('mouseleave', function() {
  $('#header').removeClass('on')
})


$("#product h2").fadeIn({ opacity: 0 }, 1000)
$("#product p").delay(400).animate({ opacity: 1 }, 2000)

let n = 0;
let sliding = function() {
  n++;
  if ( n==3 ) {
    n = 0;
    $('#sliderList').animate({ marginLeft: 0 })
  }
  else {
    $('#sliderList').animate({ marginLeft: "-=100%" })
  }
}
let timer = setInterval(sliding, 4000);

$('#sliderBtn a').on('click', function(e) {
  if (n == 2) {
    
  }
  else {
  
  }
  n = $(this).index()+1;
  e.preventDefault();
  let pos = $(this).index() * -$('.slider').width();
  $('#sliderList').animate({ marginLeft: pos})
  clearInterval(timer);
  timer = setInterval(sliding, 3000)
})


// 상품 슬라이드


  $('.nextBtn').on('click', function(e) {
    e.preventDefault();
    $('.drinks:not(animated)').animate({ marginLeft: '-=300px'})
  })
  $('.prevBtn').on('click', function(e) {
    e.preventDefault();
    $('.drinks:not(animated)').animate({ marginLeft: '+=300px'})
  })


