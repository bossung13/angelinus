$('#gnb').on('mouseenter', function() {
    $('#headerWrap').addClass('on')
})
$('#headerWrap').on('mouseleave', function() {
    $(this).removeClass('on')
})




// 배너슬라이더
let sList = $('#sliderList');
let liLength = $('#sliderList li').length;
let num = 0;
let state = 1;
let prevSlider = function(){
    num--;
    if(num == -1){
        num = liLength-1;
        sList.prepend($('li:last', sList))
             .css({marginLeft:"-100%"})
             .animate({marginLeft:0}, 500, function(){
                for(let i=0; i<liLength-1; i++){
                    sList.prepend($('li:last', sList))
                }
                sList.css({marginLeft:`-${(liLength-1)*100}%`})
                state = 1;
             })
    }
    else{
        sList.not(':animated').animate({marginLeft:'+=100%'}, function(){
            state = 1;
        })
    }
    $("#sliderBtn a").removeClass('active');
    $("#sliderBtn a:eq("+ num +")").addClass('active')
}
let nextSlider = function(){
    num++; 
    if( num == liLength ){
        num = 0;
        sList.append($('li:first', sList))
             .css({marginLeft:`-${(liLength-2)*100}%`})
             .animate({marginLeft:`-${(liLength-1)*100}%`}, 500, function(){
                for(let i=0; i<liLength-1; i++ ){
                    sList.append($('li:first', this))
                }
                sList.css({marginLeft:0})
                state = 1;
             })
    }
    else{
        sList.not(':animated').animate({marginLeft:'-=100%'}, function(){
            state = 1;
        })  
    }
    $("#sliderBtn a").removeClass('active');
    $("#sliderBtn a:eq("+ num +")").addClass('active')
}

let timer = setInterval(nextSlider, 3000)

$("#sliderBtn a").on('click', function(e) {
    $("#sliderBtn a").removeClass('active');
    $(this).addClass('active')
    num = $(this).index();
    sList.animate({ marginLeft: `${num*(-100)}%` }), 1000
  })

$('#sliderBtn a').on('click', function(e){
    num = $(this).index();
    sList.animate({marginLeft: `${num*(-100)}%` })
})
$('#sliderBtn a').on('click', function(e){
    e.preventDefault();
    clearInterval(timer)
    timer = setInterval(nextSlider, 3000)
})


// 제품슬라이더
$("#sliderBtn a:first").addClass(`on`)
$("#sliderBtn a").on('click', function(e) {
  e.preventDefault();
  $("#sliderBtn a").removeClass();
  $(this).addClass('on')
})
