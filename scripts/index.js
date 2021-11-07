$("#topNavbarMenu").load("pages/navbar.html");

// Loading spinner
$(document).ready(function () {
	setTimeout(function () {
		$('body').addClass('loaded');
	}, 200);

	Navbar.Init();
	Navbar.HideCollapsedMenuOnClick();

	Page.intiateTyped();
});
Page = {
	intiateTyped: function () {
		var typed = new Typed('#typed', {
			stringsElement: '#typed-skills',
			typeSpeed: 30,
			backSpeed: 20,
			startDelay: 1000,
			fadeOut: false,
			loop: true,
			loopCount: Infinity,
			onComplete: function (self) {},
			preStringTyped: function (pos, self) {},
			onStringTyped: function (pos, self) {},
			onLastStringBackspaced: function (self) {},
			onTypingPaused: function (pos, self) {},
			onTypingResumed: function (pos, self) {},
			onReset: function (self, pos) {},
			onStop: function (pos, self) {},
			onStart: function (pos, self) {},
			onDestroy: function (self) {}
		});
	}
}

Navbar = {
	Init: function () {
		var selectedPage = $('#fp-nav ul>li .active').attr("href");
		$("#topNavbarList>li>a[href=" + '"' + selectedPage + '"' + "]").focus();

		$('#fp-nav ul>li').click(function () {
			$(document).ready(function () {
				var selectedPage = $('#fp-nav ul>li .active').attr("href");

				$("#topNavbarList>li>a[href=" + '"' + selectedPage + '"' + "]").focus();
			});

		});

		$('#fullpage').bind('mousewheel', function (e) {
			$(document).ready(function () {
				var selectedPage = $('#fp-nav ul>li .active').attr("href");
				$("#topNavbarList>li>a[href=" + '"' + selectedPage + '"' + "]").focus();
			});
		});

	},
	HideCollapsedMenuOnClick: function () {
		$(document).on('click', '.navbar-collapse.in', function (e) {
			if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
				$(this).collapse('hide');
			}
		});
	}
}


function prettyLog(str) {
	console.log('%c ' + str, 'color: green; font-weight: bold;');
}
