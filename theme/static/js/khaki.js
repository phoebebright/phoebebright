/*!-----------------------------------------------------------------
  Name: Khaki - HTML Multi-Concept Template
  Version: 1.0.0
  Author: _nK
  Website: https://nkdev.info
  Purchase: https://nkdev.info
  Support: https://nk.ticksy.com
  License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
  Copyright 2016.
-------------------------------------------------------------------*/
;(function() {
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*------------------------------------------------------------------

  Theme Options

-------------------------------------------------------------------*/
var options = {
    enableSearchAutofocus: true,
    enableActionLikeAnimation: true,
    enableShortcuts: true,
    enableMouseParallax: true,
    scrollToAnchorSpeed: 700,
    parallaxSpeed: 0.8,

    templates: {
        secondaryNavbarBackItem: 'Back',

        likeAnimationLiked: 'Liked!',
        likeAnimationDisliked: 'Disliked!',

        plainVideoIcon: '<span class="nk-video-icon"><i class="fa fa-play pl-5"></i></span>',
        fullscreenVideoClose: '<span class="nk-icon-close"></span>',
        gifIcon: '<span class="nk-gif-icon"><i class="fa fa-hand-pointer-o"></i></span>',

        quickViewPortfolio: '<div class="nk-page-nav">\n                <a href="javascript:void(0)" class="nk-page-nav-prev">\n                    <div class="icon">\n                        <span class="ion-ios-arrow-left"></span>\n                    </div>\n                    <div class="nk-page-nav-title"></div>\n                    <div class="nk-page-nav-img">\n                        <div style="background-image: url();"></div>\n                    </div>\n                </a>\n                <a href="javascript:void(0)" class="nk-page-nav-next">\n                    <div class="icon">\n                        <span class="ion-ios-arrow-right"></span>\n                    </div>\n                    <div class="nk-page-nav-title"></div>\n                    <div class="nk-page-nav-img">\n                        <div style="background-image: url();"></div>\n                    </div>\n                </a>\n            </div>',
        quickViewStore: '<div class="nk-page-nav-2">\n                <a href="javascript:void(0)" class="nk-page-nav-prev">\n                    <div class="icon">\n                        <span class="ion-ios-arrow-left"></span>\n                    </div>\n                    <div class="nk-page-nav-img">\n                        <img src="" alt="">\n                    </div>\n                    <div class="nk-page-nav-title">\n                        <div class="nk-product-category mt-0"></div>\n                        <h5 class="nk-product-title mb-0"></h5>\n                    </div>\n                </a>\n                <a href="javascript:void(0)" class="nk-page-nav-next">\n                    <div class="icon">\n                        <span class="ion-ios-arrow-right"></span>\n                    </div>\n                    <div class="nk-page-nav-img">\n                        <img src="" alt="">\n                    </div>\n                    <div class="nk-page-nav-title">\n                        <div class="nk-product-category mt-0"></div>\n                        <h5 class="nk-product-title mb-0"></h5>\n                    </div>\n                </a>\n            </div>',
        quickViewCloseIcon: '<span class="nk-icon-close"></span>',

        audioPlaylistButton: '<div class="nk-audio-playlist-play-pause">\n                <span class="nk-audio-playlist-play">\n                    <span class="ion-play ml-3"></span>\n                </span>\n                <span class="nk-audio-playlist-pause">\n                    <span class="ion-pause"></span>\n                </span>\n            </div>',
        audioPlainButton: '<div class="nk-audio-plain-play-pause">\n                <span class="nk-audio-plain-play">\n                    <span class="ion-play ml-3"></span>\n                </span>\n                <span class="nk-audio-plain-pause">\n                    <span class="ion-pause"></span>\n                </span>\n            </div>',

        instagram: '<div class="col-xs-4">\n                <a href="{{link}}" target="_blank">\n                    <img src="{{image}}" alt="{{caption}}" class="nk-img-stretch">\n                </a>\n            </div>',
        instagramLoadingText: 'Loading...',
        instagramFailText: 'Failed to fetch data',
        instagramApiPath: 'php/instagram/instagram.php',

        twitter: '<div class="nk-twitter">\n                <span class="nk-twitter-icon fa fa-twitter"></span>\n                <div class="nk-twitter-date">\n                    <span>{{date}}</span>\n                </div>\n                <div class="nk-twitter-text">\n                   {{tweet}}\n                </div>\n            </div>',
        twitterLoadingText: 'Loading...',
        twitterFailText: 'Failed to fetch data',
        twitterApiPath: 'php/twitter/tweet.php',

        countdown: '<div>\n                <span>%D</span>\n                Days\n            </div>\n            <div>\n                <span>%H</span>\n                Hours\n            </div>\n            <div>\n                <span>%M</span>\n                Minutes\n            </div>\n            <div>\n                <span>%S</span>\n                Seconds\n            </div>'
    },

    shortcuts: {
        toggleSearch: 's',
        showSearch: '',
        closeSearch: 'esc',

        toggleShare: 'n',
        showShare: '',
        closeShare: 'esc',

        closeFullscreenVideo: 'esc',

        closeQuckView: 'esc',

        audioPlayerPlayPause: 'shift+p',
        audioPlayerPlay: '',
        audioPlayerPause: '',
        audioPlayerForward: 'shift+right',
        audioPlayerBackward: 'shift+left',
        audioPlayerVolumeUp: 'shift+up',
        audioPlayerVolumeDown: 'shift+down',
        audioPlayerMute: 'shift+m',
        audioPlayerLoop: 'shift+l',
        audioPlayerShuffle: 'shift+s',
        audioPlayerPlaylist: 'shift+a',
        audioPlayerPin: 'shift+r',

        postLike: 'l',
        postDislike: 'd',
        postScrollToComments: 'c',

        toggleSideLeftNavbar: 'alt+l',
        openSideLeftNavbar: '',
        closeSideLeftNavbar: 'esc',

        toggleSideRightNavbar: 'alt+r',
        openSideRightNavbar: '',
        closeSideRightNavbar: 'esc',

        toggleFullscreenNavbar: 'alt+f',
        openFullscreenNavbar: '',
        closeFullscreenNavbar: 'esc'
    },
    events: {
        actionHeart: function actionHeart(params) {
            params.updateIcon();

            // fake timeout for demonstration
            // Change on AJAX request or something
            setTimeout(function () {
                var result = params.currentNum + (params.type === 'like' ? 1 : -1);
                params.updateNum(result);
            }, 300);
        },
        actionLike: function actionLike(params) {
            params.updateIcon();

            // fake timeout for demonstration
            // Change on AJAX request or something
            setTimeout(function () {
                var additional = 0;
                if (params.type === 'like') {
                    if (params.isLiked) {
                        additional = -2;
                    }
                    if (params.isDisliked) {
                        additional = 1;
                    }
                }
                if (params.type === 'dislike') {
                    if (params.isLiked) {
                        additional = -1;
                    }
                    if (params.isDisliked) {
                        additional = 2;
                    }
                }
                var result = params.currentNum + (params.type === 'like' ? 1 : -1) + additional;
                params.updateNum(result);
            }, 300);
        }
    }
};

/*------------------------------------------------------------------

  Utility

-------------------------------------------------------------------*/
var $ = jQuery;
var tween = window.TweenMax;
var isIOs = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/g.test(navigator.userAgent || navigator.vendor || window.opera);
var isFireFox = typeof InstallTrigger !== 'undefined';
var isTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;

// add 'is-mobile' or 'is-desktop' classname to html tag
$('html').addClass(isMobile ? 'is-mobile' : 'is-desktop');

/**
 * window size
 */
var $wnd = $(window);
var $doc = $(document);
var $body = $('body');
var wndW = 0;
var wndH = 0;
var docH = 0;
function getWndSize() {
    wndW = $wnd.width();
    wndH = $wnd.height();
    docH = $doc.height();
}
getWndSize();
$wnd.on('resize load orientationchange', getWndSize);

/**
 * Debounce resize
 */
var resizeArr = [];
var resizeTimeout = void 0;
$wnd.on('load resize orientationchange', function (e) {
    if (resizeArr.length) {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
            for (var k = 0; k < resizeArr.length; k++) {
                resizeArr[k](e);
            }
        }, 50);
    }
});
function _debounceResize(func) {
    if (typeof func === 'function') {
        resizeArr.push(func);
    } else {
        window.dispatchEvent(new Event('resize'));
    }
}

/**
 * page border size
 */
var $page_border = $('.nk-page-border .nk-page-border-t');
var pageBorderSize = $page_border.height();
_debounceResize(function () {
    pageBorderSize = $page_border.height();
});

/**
 * Throttle scroll
 * thanks: https://jsfiddle.net/mariusc23/s6mLJ/31/
 */
var hideOnScrollList = [];
var didScroll = void 0;
var lastST = 0;

$wnd.on('scroll load resize orientationchange', function () {
    if (hideOnScrollList.length) {
        didScroll = true;
    }
});

function hasScrolled() {
    var ST = $wnd.scrollTop();

    var type = ''; // [up, down, end, start]

    if (ST > lastST) {
        type = 'down';
    } else if (ST < lastST) {
        type = 'up';
    } else {
        type = 'none';
    }

    if (ST === 0) {
        type = 'start';
    } else if (ST >= docH - wndH) {
        type = 'end';
    }

    for (var k in hideOnScrollList) {
        if (typeof hideOnScrollList[k] === 'function') {
            hideOnScrollList[k](type, ST, lastST, $wnd);
        }
    }

    lastST = ST;
}

setInterval(function () {
    if (didScroll) {
        didScroll = false;
        window.requestAnimationFrame(hasScrolled);
    }
}, 250);

function _throttleScroll(callback) {
    hideOnScrollList.push(callback);
}

/**
 * Body Overflow
 * Thanks https://jsfiddle.net/mariusc23/s6mLJ/31/
 * Usage:
 *    // enable
 *    bodyOverflow(1);
 *
 *    // disable
 *    bodyOverflow(0);
 */
var bodyOverflowEnabled = void 0;
var isBodyOverflowing = void 0;
var scrollbarWidth = void 0;
var originalBodyPadding = void 0;
var $headerContent = $('.nk-header > *');
function isBodyOverflowed() {
    return bodyOverflowEnabled;
}
function bodyGetScrollbarWidth() {
    // thx d.walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'nk-body-scrollbar-measure';
    $body[0].appendChild(scrollDiv);
    var result = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    $body[0].removeChild(scrollDiv);
    return result;
}
function bodyCheckScrollbar() {
    var fullWindowWidth = window.innerWidth;
    if (!fullWindowWidth) {
        // workaround for missing window.innerWidth in IE8
        var documentElementRect = document.documentElement.getBoundingClientRect();
        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
    }
    isBodyOverflowing = $body[0].clientWidth < fullWindowWidth;
    scrollbarWidth = bodyGetScrollbarWidth();
}
function bodySetScrollbar() {
    if (typeof originalBodyPadding === 'undefined') {
        originalBodyPadding = $body.css('padding-right') || '';
    }

    if (isBodyOverflowing) {
        $body.add($headerContent).css('paddingRight', scrollbarWidth + 'px');
    }
}
function bodyResetScrollbar() {
    $body.css('paddingRight', originalBodyPadding);
    $headerContent.css('paddingRight', '');
}
function _bodyOverflow(enable) {
    if (enable && !bodyOverflowEnabled) {
        bodyOverflowEnabled = 1;
        bodyCheckScrollbar();
        bodySetScrollbar();
        $body.css('overflow', 'hidden');
    } else if (!enable && bodyOverflowEnabled) {
        bodyOverflowEnabled = 0;
        $body.css('overflow', '');
        bodyResetScrollbar();
    }
}

/**
 * In Viewport checker
 * return visible percent from 0 to 1
 */
function _isInViewport($item, returnRect) {
    var rect = $item[0].getBoundingClientRect();
    var result = 1;

    if (rect.right <= 0 || rect.left >= wndW) {
        result = 0;
    } else if (rect.bottom < 0 && rect.top <= wndH) {
        result = 0;
    } else {
        var beforeTopEnd = Math.max(0, rect.height + rect.top);
        var beforeBottomEnd = Math.max(0, rect.height - (rect.top + rect.height - wndH));
        var afterTop = Math.max(0, -rect.top);
        var beforeBottom = Math.max(0, rect.top + rect.height - wndH);
        if (rect.height < wndH) {
            result = 1 - (afterTop || beforeBottom) / rect.height;
        } else {
            if (beforeTopEnd <= wndH) {
                result = beforeTopEnd / wndH;
            } else if (beforeBottomEnd <= wndH) {
                result = beforeBottomEnd / wndH;
            }
        }
        result = result < 0 ? 0 : result;
    }
    if (returnRect) {
        return [result, rect];
    }
    return result;
}

/**
 * Scroll To
 */
function _scrollTo($to, callback) {
    var scrollPos = false;
    var speed = this.options.scrollToAnchorSpeed / 1000;

    if ($to === 'top') {
        scrollPos = 0;
    } else if ($to === 'bottom') {
        scrollPos = Math.max(0, docH - wndH);
    } else if (typeof $to === 'number') {
        scrollPos = $to;
    } else {
        scrollPos = $to.offset ? $to.offset().top : false;
    }

    if (scrollPos !== false && $wnd.scrollTop() !== scrollPos) {
        tween.to($wnd, speed, {
            scrollTo: {
                y: scrollPos,
                autoKill: true
            },
            ease: Power2.easeOut,
            autoKill: true,
            overwrite: 5
        });
        if (callback) {
            tween.delayedCall(speed, callback);
        }
    } else if (typeof callback === 'function') {
        callback();
    }
}

/*------------------------------------------------------------------

  Set Custom Options

-------------------------------------------------------------------*/
function _setOptions(newOpts) {
    var self = this;

    var optsTemplates = $.extend({}, this.options.templates, newOpts && newOpts.templates || {});
    var optsShortcuts = $.extend({}, this.options.shortcuts, newOpts && newOpts.shortcuts || {});
    var optsEvents = $.extend({}, this.options.events, newOpts && newOpts.events || {});

    self.options = $.extend({}, self.options, newOpts);
    self.options.templates = optsTemplates;
    self.options.shortcuts = optsShortcuts;
    self.options.events = optsEvents;
}

/*------------------------------------------------------------------

  Shortcuts
  https://github.com/madrobby/keymaster

-------------------------------------------------------------------*/
function _key(name, fn) {
    if (typeof window.key === 'undefined') {
        return;
    }
    name = this.options && this.options.shortcuts && this.options.shortcuts[name] || name;

    if (name) {
        window.key(name, fn);
    }
}
function _initShortcuts() {
    if (typeof window.key === 'undefined' || !this.options.enableShortcuts) {
        return;
    }

    var self = this;

    // Search
    self.key('toggleSearch', function () {
        self.toggleSearch();
    });
    self.key('openSearch', function () {
        self.openSearch();
    });
    self.key('closeSearch', function () {
        self.closeSearch();
    });

    // Share
    self.key('toggleShare', function () {
        self.toggleShare();
    });
    self.key('openShare', function () {
        self.openShare();
    });
    self.key('closeShare', function () {
        self.closeShare();
    });

    // FullScreen Video
    self.key('closeFullscreenVideo', function () {
        self.closeFullScreenVideo && self.closeFullScreenVideo();
    });

    // quick view
    self.key('closeQuckView', function () {
        self.closeQuickView && self.closeQuickView();
    });

    // audio player
    self.key('audioPlayerPlayPause', function () {
        if (self.audioPlayer) {
            if (self.audioPlayer.playing) {
                self.audioPlayer.pause();
            } else {
                self.audioPlayer.play();
            }
        }
    });
    self.key('audioPlayerPlay', function () {
        if (self.audioPlayer) {
            self.audioPlayer.play();
        }
    });
    self.key('audioPlayerPause', function () {
        if (self.audioPlayer) {
            self.audioPlayer.pause();
        }
    });
    self.key('audioPlayerBackward', function () {
        if (self.audioPlayer) {
            self.audioPlayer.skip('prev');
        }
    });
    self.key('audioPlayerForward', function () {
        if (self.audioPlayer) {
            self.audioPlayer.skip('next');
        }
    });
    self.key('audioPlayerVolumeUp', function () {
        if (self.audioPlayer) {
            self.audioPlayer.setVolume(self.audioPlayer.volume + 10);
        }
    });
    self.key('audioPlayerVolumeDown', function () {
        if (self.audioPlayer) {
            self.audioPlayer.setVolume(self.audioPlayer.volume - 10);
        }
    });
    self.key('audioPlayerMute', function () {
        if (self.audioPlayer) {
            self.audioPlayer.mute(!self.audioPlayer.muted);
        }
    });
    self.key('audioPlayerLoop', function () {
        if (self.audioPlayer) {
            self.audioPlayer.setLoop();
        }
    });
    self.key('audioPlayerShuffle', function () {
        if (self.audioPlayer) {
            self.audioPlayer.setShuffle();
        }
    });
    self.key('audioPlayerPlaylist', function () {
        if (self.audioPlayer) {
            self.audioPlayer.showPlaylist();
        }
    });
    self.key('audioPlayerPin', function () {
        if (self.audioPlayer) {
            self.audioPlayer.pin(!self.audioPlayer.pinned);
        }
    });

    // post / portfolio single
    self.key('postLike', function () {
        $('.nk-portfolio-item-single .nk-portfolio-item-details, .nk-blog-post-single .nk-post-meta').find('.nk-action-heart:not(.liked), .nk-action-like .like-icon').click();
    });
    self.key('postDislike', function () {
        $('.nk-portfolio-item-single .nk-portfolio-item-details, .nk-blog-post-single .nk-post-meta').find('.nk-action-heart.liked, .nk-action-like .dislike-icon').click();
    });
    self.key('postScrollToComments', function () {
        var $comments = $('#comments');
        if ($comments.length) {
            self.scrollTo($comments);
        }
    });

    // Side Left Navbar
    var $leftSide = $('.nk-navbar-left-side');
    self.key('toggleSideLeftNavbar', function () {
        self.toggleSide($leftSide);
    });
    self.key('openSideLeftNavbar', function () {
        self.openSide($leftSide);
    });
    self.key('closeSideLeftNavbar', function () {
        self.closeSide($leftSide);
    });

    // Side Right Navbar
    var $rightSide = $('.nk-navbar-right-side');
    self.key('toggleSideRightNavbar', function () {
        self.toggleSide($rightSide);
    });
    self.key('openSideRightNavbar', function () {
        self.openSide($rightSide);
    });
    self.key('closeSideRightNavbar', function () {
        self.closeSide($rightSide);
    });

    // Fullscreen Navbar
    self.key('toggleFullscreenNavbar', function () {
        self.toggleFullscreenNavbar();
    });
    self.key('openFullscreenNavbar', function () {
        self.openFullscreenNavbar();
    });
    self.key('closeFullscreenNavbar', function () {
        self.closeFullscreenNavbar();
    });

    // ESC - use also inside form elements
    window.key.filter = function (event) {
        var tagName = (event.target || event.srcElement).tagName;
        var isContentEditable = (event.target || event.srcElement).getAttribute('contenteditable');
        var isESC = window.key.isPressed('esc');
        return isESC || !(isContentEditable || tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA');
    };
}

/*------------------------------------------------------------------

  Init Link Effects

-------------------------------------------------------------------*/
function _initLinkEffects() {
    // add link effect for navbar
    $('.nk-navbar ul > li > a:not(.btn):not(.nk-btn):not(.no-link-effect)').addClass('link-effect-3');

    // Link Effect 1 (rotate all letters)
    $('.link-effect-1:not(.ready)').each(function () {
        $(this).addClass('ready');
        var itemText = $(this).text().replace(/([^\x00-\x80]|\w)/g, '<span>$&</span>');
        $(this).html(itemText);
    });
    function toggleClass($this, $span, type) {
        var $nextSpan = $span[type === 'add' ? 'next' : 'prev']();
        $span[type + 'Class']('active');

        var timeout = $this.data('timeout');
        clearTimeout(timeout);
        if ($nextSpan.length) {
            $this.data('timeout', setTimeout(function () {
                toggleClass($this, $nextSpan, type);
            }, 40));
        }
    }
    $doc.on('mouseover', '.link-effect-1.ready', function () {
        toggleClass($(this), $(this).children('span:not(.active):first'), 'add');
    }).on('mouseleave', '.link-effect-1.ready', function () {
        toggleClass($(this), $(this).children('span.active:last'), 'remove');
    });

    // Link Effect 2 and 3 (color for letters from left to right and top to bottom)
    $('.link-effect-2:not(.ready), .link-effect-3:not(.ready)').each(function () {
        $(this).addClass('ready');
        $(this).html(function (i, letters) {
            return $('<span>').html(letters).prepend($('<span class="link-effect-shade">').html(letters));
        });
    });
}

/*------------------------------------------------------------------

  Init Share Place

-------------------------------------------------------------------*/
function _initSharePlace() {
    var self = this;
    var $sharePlace = $('.nk-share-place');
    var $shareTitle = $sharePlace.find('.nk-share-place-title');
    var $shareIcons = $sharePlace.find('.nk-share-icons > .nk-share-icon');
    var $header = $('.nk-header');
    var $main = $('.nk-main');
    var $overlay = $('<div class="nk-share-place-overlay">').appendTo($body);
    var isOpened = void 0;

    // thanks http://stackoverflow.com/questions/2685911/is-there-a-way-to-round-numbers-into-a-reader-friendly-format-e-g-1-1k/10600491
    function abbreviateNumber(number, decPlaces) {
        decPlaces = Math.pow(10, decPlaces);
        var abbrev = ["k", "m", "b", "t"];
        for (var _i = abbrev.length - 1; _i >= 0; _i--) {
            var size = Math.pow(10, (_i + 1) * 3);
            if (size <= number) {
                number = Math.round(number * decPlaces / size) / decPlaces;
                if (number === 1000 && _i < abbrev.length - 1) {
                    number = 1;
                    _i++;
                }
                number += abbrev[_i];
                break;
            }
        }
        return number;
    }

    /* SocialLikes */
    if (typeof $.fn.socialLikes !== 'undefined') {
        $('.nk-share-icons').socialLikes().on('counter.social-likes', function (event, service, number) {
            $(this).find('.social-likes__counter_' + service).html(abbreviateNumber(number, 1) || '');
        });
    }

    self.toggleShare = function () {
        if (isOpened) {
            self.closeShare();
        } else {
            self.openShare();
        }
    };

    self.openShare = function () {
        if (isOpened) {
            return;
        }
        isOpened = 1;

        $sharePlace.addClass('active');

        // hide header
        tween.to($header, 0.3, {
            opacity: 0
        });

        // move main content
        tween.to($main, 0.3, {
            y: $sharePlace.height(),
            delay: 0.3
        });

        // show share
        tween.to($sharePlace, 0.3, {
            y: '100%',
            delay: 0.3
        });

        // show overlay
        tween.to($overlay, 0.3, {
            opacity: 0.6,
            display: 'block',
            delay: 0.3
        });

        // show title
        tween.to($shareTitle, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.4
        });

        // show icons
        tween.staggerTo($shareIcons, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.4
        }, 0.1);

        // trigger event
        $wnd.trigger('nk-open-share-place', [$sharePlace]);
    };

    self.closeShare = function () {
        if (!isOpened) {
            return;
        }
        isOpened = 0;

        $sharePlace.removeClass('active');

        // show header
        tween.to($header, 0.3, {
            opacity: 1,
            delay: 0.3
        });

        // move main content
        tween.to($main, 0.3, {
            y: 0
        });

        // hide share
        tween.to($sharePlace, 0.3, {
            y: '0%'
        });

        // hide overlay
        tween.to($overlay, 0.3, {
            opacity: 0,
            display: 'none'
        });

        // hide title
        tween.to($shareTitle, 0.3, {
            y: 20,
            opacity: 0
        });

        // hide icons
        tween.to($shareIcons, 0.3, {
            y: 20,
            opacity: 0
        });

        // trigger event
        $wnd.trigger('nk-close-share-place', [$sharePlace]);
    };

    $doc.on('click', '.nk-share-toggle', function (e) {
        self.toggleShare();
        e.preventDefault();
    });
    $doc.on('click', '.nk-share-place-overlay', function () {
        self.closeShare();
    });

    $wnd.on('scroll resize', function () {
        self.closeShare();
    });
}

/*------------------------------------------------------------------

  Init Navbar

-------------------------------------------------------------------*/
function _initNavbar() {
    var self = this;
    var $navbarTop = $('.nk-navbar-top');

    // add mobile navbar
    var $mobileNavItems = $('[data-nav-mobile]');
    if ($mobileNavItems.length) {
        (function () {
            var $mobileNav = void 0;
            var $nav = void 0;

            $mobileNavItems.each(function () {
                $mobileNav = $($(this).attr('data-nav-mobile'));
                if ($nav) {
                    $nav = $nav.add($(this).html());
                } else {
                    $nav = $($(this).html());
                }
            });

            // insert into mobile nav
            $mobileNav.find('.nk-navbar-mobile-content > ul.nk-nav').html($nav);

            $nav = $mobileNav.find('.nk-navbar-mobile-content > ul.nk-nav');

            // remove background images
            $nav.find('.bg-image, .bg-video').remove();

            // remove mega menus
            $nav.find('.nk-mega-item > .dropdown').each(function () {
                var $drop = $(this).children('ul').addClass('dropdown');

                // fix mega menu columns
                $drop.find('> li > label').each(function () {
                    $(this).next().addClass('dropdown');
                    $(this).parent().addClass('nk-drop-item');
                    $(this).replaceWith($('<a href="#"></a>').html($(this).html()));
                });

                $(this).replaceWith($drop);
            });
            $nav.find('.nk-mega-item').removeClass('nk-mega-item');
        })();
    }

    // sticky navbar
    var navbarTop = $navbarTop.length ? $navbarTop.offset().top - pageBorderSize : 0;
    // fake hidden navbar to prevent page jumping on stick
    var $navbarFake = $('<div>').hide();
    function onScrollNav() {
        var stickyOn = $wnd.scrollTop() >= navbarTop;

        if (stickyOn) {
            $navbarTop.addClass('nk-navbar-fixed');
            $navbarFake.show();
        } else {
            $navbarTop.removeClass('nk-navbar-fixed');
            $navbarFake.hide();
        }
    }
    if ($navbarTop.hasClass('nk-navbar-sticky')) {
        $wnd.on('scroll resize', onScrollNav);
        onScrollNav();

        $navbarTop.after($navbarFake);
        self.debounceResize(function () {
            $navbarFake.height($navbarTop.innerHeight());
        });
    }

    // correct dropdown position
    function correctDropdown($item) {
        if ($item.parent().is('.nk-nav')) {
            var $dropdown = $item.children('.dropdown');
            var $parent = $item.parents('.nk-navbar:eq(0)');
            var isRight = $dropdown.css('right') !== 'auto';
            var css = {
                marginLeft: '',
                marginRight: '',
                marginTop: 0,
                display: 'block'
            };

            $dropdown.css(css);

            var rect = $dropdown[0].getBoundingClientRect();
            var itemRect = $item[0].getBoundingClientRect();

            // move dropdown from left corner
            if (rect.left - pageBorderSize < 0) {
                css.marginLeft = pageBorderSize - rect.left;
            }

            // move dropdown from right corner
            else if (rect.right > wndW - pageBorderSize * 2) {
                    css.marginLeft = wndW - pageBorderSize - rect.right;
                }

            // check if dropdown not under item
            var currentLeftPost = rect.left + (css.marginLeft || 0);
            if (currentLeftPost > itemRect.left) {
                css.marginLeft = (css.marginLeft || 0) - (currentLeftPost - itemRect.left);
            }

            // change to margin-right. In some cases left margin isn't working, for ex. in mega menu
            if (isRight) {
                css.marginRight = -1 * css.marginLeft;
                css.marginLeft = '';
            }

            // correct top position
            css.marginTop = $parent.innerHeight() - $dropdown.offset().top + $parent.offset().top;

            // hide menu
            css.display = 'none';

            $dropdown.css(css);
        }
    }

    // toggle dropdown
    function closeSubmenu($item) {
        if ($item.length) {
            $item.removeClass('open');
            tween.to($item.children('.dropdown'), 0.3, {
                opacity: 0,
                display: 'none',
                onComplete: function onComplete() {
                    self.parallaxMouseInit();
                }
            });
            $wnd.trigger('nk-closed-submenu', [$item]);
        }
    }
    function openSubmenu($item) {
        if (!$item.hasClass('open')) {
            correctDropdown($item);
            tween.to($item.children('.dropdown'), 0.3, {
                opacity: 1,
                display: 'block'
            });
            $item.addClass('open');
            self.parallaxMouseInit();
            $wnd.trigger('nk-opened-submenu', [$item]);
        }
    }
    var dropdownTimeout = void 0;
    $navbarTop.on('mouseenter', 'li.nk-drop-item', function () {
        var $item = $(this);
        var $openedSiblings = $item.siblings('.open').add($item.siblings().find('.open')).add($item.parents('.nk-nav:eq(0)').siblings().find('.open')).add($item.parents('.nk-nav:eq(0)').siblings('.open')).add($item.parents('.nk-nav:eq(0)').parent().siblings().find('.open'));

        clearTimeout(dropdownTimeout);
        closeSubmenu($openedSiblings);
        openSubmenu($item);
    }).on('mouseleave', 'li.nk-drop-item', function () {
        var $item = $(this);
        clearTimeout(dropdownTimeout);
        dropdownTimeout = setTimeout(function () {
            closeSubmenu($item);
        }, 200);
    });
    $navbarTop.on('mouseleave', function () {
        clearTimeout(dropdownTimeout);
        dropdownTimeout = setTimeout(function () {
            closeSubmenu($navbarTop.find('.open'));
        }, 400);
    });

    // hide / show
    // add / remove solid color
    var $autohide_nav = $navbarTop.filter('.nk-navbar-autohide');
    self.throttleScroll(function (type, scroll) {
        var start = 400;
        var hideClass = 'nk-onscroll-hide';
        var showClass = 'nk-onscroll-show';

        // hide / show
        if (type === 'down' && scroll > start) {
            $autohide_nav.removeClass(showClass).addClass(hideClass);
        } else if (type === 'up' || type === 'end' || type === 'start') {
            $autohide_nav.removeClass(hideClass).addClass(showClass);
        }

        // add solid color
        if ($navbarTop.hasClass('nk-navbar-transparent')) {
            $navbarTop[(scroll > 70 ? 'add' : 'remove') + 'Class']('nk-navbar-solid');
        }
    });
}

/*------------------------------------------------------------------

  Init Navbar Side

-------------------------------------------------------------------*/
function _initNavbarSide() {
    var self = this;
    var $overlay = $('<div class="nk-navbar-overlay">').appendTo($body);

    // side navbars
    var $leftSide = $('.nk-navbar-left-side');
    var $rightSide = $('.nk-navbar-right-side');
    var $sideNavs = $('.nk-navbar-side');

    // toggle navbars
    function updateTogglers() {
        $('[data-nav-toggle]').each(function () {
            var active = $($(this).attr('data-nav-toggle')).hasClass('open');
            $(this)[(active ? 'add' : 'remove') + 'Class']('active');
        });
    }
    self.toggleSide = function ($side, speed) {
        self[$side.hasClass('open') ? 'closeSide' : 'openSide']($side, speed);
    };
    self.openSide = function ($side, speed) {
        if ($side.css('display') === 'none') {
            return;
        }

        $side.addClass('open');

        // show sidebar
        tween.to($side, speed || 0.4, {
            x: $side.hasClass('nk-navbar-left-side') ? '100%' : '-100%',
            onComplete: function onComplete() {
                self.parallaxMouseInit();
            }
        });

        // show overlay
        if ($side.hasClass('nk-navbar-overlay-content')) {
            tween.to($overlay, 0.3, {
                opacity: 0.6,
                display: 'block'
            });
        }

        updateTogglers();
    };
    self.closeSide = function ($side, speed) {
        $side.each(function () {
            $(this).removeClass('open');

            // hide sidebar
            tween.to(this, speed || 0.4, {
                x: '0%'
            });

            self.parallaxMouseInit();
            updateTogglers();
        });

        if (!$sideNavs.filter('.nk-navbar-overlay-content.open').length) {
            // hide overlay
            tween.to($overlay, 0.3, {
                opacity: 0,
                display: 'none'
            });
        }
    };
    $doc.on('click', '[data-nav-toggle]', function (e) {
        var $nav = $($(this).attr('data-nav-toggle'));
        if ($nav.hasClass('open')) {
            self.closeSide($nav);
        } else {
            // hide another navigations
            $('[data-nav-toggle]').each(function () {
                self.closeSide($($(this).attr('data-nav-toggle')));
            });

            self.openSide($nav);
        }
        e.preventDefault();
    });

    // overlay
    $doc.on('click', '.nk-navbar-overlay', function () {
        self.closeSide($sideNavs);
    });

    // hide sidebar if it invisible
    self.debounceResize(function () {
        $sideNavs.filter('.open').each(function () {
            if (!$(this).is(':visible')) {
                self.closeSide($(this));
            }
        });
    });

    // swipe side navbars
    if (!isTouch || typeof Hammer === 'undefined') {
        return;
    }
    var swipeStartSize = 50;
    var $swipeItem = void 0;
    var navSize = void 0;
    var openNav = void 0;
    var closeNav = void 0;
    var isRightSide = void 0;
    var isLeftSide = void 0;
    var isScrolling = 0;
    var swipeDir = void 0;
    var sidePos = false;
    var startSwipe = false;
    var endSwipe = false;
    var mc = Hammer(document, {
        touchAction: 'pan-x pan-y'
    });
    mc.add(new Hammer.Pan({
        pointers: 1,
        threshold: 0
    }));
    // If we detect a scroll before a panleft/panright, disable panning
    // thanks: https://github.com/hammerjs/hammer.js/issues/771
    mc.on('panstart', function (e) {
        if (e.additionalEvent === 'panup' || e.additionalEvent === 'pandown') {
            isScrolling = 1;
        }
    });
    // Reenable panning
    mc.on('panend', function (e) {
        if (!isScrolling) {
            if ($swipeItem) {
                var swipeSize = sidePos ? openNav ? sidePos : closeNav ? navSize - sidePos : 0 : 0;
                var transitionTime = Math.max(0.15, 0.4 * (navSize - swipeSize) / navSize);
                var swiped = 0;

                if (swipeSize && swipeSize > 10) {
                    var velocityTest = Math.abs(e.velocityX) > 0.7;
                    if (swipeSize >= navSize / 3 || velocityTest) {
                        swiped = 1;
                        if (openNav) {
                            self.openSide($swipeItem, transitionTime);
                        } else {
                            self.closeSide($swipeItem, transitionTime);
                        }
                    }
                }
                if (!swiped) {
                    if (openNav) {
                        self.closeSide($swipeItem, transitionTime);
                    } else {
                        self.openSide($swipeItem, transitionTime);
                    }
                }
            }
            openNav = closeNav = isRightSide = isLeftSide = swipeDir = sidePos = $swipeItem = startSwipe = endSwipe = false;
        }
        isScrolling = 0;
    });
    mc.on('panleft panright panup pandown', function (e) {
        if (isScrolling) {
            return;
        }

        var isFirst = false;
        var isFinal = e.isFinal;

        if (startSwipe === false) {
            startSwipe = e.center.x;
            isFirst = true;
        }
        endSwipe = e.center.x;

        // init
        if (isFirst) {
            swipeDir = e.direction === 2 ? 'left' : e.direction === 4 ? 'right' : false;

            // right side
            if ($rightSide && $rightSide.length) {
                navSize = $rightSide.width();

                // open
                if (wndW - startSwipe <= swipeStartSize && !$rightSide.hasClass('open') && !$leftSide.hasClass('open')) {
                    openNav = isRightSide = 1;
                }

                // close
                else if (wndW - startSwipe >= navSize - 100 && $rightSide.hasClass('open')) {
                        closeNav = isRightSide = 1;
                    }
            }

            // left side
            if ($leftSide && $leftSide.length && !isRightSide && $leftSide.is(':visible')) {
                navSize = $leftSide.width();

                // open
                if (startSwipe <= swipeStartSize && !$rightSide.hasClass('open') && !$leftSide.hasClass('open')) {
                    openNav = isLeftSide = 1;
                }

                // close
                else if (startSwipe >= navSize - 100 && $leftSide.hasClass('open')) {
                        closeNav = isLeftSide = 1;
                    }
            }

            // swipe item
            $swipeItem = isLeftSide ? $leftSide : isRightSide ? $rightSide : false;

            // move
        } else if (!isFinal && $swipeItem) {
                if (isRightSide && (openNav && swipeDir === 'left' || closeNav && swipeDir === 'right')) {
                    // open side navbar
                    if (openNav) {
                        sidePos = Math.min(navSize, Math.max(0, startSwipe - endSwipe));
                    }

                    // close side navbar
                    if (closeNav) {
                        var curPos = startSwipe - endSwipe;
                        if (startSwipe < wndW - navSize) {
                            curPos = wndW - navSize - endSwipe;
                        }
                        sidePos = navSize - Math.abs(Math.max(-navSize, Math.min(0, curPos)));
                    }

                    tween.set($swipeItem, {
                        x: -100 * sidePos / navSize + '%'
                    });
                } else if (isLeftSide && (openNav && swipeDir === 'right' || closeNav && swipeDir === 'left')) {
                    // open mobile navbar
                    if (openNav) {
                        sidePos = Math.min(navSize, Math.max(0, endSwipe - startSwipe));
                    }

                    // close mobile navbar
                    if (closeNav) {
                        var curPos2 = endSwipe - startSwipe;
                        if (startSwipe > navSize) {
                            curPos2 = endSwipe - navSize;
                        }
                        sidePos = navSize - Math.abs(Math.max(-navSize, Math.min(0, curPos2)));
                    }

                    tween.set($swipeItem, {
                        x: 100 * sidePos / navSize + '%'
                    });
                }
            }

        if (isRightSide || isLeftSide) {
            e.srcEvent.preventDefault();
        }
    });
}

/*------------------------------------------------------------------

  Init Navbar Fullscreen

-------------------------------------------------------------------*/
function _initNavbarFullscreen() {
    var self = this;
    var $navbar = $('.nk-navbar-full');
    var $navbarTop = $('.nk-navbar-top');
    var $navbarSocial = $navbar.find('.nk-nav-social');
    var navTransparent = void 0;
    var navRect = void 0;
    var isOpened = void 0;

    self.toggleFullscreenNavbar = function () {
        self[isOpened ? 'closeFullscreenNavbar' : 'openFullscreenNavbar']();
    };
    self.openFullscreenNavbar = function () {
        if (isOpened || !$navbar.length) {
            return;
        }
        isOpened = 1;

        var $navbarMenuItems = $navbar.find('.nk-nav .nk-drop-item.open > .dropdown:not(.closed) > li > a');
        if (!$navbarMenuItems.length) {
            $navbarMenuItems = $navbar.find('.nk-nav > li > a');
        }

        // active all togglers
        $('.nk-navbar-full-toggle').addClass('active');

        // padding bottom if there is social block
        var paddingBottom = $navbar.find('.nk-nav-social').innerHeight();

        // add navbar top position
        navTransparent = $navbarTop.length ? $navbarTop.hasClass('nk-navbar-transparent') && !$navbarTop.hasClass('nk-navbar-solid') : 1;
        navRect = $navbarTop[0] ? $navbarTop[0].getBoundingClientRect() : 0;

        // set top position and animate
        tween.set($navbar, {
            top: navRect ? navRect.top + (navTransparent ? 0 : navRect.height) : 0,
            paddingTop: navRect && navTransparent ? navRect.height : 0,
            paddingBottom: paddingBottom
        });
        tween.set($navbarMenuItems, {
            y: -10,
            opacity: 0
        });
        tween.set($navbarSocial, {
            y: 10,
            opacity: 0
        });
        tween.to($navbar, 0.5, {
            opacity: 1,
            display: 'block',
            onComplete: function onComplete() {
                self.initPluginNano($navbar);
            }
        });
        tween.staggerTo($navbarMenuItems, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.2
        }, 0.1);
        tween.to($navbarSocial, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.4
        });

        $navbar.addClass('open');

        // prevent body scrolling
        self.bodyOverflow(1);

        // trigger event
        $wnd.trigger('nk-open-full-navbar', [$navbar]);
    };

    self.closeFullscreenNavbar = function (dontTouchBody) {
        if (!isOpened || !$navbar.length) {
            return;
        }
        isOpened = 0;

        // disactive all togglers
        $('.nk-navbar-full-toggle').removeClass('active');

        // set top position and animate
        tween.to($navbar, 0.5, {
            opacity: 0,
            display: 'none',
            onComplete: function onComplete() {
                if (!dontTouchBody) {
                    // restore body scrolling
                    self.bodyOverflow(0);
                }
            }
        });

        // open navbar block
        $navbar.removeClass('open');

        // trigger event
        $wnd.trigger('nk-close-full-navbar', [$navbar]);
    };

    $doc.on('click', '.nk-navbar-full-toggle', function (e) {
        self.toggleFullscreenNavbar();
        e.preventDefault();
    });

    $wnd.on('nk-open-search-block', function () {
        self.closeFullscreenNavbar(1);
    });
    $wnd.on('nk-open-share-place', self.closeFullscreenNavbar);
}

/*------------------------------------------------------------------

  Init Dropdown Effect 1 for side navbars and fullscreen

-------------------------------------------------------------------*/
function _initNavbarDropEffect() {
    var self = this;
    var $navbars = $('.nk-navbar-side, .nk-navbar-full');

    // add back item for dropdowns
    $navbars.find('.dropdown').prepend('<li class="bropdown-back"><a href="#">' + self.options.templates.secondaryNavbarBackItem + '</a></li>');

    // change height of opened dropdown
    function updateSideNavDropdown($item) {
        var $nav = $item.parents('.nk-navbar:eq(0)');
        var $khNav = $nav.find('.nk-nav');
        var $drop = $nav.find('.nk-drop-item.open > .dropdown:not(.closed)');
        var $nano = $item.parents('.nano:eq(0)');
        var $nanoCont = $nano.children('.nano-content');
        var $rows = $item.parents('.nk-nav-row:eq(0)').siblings('.nk-nav-row');
        if ($drop.length) {
            var dropHeight = $drop.innerHeight();

            // vertical center for dropdown
            if ($nav.hasClass('nk-navbar-align-center')) {
                (function () {
                    $drop.css({
                        top: 0
                    });

                    var nanoHeight = $nano.innerHeight();
                    var nanoNavRowHeight = nanoHeight;
                    var nanoTop = $nano.offset().top;
                    var dropTop = $drop.offset().top;

                    // remove additional rows size
                    if ($rows.length) {
                        $rows.each(function () {
                            nanoNavRowHeight = nanoNavRowHeight - $(this).innerHeight();
                        });
                    }

                    if (dropHeight < nanoNavRowHeight) {
                        var top = nanoTop - dropTop - $nanoCont.scrollTop();
                        top += (nanoHeight - dropHeight) / 2;

                        $drop.css({
                            top: top
                        });
                    }
                })();
            }

            $khNav.css('height', dropHeight);
            self.initPluginNano($nav);

            // scroll to top
            tween.to($nanoCont, 0.3, {
                scrollTo: { y: 0 },
                delay: 0.2
            });
        } else {
            $khNav.css('height', '');
        }
        self.initPluginNano($nav);
    }

    // open / close submenu
    function toggleSubmenu(open, $drop) {
        var $newItems = $drop.find('> .dropdown > li > a');
        var $oldItems = $drop.parent().find('> li > a');

        if (open) {
            $drop.addClass('open').parent().addClass('closed');
        } else {
            $drop.removeClass('open').parent().removeClass('closed');

            var tmp = $newItems;
            $newItems = $oldItems;
            $oldItems = tmp;
        }

        // show items
        tween.set($newItems, {
            x: open ? '20%' : '-20%',
            opacity: 0,
            display: 'block'
        }, 0.1);
        tween.staggerTo($newItems, 0.2, {
            x: '0%',
            opacity: 1,
            delay: 0.1
        }, 0.05);

        // hide items
        tween.staggerTo($oldItems, 0.2, {
            x: open ? '-20%' : '20%',
            opacity: 0
        }, 0.05, function () {
            $oldItems.css('display', 'none');
        });
    }

    $navbars.on('click', '.nk-drop-item > a', function (e) {
        toggleSubmenu(true, $(this).parent());
        updateSideNavDropdown($(this));
        e.preventDefault();
    });
    $navbars.on('click', '.bropdown-back > a', function (e) {
        toggleSubmenu(false, $(this).parent().parent().parent());
        updateSideNavDropdown($(this));
        e.preventDefault();
    });
}

/*------------------------------------------------------------------

  Init Search Block

-------------------------------------------------------------------*/
function _initSearchBlock() {
    var self = this;
    var $search = $('.nk-search');
    var $searchField = $search.find('.nk-search-field');
    var $nav = $('.nk-navbar-top');
    var navRect = void 0;
    var isOpened = void 0;

    self.toggleSearch = function () {
        self[(isOpened ? 'close' : 'open') + 'Search']();
    };

    self.openSearch = function () {
        if (isOpened) {
            return;
        }
        isOpened = 1;

        // active all togglers
        $('.nk-search-toggle').addClass('active');

        // add search top position
        navRect = $nav[0] ? $nav[0].getBoundingClientRect() : 0;

        // set top position and animate
        tween.set($search, {
            paddingTop: navRect ? navRect.bottom : 0
        });
        tween.set($searchField, {
            y: -10,
            opacity: 0
        });
        tween.to($search, 0.5, {
            opacity: 1,
            display: 'block'
        });
        tween.to($searchField, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.2
        });

        // open search block
        $search.addClass('open');

        // focus search input
        if (self.options.enableSearchAutofocus) {
            setTimeout(function () {
                $search.find('.nk-search-field input').focus();
            }, 100);
        }

        // trigger event
        $wnd.trigger('nk-open-search-block', [$search]);
    };

    self.closeSearch = function () {
        if (!isOpened) {
            return;
        }
        isOpened = 0;

        // disactive all togglers
        $('.nk-search-toggle').removeClass('active');

        tween.to($search, 0.5, {
            opacity: 0,
            display: 'none'
        });

        // open search block
        $search.removeClass('open');

        // trigger event
        $wnd.trigger('nk-close-search-block', [$search]);
    };

    $doc.on('click', '.nk-search-toggle', function (e) {
        self.toggleSearch();

        e.preventDefault();
    });
    $wnd.on('nk-open-full-navbar', function () {
        self.closeSearch();
    });
    $wnd.on('nk-open-share-place', function () {
        self.closeSearch();
    });
    $wnd.on('scroll', function () {
        self.closeSearch();
    });
}

/*------------------------------------------------------------------

  Init Header Title

-------------------------------------------------------------------*/
function _initHeaderTitle() {
    var self = this;
    var $navbarHeader = $('.nk-header');
    var isNavbarOpaque = $navbarHeader.hasClass('nk-header-opaque');
    var isNavbarTransparent = $('.nk-navbar-top').hasClass('nk-header-transparent');
    var $fullHeaderTitle = $('.nk-header-title-full');

    // remove header title padding if navbar opaque
    if (isNavbarOpaque) {
        $('.nk-header-title').css('padding-top', 0);
    }

    self.debounceResize(function () {
        if ((isNavbarTransparent || isNavbarOpaque) && (!$fullHeaderTitle.length || !isNavbarOpaque)) {
            return;
        }

        var navH = $navbarHeader.outerHeight() || 0;

        // add header title padding
        if (!isNavbarTransparent && !isNavbarOpaque) {
            $('.nk-header-title').css('padding-top', navH);
        }

        // fix header title height
        if ($fullHeaderTitle.length) {
            var headerH = '100vh';

            $fullHeaderTitle.css('height', 'auto');

            if (isNavbarOpaque) {
                headerH = 'calc(100vh - ' + navH + 'px)';
            }

            if ($fullHeaderTitle[0].scrollHeight < wndH) {
                $fullHeaderTitle.css('height', headerH);
            }
        }
    });
}

/*------------------------------------------------------------------

  Init Counters

-------------------------------------------------------------------*/
function _initCounters() {
    var self = this;
    var $progressCount = $('.nk-progress.nk-count');
    var $numberCount = $('.nk-count:not(.nk-progress)');

    // set default progress
    $progressCount.each(function () {
        $(this).attr('data-nk-count', $(this).attr('data-progress')).find('.nk-progress-line > div').css('width', ($(this).attr('data-nk-count-from') || '0') + '%').find('.nk-progress-percent').html('');
    });

    // set default numbers
    $numberCount.each(function () {
        $(this).attr('data-nk-count', $(this).attr('data-nk-count') || parseInt($(this).text(), 10)).html($(this).attr('data-nk-count-from') || '0');
    });

    var countersNum = 1;
    function runCounters() {
        if (!countersNum) {
            return;
        }

        var progress = $progressCount.filter('[data-nk-count]');
        var numbers = $numberCount.filter('[data-nk-count]');
        countersNum = progress.length + numbers.length;

        // progress
        $progressCount.filter('[data-nk-count]').each(function () {
            var $item = $(this);
            if (self.isInViewport($item)) {
                (function () {
                    var count = {
                        curr: $item.attr('data-nk-count-from') || '0',
                        to: $item.attr('data-nk-count')
                    };
                    var $itemLine = $item.find('.nk-progress-line > div');
                    var $itemLabel = $item.find('.nk-progress-percent');

                    tween.to($itemLine, 1, {
                        width: count.to + '%'
                    });
                    tween.to(count, 1, {
                        curr: count.to,
                        roundProps: 'curr',
                        ease: Circ.easeIn,
                        onUpdate: function onUpdate() {
                            $itemLabel.text(count.curr + '%');
                        }
                    });
                    $item.removeAttr('data-nk-count');
                })();
            }
        });

        // number
        $numberCount.filter('[data-nk-count]').each(function () {
            var $item = $(this);
            if (self.isInViewport($item)) {
                (function () {
                    var count = {
                        curr: $item.text(),
                        to: $item.attr('data-nk-count')
                    };
                    $item.removeAttr('data-nk-count data-nk-count-from');
                    tween.to(count, 1, {
                        curr: count.to,
                        roundProps: 'curr',
                        ease: Circ.easeIn,
                        onUpdate: function onUpdate() {
                            $item.text(count.curr);
                        }
                    });
                })();
            }
        });
    }

    self.throttleScroll(runCounters);
    runCounters();
}

/*------------------------------------------------------------------

  Init Side Buttons

-------------------------------------------------------------------*/
function _initSideButtons() {
    var self = this;
    var $sideButtons = $('.nk-side-buttons');

    // hide on scroll
    self.throttleScroll(function (type, scroll) {
        var start = 400;

        if (scroll > start) {
            $sideButtons.addClass('nk-side-buttons-show-scroll-top');
        } else {
            $sideButtons.removeClass('nk-side-buttons-show-scroll-top');
        }
    });

    // scroll top
    $doc.on('click', '.nk-scroll-top', function (e) {
        e.preventDefault();
        self.scrollTo('top');
    });
}

/*------------------------------------------------------------------

  Init Actions Like and Heart

-------------------------------------------------------------------*/
function _initActionsLike() {
    var self = this;

    // like / dislike animation init
    var $likeAnimation = void 0;
    var $dislikeAnimation = void 0;
    if (self.options.enableActionLikeAnimation) {
        $likeAnimation = $('<div class="nk-like-animation">' + self.options.templates.likeAnimationLiked + '</div>').appendTo($body);
        $dislikeAnimation = $('<div class="nk-dislike-animation">' + self.options.templates.likeAnimationDisliked + '</div>').appendTo($body);
    }
    function runLikeAnimation(type) {
        var $animateItem = type === 'like' ? $likeAnimation : $dislikeAnimation;
        tween.set($animateItem, {
            scale: 1,
            opacity: 0
        });
        tween.to($animateItem, 0.3, {
            scale: 1.1,
            opacity: 0.5,
            display: 'block',
            ease: Power2.easeIn,
            onComplete: function onComplete() {
                tween.to($animateItem, 0.3, {
                    scale: 1.2,
                    opacity: 0,
                    display: 'none',
                    ease: Power2.easeOut
                });
            }
        });
    }

    // heart action
    $doc.on('click', '.nk-action-heart', function (e) {
        e.preventDefault();
        var $like = $(this);

        if ($like.hasClass('busy')) {
            return;
        }

        var $num = $like.find('.num');
        var type = $like.hasClass('liked') ? 'dislike' : 'like';
        var $parent = $like.parents('.nk-comment:eq(0), .nk-blog-post:eq(0)').eq(0);
        var updatedNum = void 0;
        var updatedIcon = void 0;
        $like.addClass('busy');
        self.options.events.actionHeart({
            $dom: $parent,
            type: type,
            currentNum: parseInt($num.text(), 10),
            updateNum: function updateNum(num) {
                $num.text(num);
                updatedNum = 1;
                if (updatedNum && updatedIcon) {
                    $like.removeClass('busy');
                }
            },
            updateIcon: function updateIcon() {
                $like[type === 'like' ? 'addClass' : 'removeClass']('liked');
                updatedIcon = 1;
                if (updatedNum && updatedIcon) {
                    $like.removeClass('busy');
                }

                // like / dislike animation
                if (self.options.enableActionLikeAnimation) {
                    runLikeAnimation(type);
                }
            }
        });
    });

    // like action
    $doc.on('click', '.nk-action-like .like-icon, .nk-action-like .dislike-icon', function (e) {
        e.preventDefault();
        var $like = $(this);
        var $parentLike = $like.parent();

        if ($parentLike.hasClass('busy')) {
            return;
        }

        var isLiked = $parentLike.hasClass('liked');
        var isDisliked = $parentLike.hasClass('disliked');
        var isDislike = $like.hasClass('dislike-icon');

        var $num = $parentLike.find('.num');
        var $parent = $parentLike.parents('.nk-comment:eq(0), .nk-blog-post:eq(0)').eq(0);
        var type = isDislike ? 'dislike' : 'like';
        var updatedNum = void 0;
        var updatedIcon = void 0;
        $parentLike.addClass('busy');
        self.options.events.actionLike({
            $dom: $parent,
            type: type,
            isLiked: isLiked,
            isDisliked: isDisliked,
            currentNum: parseInt($num.text(), 10),
            updateNum: function updateNum(num) {
                $num.text((num > 0 ? '+' : '') + num);
                updatedNum = 1;
                if (updatedNum && updatedIcon) {
                    $parentLike.removeClass('busy');
                }
            },
            updateIcon: function updateIcon() {
                $parentLike.removeClass('liked disliked');
                if (!(isLiked && !isDislike || isDisliked && isDislike)) {
                    $parentLike.addClass(type === 'like' ? 'liked' : 'disliked');
                }
                updatedIcon = 1;
                if (updatedNum && updatedIcon) {
                    $parentLike.removeClass('busy');
                }

                // like / dislike animation
                if (self.options.enableActionLikeAnimation) {
                    if (type === 'like' && !isLiked || type === 'dislike' && !isDisliked) {
                        runLikeAnimation(type);
                    }
                }
            }
        });
    });
}

/*------------------------------------------------------------------

  Init Store

-------------------------------------------------------------------*/
function _initStore() {
    var self = this;

    // scroll to ratings
    $doc.on('click', 'a.nk-product-rating', function (e) {
        var isHash = this.hash;
        if (isHash) {
            var $hashBlock = $(isHash).parents('.nk-tabs:eq(0)');
            if ($hashBlock.length) {
                self.scrollTo($hashBlock);
            }
            $('.nk-tabs').find('[data-toggle="tab"][href="' + isHash + '"]').click();
        }
        e.preventDefault();
    });

    // carousel for products
    $('.nk-product-carousel').each(function () {
        var $carousel = $(this).find('.nk-carousel-inner');
        var $thumbs = $(this).find('.nk-product-carousel-thumbs');
        var $thumbsCont = $thumbs.children();
        var curY = 0;
        var thumbsH = 0;
        var thumbsContH = 0;

        function updateValues() {
            if ($thumbsCont[0]._gsTransform && $thumbsCont[0]._gsTransform.y) {
                curY = $thumbsCont[0]._gsTransform.y;
            } else {
                curY = 0;
            }
            thumbsH = $thumbs.height();
            thumbsContH = $thumbsCont.height();
        }

        $thumbsCont.on('click', '> div', function () {
            var index = $(this).index();
            $carousel.flickity('select', index);
        });

        $carousel.on('cellSelect', function () {
            var api = $carousel.data('flickity');
            if (!api) {
                return;
            }
            // set selected nav cell
            var $selected = $thumbsCont.children().removeClass('active').eq(api.selectedIndex).addClass('active');

            // scroll nav
            updateValues();
            var selectedTop = $selected.position().top;
            if (selectedTop < 0) {
                tween.to($thumbsCont, 0.2, {
                    y: curY - selectedTop
                });
            } else {
                var selectedH = $selected.height();
                if (selectedTop + selectedH > thumbsH) {
                    tween.to($thumbsCont, 0.2, {
                        y: curY - (selectedTop + selectedH - thumbsH)
                    });
                }
            }
        });

        var startY = false;
        var mc = new Hammer.Manager($thumbs[0]);
        mc.add(new Hammer.Pan({
            pointers: 1,
            threshold: 0
        }));
        mc.on('pan press', function (e) {
            e.preventDefault();

            // init
            if (startY === false) {
                updateValues();
                startY = curY;
            }

            // move
            if (thumbsContH > thumbsH) {
                curY = Math.min(0, Math.max(e.deltaY + startY, thumbsH - thumbsContH));
                tween.set($thumbsCont, {
                    y: curY
                });
            }
            if (e.isFinal) {
                startY = false;
            }
        });
    });
}

/*------------------------------------------------------------------

  Init Background Images Parallax

-------------------------------------------------------------------*/
function _initBackgroundImages() {
    var self = this;

    if (!self.options.enableMouseParallax) {
        return;
    }

    var $parallaxImages = $('.nk-main .bg-image').parent().add($('.nk-main .bg-image'));

    // fix for Jarallax
    $parallaxImages.css('transform', 'translate3d(0,0,0)');

    self.parallaxMouseInit();
    $wnd.on('resize scroll load', function () {
        self.parallaxMouseInit();
    });
}

/*------------------------------------------------------------------

  Mouse Parallax

-------------------------------------------------------------------*/
var $parallaxMouseList = false;
var parallaxMouseTimeout = void 0;
var parallaxMouseFirstRun = 1;
// run parallax animation
function parallaxMouseRun(x, y, deviceOrientation) {
    var maxOffset = 30;
    var data = void 0;
    var itemX = void 0;
    var itemY = void 0;
    $parallaxMouseList.each(function () {
        data = $(this).data('nk-parallax-mouse-data');

        // don't animate if block isn't in viewport
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object' || !data.isInViewport && !(deviceOrientation && parallaxMouseFirstRun)) {
            return;
        }

        // device acceleration calculate
        if (deviceOrientation) {
            itemX = -maxOffset * x;
            itemY = -maxOffset * y;

            // mouse calculate
        } else {
                itemX = (data.rect.width - (x - data.rect.left)) / data.rect.width;
                itemY = (data.rect.height - (y - data.rect.top)) / data.rect.height;
                if (itemX > 1 || itemX < 0 || itemY > 1 || itemY < 0) {
                    itemX = 0.5;
                    itemY = 0.5;
                }
                itemX = maxOffset * (itemX - 0.5) * 2;
                itemY = maxOffset * (itemY - 0.5) * 2;
            }

        // if first run orientation on device, set default values without animation
        if (deviceOrientation && parallaxMouseFirstRun) {
            tween.set(this, {
                x: itemX,
                y: itemY
            });
        } else {
            tween.to(this, deviceOrientation ? 2 : 20, {
                x: itemX,
                y: itemY
            });
        }
    });
    parallaxMouseFirstRun = 0;
}

function _parallaxMouseInit() {
    var self = this;
    if (!self.options.enableMouseParallax) {
        return;
    }

    clearTimeout(parallaxMouseTimeout);
    parallaxMouseTimeout = setTimeout(function () {
        var $newParallax = $('.bg-image:not(.bg-parallaxed)').addClass('bg-parallaxed');
        if ($newParallax.length) {
            // add new parallax blocks
            if ($parallaxMouseList) {
                $parallaxMouseList = $parallaxMouseList.add($newParallax);
            }

            // first init parallax
            else {
                    $parallaxMouseList = $newParallax;
                    if (isMobile && window.DeviceOrientationEvent) {
                        $wnd.on('deviceorientation', function () {
                            parallaxMouseRun(event.gamma / 90, event.beta / 180, true);
                        });

                        // no smooth on firefox
                    } else if (!isFireFox) {
                            $wnd.on('mousemove', function (event) {
                                parallaxMouseRun(event.clientX, event.clientY);
                            });
                        }
                }
        }

        // update data for parallax blocks
        if ($parallaxMouseList) {
            $parallaxMouseList.each(function () {
                var $parent = $(this).parent();
                $(this).data('nk-parallax-mouse-data', {
                    isInViewport: self.isInViewport($parent) ? $parent.is(':visible') : 0,
                    rect: $parent[0].getBoundingClientRect()
                });
            });
        }
    }, 100);
}

/*------------------------------------------------------------------

  Anchors

-------------------------------------------------------------------*/
function _initAnchors() {
    var self = this;

    // click on anchors
    var $leftSideNav = $('.nk-navbar-left-side');
    var $rightSideNav = $('.nk-navbar-right-side');
    function closeNavs() {
        self.closeSide($leftSideNav);
        self.closeSide($rightSideNav);
        self.closeFullscreenNavbar();
    }
    $doc.on('click', '.navbar a, .nk-navbar a, a.btn, a.nk-btn, a.nk-anchor', function (e) {
        var isHash = this.hash;
        var isURIsame = this.baseURI === window.location.href;

        if (isHash && isURIsame) {
            var $hashBlock = $(isHash);
            var hash = isHash.replace(/^#/, '');
            if ($hashBlock.length || hash === 'top' || hash === 'bottom') {
                // close navigations
                closeNavs();

                // add hash to address bar
                if ($hashBlock.length) {
                    $hashBlock.attr('id', '');
                    document.location.hash = hash;
                    $hashBlock.attr('id', hash);
                }

                // scroll to block
                self.scrollTo($hashBlock.length ? $hashBlock : hash);

                e.preventDefault();
            }
        }
    });

    // add active class on navbar items
    var $anchorItems = $('.nk-navbar .nk-nav > li > a[href*="#"]');
    var anchorBlocks = [];
    function hashInArray(item) {
        for (var k = 0; k < anchorBlocks.length; k++) {
            if (anchorBlocks[k].hash === item) {
                return k;
            }
        }
        return false;
    }
    // get all anchors + blocks on the page
    $anchorItems.each(function () {
        var hash = this.hash.replace(/^#/, '');
        var $item = $(this).parent();
        var $block = $('#' + hash);

        if (hash && $block.length || hash === 'top') {
            var inArray = hashInArray(hash);
            if (inArray === false) {
                anchorBlocks.push({
                    hash: hash,
                    $item: $item,
                    $block: $block
                });
            } else {
                anchorBlocks[inArray].$item = anchorBlocks[inArray].$item.add($item);
            }
        }
    });
    // prepare anchor list and listen for scroll to activate items in navbar
    function updateAnchorItemsPositions() {
        for (var k = 0; k < anchorBlocks.length; k++) {
            var item = anchorBlocks[k];
            var blockTop = 0;
            var blockH = wndH;
            if (item.$block.length) {
                blockTop = item.$block.offset().top;
                blockH = item.$block.innerHeight();
            }
            item.activate = blockTop - wndH / 2;
            item.deactivate = blockTop + blockH - wndH / 2;
        }
    }
    function setAnchorActiveItem(type, ST) {
        for (var k = 0; k < anchorBlocks.length; k++) {
            var item = anchorBlocks[k];
            var active = ST >= item.activate && ST < item.deactivate;
            item.$item[active ? 'addClass' : 'removeClass']('active');
        }
    }
    if (anchorBlocks.length) {
        updateAnchorItemsPositions();
        setAnchorActiveItem('static', $wnd.scrollTop());
        self.throttleScroll(setAnchorActiveItem);
        self.debounceResize(updateAnchorItemsPositions);
    }
}

/*------------------------------------------------------------------

  Init Equal Height

-------------------------------------------------------------------*/
function _initEqualHeight() {
    var self = this;

    function calculate() {
        $('.equal-height:visible').each(function () {
            var currentTallest = 0;
            var currentRowStart = 0;
            var rowDivs = [];
            var topPosition = 0;
            var currentDiv = 0;
            var $el = void 0;
            $(this).children('*').each(function () {
                $el = $(this);
                $el.css('height', '');
                topPosition = $el.position().top;

                if (currentRowStart !== topPosition) {
                    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                        rowDivs[currentDiv].css('height', currentTallest);
                    }
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPosition;
                    currentTallest = $el.innerHeight();
                    rowDivs.push($el);
                } else {
                    rowDivs.push($el);
                    currentTallest = currentTallest < $el.innerHeight() ? $el.innerHeight() : currentTallest;
                }
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].css('height', currentTallest);
                }
            });
        });
    }

    calculate();
    self.debounceResize(calculate);
}

/*------------------------------------------------------------------

  Init Line For Boxes
  <div class="nk-box nk-box-line"></div>

-------------------------------------------------------------------*/
function _initLinesForBoxes() {
    var self = this;
    var $rowsWithBoxes = void 0;

    $('.row').each(function () {
        if ($(this).find('> * > .nk-box-line').length) {
            $rowsWithBoxes = $rowsWithBoxes ? $rowsWithBoxes.add($(this)) : $(this);
        }
    });

    if (!$rowsWithBoxes) {
        return;
    }

    function calculate() {
        $rowsWithBoxes.each(function () {
            var currentRowStart = 0;
            var rowDivs = [];
            var topPosition = 0;

            // check all rows and add in array
            $(this).children('*').each(function () {
                topPosition = $(this).position().top;
                if (currentRowStart !== topPosition) {
                    currentRowStart = topPosition;
                    rowDivs.push($(this));
                } else {
                    if (rowDivs[rowDivs.length - 1]) {
                        rowDivs[rowDivs.length - 1] = rowDivs[rowDivs.length - 1].add($(this));
                    } else {
                        rowDivs[(rowDivs.length || 1) - 1] = $(this);
                    }
                }
            });

            // remove additional classnames
            $(this).find('> * > .nk-box-line').removeClass('nk-box-line-top nk-box-last');

            // add new classnames
            for (var k = 0; k < rowDivs.length; k++) {
                rowDivs[k].last().children('.nk-box-line').addClass('nk-box-last');
                if (k > 0) {
                    rowDivs[k].children('.nk-box-line').addClass('nk-box-line-top');
                }
            }
        });
    }

    calculate();
    self.debounceResize(calculate);
}

/*------------------------------------------------------------------

  Init Image Boxes

-------------------------------------------------------------------*/
function _initImageBoxes() {
    var $imgBox = void 0;
    var $img = void 0;
    var rect = void 0;
    var fromCenter = void 0;
    var run = void 0;
    var scaleFrom = void 0;
    var scaleTo = void 0;
    var allBoxesSelector = '.nk-image-box-1:not(.nk-no-effect), .nk-image-box-1-a:not(.nk-no-effect), .nk-image-box-2:not(.nk-no-effect), .nk-image-box-3:not(.nk-no-effect), .nk-image-box-4:not(.nk-no-effect), .nk-image-box-5:not(.nk-no-effect)';

    // image animation
    $(allBoxesSelector).each(function () {
        $img = $(this).find('img, div.nk-portfolio-image');
        if ($img.attr('data-from')) {
            tween.to($img, 2, {
                scale: $img.attr('data-from')
            });
        }
    });
    $doc.on('mouseenter', allBoxesSelector, function () {
        $imgBox = $(this);
        $img = $imgBox.find('img, div.nk-portfolio-image');
        scaleFrom = $img.attr('data-from') || 1;
        scaleTo = $img.attr('data-to') || 1.05;
        tween.to($img, 1, {
            scale: scaleTo
        });
        run = 1;
    }).on('mouseleave', allBoxesSelector, function () {
        run = 0;
        tween.to($img, 1, {
            scale: scaleFrom,
            x: 0,
            y: 0
        });
    }).on('mousemove', allBoxesSelector, function (e) {
        window.requestAnimationFrame(function () {
            if (run) {
                rect = $imgBox[0].getBoundingClientRect();
                fromCenter = [(rect.width / 2 - e.clientX + rect.left) / (rect.width / 2), (rect.height / 2 - e.clientY + rect.top) / (rect.height / 2)];
                tween.to($img, 7, {
                    x: rect.width * (scaleTo - 1) * fromCenter[0] / 2,
                    y: rect.height * (scaleTo - 1) * fromCenter[1] / 2
                });
            }
        });
    });

    // overlay smart show
    $doc.on('mouseenter mouseleave', '.nk-image-box-5', function (e) {
        var $overlay = $(this).find('.nk-image-box-overlay');
        var itemRect = $imgBox[0].getBoundingClientRect();

        // detect mouse enter or leave
        var x = (itemRect.width / 2 - e.clientX + itemRect.left) / (itemRect.width / 2);
        var y = (itemRect.height / 2 - e.clientY + itemRect.top) / (itemRect.height / 2);
        var enter = e.type === 'mouseenter';
        var endX = '0%';
        var endY = '0%';
        if (Math.abs(x) > Math.abs(y)) {
            endX = (x > 0 ? '-10' : '10') + endX;
        } else {
            endY = (y > 0 ? '-10' : '10') + endY;
        }

        if (enter) {
            tween.set($overlay, {
                x: endX,
                y: endY
            });
        }
        tween.to($overlay, 0.25, {
            x: enter ? '0%' : endX,
            y: enter ? '0%' : endY,
            display: enter ? 'flex' : 'none',
            ease: Power1.easeInOut
        });
    });
}

/*------------------------------------------------------------------

  Init Video Blocks

-------------------------------------------------------------------*/
function _initVideoBlocks() {
    if (typeof window.VideoWorker === 'undefined') {
        return;
    }
    var self = this;

    // open fullscreen videos
    var openedFSVideo = void 0;
    self.openFullScreenVideo = function (url) {
        if (openedFSVideo) {
            return;
        }
        openedFSVideo = 1;

        // get api for this video
        self.FullScreenVideoApi = new VideoWorker(url, {
            autoplay: 1,
            loop: 0,
            mute: 0,
            controls: 1
        });

        // set video size
        function setVideoSize() {
            var ratio = 16 / 9;
            var resultW = void 0;
            var resultH = void 0;

            if (ratio > wndW / wndH) {
                resultW = wndW * 0.9;
                resultH = resultW / ratio;
            } else {
                resultH = wndH * 0.9;
                resultW = resultH * ratio;
            }
            self.FullScreenVideoWrapper.css({
                width: resultW,
                height: resultH,
                top: (wndH - resultH) / 2,
                left: (wndW - resultW) / 2
            });
        }

        // create fullscreen video wrapper if doesn't exist
        if (!self.FullScreenVideo) {
            self.FullScreenVideo = $('<div class="nk-video-fullscreen"></div>').appendTo($body);

            self.closeFullScreenVideo = function () {
                if (openedFSVideo) {
                    openedFSVideo = 0;

                    self.FullScreenVideoApi.pause();

                    // hide animation
                    tween.to(self.FullScreenVideo, 0.4, {
                        opacity: 0,
                        display: 'none',
                        onComplete: function onComplete() {
                            self.FullScreenVideoWrapper.html('');
                        }
                    });
                    tween.to(self.FullScreenVideoWrapper, 0.4, {
                        scale: 0.9
                    });

                    // restore body scrolling
                    self.bodyOverflow(0);
                }
            };

            // close icon
            $('<div class="nk-video-fullscreen-close">' + self.options.templates.fullscreenVideoClose + '</div>').on('click', self.closeFullScreenVideo).appendTo(self.FullScreenVideo);

            // video container
            self.FullScreenVideoWrapper = $('<div class="nk-video-fullscreen-cont"></div>').appendTo(self.FullScreenVideo);

            setVideoSize();
            self.debounceResize(setVideoSize);
        }

        // check api and run fullscreen
        if (self.FullScreenVideoApi && self.FullScreenVideoApi.isValid()) {
            self.FullScreenVideoApi.getIframe(function (iframe) {
                var $parent = $(iframe).parent();
                self.FullScreenVideoWrapper.append(iframe);
                $parent.remove();

                // pause audio
                if (typeof soundManager !== 'undefined') {
                    soundManager.pauseAll();
                }

                // show animation
                tween.fromTo(self.FullScreenVideo, 0.4, {
                    opacity: 0
                }, {
                    opacity: 1,
                    display: 'block'
                });
                tween.fromTo(self.FullScreenVideoWrapper, 0.4, {
                    opacity: 0,
                    scale: 0.9
                }, {
                    opacity: 1,
                    scale: 1,
                    delay: 0.3
                });

                // prevent body scrolling
                self.bodyOverflow(1);
            });
        }
    };
    $doc.on('click', '.nk-video-fullscreen-toggle', function (e) {
        e.preventDefault();
        self.openFullScreenVideo($(this).attr('href'));
    });

    // init plain video
    $('.nk-plain-video[data-video]').each(function () {
        var $plainCont = $(this);
        var $plainIframe = void 0;
        var url = $(this).attr('data-video');
        var api = new VideoWorker(url, {
            autoplay: 0,
            loop: 0,
            mute: 0,
            controls: 1
        });

        if (api && api.isValid()) {
            api.getIframe(function (iframe) {
                // add iframe
                $plainIframe = $(iframe);
                var $parent = $plainIframe.parent();
                tween.set(iframe, {
                    opacity: 0,
                    display: 'none'
                });
                $plainIframe.appendTo($plainCont);
                $parent.remove();

                // add play button
                $('<a class="nk-video-plain-toggle">' + self.options.templates.plainVideoIcon + '</a>').appendTo($plainCont);

                // add play event
                $plainCont.on('click', function () {
                    api.play();
                });
            });
            api.getImageURL(function (imgSrc) {
                $plainCont.css('background-image', 'url("' + imgSrc + '")');
            });
            api.on('play', function () {
                tween.to($plainIframe, 0.5, {
                    opacity: 1,
                    display: 'block'
                });
                // pause audio
                if (typeof soundManager !== 'undefined') {
                    soundManager.pauseAll();
                }
            });
            api.on('pause', function () {
                tween.to($plainIframe, 0.5, {
                    opacity: 0,
                    display: 'none'
                });
            });
        }
    });
}

/*------------------------------------------------------------------

  Init GIFs

-------------------------------------------------------------------*/
function _initGIF() {
    var self = this;

    // load gif in background
    function loadGif(url, cb) {
        var temp = new Image();
        temp.onload = function () {
            cb();
        };
        temp.src = url;
    }

    // play gif
    function playGif(item) {
        var $item = $(item);
        if (!item.gifPlaying) {
            item.gifPlaying = true;
            if (item.khGifLoaded) {
                $item.addClass('nk-gif-playing');
                $item.find('img').attr('src', $item.find('img').attr('data-gif'));
            } else if (!item.khGifLoading) {
                item.khGifLoading = 1;
                $item.addClass('nk-gif-loading');
                loadGif($item.find('img').attr('data-gif'), function () {
                    item.khGifLoaded = 1;
                    $item.removeClass('nk-gif-loading');
                    if (item.gifPlaying) {
                        item.gifPlaying = false;
                        playGif(item);
                    }
                });
            }
        }
    }

    // stop playing gif
    function stopGif(item) {
        var $item = $(item);
        if (item.gifPlaying) {
            item.gifPlaying = false;
            $item.removeClass('nk-gif-playing');
            $item.find('img').attr('src', $item.find('img').attr('data-gif-static'));
        }
    }

    // prepare gif containers
    $('.nk-gif').each(function () {
        var $this = $(this);
        // add toggle button
        $this.append('<a class="nk-gif-toggle">' + self.options.templates.gifIcon + '</a>');

        // add loading circle
        $this.append('<div class="nk-loading-spinner"><i></i></div>');

        $this.find('img').attr('data-gif-static', $this.find('img').attr('src'));
    });

    // hover gif
    $('.nk-gif-hover').on('mouseenter', function () {
        $(this).addClass('hover');
        playGif(this);
    }).on('mouseleave', function () {
        $(this).removeClass('hover');
        stopGif(this);
    });

    // click gif
    $('.nk-gif-click').on('click', function () {
        if (this.gifPlaying) {
            $(this).removeClass('hover');
            stopGif(this);
        } else {
            $(this).addClass('hover');
            playGif(this);
        }
    });

    // autoplay in viewport
    var $gifVP = $('.nk-gif-viewport');
    if ($gifVP.length) {
        self.throttleScroll(function () {
            $gifVP.each(function () {
                var inVP = self.isInViewport($(this), 1);
                if (inVP[0]) {
                    if (inVP[1].height / wndH < 0.7) {
                        if (inVP[0] === 1) {
                            playGif(this);
                        } else {
                            stopGif(this);
                        }
                    } else {
                        if (inVP[0] >= 0.7) {
                            playGif(this);
                        } else {
                            stopGif(this);
                        }
                    }
                } else {
                    stopGif(this);
                }
            });
        });
    }

    // autoplay gif
    $('.nk-gif:not(.nk-gif-click):not(.nk-gif-hover):not(.nk-gif-viewport)').each(function () {
        playGif(this);
    });
}

/*------------------------------------------------------------------

  Init Fullpage

-------------------------------------------------------------------*/
function _initFullPage() {
    var $fullPage = $('.nk-fullpage:eq(0)');
    var $eachItems = $fullPage.find('.nk-fullpage-item');
    if (!$fullPage.length || !$eachItems.length) {
        return;
    }

    var self = this;

    // set items height
    function resizeItems() {
        $eachItems.css('height', wndH);
    }
    resizeItems();
    self.debounceResize(resizeItems);

    // add navigation
    var $nav = '<ul class="nk-fullpage-nav">';
    for (var k = 0; k < $eachItems.length; k++) {
        $nav += '<li>' + (k + 1) + '</li>';
    }
    $nav += '</ul>';
    $nav = $($nav);
    var $navItems = $nav.children('li');
    $body.append($nav);

    function setActiveNavItem(num) {
        $navItems.removeClass('active');
        $navItems.eq(num).addClass('active');
    }
    function showNav() {
        $nav.addClass('active');
    }
    function hideNav() {
        $nav.removeClass('active');
    }

    if (self.isInViewport($fullPage) === 1 && $wnd.scrollTop() === 0) {
        setActiveNavItem(0);
        showNav();
    }

    // check for active item
    var isBusy = void 0;
    var $activeItem = void 0;
    var $nextItem = void 0;
    var $prevItem = void 0;
    function getActiveItem(sibling) {
        // if no active items - detect it
        var firstCheck = !$activeItem && !$nextItem && !$prevItem;
        if (firstCheck) {
            var inViewport = self.isInViewport($fullPage, 1);
            if (inViewport[0]) {
                (function () {
                    var $itemInVP = void 0;
                    $eachItems.each(function () {
                        var visible = self.isInViewport($(this));
                        if (visible) {
                            $itemInVP = $(this);
                            if (visible < 0.5 && $itemInVP.next('.nk-fullpage-item').length) {
                                $itemInVP = $itemInVP.next('.nk-fullpage-item');
                            }
                            return false;
                        }
                        return true;
                    });

                    // center
                    if (inViewport[0] === 1) {
                        $activeItem = $itemInVP;
                        $nextItem = $activeItem.next('.nk-fullpage-item');
                        $prevItem = $activeItem.prev('.nk-fullpage-item');
                    }

                    // top
                    else if (inViewport[1].top > 0) {
                            $nextItem = $itemInVP;
                        }

                        // bottom
                        else {
                                $prevItem = $itemInVP;
                            }
                })();
            }
        }

        if (!firstCheck) {
            var temp = $activeItem;
            if (sibling > 0) {
                $activeItem = $nextItem;
                $prevItem = temp;
                $nextItem = $activeItem.next('.nk-fullpage-item');
            } else if (sibling < 0) {
                $activeItem = $prevItem;
                $nextItem = temp;
                $prevItem = $activeItem.prev('.nk-fullpage-item');
            }
        }

        return $activeItem && $activeItem.length ? $activeItem : false;
    }

    // Check for prevent default scroll
    function preventScroll(delta) {
        var prev = $prevItem && $prevItem.length;
        var next = $nextItem && $nextItem.length;
        if (!prev && !next) {
            getActiveItem();
            prev = $prevItem && $prevItem.length;
            next = $nextItem && $nextItem.length;
        }
        if (prev && next || isBusy) {
            return true;
        }
        var visible = self.isInViewport($fullPage);
        if (visible > 0.5) {
            $activeItem = $nextItem = $prevItem = false;
            getActiveItem();
            prev = $prevItem && $prevItem.length;
            next = $nextItem && $nextItem.length;
            if (!prev && delta < 0 && visible === 1 && $wnd.scrollTop() === 0) {
                return true;
            }
            return prev && delta < 0 || next && delta > 0;
        }
        return false;
    }

    // scroll to item
    function scrollToItem($item, callback) {
        if ($item && !isBodyOverflowed()) {
            isBusy = 1;
            self.scrollTo($item, function () {
                isBusy = 0;
                callback && callback();
            });
            setActiveNavItem($item.index());
            showNav();
        }
    }
    $nav.on('click', '> li', function () {
        $activeItem = $nextItem = $prevItem = false;
        scrollToItem($eachItems.eq($(this).index()));
    });

    // scroll to next fullscreen item
    function onScroll(delta, callback) {
        // scroll to active item
        if (!isBusy) {
            scrollToItem(getActiveItem(delta), callback);
        }
    }

    var updateDefaultScroll = void 0;
    var wheelEvent = void 0;
    if ('onwheel' in document.createElement('div')) {
        wheelEvent = 'wheel';
    } else if ('onmousewheel' in document.createElement('div')) {
        wheelEvent = 'mousewheel';
    }
    if (wheelEvent) {
        // mouse wheel scroll
        $wnd.on(wheelEvent, function (e) {
            if (preventScroll(e.originalEvent.deltaY) === true) {
                onScroll(e.originalEvent.deltaY, function () {
                    updateDefaultScroll = 0;
                });
                e.preventDefault();
            } else {
                hideNav();
            }
        });
    }

    // touch swipe
    var touchStart = 0;
    var touchDelta = 0;
    $wnd.on('touchstart', function (e) {
        touchStart = e.originalEvent.touches[0].screenY;
        touchDelta = 0;
    });
    $wnd.on('touchmove touchend', function (e) {
        var y = e.originalEvent.touches && e.originalEvent.touches.length ? e.originalEvent.touches[0].screenY : false;
        touchDelta = y === false ? touchDelta : touchStart - y;

        if (preventScroll(touchDelta) === true) {
            if (e.type === 'touchend') {
                onScroll(touchDelta, function () {
                    updateDefaultScroll = 0;
                });
            }
            e.preventDefault();
        } else {
            hideNav();
        }
    });

    // default scroll
    var defaultScrollTimeout = void 0;
    $wnd.on('scroll resize', function () {
        updateDefaultScroll = 1;
        clearTimeout(defaultScrollTimeout);
        defaultScrollTimeout = setTimeout(function () {
            if (updateDefaultScroll) {
                $activeItem = $nextItem = $prevItem = false;
                onScroll();
            }
        }, 1000);
    });

    // on resize - save active item position
    self.debounceResize(function () {
        if ($activeItem && $activeItem.length) {
            if (!isBusy) {
                scrollToItem($activeItem);
            }
        }
    });
}

/*------------------------------------------------------------------

  Init Quick View for Portfolio

-------------------------------------------------------------------*/
function _initQuickView() {
    var $quickViewLinks = $('.nk-portfolio-quick-view, .nk-product-quick-view');
    if (!$quickViewLinks.length) {
        return;
    }

    var self = this;

    var portfolioNavTemplate = self.options.templates.quickViewPortfolio;
    var storeNavTemplate = self.options.templates.quickViewStore;

    var isStoreClass = 'is-store-qv-nav';
    var isProductClass = 'is-portfolio-qv-nav';

    var opened = false;
    var siblingsLinks = false;

    // create quick view container
    var $quickView = $('<div class="nk-quick-view"></div>').appendTo($body);

    // content
    var $quickViewCont = $('<div class="nk-quick-view-cont"></div>').appendTo($quickView);

    // nav
    var $quickViewNav = $('<div class="nk-quick-view-nav"></div>').appendTo($quickView);

    // load quick view content
    function loadQuickViewCont(url) {
        // add loading spinner
        $quickViewCont.html('<div class="nk-loading-spinner mauto"><i></i></div>');

        var $iframe = $('<iframe>').css('opacity', 0).appendTo($quickViewCont);
        $iframe.on('load', function () {
            var $frameDoc = $(this.contentDocument);

            // remove all layout items
            $frameDoc.find('.nk-portfolio-item-single').siblings('*:not(.nk-header-title)').remove();
            $frameDoc.find('.nk-product-quick-view, .nk-portfolio-quick-view, .nk-share-place, .nk-share-place-overlay, .nk-header, .nk-navbar, .nk-navbar-overlay, .nk-page-nav, .nk-page-nav-2, .nk-page-nav-3, .nk-side-buttons, .nk-search, .nk-footer').remove();

            // change all links to target _parent
            $frameDoc.find('a').each(function () {
                if (this.target !== '_blank') {
                    this.target = '_parent';
                }
            });

            // show iframe
            tween.set($iframe, {
                opacity: 0
            });
            tween.to($iframe, 0.4, {
                opacity: 1,
                onComplete: function onComplete() {
                    $quickViewCont.find('.nk-loading-spinner').remove();
                }
            });
        });
        $iframe.attr('src', url);

        // navigation
        if (siblingsLinks) {
            var prevItem = void 0;
            var nextItem = void 0;
            var tempPrev = void 0;
            for (var k = 0; k < siblingsLinks.length; k++) {
                if (siblingsLinks[k].url === url) {
                    prevItem = tempPrev;
                    nextItem = siblingsLinks[k + 1];
                }
                tempPrev = siblingsLinks[k];
            }

            var $prev = $quickViewNav.find('.nk-page-nav-prev');
            var $next = $quickViewNav.find('.nk-page-nav-next');
            var withCategory = $next.find('.nk-page-nav-title > .nk-product-category').length;

            $prev[(prevItem ? 'remove' : 'add') + 'Class']('disabled');
            $prev.attr('href', prevItem && prevItem.url || 'javascript:void(0)');
            $prev.find('.nk-page-nav-img > div').css('background-image', 'url("' + (prevItem && prevItem.image || '') + '")');
            $prev.find('.nk-page-nav-img > img').attr('src', prevItem && prevItem.image || '');
            if (withCategory) {
                $prev.find('.nk-page-nav-title > .nk-product-title').html(prevItem && prevItem.title || '');
                $prev.find('.nk-page-nav-title > .nk-product-category').html(prevItem && prevItem.category || '');
            } else {
                $prev.find('.nk-page-nav-title').html(prevItem && prevItem.title || '');
            }

            $next[(nextItem ? 'remove' : 'add') + 'Class']('disabled');
            $next.attr('href', nextItem && nextItem.url || 'javascript:void(0)');
            $next.find('.nk-page-nav-img > div').css('background-image', 'url("' + (nextItem && nextItem.image || '') + '")');
            $next.find('.nk-page-nav-img > img').attr('src', nextItem && nextItem.image || '');
            if (withCategory) {
                $next.find('.nk-page-nav-title > .nk-product-title').html(nextItem && nextItem.title || '');
                $next.find('.nk-page-nav-title > .nk-product-category').html(nextItem && nextItem.category || '');
            } else {
                $next.find('.nk-page-nav-title').html(nextItem && nextItem.title || '');
            }
        }
    }

    // open quick view
    self.openQuickView = function (item) {
        if (opened || !item || !item.href) {
            return;
        }
        opened = true;

        var url = item.href;
        var isStore = $(item).hasClass('nk-product-quick-view');

        if (!siblingsLinks) {
            var $siblings = void 0;
            if (isStore) {
                $siblings = $(item).parents('.nk-store:eq(0)').find('.nk-product').find('.nk-product-quick-view:eq(0)');
            } else {
                $siblings = $(item).parents('.nk-isotope, [class*="nk-carousel"]').eq(0).find('.nk-isotope-item').find('.nk-portfolio-quick-view:eq(0)');
            }
            siblingsLinks = [];

            $siblings.each(function () {
                var $qvItem = $(this).parents(isStore ? '.nk-product:eq(0)' : '.nk-isotope-item:eq(0)');
                var title = '';
                var category = '';
                var image = '';
                if (isStore) {
                    title = $qvItem.find('.nk-product-title').text() || '';
                    category = $qvItem.find('.nk-product-category').html() || '';
                    image = $qvItem.find('.nk-product-image > img').attr('src') || '';
                } else {
                    title = $qvItem.find('.nk-portfolio-title').text() || '';
                    category = $qvItem.find('.nk-portfolio-category').html() || '';
                    image = $qvItem.find('img.nk-portfolio-image').attr('src') || '';
                }
                siblingsLinks.push({
                    url: this.href,
                    title: title,
                    category: category,
                    image: image,
                    item: this
                });
            });
        }

        // show quick view
        tween.fromTo($quickView, 0.4, {
            opacity: 0
        }, {
            opacity: 1,
            display: 'block'
        });
        tween.fromTo($quickViewCont, 0.4, {
            opacity: 0,
            scale: 0.9
        }, {
            opacity: 1,
            scale: 1,
            delay: 0.3
        });

        // add navigation skeleton
        $quickViewNav.html(isStore ? storeNavTemplate : portfolioNavTemplate).removeClass(isStoreClass + ' ' + isProductClass).addClass(isStore ? isStoreClass : isProductClass);

        // prevent body scrolling
        self.bodyOverflow(1);

        // load content
        loadQuickViewCont(url);
    };

    // close quick view
    self.closeQuickView = function () {
        // hide animation
        tween.to($quickView, 0.4, {
            opacity: 0,
            display: 'none',
            onComplete: function onComplete() {
                $quickViewCont.html('');
            }
        });
        tween.to($quickViewCont, 0.4, {
            scale: 0.9
        });

        // restore body scrolling
        self.bodyOverflow(0);

        siblingsLinks = false;
        opened = false;
    };

    // close icon
    $('<div class="nk-quick-view-close">' + self.options.templates.quickViewCloseIcon + '</div>').on('click', self.closeQuickView).appendTo($quickView);

    // prev / next quick view click
    $quickViewNav.on('click', '.nk-page-nav .nk-page-nav-prev:not(.disabled), .nk-page-nav .nk-page-nav-next:not(.disabled), .nk-page-nav-2 .nk-page-nav-prev:not(.disabled), .nk-page-nav-2 .nk-page-nav-next:not(.disabled)', function (e) {
        e.preventDefault();
        loadQuickViewCont(this.href);
    });

    // open quick view event
    $quickViewLinks.on('click', function (e) {
        e.preventDefault();
        self.openQuickView(this);
    });
}

/*------------------------------------------------------------------

  Init Info Boxes / Alerts

-------------------------------------------------------------------*/
function _initInfoBoxes() {
    var self = this;

    // close
    $doc.on('click', '.nk-info-box .nk-info-box-close', function (e) {
        e.preventDefault();
        var $box = $(this).parents('.nk-info-box:eq(0)');
        tween.to($box, 0.3, {
            opacity: 0,
            onComplete: function onComplete() {
                tween.to($box, 0.3, {
                    height: 0,
                    padding: 0,
                    margin: 0,
                    display: 'none',
                    onComplete: function onComplete() {
                        self.debounceResize();
                    }
                });
            }
        });
    });
}

/*------------------------------------------------------------------

  Init AJAX Forms

-------------------------------------------------------------------*/
function _initForms() {
    if (typeof $.fn.ajaxSubmit === 'undefined' || typeof $.validator === 'undefined') {
        return;
    }
    var self = this;

    // Validate Khaki Forms
    $('form:not(.nk-form-ajax):not(.nk-mchimp)').each(function () {
        $(this).validate({
            errorClass: 'nk-error',
            errorElement: 'div',
            errorPlacement: function errorPlacement(error, element) {
                var $parent = element.parent('.input-group');
                if ($parent.length) {
                    $parent.after(error);
                } else {
                    element.after(error);
                }
                self.debounceResize();
            }
        });
    });
    // ajax form
    $('form.nk-form-ajax').each(function () {
        $(this).validate({
            errorClass: 'nk-error',
            errorElement: 'div',
            errorPlacement: function errorPlacement(error, element) {
                var $parent = element.parent('.input-group');
                if ($parent.length) {
                    $parent.after(error);
                } else {
                    element.after(error);
                }
                self.debounceResize();
            },

            // Submit the form via ajax (see: jQuery Form plugin)
            submitHandler: function submitHandler(form) {
                var $responseSuccess = $(form).find('.nk-form-response-success');
                var $responseError = $(form).find('.nk-form-response-error');
                $(form).ajaxSubmit({
                    type: 'POST',
                    success: function success(response) {
                        response = JSON.parse(response);
                        if (response.type && response.type === 'success') {
                            $responseError.hide();
                            $responseSuccess.html(response.response).show();
                            form.reset();
                        } else {
                            $responseSuccess.hide();
                            $responseError.html(response.response).show();
                        }
                        self.debounceResize();
                    },
                    error: function error(response) {
                        $responseSuccess.hide();
                        $responseError.html(response.responseText).show();
                        self.debounceResize();
                    }
                });
            }
        });
    });
}

/*------------------------------------------------------------------

  Init MailChimp

-------------------------------------------------------------------*/
function _initFormsMailChimp() {
    var $mchimp = $('form.nk-mchimp');
    if (typeof $.fn.ajaxSubmit === 'undefined' || typeof $.validator === 'undefined' || !$mchimp.length) {
        return;
    }
    var self = this;

    // Additional Validate Methods From MailChimp
    // Validate a multifield birthday
    $.validator.addMethod('mc_birthday', function (date, element, grouping_class) {
        var isValid = false;
        var $fields = $('input:not(:hidden)', $(element).closest(grouping_class));
        if ($fields.filter(':filled').length === 0 && this.optional(element)) {
            isValid = true; // None have been filled out, so no error
        } else {
                var dateArray = new Array();
                dateArray.month = $fields.filter('input[name*="[month]"]').val();
                dateArray.day = $fields.filter('input[name*="[day]"]').val();

                // correct month value
                dateArray.month = dateArray.month - 1;

                var testDate = new Date(1970, dateArray.month, dateArray.day);
                if (testDate.getDate() !== dateArray.day || testDate.getMonth() !== dateArray.month) {
                    isValid = false;
                } else {
                    isValid = true;
                }
            }
        return isValid;
    }, 'Please enter a valid month and day.');

    // Validate a multifield date
    $.validator.addMethod('mc_date', function (date, element, grouping_class) {
        var isValid = false;
        var $fields = $('input:not(:hidden)', $(element).closest(grouping_class));
        if ($fields.filter(':filled').length === 0 && this.optional(element)) {
            isValid = true; // None have been filled out, so no error
        } else {
                var dateArray = new Array();
                dateArray.month = $fields.filter('input[name*="[month]"]').val();
                dateArray.day = $fields.filter('input[name*="[day]"]').val();
                dateArray.year = $fields.filter('input[name*="[year]"]').val();

                // correct month value
                dateArray.month = dateArray.month - 1;

                // correct year value
                if (dateArray.year.length < 4) {
                    dateArray.year = parseInt(dateArray.year, 10) < 50 ? 2000 + parseInt(dateArray.year, 10) : 1900 + parseInt(dateArray.year, 10);
                }

                var testDate = new Date(dateArray.year, dateArray.month, dateArray.day);
                if (testDate.getDate() !== dateArray.day || testDate.getMonth() !== dateArray.month || testDate.getFullYear() !== dateArray.year) {
                    isValid = false;
                } else {
                    isValid = true;
                }
            }
        return isValid;
    }, 'Please enter a valid date');

    // Validate a multifield phone number
    $.validator.addMethod('mc_phone', function (phone_number, element, grouping_class) {
        var isValid = false;
        var $fields = $('input:filled:not(:hidden)', $(element).closest(grouping_class));
        if ($fields.length === 0 && this.optional(element)) {
            isValid = true; // None have been filled out, so no error
        } else {
                phone_number = $fields.eq(0).val() + $fields.eq(1).val() + $fields.eq(2).val();
                isValid = phone_number.length === 10 && phone_number.match(/[0-9]{9}/);
            }
        return isValid;
    }, 'Please specify a valid phone number');

    $.validator.addMethod('skip_or_complete_group', function (value, element, grouping_class) {
        var $fields = $('input:not(:hidden)', $(element).closest(grouping_class)),
            $fieldsFirst = $fields.eq(0),
            validator = $fieldsFirst.data('valid_skip') ? $fieldsFirst.data('valid_skip') : $.extend({}, this),
            numberFilled = $fields.filter(function () {
            return validator.elementValue(this);
        }).length,
            isValid = numberFilled === 0 || numberFilled === $fields.length;

        // Store the cloned validator for future validation
        $fieldsFirst.data('valid_skip', validator);

        // If element isn't being validated, run each field's validation rules
        if (!$(element).data('being_validated')) {
            $fields.data('being_validated', true);
            $fields.each(function () {
                validator.element(this);
            });
            $fields.data('being_validated', false);
        }
        return isValid;
    }, $.validator.format('Please supply missing fields.'));

    $.validator.addMethod('skip_or_fill_minimum', function (value, element, options) {
        var $fields = $(options[1], element.form),
            $fieldsFirst = $fields.eq(0),
            validator = $fieldsFirst.data('valid_skip') ? $fieldsFirst.data('valid_skip') : $.extend({}, this),
            numberFilled = $fields.filter(function () {
            return validator.elementValue(this);
        }).length,
            isValid = numberFilled === 0 || numberFilled >= options[0];
        // Store the cloned validator for future validation
        $fieldsFirst.data('valid_skip', validator);

        // If element isn't being validated, run each skip_or_fill_minimum field's validation rules
        if (!$(element).data('being_validated')) {
            $fields.data('being_validated', true);
            $fields.each(function () {
                validator.element(this);
            });
            $fields.data('being_validated', false);
        }
        return isValid;
    }, $.validator.format('Please either skip these fields or fill at least {0} of them.'));

    $.validator.addMethod('zipcodeUS', function (value, element) {
        return this.optional(element) || /^\d{5}-\d{4}$|^\d{5}$/.test(value);
    }, 'The specified US ZIP Code is invalid');

    $mchimp.each(function () {
        var $form = $(this);
        if (!$form.length) {
            return;
        }

        var validator = $form.validate({
            errorClass: 'nk-error',
            errorElement: 'div',
            // Grouping fields makes jQuery Validation display one error for all the fields in the group
            // It doesn't have anything to do with how the fields are validated (together or separately),
            // it's strictly for visual display of errors
            groups: function groups() {
                var groups = {};
                $form.find('.input-group').each(function () {
                    var inputs = $(this).find('input:text:not(:hidden)'); // TODO: What about non-text inputs like number?
                    if (inputs.length > 1) {
                        var mergeName = inputs.first().attr('name');
                        var fieldNames = $.map(inputs, function (f) {
                            return f.name;
                        });
                        groups[mergeName.substring(0, mergeName.indexOf('['))] = fieldNames.join(' ');
                    }
                });
                return groups;
            },
            // Place a field's inline error HTML just before the div.input-group closing tag
            errorPlacement: function errorPlacement(error, element) {
                element.closest('.input-group').after(error);
                self.debounceResize();
            },

            // Submit the form via ajax (see: jQuery Form plugin)
            submitHandler: function submitHandler() {
                var $responseSuccess = $form.find('.nk-form-response-success');
                var $responseError = $form.find('.nk-form-response-error');
                var url = $form.attr('action');
                url = url.replace('/post?u=', '/post-json?u=');
                url += '&c=?';

                $form.ajaxSubmit({
                    type: 'GET',
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    url: url,
                    success: function success(resp) {
                        $responseSuccess.hide();
                        $responseError.hide();

                        // On successful form submission, display a success message and reset the form
                        if (resp.result === 'success') {
                            $responseSuccess.show().html(resp.msg);
                            $form[0].reset();

                            // If the form has errors, display them, inline if possible, or appended to #mce-error-response
                        } else {

                                // Example errors - Note: You only get one back at a time even if you submit several that are bad.
                                // Error structure - number indicates the index of the merge field that was invalid, then details
                                // Object {result: "error", msg: "6 - Please enter the date"}
                                // Object {result: "error", msg: "4 - Please enter a value"}
                                // Object {result: "error", msg: "9 - Please enter a complete address"}

                                // Try to parse the error into a field index and a message.
                                // On failure, just put the dump thing into in the msg letiable.
                                var index = -1;
                                var msg = void 0;
                                try {
                                    var parts = resp.msg.split(' - ', 2);
                                    if (typeof parts[1] === 'undefined') {
                                        msg = resp.msg;
                                    } else {
                                        i = parseInt(parts[0], 10);
                                        if (i.toString() === parts[0]) {
                                            index = parts[0];
                                            msg = parts[1];
                                        } else {
                                            index = -1;
                                            msg = resp.msg;
                                        }
                                    }
                                } catch (e) {
                                    index = -1;
                                    msg = resp.msg;
                                }

                                try {
                                    // If index is -1 if means we don't have data on specifically which field was invalid.
                                    // Just lump the error message into the generic response div.
                                    if (index === -1) {
                                        $responseError.show().html(msg);
                                    } else {
                                        var fieldName = $form.find('input[name]:eq(' + index + ')').attr('name'); // Make sure this exists
                                        var data = {};
                                        data[fieldName] = msg;
                                        validator.showErrors(data);
                                    }
                                } catch (e) {
                                    $responseError.show().html(msg);
                                }
                            }
                        self.debounceResize();
                    },
                    error: function error(response) {
                        $responseSuccess.hide();
                        $responseError.html(response.responseText).show();
                        self.debounceResize();
                    }
                });
            }
        });
    });

    // Custom validation methods for fields with certain css classes
    $.validator.addClassRules('birthday', { digits: true, mc_birthday: '.datefield' });
    $.validator.addClassRules('datepart', { digits: true, mc_date: '.datefield' });
    $.validator.addClassRules('phonepart', { digits: true, mc_phone: '.phonefield' });
}

/*------------------------------------------------------------------

  Init Audio Player

-------------------------------------------------------------------*/
function _initAudioPlayer() {
    if (typeof soundManager === 'undefined') {
        return;
    }

    /* Global Audio Player */
    var _self = this;
    var $player = $('.nk-audio-player-main');
    var api = void 0;
    var player = void 0;
    var $title = $player.find('.nk-audio-title > div');
    var $timer = $player.find('.nk-audio-time');
    var $playBtn = $player.find('.nk-audio-play-pause .nk-audio-play');
    var $pauseBtn = $player.find('.nk-audio-play-pause .nk-audio-pause');
    var $prevBtn = $player.find('.nk-audio-prev');
    var $nextBtn = $player.find('.nk-audio-next');
    var progressBusy = false; // busy when user drag progress bar
    var $progressCont = $player.find('.nk-audio-progress');
    var $progress = $progressCont.find('.nk-audio-progress-current');
    var $volumeBtn = $player.find('.nk-audio-volume-icon');
    var $volumeCont = $player.find('.nk-audio-volume .nk-audio-volume-inner');
    var $volume = $volumeCont.find('.nk-audio-volume-current');
    var $playlist = $player.find('.nk-audio-player-playlist-inner');

    // Volume controller will be automatically removed on iOs devices, because of limitation of volume control
    if (isIOs) {
        $player.find('.nk-audio-volume').remove();
    }

    /**
    * Player class containing the state of our playlist and where we are in it.
    * Includes all methods for playing, skipping, updating the display, etc.
    * @param {Array} playlist Array of objects with playlist song details ({title, file, howl}).
    */
    var Player = function Player(options) {
        var self = this;

        self.options = options;
        self.index = options.start || 0;
        self.volume = typeof options.volume !== 'undefined' ? options.volume : 100;
        self.pinned = options.pinned || false;
        self.loop = false;
        self.shuffle = false;
        self.progress = 0;
        self.muted = false;
        self.playing = false;

        // restore player data
        if (localStorage && typeof localStorage.khakiAudioPlayer !== 'undefined') {
            var storedData = JSON.parse(localStorage.khakiAudioPlayer);
            self.playlist = storedData.playlist || self.options.playlist;
            self.index = storedData.index;
            self.volume = storedData.volume;
            self.pinned = storedData.pinned;
            self.loop = storedData.loop;
            self.shuffle = storedData.shuffle;
            self.progress = storedData.progress;
            self.muted = storedData.muted;
            self.playing = storedData.playing;
        }

        // create playlist
        self.createPlaylist(self.playlist);

        // set api
        var firstLoad = true;
        function onPlay() {
            self.playing = true;
            $player.addClass('nk-audio-player-playing');

            // update playlist
            $playlist.find('.nk-playlist-item-playing, .nk-playlist-item-active').removeClass('nk-playlist-item-playing nk-playlist-item-active');
            $playlist.find('[data-index=' + self.index + ']').addClass('nk-playlist-item-playing nk-playlist-item-active');

            // update playlist on the page
            if (self.$pagePlaylist) {
                self.$pagePlaylist.find('[data-index]').removeClass('nk-audio-playlist-item-playing nk-audio-playlist-item-active');
                self.$pagePlaylist.find('[data-index=' + self.index + ']').addClass('nk-audio-playlist-item-playing nk-audio-playlist-item-active');
            }
        }
        function onStop() {
            self.playing = false;
            $player.removeClass('nk-audio-player-playing');

            // update playlist
            $playlist.find('.nk-playlist-item-playing').removeClass('nk-playlist-item-playing');

            // update playlist on the page
            if (self.$pagePlaylist) {
                self.$pagePlaylist.find('[data-index].nk-audio-playlist-item-playing').removeClass('nk-audio-playlist-item-playing');
            }
        }
        api = soundManager.createSound({
            volume: self.volume,
            whileplaying: function whileplaying() {
                self.step();
            },

            onplay: onPlay,
            onresume: onPlay,
            onpause: onStop,
            onstop: onStop,
            onload: function onload(ok) {
                if (!ok && this._iO && this._iO.onerror) {
                    this._iO.onerror();
                }
            },
            onerror: function onerror() {},
            onfinish: function onfinish() {
                if (self.loop) {
                    self.play();
                } else {
                    self.skip('right');
                }
            },
            onbufferchange: function onbufferchange() {
                if (firstLoad && api.duration) {
                    firstLoad = false;
                    // seek
                    self.seek(self.progress);
                }
            }
        });

        // autoplay
        if (self.playlist && self.playlist.list && self.playlist.list.length) {
            if (self.options.autoplay || self.playing) {
                self.play();
            } else {
                self.play();
                self.pause();
            }
        }

        // mute
        self.updateVolumeBar();

        // pin
        $player.css('transition', 'none');
        self.pin(self.pinned, true);
        setTimeout(function () {
            $player.css('transition', '');
        }, 1);

        // loop
        self.setLoop(self.loop);

        // shuffle
        self.setShuffle(self.shuffle);

        // save player data
        function saveData() {
            if (localStorage) {
                localStorage.khakiAudioPlayer = JSON.stringify({
                    playlist: self.playlist,
                    index: self.index,
                    volume: self.volume,
                    pinned: self.pinned,
                    loop: self.loop,
                    shuffle: self.shuffle,
                    progress: self.progress,
                    muted: self.muted,
                    playing: self.playing
                });
            }
        }
        if (localStorage) {
            // save on close window and every 20 seconds
            $(window).on('unload', saveData);
            setInterval(saveData, 20000);
        }

        // Events to control player
        // play, pause, next, prev
        $playBtn.on('click', function () {
            self.play();
        });
        $pauseBtn.on('click', function () {
            self.pause();
        });
        $prevBtn.on('click', function () {
            self.skip('prev');
        });
        $nextBtn.on('click', function () {
            self.skip('next');
        });

        // volume
        $volumeBtn.on('click', function () {
            self.mute();
        });
        if (typeof Hammer !== 'undefined') {
            (function () {
                var volumeW = void 0;
                var volumeCurW = void 0;
                var volumeStart = false;
                var HammerVol = new Hammer.Manager($volumeCont[0]);
                HammerVol.add(new Hammer.Pan({
                    pointers: 1,
                    threshold: 0
                }));
                HammerVol.add(new Hammer.Press({
                    time: 1
                }));
                HammerVol.on('pan press pressup', function (e) {
                    // start
                    if (e.type === 'press' || volumeStart === false) {
                        volumeW = $volumeCont.width();
                        volumeStart = e.pointers[0].clientX - $volumeCont[0].getBoundingClientRect().left;
                        $volumeCont.addClass('hover');
                    }

                    // each
                    volumeCurW = Math.min(1, Math.max(0, (volumeStart + e.deltaX) / volumeW)) * 100;
                    self.setVolume(volumeCurW);

                    // end
                    if (e.isFinal || e.type === 'pressup') {
                        $volumeCont.removeClass('hover');
                        volumeStart = false;
                    }

                    e.preventDefault();
                });
            })();
        }

        // playlist
        $playlist.on('click', '> [data-index]', function () {
            var idx = parseInt($(this).attr('data-index'), 10);
            if (self.index === idx) {
                if (self.playing) {
                    self.pause();
                } else {
                    self.play();
                }
            } else {
                self.skipTo(idx);
            }
        });
        $playlist.on('click', '.nk-playlist-right a', function (e) {
            e.stopPropagation();
        });

        // pin player
        $('.nk-audio-pin').on('click', function () {
            self.pin();
        });

        // loop
        $player.on('click', '.nk-audio-settings .nk-audio-loop', function () {
            self.setLoop();
        });

        // shuffle
        $player.on('click', '.nk-audio-settings .nk-audio-shuffle', function () {
            self.setShuffle();
        });

        // show playlist
        $player.on('click', '.nk-audio-settings .nk-audio-playlist', function () {
            self.showPlaylist();
        });
    };
    Player.prototype = {
        /**
         * Create playlist and show player
         */
        createPlaylist: function createPlaylist(playlist, skipTo) {
            if (!playlist || !playlist.list || !playlist.list.length) {
                return;
            }
            var self = this;
            var oldPlaylist = $.extend(true, {}, self.playlist);

            self.playlist = $.extend(true, {}, playlist);
            self.playlistShuffle = [];

            // Setup the playlist display.
            var playlistInner = '';
            var playListBtn = ['<div class="nk-playlist-play-pause">', '    <span class="nk-playlist-play"><span class="ion-play ml-3"></span></span>', '    <span class="nk-playlist-pause"><span class="ion-pause"></span></span>', '</div>'].join('');
            var song = void 0;
            for (var k = 0; k < self.playlist.list.length; k++) {
                song = self.playlist.list[k];
                self.playlistShuffle.push(k);
                playlistInner += ['<li data-index="' + k + '">', '<div class="container nk-playlist-item-cont">', '<div>' + playListBtn + '</div>', '<div class="nk-playlist-title"><div>' + song.title + '</div></div>', '<div class="nk-playlist-right">', song.buttons || '', song.duration ? ' <span class="nk-playlist-item-duration">' + song.duration + '</span>' : '', '</div>', '</div>', '</li>'].join('');
            }
            $playlist.html(playlistInner);

            // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
            function shuffleArr(a, b, c, d) {
                c = a.length;while (c) {
                    b = Math.random() * (--c + 1) | 0, d = a[c], a[c] = a[b], a[b] = d;
                }
            }
            shuffleArr(self.playlistShuffle);

            // add page playlist dom item
            // $(this).data('nk-playlist-data', result);
            if (self.playlist.id) {
                var $newPagePlaylist = $('#' + self.playlist.id);
                if (JSON.stringify($newPagePlaylist.data('nk-playlist-data')) === JSON.stringify(self.playlist)) {
                    self.$pagePlaylist = $newPagePlaylist;
                } else {
                    self.$pagePlaylist = null;
                }
            } else {
                self.$pagePlaylist = null;
            }

            // prevent if new playlist the same as current
            if (JSON.stringify(oldPlaylist) === JSON.stringify(self.playlist)) {
                if (skipTo === self.index) {
                    if (self.playing) {
                        self.pause();
                    } else {
                        self.play();
                    }
                } else if (typeof skipTo !== 'undefined') {
                    self.skipTo(skipTo);
                }
            } else {
                // remove active items from old playlist
                // update playlist on the page
                if (oldPlaylist.id) {
                    $('#' + oldPlaylist.id).find('[data-index]').removeClass('nk-audio-playlist-item-playing nk-audio-playlist-item-active');
                }
                if (typeof skipTo !== 'undefined') {
                    self.skipTo(skipTo);
                }
            }
            oldPlaylist = null;

            // show player
            $player.addClass('show');

            _self.initPluginNano();
        },

        /**
        * Play a song in the playlist.
        * @param  {Number} index Index of the song in the playlist (leave empty to play the first or current).
        */
        play: function play(index) {
            var self = this;

            index = typeof index === 'number' ? index : self.index;
            if (!self.playlist.list[index]) {
                index = 0;
            }
            var data = self.playlist.list[index];

            self.index = index;

            // pause all players
            soundManager.pauseAll();

            // Begin playing the sound.
            api.play({
                url: data.src
            });

            // Update the track display.
            $title.html(data.title);
        },

        /**
        * Pause the currently playing track.
        */
        pause: function pause() {
            // Puase the sound.
            soundManager.pauseAll();
        },


        /**
        * Skip to the next or previous track.
        * @param  {String} direction 'next' or 'prev'.
        */
        skip: function skip(direction) {
            var self = this;
            var index = 0;

            // shuffle
            if (self.shuffle) {
                for (var k in self.playlistShuffle) {
                    if (self.playlistShuffle[k] === self.index) {
                        // Get the next track based on the direction of the track.
                        if (direction === 'prev') {
                            index = parseInt(k, 10) - 1;
                            if (index < 0) {
                                index = self.playlistShuffle.length - 1;
                            }
                        } else {
                            index = parseInt(k, 10) + 1;
                            if (index >= self.playlistShuffle.length) {
                                index = 0;
                            }
                        }
                        index = self.playlistShuffle[index];
                        break;
                    }
                }
            }

            // Get the next track based on the direction of the track.
            else {
                    // Get the next track based on the direction of the track.
                    if (direction === 'prev') {
                        index = self.index - 1;
                        if (index < 0) {
                            index = self.playlist.list.length - 1;
                        }
                    } else {
                        index = self.index + 1;
                        if (index >= self.playlist.list.length) {
                            index = 0;
                        }
                    }
                }

            self.skipTo(index);
        },

        /**
        * Skip to a specific track based on its playlist index.
        * @param  {Number} index Index in the playlist.
        */
        skipTo: function skipTo(index) {
            var self = this;

            // Stop the current track.
            api.stop();

            // Reset progress.
            if (!progressBusy) {
                $progress[0].style.width = '0%';
            }
            self.progress = 0;

            // Play the new track.
            self.play(index);
        },

        /**
        * Set the volume and update the volume slider display.
        * @param  {Number} val Volume between 0 and 1.
        */
        setVolume: function setVolume(val, noTouchMute) {
            var self = this;

            val = Math.min(100, Math.max(0, val));

            // Update the volume to the new value.
            api.setVolume(val);

            // unmute
            if (!api.muted && !noTouchMute) {
                self.mute(false);
            }

            self.volume = val;
            self.updateVolumeBar();
        },

        /**
        * Mute / Unmute sound
        */
        mute: function mute(val) {
            var self = this;

            // Update the volume to the new value.
            self.muted = typeof val !== 'undefined' ? val : !api.muted;
            if (self.muted) {
                api.mute();
            } else {
                api.unmute();
            }

            self.updateVolumeBar();
        },

        /**
        * Update volume bar icons
        */
        updateVolumeBar: function updateVolumeBar() {
            var self = this;

            // Volume controller will be automatically removed on iOs devices, because of limitation of volume control
            if (isIOs) {
                return;
            }

            $player.removeClass('volume-muted volume-half volume-small');

            // Update the display on the slider.
            $volume[0].style.width = self.volume + '%';

            if (self.muted || self.volume === 0) {
                $player.addClass('volume-muted');
            } else {
                // change icons
                if (self.volume < 20) {
                    $player.addClass('volume-small');
                } else if (self.volume < 70) {
                    $player.addClass('volume-half');
                }
            }
        },

        /**
        * Seek to a new position in the currently playing track.
        * @param  {Number} per Percentage through the song to skip.
        */
        seek: function seek(per) {
            api.setPosition(api.duration * per);
        },


        /**
        * The step called within requestAnimationFrame to update the playback position.
        */
        step: function step() {
            var self = this;
            // Determine our current seek position.
            var seek = api.position || 0;
            self.progress = seek / api.duration;
            $timer[0].innerHTML = self.formatTime(Math.round(seek));

            if (!progressBusy) {
                $progress[0].style.width = (self.progress * 100 || 0) + '%';
            }
        },

        /**
        * Format the time from seconds to M:SS.
        * @param  {Number} secs Seconds to format.
        * @return {String}      Formatted time.
        */
        formatTime: function formatTime(msec) {
            var secs = Math.round(msec / 1000) || 0;
            var minutes = Math.floor(secs / 60) || 0;
            minutes = (minutes < 10 ? '0' : 0) + minutes;
            var seconds = secs - minutes * 60;
            return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        },


        /**
        * Loop track
        * @param  {Number} true or false. If nothing - toggle loop
        */
        setLoop: function setLoop(val) {
            var self = this;

            if (typeof val !== 'undefined') {
                $player[(val ? 'add' : 'remove') + 'Class']('nk-audio-player-loop');
            } else {
                $player.toggleClass('nk-audio-player-loop');
            }
            self.loop = $player.hasClass('nk-audio-player-loop');
        },

        /**
        * Shuffle playlist
        * @param  {Number} true or false. If nothing - toggle shuffle
        */
        setShuffle: function setShuffle(val) {
            var self = this;

            if (typeof val !== 'undefined') {
                $player[(val ? 'add' : 'remove') + 'Class']('nk-audio-player-shuffle');
            } else {
                $player.toggleClass('nk-audio-player-shuffle');
            }
            self.shuffle = $player.hasClass('nk-audio-player-shuffle');
        },

        /**
        * Pin player
        * @param  {Number} true or false. If nothing - toggle pin
        */
        pin: function pin(val) {
            var self = this;

            if (typeof val !== 'undefined') {
                $player[(val ? 'add' : 'remove') + 'Class']('nk-audio-player-pin');
            } else {
                $player.toggleClass('nk-audio-player-pin');
            }
            self.pinned = $player.hasClass('nk-audio-player-pin');
        },

        /**
        * Show / Hide playlist
        * @param  {Number} true or false. If nothing - toggle pin
        */
        showPlaylist: function showPlaylist(val) {
            var self = this;

            if (typeof val !== 'undefined') {
                $player[(val ? 'add' : 'remove') + 'Class']('nk-audio-player-playlist-opened');
            } else {
                $player.toggleClass('nk-audio-player-playlist-opened');
            }
            self.pinned = $player.hasClass('nk-audio-player-playlist-opened');
        }
    };

    // Setup all playlists on the page
    var playlist = [];
    $('.nk-audio-playlist').each(function () {
        var _this = this;

        var ID = $(this).attr('id') || false;
        var isHidden = $(this).hasClass('nk-audio-playlist-hidden');
        var isActive = $(this).hasClass('active');
        var list = [];
        $(this).find('> li').each(function () {
            var src = $(this).attr('data-src');
            if (!src) {
                return;
            }

            // add index attribute
            $(this).attr('data-index', list.length);

            // add to list
            list.push({
                title: $(this).find('.nk-audio-playlist-title').html() || '',
                src: src,
                duration: $(this).find('.nk-audio-playlist-duration').text() || '',
                buttons: $(this).find('.nk-audio-playlist-buttons').html() || ''
            });

            // add play and pause buttons
            if (!isHidden) {
                $(this).prepend(_self.options.templates.audioPlaylistButton);
            }
        });
        if (list.length) {
            (function () {
                var result = {
                    id: ID,
                    isHidden: isHidden,
                    isActive: isActive,
                    list: list
                };
                playlist.push(result);

                // add playlist data to the dom element
                $(_this).data('nk-playlist-data', result);

                // add playlist to player
                $(_this).on('click', 'li[data-index]', function () {
                    player.createPlaylist(result, parseInt($(this).attr('data-index'), 10));
                });
            })();
        }
    });

    /* Plain audio players */
    var $playersPlain = $('.nk-audio-plain');

    // add play and pause buttons
    $playersPlain.prepend(_self.options.templates.audioPlainButton);

    var PlayersPlain = function PlayersPlain($item) {
        var self = this;
        self.$item = $item;
        self.url = $item.attr('data-src');
        self.$playPauseBtn = $item.find('.nk-audio-plain-play-pause');
        self.$progress = $item.find('.nk-audio-progress-current');

        self.$timer = $item.find('.nk-audio-plain-duration');
        self.$timer.attr('data-duration', self.$timer.text());

        function onPlay() {
            $item.addClass('nk-audio-plain-playing');
        }
        function onStop() {
            $item.removeClass('nk-audio-plain-playing');
            self.$timer = $item.find('.nk-audio-plain-duration');
            self.$timer.text(self.$timer.attr('data-duration'));
        }
        self.api = soundManager.createSound({
            volume: 100,
            whileplaying: function whileplaying() {
                self.step();
            },

            onplay: onPlay,
            onresume: onPlay,
            onpause: onStop,
            onstop: onStop,
            onload: function onload(ok) {
                if (!ok && this._iO && this._iO.onerror) {
                    this._iO.onerror();
                }
            }
        });

        self.$playPauseBtn.on('click', function () {
            if (!self.api.paused && self.api.url) {
                self.pause();
            } else {
                self.play();
            }
        });
    };
    PlayersPlain.prototype = {
        /**
        * Play a song in the playlist.
        * @param  {Number} index Index of the song in the playlist (leave empty to play the first or current).
        */
        play: function play() {
            // pause all players
            soundManager.pauseAll();

            // Begin playing the sound.
            this.api.play({
                url: this.url
            });
        },

        /**
        * Pause the currently playing track.
        */
        pause: function pause() {
            // Puase the sound.
            soundManager.pauseAll();
        },

        /**
        * Seek to a new position in the currently playing track.
        * @param  {Number} per Percentage through the song to skip.
        */
        seek: function seek(per) {
            this.api.setPosition(this.api.duration * per);
        },
        /**
        * The step called within requestAnimationFrame to update the playback position.
        */
        step: function step() {
            var self = this;
            // Determine our current seek position.
            var seek = self.api.position || 0;
            self.progress = seek / self.api.duration;
            self.$timer[0].innerHTML = self.formatTime(Math.round(seek));

            if (!progressBusy) {
                self.$progress[0].style.width = (self.progress * 100 || 0) + '%';
            }
        },

        /**
        * Format the time from seconds to M:SS.
        * @param  {Number} secs Seconds to format.
        * @return {String}      Formatted time.
        */
        formatTime: function formatTime(msec) {
            var secs = Math.round(msec / 1000) || 0;
            var minutes = Math.floor(secs / 60) || 0;
            minutes = (minutes < 10 ? '0' : 0) + minutes;
            var seconds = secs - minutes * 60;
            return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        }
    };

    // progress
    if (typeof Hammer !== 'undefined') {
        var $progresses = $playersPlain.find('.nk-audio-progress').add($progressCont);
        $progresses.each(function () {
            var $curProgressCont = $(this);
            var $curProgres = $curProgressCont.children();
            var curApi = void 0;
            var progressW = void 0;
            var progressCurW = void 0;
            var progressStart = false;
            var HammerProgress = new Hammer.Manager($curProgressCont[0]);
            HammerProgress.add(new Hammer.Pan({
                pointers: 1,
                threshold: 0
            }));
            HammerProgress.add(new Hammer.Press({
                time: 1
            }));
            HammerProgress.on('pan press pressup', function (e) {
                // start
                if (e.type === 'press' || progressStart === false) {
                    progressBusy = true;
                    progressW = $curProgressCont.width();
                    progressStart = e.pointers[0].clientX - $curProgressCont[0].getBoundingClientRect().left;
                    $curProgressCont.addClass('hover');
                }

                // each
                progressCurW = Math.min(1, Math.max(0, (progressStart + e.deltaX) / progressW));
                $curProgres[0].style.width = progressCurW * 100 + '%';

                // end
                if (e.isFinal || e.type === 'pressup') {
                    if (!curApi) {
                        curApi = $curProgressCont.parents('.nk-audio-player-main, .nk-audio-plain')[0].audioAPI;
                    }
                    curApi && curApi.seek(progressCurW);

                    $curProgressCont.removeClass('hover');
                    progressBusy = false;
                    progressStart = false;
                }

                e.preventDefault();
            });
        });
    }

    var self = this;
    soundManager.onready(function () {
        if (playlist.length) {
            // find first active playlist
            var activePlaylist = void 0;
            for (var k in playlist) {
                if (playlist[k].isActive) {
                    activePlaylist = playlist[k];
                    break;
                }
            }

            player = new Player({
                playlist: activePlaylist,
                start: 0,
                volume: 100,
                autoplay: $player.hasClass('nk-audio-player-autoplay'),
                pinned: $player.hasClass('nk-audio-player-pin')
            });

            $player[0].audioAPI = player;
            self.audioPlayer = player;
        }

        if ($playersPlain.length) {
            $playersPlain.each(function () {
                this.audioAPI = new PlayersPlain($(this));
            });
        }
    });
}

/*------------------------------------------------------------------

  Facebook

-------------------------------------------------------------------*/
function _initFacebook() {
    if (!$('.fb-page').length) {
        return;
    }
    var self = this;

    $body.append('<div id="fb-root"></div>');

    (function (d, s, id) {
        if (location.protocol === 'file:') {
            return;
        }
        var js = void 0,
            fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
        fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    // resize on facebook widget loaded
    window.fbAsyncInit = function () {
        FB.Event.subscribe('xfbml.render', function () {
            self.debounceResize();
        });
    };
}

/*------------------------------------------------------------------

  Init Instagram

-------------------------------------------------------------------*/
function _initInstagram() {
    var self = this;
    var $instagram = $('.nk-instagram');
    if (!$instagram.length) {
        return;
    }

    /**
     * Templating a instagram item using '{{ }}' braces
     * @param  {Object} data Instagram item details are passed
     * @return {String} Templated string
     */
    function templating(data, temp) {
        var temp_variables = ['link', 'image', 'caption'];

        for (var _i2 = 0, len = temp_variables.length; _i2 < len; _i2++) {
            temp = temp.replace(new RegExp('{{' + temp_variables[_i2] + '}}', 'gi'), data[temp_variables[_i2]]);
        }

        return temp;
    }

    $instagram.each(function () {
        var $this = $(this);
        var options = {
            userID: $this.attr('data-instagram-user-id') || null,
            count: $this.attr('data-instagram-count') || 6,
            template: $this.attr('data-instagram-template') || self.options.templates.instagram,
            quality: $this.attr('data-instagram-quality') || 'sm', // sm, md, lg
            loadingText: self.options.templates.instagramLoadingText,
            failText: self.options.templates.instagramFailText,
            apiPath: self.options.templates.instagramApiPath
        };

        $this.html('<div class="col-xs-12">' + options.loadingText + '</div>');

        // Fetch instagram images
        $.getJSON(options.apiPath, {
            userID: options.userID,
            count: options.count
        }, function (response) {
            $this.html('');

            for (var _i3 = 0; _i3 < options.count; _i3++) {
                var instaItem = false;
                if (response[_i3]) {
                    instaItem = response[_i3];
                } else if (response.statuses && response.statuses[_i3]) {
                    instaItem = response.statuses[_i3];
                } else {
                    break;
                }

                var resolution = 'thumbnail';
                if (options.quality === 'md') {
                    resolution = 'low_resolution';
                }
                if (options.quality === 'lg') {
                    resolution = 'standard_resolution';
                }

                var temp_data = {
                    link: instaItem.link,
                    image: instaItem.images[resolution].url,
                    caption: instaItem.caption
                };

                $this.append(templating(temp_data, options.template));
            }

            // resize window
            self.debounceResize();
        }).fail(function (a) {
            $this.html('<div class="col-xs-12">' + options.failText + '</div>');
            $.error(a.responseText);
        });
    });
}

/*------------------------------------------------------------------

  Init Twitter

-------------------------------------------------------------------*/
function _initTwitter() {
    var self = this;
    var $twtFeeds = $('.nk-twitter-list');
    if (!$twtFeeds.length) {
        return;
    }

    /**
     * Templating a tweet using '{{ }}' braces
     * @param  {Object} data Tweet details are passed
     * @return {String}      Templated string
     */
    function templating(data, temp) {
        var temp_variables = ['date', 'tweet', 'avatar', 'url', 'retweeted', 'screen_name', 'user_name'];

        for (var _i4 = 0, len = temp_variables.length; _i4 < len; _i4++) {
            temp = temp.replace(new RegExp('{{' + temp_variables[_i4] + '}}', 'gi'), data[temp_variables[_i4]]);
        }

        return temp;
    }

    $twtFeeds.each(function () {
        var $this = $(this);
        var options = {
            username: $this.attr('data-twitter-user-name') || null,
            list: null,
            hashtag: $this.attr('data-twitter-hashtag') || null,
            count: $this.attr('data-twitter-count') || 2,
            hideReplies: $this.attr('data-twitter-hide-replies') === 'true' ? true : false,
            template: $this.attr('data-twitter-template') || self.options.templates.twitter,
            loadingText: self.options.templates.twitterLoadingText,
            failText: self.options.templates.twitterFailText,
            apiPath: self.options.templates.twitterApiPath
        };

        // Set loading
        $this.html('<span>' + options.loadingText + '</span>');

        // Fetch tweets
        $.getJSON(options.apiPath, {
            username: options.username,
            list: options.list,
            hashtag: options.hashtag,
            count: options.count,
            exclude_replies: options.hideReplies
        }, function (twt) {
            $this.html('');

            for (var _i5 = 0; _i5 < options.count; _i5++) {
                var tweet = false;
                if (twt[_i5]) {
                    tweet = twt[_i5];
                } else if (twt.statuses && twt.statuses[_i5]) {
                    tweet = twt.statuses[_i5];
                } else {
                    break;
                }

                var temp_data = {
                    user_name: tweet.user.name,
                    date: tweet.date_formatted,
                    tweet: tweet.text_entitled,
                    avatar: '<img src="' + tweet.user.profile_image_url + '" />',
                    url: 'https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str,
                    retweeted: tweet.retweeted,
                    screen_name: '@' + tweet.user.screen_name
                };

                $this.append(templating(temp_data, options.template));
            }

            // resize window
            self.debounceResize();
        }).fail(function (a) {
            $this.html(options.failText);
            $.error(a.responseText);
        });
    });
}

/*------------------------------------------------------------------

  Init Documentation

-------------------------------------------------------------------*/
function _initDoc() {
    var self = this;
    var $menu = $('.nk-doc-links');
    var $firstBlocks = $('.nk-doc > .nk-doc-item');
    var $childBlocks = $('.nk-doc > .nk-doc-item > .nk-doc-item');
    var $blocks = $firstBlocks.add($childBlocks);
    var blocks = [];

    if (!$blocks.length) {
        return;
    }

    // get block by attr
    function getBlocksBy(by, val, getFrom) {
        var result = [];
        getFrom = getFrom || blocks;
        for (var k = 0; k < getFrom.length; k++) {
            if (getFrom[k] && typeof getFrom[k][by] !== 'undefined' && getFrom[k][by] === val) {
                result.push(getFrom[k]);
            }
        }
        return result;
    }

    // prepare links
    var uniqID = 0;
    var hashID = 0;
    function prepareLinks($block) {
        if (!hashID) {
            uniqID++;
        }
        var title = $block.find('> h2, > h3').eq(0).text();
        var hash = 'doc-' + title.replace(/\s+/g, '-').toLowerCase() + (hashID ? '-' + hashID : '');

        if (getBlocksBy('hash', hash).length) {
            hashID++;
            return prepareLinks($block);
        }

        $block.attr('data-id', uniqID);

        // add parent value if this is child
        var parent = false;
        var $parent = $block.parents('.nk-doc-item:eq(0)');
        if ($parent.length) {
            parent = parseInt($parent.attr('data-id'), 10);
        }

        hashID = 0;

        return {
            id: uniqID,
            title: title,
            hash: hash,
            $block: $block,
            parent: parent
        };
    }
    $firstBlocks.each(function () {
        var block = prepareLinks($(this));
        blocks.push(block);
    });
    $childBlocks.each(function () {
        var block = prepareLinks($(this));
        blocks.push(block);
    });

    // activate block
    var firstRun = 1;
    function activeBlock(id) {
        // add hash
        var selectedBlock = getBlocksBy('id', id)[0];
        var issetChilds = getBlocksBy('parent', id)[0];
        if (issetChilds) {
            activeBlock(issetChilds.id);
            return;
        }
        if (selectedBlock) {
            // hide all blocks
            $blocks.hide();

            // activate menu item
            $menu.find('[data-id]').removeClass('active');
            $menu.find('[data-id=' + id + ']').addClass('active');

            // activate parent menu item
            var parentBlock = getBlocksBy('id', selectedBlock.parent)[0];
            if (parentBlock) {
                $menu.find('[data-id=' + selectedBlock.parent + ']').addClass('active');

                // show parent
                parentBlock.$block.show();
            }

            // show submenu
            var $sub_menus = $menu.find('[data-id] + ul');
            $sub_menus.each(function () {
                var $this = $(this);
                var isActive = !!$this.find('[data-id].active').length;
                var isOpened = $this.hasClass('opened');

                // open
                if (isActive && !isOpened) {
                    $this.css('height', '');
                    $this.show();
                    var h = $this.innerHeight();
                    $this.hide();
                    tween.set($this, {
                        height: 0
                    });
                    tween.to($this, 0.4, {
                        height: h,
                        display: 'block',
                        onComplete: function onComplete() {
                            self.debounceResize();
                        }
                    });
                    $this.addClass('opened');

                    // close
                }

                if (!isActive && isOpened) {
                    tween.to($this, 0.4, {
                        height: 0,
                        display: 'none',
                        onComplete: function onComplete() {
                            self.debounceResize();
                        }
                    });
                    $this.removeClass('opened');
                }
            });

            // show current
            selectedBlock.$block.show();

            location.hash = selectedBlock.hash;

            // resize and scroll to top
            if (!firstRun) {
                self.debounceResize();
                self.scrollTo($('.nk-header-title').next());
            }
            firstRun = 0;
        }
    }

    // create side menu
    var menuTemplate = '';
    for (var k = 0; k < blocks.length; k++) {
        if (blocks[k].parent === false) {
            var childs = getBlocksBy('parent', blocks[k].id);

            menuTemplate += '<li><div data-id="' + blocks[k].id + '">' + blocks[k].title + (childs.length ? ' <sup>[' + childs.length + ']</sup>' : '') + '</div>';

            // add childs
            if (childs.length) {
                menuTemplate += '<ul>';
                for (var _i6 = 0; _i6 < childs.length; _i6++) {
                    menuTemplate += '<li><div data-id="' + childs[_i6].id + '">' + childs[_i6].title + '</div>';
                }
                menuTemplate += '</ul>';
            }

            menuTemplate += '</li>';
        }
    }
    $menu.html('<ul>' + menuTemplate + '</ul>');
    $menu.on('click', '[data-id]:not(.active)', function () {
        activeBlock(parseInt($(this).attr('data-id'), 10));
    });

    // activate default block
    if (location.hash) {
        var curBlock = getBlocksBy('hash', location.hash.replace('#', ''));
        if (curBlock[0]) {
            activeBlock(curBlock[0].id);
        }
    } else {
        activeBlock(blocks[0].id);
    }
}

/*------------------------------------------------------------------

  Init Plugin Sticky Sidebar

-------------------------------------------------------------------*/
function _initPluginStickySidebar() {
    if (typeof $.fn.stick_in_parent === 'undefined') {
        return;
    }

    $('.nk-sidebar-sticky').each(function () {
        $(this).wrapInner('<div>').children().stick_in_parent({
            parent: $(this).parent()
        });
    });
}

/* FastClick */
function _initPluginFastClick() {
    if (typeof FastClick !== 'undefined') {
        FastClick.attach(document.body);
    }
}

/* Nano Scroller */
function _initPluginNano($context) {
    if (typeof $.fn.nanoScroller !== 'undefined') {
        ($context || $doc).find('.nano').nanoScroller();
    }
}

/* Jarallax */
function _initPluginJarallax() {
    if (typeof $.fn.jarallax === 'undefined') {
        return;
    }
    var self = this;

    // header parallax
    var $parallaxHeader = $('.nk-header-title-parallax, .nk-header-title-parallax-opacity').eq(0);
    if ($parallaxHeader.length) {
        (function () {
            var $headerImage = $parallaxHeader.find('> .bg-image > div');
            var $headerContent = $parallaxHeader.find('> .bg-image ~ *');
            var headerParallaxScroll = $parallaxHeader.hasClass('nk-header-title-parallax');
            var headerParallaxOpacity = $parallaxHeader.hasClass('nk-header-title-parallax-opacity');
            $parallaxHeader.jarallax({
                type: 'custom',
                imgSrc: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
                imgWidth: 1,
                imgHeight: 1,
                onScroll: function onScroll(calc) {
                    var scrollImg = Math.min(100, 100 * (1 - calc.visiblePercent));
                    var scrollInfo = Math.min(50, 50 * (1 - calc.visiblePercent));

                    // fix if top banner not on top
                    if (calc.beforeTop > 0) {
                        scrollImg = 0;
                        scrollInfo = 0;
                    }

                    if (headerParallaxScroll) {
                        $headerImage.css({
                            transform: 'translateY(' + scrollImg + 'px) translateZ(0)'
                        });
                        $headerContent.css({
                            transform: 'translateY(' + scrollInfo + 'px) translateZ(0)'
                        });
                    }
                    if (headerParallaxOpacity) {
                        $headerContent.css({
                            opacity: calc.visiblePercent < 0 || calc.beforeTop > 0 ? 1 : calc.visiblePercent
                        });
                    }
                }
            });
        })();
    }

    // footer parallax
    var $parallaxFooter = $('.nk-footer-parallax, .nk-footer-parallax-opacity').eq(0);
    if ($parallaxFooter.length) {
        (function () {
            var $footerImage = $parallaxFooter.find('> .bg-image > div');
            var $footerContent = $parallaxFooter.find('> .bg-image ~ *');
            var footerParallaxScroll = $parallaxFooter.hasClass('nk-footer-parallax');
            var footerParallaxOpacity = $parallaxFooter.hasClass('nk-footer-parallax-opacity');
            $parallaxFooter.jarallax({
                type: 'custom',
                imgSrc: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
                imgWidth: 1,
                imgHeight: 1,
                onScroll: function onScroll(calc) {
                    var scrollImg = -Math.min(100, 100 * (1 - calc.visiblePercent));
                    var scrollInfo = -Math.min(50, 50 * (1 - calc.visiblePercent));
                    if (footerParallaxScroll) {
                        $footerImage.css({
                            transform: 'translateY(' + scrollImg + 'px) translateZ(0)'
                        });
                        $footerContent.css({
                            transform: 'translateY(' + scrollInfo + 'px) translateZ(0)'
                        });
                    }
                    if (footerParallaxOpacity) {
                        $footerContent.css({
                            opacity: calc.visiblePercent < 0 ? 1 : calc.visiblePercent
                        });
                    }
                }
            });
        })();
    }

    // video backgrounds
    $('.bg-video[data-video]').each(function () {
        $(this).attr('data-jarallax-video', $(this).attr('data-video'));
        $(this).removeAttr('data-video');
    });

    // primary parallax
    $('.bg-image-parallax, .bg-video-parallax').jarallax({
        speed: self.options.parallaxSpeed
    });

    // video without parallax
    $('.bg-video:not(.bg-video-parallax)').jarallax({
        speed: 1
    });
}

/* Flickity */
function _initPluginFlickity() {
    if (typeof window.Flickity === 'undefined') {
        return;
    }

    var self = this;

    function addDefaultArrows($carousel) {
        $('<div class="nk-flickity-arrow nk-flickity-arrow-prev"><span class="nk-icon-arrow-left"></span></div>').on('click', function () {
            $carousel.flickity('previous');
        }).appendTo($carousel);

        $('<div class="nk-flickity-arrow nk-flickity-arrow-next"><span class="nk-icon-arrow-right"></span></div>').on('click', function () {
            $carousel.flickity('next');
        }).appendTo($carousel);
    }

    function updateCustomArrows($carousel) {
        var data = $carousel.children('.nk-carousel-inner').data('flickity');
        var currIndex = data.selectedIndex;
        var nextIndex = void 0;
        var prevIndex = void 0;

        // get next and prev cells
        if (currIndex === 0) {
            nextIndex = 1;
            prevIndex = data.cells.length - 1;
        } else if (currIndex === data.cells.length - 1) {
            nextIndex = 0;
            prevIndex = data.cells.length - 2;
        } else {
            nextIndex = currIndex + 1;
            prevIndex = currIndex - 1;
        }
        var $nextCell = $(data.cells[nextIndex].element);
        var $prevCell = $(data.cells[prevIndex].element);
        var $currCell = $(data.cells[currIndex].element);

        // get name and sources
        var nextName = $nextCell.find('.nk-carousel-item-name').text();
        var prevName = $prevCell.find('.nk-carousel-item-name').text();
        var currName = $currCell.find('.nk-carousel-item-name').html();
        var currLinks = $currCell.find('.nk-carousel-item-links').html();

        // add info to buttons
        $carousel.find('.nk-carousel-next > .nk-carousel-arrow-name').html(nextName);
        $carousel.find('.nk-carousel-prev > .nk-carousel-arrow-name').html(prevName);
        $carousel.find('.nk-carousel-current > .nk-carousel-name').html(currName);
        $carousel.find('.nk-carousel-current > .nk-carousel-links').html(currLinks);
    }

    // prevent click event fire when drag carousel
    function noClickEventOnDrag($carousel) {
        $carousel.on('dragStart', function () {
            $(this).find('.flickity-viewport').addClass('is-dragging');
        });
        $carousel.on('dragEnd', function () {
            $(this).find('.flickity-viewport').removeClass('is-dragging');
        });
    }

    // carousel 1
    var $carousel1 = $('.nk-carousel');
    if ($carousel1.length) {
        $carousel1.children('.nk-carousel-inner').each(function () {
            $(this).flickity({
                pageDots: $(this).parent().attr('data-dots') === 'true' || false,
                autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
                prevNextButtons: false,
                wrapAround: true,
                cellAlign: $(this).parent().attr('data-cell-align') || 'center'
            });
            if ($(this).parent().attr('data-arrows') === 'true') {
                addDefaultArrows($(this));
            }
            updateCustomArrows($(this).parent());
        }).on('cellSelect', function () {
            updateCustomArrows($(this).parent());
        });
        $carousel1.on('click', '.nk-carousel-next', function () {
            $(this).parent().children('.nk-carousel-inner').flickity('next');
        });
        $carousel1.on('click', '.nk-carousel-prev', function () {
            $(this).parent().children('.nk-carousel-inner').flickity('previous');
        });
        noClickEventOnDrag($carousel1.children('.nk-carousel-inner'));
    }

    // carousel 2
    $('.nk-carousel-2 > .nk-carousel-inner').each(function () {
        $(this).flickity({
            pageDots: $(this).parent().attr('data-dots') === 'true' || false,
            autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
            prevNextButtons: false,
            wrapAround: true,
            imagesLoaded: true,
            cellAlign: $(this).parent().attr('data-cell-align') || 'center'
        });
        if ($(this).parent().attr('data-arrows') === 'true') {
            addDefaultArrows($(this));
        }
        noClickEventOnDrag($(this));
    });

    // carousel 3
    var $carousel3 = $('.nk-carousel-3');
    // set height for items
    function setHeightCarousel3() {
        $carousel3.each(function () {
            var $allImages = $(this).find('img');
            var size = $(this).attr('data-size') || 0.8;
            var resultH = wndH * size;
            var maxItemW = Math.min($(this).parent().width(), wndW) * size;
            $allImages.each(function () {
                if (this.naturalWidth && this.naturalHeight && resultH * this.naturalWidth / this.naturalHeight > maxItemW) {
                    resultH = maxItemW * this.naturalHeight / this.naturalWidth;
                }
            });
            $allImages.css('height', resultH);
            $(this).children('.nk-carousel-inner').flickity('reposition');
        });
    }
    if ($carousel3.length) {
        $carousel3.children('.nk-carousel-inner').each(function () {
            $(this).flickity({
                pageDots: $(this).parent().attr('data-dots') === 'true' || false,
                autoPlay: parseFloat($(this).parent().attr('data-autoplay')) || false,
                prevNextButtons: false,
                wrapAround: true,
                imagesLoaded: true,
                cellAlign: $(this).parent().attr('data-cell-align') || 'center'
            });
            updateCustomArrows($(this).parent());
            if ($(this).parent().attr('data-arrows') === 'true') {
                addDefaultArrows($(this));
            }
        }).on('cellSelect', function () {
            updateCustomArrows($(this).parent());
        });
        $carousel3.on('click', '.nk-carousel-next', function () {
            $(this).parents('.nk-carousel-3:eq(0)').children('.nk-carousel-inner').flickity('next');
        });
        $carousel3.on('click', '.nk-carousel-prev', function () {
            $(this).parents('.nk-carousel-3:eq(0)').children('.nk-carousel-inner').flickity('previous');
        });
        setHeightCarousel3();
        self.debounceResize(setHeightCarousel3);
        noClickEventOnDrag($carousel3.children('.nk-carousel-inner'));
    }

    // update products carousel
    var $storeCarousel = $('.nk-carousel-1, .nk-carousel-2, .nk-carousel-3').filter('.nk-store');
    function updateStoreProducts() {
        $storeCarousel.each(function () {
            var currentTallest = 0;
            var currentRowStart = 0;
            var rowDivs = [];
            var topPosition = 0;
            var currentDiv = 0;
            var $el = void 0;
            $(this).find('.nk-product').each(function () {
                $el = $(this);
                $el.css('height', '');
                topPosition = $el.position().top;

                if (currentRowStart !== topPosition) {
                    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                        rowDivs[currentDiv].css('height', currentTallest);
                    }
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPosition;
                    currentTallest = $el.innerHeight();
                    rowDivs.push($el);
                } else {
                    rowDivs.push($el);
                    currentTallest = currentTallest < $el.innerHeight() ? $el.innerHeight() : currentTallest;
                }
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].css('height', currentTallest);
                }
            });
        });
    }
    if ($storeCarousel.length) {
        self.debounceResize(updateStoreProducts);
        updateStoreProducts();
    }
}

/* Isotope */
function _initPluginIsotope() {
    if (typeof window.Isotope === 'undefined') {
        return;
    }
    var self = this;

    $('.nk-isotope').each(function () {
        var $grid = $(this).isotope({
            itemSelector: '.nk-isotope-item'
        });
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });
        $grid.on('arrangeComplete', function () {
            self.debounceResize();
        });

        // filter
        var $filter = $(this).prev('.nk-isotope-filter');
        if ($filter.length) {
            $filter.on('click', '[data-filter]', function (e) {
                e.preventDefault();
                var filter = $(this).attr('data-filter');

                $(this).addClass('active').siblings().removeClass('active');

                $grid.isotope({
                    filter: filter === '*' ? '' : '[data-filter*=' + filter + ']'
                });
            });
        }
    });
}

/* PhotoSwipe */
function _initPluginPhotoswipe() {
    var $gallery = $('.nk-popup-gallery');
    if (typeof PhotoSwipe === 'undefined' || !$gallery.length) {
        return;
    }

    // prepare photoswipe markup
    var markup = '<div id="gallery" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">\n          <div class="pswp__bg"></div>\n          <div class="pswp__scroll-wrap">\n            <div class="pswp__container">\n              <div class="pswp__item"></div>\n              <div class="pswp__item"></div>\n              <div class="pswp__item"></div>\n            </div>\n            <div class="pswp__ui pswp__ui--hidden">\n              <div class="pswp__top-bar">\n                <div class="pswp__counter"></div>\n                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>\n                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>\n                <div class="pswp__preloader">\n                  <div class="pswp__preloader__icn">\n                    <div class="pswp__preloader__cut">\n                      <div class="pswp__preloader__donut"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="pswp__loading-indicator"><div class="pswp__loading-indicator__line"></div></div>\n              <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>\n              <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>\n              <div class="pswp__caption">\n                <div class="pswp__caption__center">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>';
    $body.append(markup);

    // init code
    var parseThumbnailElements = function parseThumbnailElements(el) {
        var thumbElements = $(el).find('a.nk-gallery-item'),
            items = [],
            childElements = void 0,
            size = void 0,
            item = void 0;

        thumbElements.each(function () {
            childElements = $(this).find('img');
            size = (this.getAttribute('data-size') || '1920x1080').split('x');

            // create slide object
            item = {
                src: this.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10),
                author: this.getAttribute('data-author')
            };

            // save link to element for getThumbBoundsFn
            item.el = this;

            if (childElements.length > 0) {
                // thumbnail url
                item.msrc = childElements[0].getAttribute('src');
                if (childElements.length > 1) {
                    item.title = $(childElements).filter('.photoswipe-description').html();
                }
            }

            var mediumSrc = this.getAttribute('data-med') || item.src;
            if (mediumSrc) {
                size = (this.getAttribute('data-med-size') || this.getAttribute('data-size') || '1920x1080').split('x');
                // "medium-sized" image
                item.m = {
                    src: mediumSrc,
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };
            }
            // original image
            item.o = {
                src: item.src,
                w: item.w,
                h: item.h
            };
            items.push(item);
        });

        return items;
    };

    var openPhotoSwipe = function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = $('.pswp')[0],
            gallery = void 0,
            options = void 0,
            items = void 0;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {
            captionAndToolbarShowEmptyCaptions: false,
            mainClass: 'pswp--minimal--dark',
            barsSize: { top: 0, bottom: 0 },
            captionEl: true,
            fullscreenEl: false,
            shareEl: false,
            bgOpacity: 0.85,
            tapToClose: true,
            tapToToggleControls: false,

            // Function builds caption markup
            addCaptionHTMLFn: function addCaptionHTMLFn(item, captionEl) {
                // item      - slide object
                // captionEl - caption DOM element
                // isFake    - true when content is added to fake caption container
                //             (used to get size of next or previous caption)

                if (!item.title && !item.author) {
                    captionEl.children[0].innerHTML = '';
                    return false;
                }
                var caption = '';
                if (item.title) {
                    caption += item.title;
                }
                if (item.author) {
                    if (item.title) {
                        caption += '<br>';
                    }
                    caption += '<small>' + item.author + '</small>';
                }
                captionEl.children[0].innerHTML = caption;
                return true;
            },

            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function getThumbBoundsFn(idx) {
                // See Options->getThumbBoundsFn section of docs for more info
                var thumbnail = items[idx].el.children[0],
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            }
        };

        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid === index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }

        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);

        // see: http://photoswipe.com/documentation/responsive-images.html
        var realViewportWidth = void 0,
            useLargeImages = false,
            firstResize = true,
            imageSrcWillChange = void 0;

        gallery.listen('beforeResize', function () {
            var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
            dpiRatio = Math.min(dpiRatio, 2.5);
            realViewportWidth = gallery.viewportSize.x * dpiRatio;

            if (realViewportWidth >= 1200 || !gallery.likelyTouchDevice && realViewportWidth > 800 || screen.width > 1200) {
                if (!useLargeImages) {
                    useLargeImages = true;
                    imageSrcWillChange = true;
                }
            } else {
                if (useLargeImages) {
                    useLargeImages = false;
                    imageSrcWillChange = true;
                }
            }

            if (imageSrcWillChange && !firstResize) {
                gallery.invalidateCurrItems();
            }

            if (firstResize) {
                firstResize = false;
            }

            imageSrcWillChange = false;
        });

        gallery.listen('gettingData', function (idx, item) {
            if (useLargeImages) {
                item.src = item.o.src;
                item.w = item.o.w;
                item.h = item.o.h;
            } else {
                item.src = item.m.src;
                item.w = item.m.w;
                item.h = item.m.h;
            }
        });

        gallery.init();
    };

    var photoswipeParseHash = function photoswipeParseHash() {
        var hash = window.location.hash.substring(1),
            params = {};

        if (hash.length < 5) {
            // pid=1
            return params;
        }

        var vars = hash.split('&');
        for (var _i7 = 0; _i7 < vars.length; _i7++) {
            if (!vars[_i7]) {
                continue;
            }
            var pair = vars[_i7].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    // select all gallery elements
    var i = 0;
    $gallery.each(function () {
        var $thisGallery = $(this);
        $thisGallery.attr('data-pswp-uid', i + 1);

        $thisGallery.on('click', 'a.nk-gallery-item', function (e) {
            e.preventDefault();
            var index = 0;
            var clicked = this;
            $thisGallery.find('a.nk-gallery-item').each(function (idx) {
                if (this === clicked) {
                    index = idx;
                    return false;
                }
                return true;
            });
            openPhotoSwipe(index, $thisGallery[0]);
        });
        i++;
    });

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, $gallery.get(hashData.gid - 1), true, true);
    }
}

/* Bootstrap Tabs */
function _initPluginTabs() {
    var self = this;
    $wnd.on('shown.bs.tab', function () {
        self.debounceResize();
    });
}

/* Bootstrap Accordions */
function _initPluginAccordions() {
    var self = this;
    $wnd.on('shown.bs.collapse', function () {
        self.debounceResize();
    });

    // REMOVE IT WHEN THIS ISSUE WILL BE FIXED:
    // https://github.com/twbs/bootstrap/issues/18824
    if (typeof $.fn.collapse === 'undefined') {
        return;
    }
    var Util = function (n) {
        function t(n) {
            return {}.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        }function e(n) {
            return (n[0] || n).nodeType;
        }function r() {
            return { bindType: u.end, delegateType: u.end, handle: function handle(t) {
                    return n(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0;
                } };
        }function i() {
            if (window.QUnit) return !1;var n = document.createElement("bootstrap");for (var t in s) {
                if (void 0 !== n.style[t]) return { end: s[t] };
            }return !1;
        }function o(t) {
            var e = this,
                r = !1;return n(this).one(d.TRANSITION_END, function () {
                r = !0;
            }), setTimeout(function () {
                r || d.triggerTransitionEnd(e);
            }, t), this;
        }function a() {
            u = i(), n.fn.emulateTransitionEnd = o, d.supportsTransitionEnd() && (n.event.special[d.TRANSITION_END] = r());
        }var u = !1,
            s = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" },
            d = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(n) {
                do {
                    n += ~ ~(1e6 * Math.random());
                } while (document.getElementById(n));return n;
            }, getSelectorFromElement: function getSelectorFromElement(n) {
                var t = n.getAttribute("data-target");return t || (t = n.getAttribute("href") || "", t = /^#[a-z]/i.test(t) ? t : null), t;
            }, reflow: function reflow(n) {
                new Function("bs", "return bs")(n.offsetHeight);
            }, triggerTransitionEnd: function triggerTransitionEnd(t) {
                n(t).trigger(u.end);
            }, supportsTransitionEnd: function supportsTransitionEnd() {
                return Boolean(u);
            }, typeCheckConfig: function typeCheckConfig(n, r, i) {
                for (var o in i) {
                    if (i.hasOwnProperty(o)) {
                        var a = i[o],
                            u = r[o],
                            s = void 0;if (s = u && e(u) ? "element" : t(u), !new RegExp(a).test(s)) throw new Error(n.toUpperCase() + ": " + ('Option "' + o + '" provided type "' + s + '" ') + ('but expected type "' + a + '".'));
                    }
                }
            } };return a(), d;
    }(jQuery);

    var DATA_KEY = 'bs.collapse';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var TRANSITION_DURATION = 600;
    var Event = {
        SHOW: 'show' + EVENT_KEY,
        SHOWN: 'shown' + EVENT_KEY,
        HIDE: 'hide' + EVENT_KEY,
        HIDDEN: 'hidden' + EVENT_KEY,
        CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
        IN: 'in',
        COLLAPSE: 'collapse',
        COLLAPSING: 'collapsing',
        COLLAPSED: 'collapsed'
    };
    var Selector = {
        ACTIVES: '.panel > .in, .panel > .collapsing',
        DATA_TOGGLE: '[data-toggle="collapse"]'
    };
    $.fn.collapse.Constructor.prototype.show = function show() {
        var _this4 = this;
        if (this._isTransitioning || $(this._element).hasClass(ClassName.IN)) {
            return;
        }
        var actives;
        var activesData;
        if (this._parent) {
            actives = $.makeArray($(Selector.ACTIVES, this._parent));
            if (!actives.length) {
                actives = null;
            }
        }
        if (actives) {
            activesData = $(actives).data(DATA_KEY);
            if (activesData && activesData._isTransitioning) {
                return;
            }
        }
        var startEvent = $.Event(Event.SHOW);
        $(this._element).trigger(startEvent);
        if (startEvent.isDefaultPrevented()) {
            return;
        }
        if (actives) {
            $.fn.collapse.call($(actives), 'hide');
            if (!activesData) {
                $(actives).data(DATA_KEY, null);
            }
        }
        var dimension = this._getDimension();
        $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
        this._element.style[dimension] = 0;
        this._element.setAttribute('aria-expanded', true);
        if (this._triggerArray.length) {
            $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
        }
        this.setTransitioning(true);
        var complete = function complete() {
            $(_this4._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.IN);
            _this4._element.style[dimension] = '';
            _this4.setTransitioning(false);
            $(_this4._element).trigger(Event.SHOWN);
        };
        if (!Util.supportsTransitionEnd()) {
            complete();
            return;
        }
        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = 'scroll' + capitalizedDimension;
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
        this._element.style[dimension] = this._element[scrollSize] + 'px';
    };
}

/* Bootstrap Modals */
function _initPluginModals() {
    var speed = 0.4;

    $wnd.on('show.bs.modal', function (event) {
        var $modal = $(event.target);
        if (!$modal.hasClass('nk-modal')) {
            return;
        }

        var $dlg = $modal.children('.modal-dialog');
        $modal.show();
        var startHeight = $dlg.innerHeight();
        $modal.hide();

        tween.set($dlg, {
            height: 0,
            overflow: 'hidden'
        });
        // speed per 900px of height
        // max 0.8 and min 0.2
        tween.to($dlg, Math.min(0.8, Math.max(0.2, speed * startHeight / 900)), {
            height: startHeight,
            overflow: 'auto',
            delay: 0.2,
            ease: Linear.easeNone,
            onComplete: function onComplete() {
                tween.set($dlg, {
                    height: 'auto'
                });
            }
        });
    });
}

/* Countdown */
function _initPluginCountdown() {
    if (typeof $.fn.countdown === 'undefined' || typeof moment === 'undefined' || typeof moment.tz === 'undefined') {
        return;
    }
    var self = this;

    $('.nk-countdown').each(function () {
        var tz = $(this).attr('data-timezone');
        var end = $(this).attr('data-end');
        end = moment.tz(end, tz).toDate();

        $(this).countdown(end, function (event) {
            $(this).html(event.strftime(self.options.templates.countdown));
        });
    });
}

/* Typed.js */
function _initPluginTypedjs() {
    $('.nk-typed').each(function () {
        var $this = $(this);
        var strings = [];
        $this.children('span').each(function () {
            strings.push($(this).html());
        });
        if (!strings.length) {
            return;
        }
        $this.html('');

        var loop = $(this).attr('data-loop') ? $(this).attr('data-loop') === 'true' : true;
        var shuffle = $(this).attr('data-shuffle') ? $(this).attr('data-shuffle') === 'true' : false;
        var typeSpeed = $(this).attr('data-type-speed') ? parseInt($(this).attr('data-type-speed'), 10) : 30;
        var startDelay = $(this).attr('data-start-delay') ? parseInt($(this).attr('data-start-delay'), 10) : 0;
        var backSpeed = $(this).attr('data-back-speed') ? parseInt($(this).attr('data-back-speed'), 10) : 0;
        var backDelay = $(this).attr('data-back-delay') ? parseInt($(this).attr('data-back-delay'), 10) : 1000;
        var cursor = $(this).attr('data-cursor');
        cursor = cursor && cursor !== 'false' ? cursor : cursor === 'false' ? false : '|';

        $('<span>').appendTo($this).typed({
            strings: strings,
            typeSpeed: typeSpeed,
            startDelay: startDelay,
            backSpeed: backSpeed,
            backDelay: backDelay,
            shuffle: shuffle,
            loop: loop,
            loopCount: false,
            showCursor: !!cursor,
            cursorChar: cursor
        });

        // typed js used timeout from startDelay option
        setTimeout(function () {
            $this.addClass('ready');
        }, 0);
    });
}

/*------------------------------------------------------------------

  Khaki Class

-------------------------------------------------------------------*/

var KHAKI = function () {
    function KHAKI() {
        _classCallCheck(this, KHAKI);

        this.options = options;
    }

    _createClass(KHAKI, [{
        key: 'init',
        value: function init() {
            var self = this;
            self.initSharePlace();
            self.initNavbar();
            self.initNavbarSide();
            self.initNavbarFullscreen();
            self.initNavbarDropEffect1();
            self.initSearchBlock();
            self.initHeaderTitle();
            self.initSideButtons();
            self.initStore();
            self.initActionsLike();
            self.initBackgroundImages();
            self.initLinkEffects();
            self.initCounters();
            self.initAnchors();
            self.initEqualHeight();
            self.initLinesForBoxes();
            self.initImageBoxes();
            self.initVideoBlocks();
            self.initGIF();
            self.initFullPage();
            self.initQuickView();
            self.initInfoBoxes();
            self.initForms();
            self.initFormsMailChimp();
            self.initAudioPlayer();
            self.initFacebook();
            self.initInstagram();
            self.initTwitter();
            self.initShortcuts();
            self.initDoc();

            // init plugins
            self.initPluginStickySidebar();
            self.initPluginFastClick();
            self.initPluginNano();
            self.initPluginJarallax();
            self.initPluginFlickity();
            self.initPluginIsotope();
            self.initPluginPhotoswipe();
            self.initPluginTabs();
            self.initPluginAccordions();
            self.initPluginModals();
            self.initPluginCountdown();
            self.initPluginTypedjs();

            return self;
        }
    }, {
        key: 'setOptions',
        value: function setOptions(newOpts) {
            return _setOptions.call(this, newOpts);
        }
    }, {
        key: 'debounceResize',
        value: function debounceResize(func) {
            return _debounceResize.call(this, func);
        }
    }, {
        key: 'throttleScroll',
        value: function throttleScroll(callback) {
            return _throttleScroll.call(this, callback);
        }
    }, {
        key: 'bodyOverflow',
        value: function bodyOverflow(type) {
            return _bodyOverflow.call(this, type);
        }
    }, {
        key: 'isInViewport',
        value: function isInViewport($item, returnRect) {
            return _isInViewport.call(this, $item, returnRect);
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo($to, callback) {
            return _scrollTo.call(this, $to, callback);
        }
    }, {
        key: 'key',
        value: function key(name, callback) {
            return _key.call(this, name, callback);
        }
    }, {
        key: 'initShortcuts',
        value: function initShortcuts() {
            return _initShortcuts.call(this);
        }
    }, {
        key: 'initLinkEffects',
        value: function initLinkEffects() {
            return _initLinkEffects.call(this);
        }
    }, {
        key: 'initSharePlace',
        value: function initSharePlace() {
            return _initSharePlace.call(this);
        }
    }, {
        key: 'initHeaderTitle',
        value: function initHeaderTitle() {
            return _initHeaderTitle.call(this);
        }
    }, {
        key: 'initNavbar',
        value: function initNavbar() {
            return _initNavbar.call(this);
        }
    }, {
        key: 'initNavbarSide',
        value: function initNavbarSide() {
            return _initNavbarSide.call(this);
        }
    }, {
        key: 'initNavbarFullscreen',
        value: function initNavbarFullscreen() {
            return _initNavbarFullscreen.call(this);
        }
    }, {
        key: 'initNavbarDropEffect1',
        value: function initNavbarDropEffect1() {
            return _initNavbarDropEffect.call(this);
        }
    }, {
        key: 'initSearchBlock',
        value: function initSearchBlock() {
            return _initSearchBlock.call(this);
        }
    }, {
        key: 'initCounters',
        value: function initCounters() {
            return _initCounters.call(this);
        }
    }, {
        key: 'initSideButtons',
        value: function initSideButtons() {
            return _initSideButtons.call(this);
        }
    }, {
        key: 'initActionsLike',
        value: function initActionsLike() {
            return _initActionsLike.call(this);
        }
    }, {
        key: 'initStore',
        value: function initStore() {
            return _initStore.call(this);
        }
    }, {
        key: 'initBackgroundImages',
        value: function initBackgroundImages() {
            return _initBackgroundImages.call(this);
        }
    }, {
        key: 'parallaxMouseInit',
        value: function parallaxMouseInit() {
            return _parallaxMouseInit.call(this);
        }
    }, {
        key: 'initAnchors',
        value: function initAnchors() {
            return _initAnchors.call(this);
        }
    }, {
        key: 'initEqualHeight',
        value: function initEqualHeight() {
            return _initEqualHeight.call(this);
        }
    }, {
        key: 'initLinesForBoxes',
        value: function initLinesForBoxes() {
            return _initLinesForBoxes.call(this);
        }
    }, {
        key: 'initImageBoxes',
        value: function initImageBoxes() {
            return _initImageBoxes.call(this);
        }
    }, {
        key: 'initVideoBlocks',
        value: function initVideoBlocks() {
            return _initVideoBlocks.call(this);
        }
    }, {
        key: 'initGIF',
        value: function initGIF() {
            return _initGIF.call(this);
        }
    }, {
        key: 'initFullPage',
        value: function initFullPage() {
            return _initFullPage.call(this);
        }
    }, {
        key: 'initQuickView',
        value: function initQuickView() {
            return _initQuickView.call(this);
        }
    }, {
        key: 'initInfoBoxes',
        value: function initInfoBoxes() {
            return _initInfoBoxes.call(this);
        }
    }, {
        key: 'initForms',
        value: function initForms() {
            return _initForms.call(this);
        }
    }, {
        key: 'initFormsMailChimp',
        value: function initFormsMailChimp() {
            return _initFormsMailChimp.call(this);
        }
    }, {
        key: 'initAudioPlayer',
        value: function initAudioPlayer() {
            return _initAudioPlayer.call(this);
        }
    }, {
        key: 'initFacebook',
        value: function initFacebook() {
            return _initFacebook.call(this);
        }
    }, {
        key: 'initInstagram',
        value: function initInstagram() {
            return _initInstagram.call(this);
        }
    }, {
        key: 'initTwitter',
        value: function initTwitter() {
            return _initTwitter.call(this);
        }
    }, {
        key: 'initDoc',
        value: function initDoc() {
            return _initDoc.call(this);
        }
    }, {
        key: 'initPluginStickySidebar',
        value: function initPluginStickySidebar() {
            return _initPluginStickySidebar.call(this);
        }
    }, {
        key: 'initPluginFastClick',
        value: function initPluginFastClick() {
            return _initPluginFastClick.call(this);
        }
    }, {
        key: 'initPluginNano',
        value: function initPluginNano($context) {
            return _initPluginNano.call(this, $context);
        }
    }, {
        key: 'initPluginJarallax',
        value: function initPluginJarallax($context) {
            return _initPluginJarallax.call(this, $context);
        }
    }, {
        key: 'initPluginFlickity',
        value: function initPluginFlickity($context) {
            return _initPluginFlickity.call(this, $context);
        }
    }, {
        key: 'initPluginIsotope',
        value: function initPluginIsotope($context) {
            return _initPluginIsotope.call(this, $context);
        }
    }, {
        key: 'initPluginPhotoswipe',
        value: function initPluginPhotoswipe($context) {
            return _initPluginPhotoswipe.call(this, $context);
        }
    }, {
        key: 'initPluginTabs',
        value: function initPluginTabs($context) {
            return _initPluginTabs.call(this, $context);
        }
    }, {
        key: 'initPluginAccordions',
        value: function initPluginAccordions($context) {
            return _initPluginAccordions.call(this, $context);
        }
    }, {
        key: 'initPluginModals',
        value: function initPluginModals($context) {
            return _initPluginModals.call(this, $context);
        }
    }, {
        key: 'initPluginCountdown',
        value: function initPluginCountdown($context) {
            return _initPluginCountdown.call(this, $context);
        }
    }, {
        key: 'initPluginTypedjs',
        value: function initPluginTypedjs($context) {
            return _initPluginTypedjs.call(this, $context);
        }
    }]);

    return KHAKI;
}();

/*------------------------------------------------------------------

  Init Khaki

-------------------------------------------------------------------*/


window.Khaki = new KHAKI();
}());
