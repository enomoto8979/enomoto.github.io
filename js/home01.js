function backTop(){
    console.log("has run")
    let logo=document.getElementsByClassName('logo')
    document.documentElement.scrollTop=logo.offsetTop
    window.pageYOffset=logo.offsetTop
    document.body.scrollTop=logo.offsetTop ;
    console.log("has run")
}

function scroll(){
    let top= $('.topall').offset().top + $('.topall').outerHeight();

    let scrollTop=$(window).scrollTop();
    // console.log(top)
    let opy = (scrollTop/top) * 100
    opy+=90
    console.log(opy)
    $('#header').css('background','linear-gradient(180deg,#3e2f07,transparent '+ opy +'% )');


}
$(window).scroll(function () {
    scroll()
})

//-------------------------------------------------------------------------


$(document).ready(function() {


    $(window).scroll( function(){


        $('.titletxt').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height()-10;


            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });

});
$(document).ready(function() {


    $(window).scroll( function(){


        $('.movenav1').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();


            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });

});

$(document).ready(function() {


    $(window).scroll( function(){


        $('.movenav').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();



            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });

});
