$(document).ready(function () {
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors: ['home', 'portfolio', 'contact'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: [],
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 600,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 500,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 30,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: false,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor: ['#181b2e', 'rgba(40,40,40,1)', 'rgba(40,40,40,1)'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 900,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {
      type: 'reveal',
      percentage: 62,
      property: 'translate'
    },

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //events
    onLeave: function (index, nextIndex, direction) {},
    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);

      //using index
      if (index == 1) {
        $('#menu').fadeOut(100);
      }
      if (index == 2) {
        $('#menu').fadeIn(100);
      }
      if (index == 3) {
        $('#menu').fadeIn(100);
      }



    },
    afterRender: function () {},
    afterResize: function () {},
    afterResponsive: function (isResponsive) {},
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},
    onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {},
    onLeave: function(index, nextIndex, direction) {},
    afterLoad: function(anchorLink, index) {},
    afterRender: function() {},
    afterResize: function() {},
    afterResponsive: function(isResponsive) {},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
  });
});