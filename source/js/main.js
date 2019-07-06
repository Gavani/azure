(function ($) {


  // Header hover
  (function () {
    var item = $('.header__nav-item_hover'),
        header = $('.header'),
        hero = $('.hero');
    $(item).on('mouseenter', function(){
      $(header).addClass('header_item-hover');
      $(hero).addClass('hero_blur');
      $('section, footer').addClass('blur');
    });
    $(item).on('mouseleave', function(){
      $(header).removeClass('header_item-hover');
      $('section, footer').removeClass('blur');
      if ( $('.header__sub-nav-item_visible').length ) {
        $('.header__sub-nav-item_visible').fadeOut(400);
        $('.header__sub-nav-wrapp').delay(398).fadeIn(400)
      } 
    });
  })();

  // header tabs
  (function(){
    var villLink = $('.header__sub-nav-item_vill a'),
        appLink = $('.header__sub-nav-item_app a'),
        villTab = $('.header__sub-type_vill'),
        appTab = $('.header__sub-type_app'),
        subNavHead = $('.header__sub-nav-wrapp');
    
    $(villLink).on('click', function(e){
      e.preventDefault();
      $(subNavHead).fadeOut(400);
      $(villTab).delay(398).fadeIn(400).addClass('header__sub-nav-item_visible');
    })
    $(appLink).on('click', function(e){
      e.preventDefault();
      $(subNavHead).fadeOut(400);
      $(appTab).delay(398).fadeIn(400).addClass('header__sub-nav-item_visible');
    })
  })();

  // hero search
  (function(){
    var searchBtn = $('.hero__search-btn button'),
        searchOption = $('.hero__search-option'),
        heroPopup = $('.hero__popup'),
        heroLocationBtn = $('.hero__search-option-location-input-fake'),
        heroLocationBtnText = $('.hero__search-option-location-input-fake p'),
        heroRegion = $('.hero__search-region'),
        colRight = $('.hero__col-right'),
        heroRegionItem = $('.hero__search-region-item'),
        heroFilter = $('.hero__search-option-filter-link a'),
        heroFilterOption = $('.hero__search-filter-option');

    $(searchBtn).on('click', function(e){
      e.preventDefault();
    });

    $(searchBtn).on('mouseenter', function(e){
      e.preventDefault();
      $(heroPopup).fadeIn();
      $(searchOption).fadeIn().addClass('hero__search-option_visible');
      $(colRight).delay(150).addClass('hero__col-right_hide').fadeOut();
    });




    $(heroLocationBtn).on('click', function(){
      if( $(heroFilterOption).hasClass('hero__search-filter-option_visible') ){
        $(heroFilterOption).removeClass('hero__search-filter-option_visible').fadeOut();
        $(heroRegion).addClass('hero__search-region_visible').delay(420).fadeIn();
      }
      else {
        $(heroRegion).fadeIn().addClass('hero__search-region_visible');
      }

      $(heroPopup).addClass('hero__popup_visible-all')
    });
    $(heroRegionItem).on('click', function(){
      var regionName = $(this).find('a p').text();
      $(heroLocationBtnText).text(regionName);
      $(heroRegion).removeClass('hero__search-region_visible').delay(100).fadeOut();
      setTimeout(function() {
        $(heroPopup).removeClass('hero__popup_visible-all');
      }, 300);
    });



    $(heroFilter).on('click', function(e){
      e.preventDefault();
      if($(heroRegion).hasClass('hero__search-region_visible')){
        $(heroRegion).removeClass('hero__search-region_visible').fadeOut();
        $(heroFilterOption).addClass('hero__search-filter-option_visible').delay(420).fadeIn();
      }
      else{
        $(heroFilterOption).addClass('hero__search-filter-option_visible').fadeIn();
      }

      $(heroPopup).addClass('hero__popup_visible-all')
    })

  })();



  // Testimonilas slider
  (function () {
    var testimonialsItem = $('.testimonials__slider-item').length;
    var arrowLeft = '<p>→</p>';
    var arrowRight = '<p>→</p>';
    $('.testimonials__slider').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: testimonialsItem - 1,
      dots: true,
      appendArrows: $('.testimonials__slider-arrows'),
      appendDots: $('.testimonials__slider-dots'),
      prevArrow: '<button type="button" class="slider-prev btn-style-none outline" alt="Go to previous slide">' + arrowLeft + '</button>',
      nextArrow: '<button type="button" class="slider-next white btn-style-none outline" alt="Go to next slide">' + arrowRight + '</button>',
    });
  })();


  // Location carousel left
  (function () {
    var locationsItem = $('.location-carousel__left-slider-item').length;
    var arrowLeft = '<p>→</p>';
    var arrowRight = '<p>→</p>';
    var slider = $('.location-carousel__left-slider');
    $('.location-carousel__left-slider').slick({
      infinite: false,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: locationsItem - 1,
      dots: true,
      variableWidth: true,
      appendArrows: $('.location-carousel__left-arrows'),
      appendDots: $('.location-carousel__left-dots'),
      prevArrow: '<button type="button" class="slider-prev btn-style-none outline" alt="Go to previous slide">' + arrowLeft + '</button>',
      nextArrow: '<button type="button" class="slider-next white btn-style-none outline" alt="Go to next slide">' + arrowRight + '</button>',
      asNavFor: '.location-carousel__right-slider',
      focusOnSelect: true,
    });
    
    $(document).on('wheel', (function(e) {
      // e.preventDefault();
    
      if (e.originalEvent.deltaY < 0) {
        $(slider).slick('slickNext');
      } else {
        $(slider).slick('slickPrev');
      }
    }));

  })();

  // Location carousel right
  (function () {
    var locationsItem = $('.location-carousel__right-slider-item').length;
    $('.location-carousel__right-slider').slick({
      infinite: false,
      fade: true,
      initialSlide: locationsItem - 1,
      speed: 700,
      dots: false,
      arrows: false,
      asNavFor: '.location-carousel__left-slider'
    });
  })();

  // Call
  (function () {
    if($('#phone').length){
      var input = document.querySelector("#phone");
      window.intlTelInput(input);
    }
  })();

  // Team
  (function(){
    var teamWrapp = $('.team__wrapp'),
        teamExpand = $('.team__expand'),
        teamItem = $('.team__item'),
        popup = $('.team__popup'),
        popoupClose = $('.team__popup-close a');
    
    var teamName = $('.team__about-name p'),
        teamAvatar = $('.team__avatar img'),
        teamPosition = $('.team__about-position p'),
        teamDesc = $('.team__about-desc p'),
        teamContact = $('.team__about-contact-links');

    var teamPopupName = $('.team__popup-about-name'),
        teamPopupAvatar = $('.team__popup-avatar'),
        teamPopupPosition = $('.team__popup-about-position'),
        teamPopupDesc = $('.team__popup-about-desc_bar'),
        teamPopupContact = $('.team__popup-about-contact');

    $(teamExpand).on('click', function(){
      var item = $(this).closest('.team__item');
      $(item).find(teamName).clone().appendTo(teamPopupName);
      $(item).find(teamAvatar).clone().appendTo(teamPopupAvatar);
      $(item).find(teamPosition).clone().appendTo(teamPopupPosition);
      $(item).find(teamDesc).clone().appendTo(teamPopupDesc);
      $(item).find(teamContact).clone().appendTo(teamPopupContact);
      $(popup).fadeIn().addClass('team__popup_visible');
      $('.wrapper').addClass('wrapper_hide');
      $('header, section, footer').addClass('blur');
    });

    $(popoupClose).on('click', function(e){
      e.preventDefault();
      var item = $(this).closest('.team__popup');
      setTimeout(function() {
        $(item).find(teamPopupName).find('p').delay(200).remove();
        $(item).find(teamPopupAvatar).find('img').delay(200).remove();
        $(item).find(teamPopupPosition).find('p').delay(200).remove();
        $(item).find(teamPopupDesc).find(' p').delay(200).remove();
        $(item).find(teamPopupContact).find('div').delay(200).remove();
      }, 400);
      $(popup).fadeOut().removeClass('team__popup_visible');
      $('.wrapper').removeClass('wrapper_hide');
      $('header, section, footer').removeClass('blur');
    })
    
    


    $(teamWrapp).on('mouseenter', function(){
      $(this).closest(teamItem).addClass('team__item_hover');
    });
    $(teamWrapp).on('mouseleave', function(){
      $(teamItem).removeClass('team__item_hover');
    });
  })();


  // About property popup
  (function(){
    var popupOpen = $('.property-popup__triger a'),
        popupClose = $('.property-popup__content-close a'),
        popup = $('.property-popup__content-wrapp');
    $(popupOpen).on('click', function(e){
      e.preventDefault();
      $(popup).fadeIn().addClass('property-popup__content-wrapp_visible');
      // $('body').addClass('body_overflow');
    });
    $(popupClose).on('click', function(e){
      e.preventDefault();
      $(popup).fadeOut().removeClass('property-popup__content-wrapp_visible');
      // $('body').removeClass('body_overflow');
    });
  })();

  // Favorites popup
  (function(){
    var favOpen = $('.header__fav-icon a'),
        favClose = $('.favorites-popup__close a'),
        popup = $('.favorites-popup');
    
    $(favOpen).on('click', function(e){
      e.preventDefault();
      $(popup).fadeIn(400).addClass('favorites-popup_visible');
      $('.wrapper').addClass('wrapper_hide-bg');
      $('body').addClass('body_overflow');
    })
    $(favClose).on('click', function(e){
      e.preventDefault();
      $(popup).fadeOut(400).removeClass('favorites-popup_visible');
      $('.wrapper').removeClass('wrapper_hide-bg');
      $('body').removeClass('body_overflow');
    })
  })();

})(jQuery)
