// 네비게이션 슬라이드
$('#gnb').on('mouseenter', function() {
  $('#header').addClass('on')
})
$("#header").on('mouseleave', function() {
  $('#header').removeClass('on')
})


// $("#product h2").fadeIn({ opacity: 0 }, 1000)
// $("#product p").delay(400).animate({ opacity: 1 }, 2000)

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
  $('#sliderBtn a').removeClass('on')
  $("#sliderBtn a:eq("+ n +")").addClass('on')
}
let timer = setInterval(sliding, 5000);

$('#sliderBtn a').on('click', function(e) {
  $('#sliderBtn a').removeClass('on');
  $(this).addClass('on')
  n = $(this).index();
  e.preventDefault();
  let pos = $(this).index() * -$('.slider').width();
  $('#sliderList').animate({ marginLeft: pos})
  clearInterval(timer);
  timer = setInterval(sliding, 5000)
})


// 상품 슬라이드

  let proNum = 0;
  $('.nextBtn').on('click', function(e) {
    e.preventDefault();
    $('.drinks:not(:animated)').animate({ scrollLeft: '+=300px'})
    proNum++;
    if ( proNum == 3 ) {
      proNum = 2;
      return;
    }
    else {
      $('#slidebottom div').animate({ left: '+=140'})
    }
    // console.log(proNum)
  })
  $('.prevBtn').on('click', function(e) {
    proNum--
    console.log(proNum)
    e.preventDefault();
    $('.drinks:not(:animated)').animate({ scrollLeft: '-=300px'})
    if ( proNum == -1 ) {
      proNum = 0;
      return;
    } else {
      $("#slidebottom div").animate({ left: '-=140'})
    }
  })




