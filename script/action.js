$('#section1 .mobile li').mouseenter(function(){
    let liNum = $(this).index();
    console.log(liNum);
    if(liNum == 0){
        $('#section1 .tv .screen img').attr('src', 'images/zzz.gif')
    } else {
        $('#section1 .tv .screen img').attr('src', 'images/screen'+liNum+'.png')
    }
})

$('#section1 .mobile').mouseenter(function(){
    $('#section1 .robot').addClass('on')
}).mouseleave(function(){
    $('#section1 .robot').removeClass('on')
})
$('#section4 .monitors .pc').mouseenter(function(){
    let pcH = $(this).height();
    let imgH = $(this).find('img').height();
    $(this).find('img').css('top', (pcH - imgH)+ 'px')
}).mouseleave(function(){
    $(this).find('img').css('top', 0)

})
$('#section4 .scr').mouseenter(function(){
    let pcH = $(this).height();
    let imgH = $(this).find('img').height();
    $(this).find('img').css('top', pcH - imgH)
}).mouseleave(function(){
    $(this).find('img').css('top', 0)

})