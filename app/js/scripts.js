	//= parts/jquery.v2.1.1.js
	//= parts/transition.js
	//= parts/owl.carousel.min.js
	//= parts/jquery.maskedinput.min.js
	//= parts/fotorama.js
	//= parts/jquery-editable-select.min.js
	//= parts/bootstrap.min.js


	$(document).ready(function () {


	    //	    var links = $('[data-container="links"] a');
	    //	    $('[data-container="options"] option').on('click',function (index) {
	    //	        links.eq(index).attr({
	    //	            href: this.value
	    //	        });
	    //	    });


	    $('#editable-select').editableSelect({
	        effects: 'slide'
	    });

	    $('#editable-select')
	        .editableSelect()
	        .on('select.editable-select', function (e) {
	            $('.submit_select').attr('href', $(this).val() + ".xml");
	        });



	    questionmytooltip();

	    function questionmytooltip() {
	        if ($('body > .mytooltip').length == 0) {
	            $('body').append('<div class="mytooltip"></div>')
	        };

	        $('body').on('mouseenter', '.quest_tip', function (ev) {

	            var mytooltipContent = $(this).find('.mytooltip_text').html();
	            var leftPos = ev.pageX - 5;
	            if ($(this).data('direction') == 'ltr') {
	                leftPos = ev.pageX - 0;
	            }

	            if (mytooltipContent) {
	                $('.mytooltip').css({
	                    display: 'block',
	                    left: leftPos,
	                    top: ev.pageY - 100
	                }).html(mytooltipContent);

	                $('body').on('mousemove', '.quest_tip', function (ev) {
	                    if ($(this).data('direction') == 'ltr') {
	                        leftPos = ev.pageX - 0;
	                    } else {
	                        leftPos = ev.pageX - 305;
	                    }
	                    $('.mytooltip').css({
	                        left: leftPos,
	                        top: ev.pageY - 100
	                    });
	                });
	            };
	        }).on('mouseleave', '.quest_tip', function () {
	            $('.mytooltip').css({
	                display: 'none',
	                left: 0,
	                top: 0
	            }).html('');
	            $('body').off('mousemove');
	        });
	    };

	    $('#editable-select').editableSelect();


	    $('.input--phone').mask("+7 (999) 999-99-99", {
	        autoclear: false
	    });




	    $('.hamburger-menu').on('click', function () {
	        $('.bar').toggleClass('animate');
	    });

	    // Scrollspy initiation
	    $('body').scrollspy({
	        target: '#scroll-spy',
	        offset: 70
	    });

	    // On render, adjust body padding to ensure last Scroll target can reach top of screen
	    var height = $('#howto').innerHeight();
	    var windowHeight = $(window).height();
	    var navHeight = $('nav.navbar').innerHeight();
	    var siblingHeight = $('#howto').nextAll().innerHeight();


	    if (height < windowHeight) {
	        $('body').css("padding-bottom", windowHeight - navHeight - height - siblingHeight + "px");
	    }

	    // On window resize, adjust body padding to ensure last Scroll target can reach top of screen
	    $(window).resize(function (event) {
	        var height = $('#howto').innerHeight();
	        var windowHeight = $(window).height();
	        var navHeight = $('nav.navbar').innerHeight();
	        var siblingHeight = $('#howto').nextAll().innerHeight();


	        if (height < windowHeight) {
	            $('body').css("padding-bottom", windowHeight - navHeight - height - siblingHeight + "px");
	        }
	    });

	    $('.navbar-collapse a, .scrollTop').click(function (event) {
	        // Make sure this.hash has a value before overriding default behavior
	        if (this.hash !== "") {
	            // Prevent default anchor click behavior
	            event.preventDefault();

	            // Store hash (#)
	            var hash = this.hash;
	            var ths = $(this);
	            // Ensure no section has relevant class
	            $('section').removeClass("focus");

	            // Add class to target
	            $(hash).addClass("focus");

	            // Remove thy class after timeout
	            setTimeout(function () {
	                $(hash).removeClass("focus");
	            }, 2000);

	            // Using jQuery's animate() method to add smooth page scroll
	            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
	            $('html, body').animate({
	                scrollTop: $(hash).offset().top - 69
	                    //                    scrollTop: $($(ths).attr("href")).offset().top - 69
	            }, 600, function () {

	                // Add hash (#) to URL when done scrolling (default click behavior)
	                //	                window.location.hash = hash;
	            });

	            // Collapse Navbar for mobile view
	            $(".navbar-collapse").collapse('hide');
	        }

	        $('.hamburger-menu .bar').toggleClass('animate');


	    });



	    $(window).scroll(function () {
	        var scrollPos = $(window).scrollTop();
	        if (scrollPos > 0) {
	            $('.navbar').addClass('show-color');
	            $('.scrollTop').addClass('show-button');
	        } else {
	            $('.navbar').removeClass('show-color');
	            $('.scrollTop').removeClass('show-button');
	        }

	    });


	    var owl = $("#slider1,#slider2");

	    owl.owlCarousel({
	        items: 1, //10 items above 1000px browser width
	        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
	        singleItem: true,
	        //Pagination
	        pagination: true,
	        paginationNumbers: false
	    });

	    // Custom Navigation Events
	    $(".next").click(function () {
	        owl.trigger('owl.next');
	    })
	    $(".prev").click(function () {
	        owl.trigger('owl.prev');
	    })



	}); //document