$(document).ready(function()
{



    /* benefit section start here--||||||||||||||||||||||||||||||||||||||||||--- */
    $('.about-us-section1').waypoint(function(){
        $('.about-us-section1').addClass('animate__animated animate__fadeInLeft ')

    },{offset:'80%'

});



$('.about-us-section2').waypoint(function(){
    $('.about-us-section2').addClass('animate__animated animate__fadeInUp ')

},{offset:'80%'

});



$('.about-us-section3').waypoint(function(){
    $('.about-us-section3').addClass('animate__animated animate__fadeInRight ')

},{offset:'80%'

});

    /* benefit section end here--||||||||||||||||||||||||||||||||||||||||||--- */







/* passion section start here--||||||||||||||||||||||||||||||||||||||||||||||--- */

    //passion main image section-----------------
    $('.passion-main-image').waypoint(function(){
        $('.passion-main-image').addClass('animate__animated animate__fadeInLeft ')

    },{offset:'80%'

});



//passion main content section-----------------
    $('.passion-main-content').waypoint(function(){
        $('.passion-main-content').addClass('animate__animated animate__fadeInRight ')

    },{offset:'80%'

});

/* passion section end here---||||||||||||||||||||||||||||||||||||||||||||||||||----- */
 



/* gallery animate start here----|||||||||||||||||||||||||||||||||||||||||||| */
$('.gellery-img1').waypoint(function(){
    $('.gellery-img1').addClass('animate__animated animate__zoomIn ')

},{offset:'80%'

});



$('.gellery-img2').waypoint(function(){
$('.gellery-img2').addClass('animate__animated animate__slideInLeft ')

},{offset:'80%'

});



$('.gellery-img3').waypoint(function(){
$('.gellery-img3').addClass('animate__animated animate__slideInRight  ')

},{offset:'80%'

});



$('.gellery-img4').waypoint(function(){
    $('.gellery-img4').addClass('animate__animated animate__rotateInDownLeft ')

},{offset:'80%'

});



$('.gellery-img5').waypoint(function(){
$('.gellery-img5').addClass('animate__animated animate__flipInX ')

},{offset:'80%'

});

/* gallery animate end here----|||||||||||||||||||||||||||||||||||||||||||||| */






/* counter------------------------ */

$('.demo1').animationCounter({
    start: 0,
    end: 5,
    delay: 900
  });
  
  $('.demo2').animationCounter({
    start: 0,
    end: 1000,
    delay: 5
  });
  
  $('.demo3').animationCounter({
    start: 0,
    end: 550,
    delay: 10
  });
  
  $('.demo4').animationCounter({
    start: 0,
    end: 5,
    delay: 900
  });
  /* counter------------------------ */



/* get in touch start here |||||||||||||||||||||||||||||||||||||||||||||||| */

$('.your-name').waypoint(function(){
    $('.your-name').addClass('animate__animated animate__fadeInLeft ')

},{offset:'80%'

});



$('.your-mail').waypoint(function(){
$('.your-mail').addClass('animate__animated animate__fadeInRight ')

},{offset:'80%'

});



$('.your-number').waypoint(function(){
$('.your-number').addClass('animate__animated animate__fadeInLeft  ')

},{offset:'80%'

});

/* get in touch end here |||||||||||||||||||||||||||||||||||||||||||||||||| */



  
   
});