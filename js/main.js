$(document).ready(function(){

    $nav = $('.navbar');
    $toggleCollapse = $('.toggle-collapse');

    /*Click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');

        
    })

    //owl-carousel for blog
    $('owl-carousel').owlCarousel();
});