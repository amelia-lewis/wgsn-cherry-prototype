// ====================================================================================================
//  __  __ _            
// |  \/  (_)           
// | \  / |_ ___  ___   
// | |\/| | / __|/ __|  
// | |  | | \__ \ (__ _ 
// |_|  |_|_|___/\___(_)       
// ====================================================================================================

//- heart icons
$('.file-heart').on('click', function() {
  $(this).toggleClass('favourited');
});

$(document).ready(function() {
  if($('body').hasClass('workspace-favourites-view')) {
    $('.file-heart').removeClass('icon-heart').addClass('icon-heart-filled');
  };
});

// show/hide captions
showCaptions = function() {
  if ($('#toggle-show-caption').hasClass('toggle-on')) {
    $('.file').addClass('show-caption');
    $('.file .caption-container').show();
    $('.file').css({'padding-bottom': '62px'});
  } else if ($('#toggle-show-caption').hasClass('toggle-off')) {
    $('.file').removeClass('show-caption');
    $('.file').removeClass('show-filename');
    $('.file .caption-container').hide();
    $('.file').css({'padding-bottom': '0'});
    $('#toggle-show-filename').removeClass('toggle-on').addClass('toggle-off');
  }
};

//- show/hide filenames
showFilenames = function() {
  if ($('#toggle-show-filename').hasClass('toggle-on')) {
    $('.file').addClass('show-filename');
    $('.file .caption-container .filename').show();
    $('.file').css({'padding-bottom': '84px'});
  } else if ($('#toggle-show-filename').hasClass('toggle-off')) {
    $('.file').removeClass('show-filename');
    $('.file .caption-container .filename').hide();
    $('.file').css({'padding-bottom': '62px'});
  }
};

// toggle icons
$('.toggle').on('click', function() {
  $(this).toggleClass('toggle-on toggle-off');
  showCaptions();
  showFilenames();
});


// ====================================================================================================
//   _____      _           _         __   ____                     ______ _ _           
//  / ____|    | |         | |       / /  / __ \                   |  ____(_) |          
// | (___   ___| | ___  ___| |_     / /  | |  | |_ __   ___ _ __   | |__   _| | ___  ___ 
//  \___ \ / _ \ |/ _ \/ __| __|   / /   | |  | | '_ \ / _ \ '_ \  |  __| | | |/ _ \/ __|
//  ____) |  __/ |  __/ (__| |_   / /    | |__| | |_) |  __/ | | | | |    | | |  __/\__ \
// |_____/ \___|_|\___|\___|\__| /_/      \____/| .__/ \___|_| |_| |_|    |_|_|\___||___/
//                                              | |                                      
//                                              |_|                                      
// ====================================================================================================

// remove file utility buttons once in "select mode"
checkforhover = function(){
  // standard file
  if ($('.file').hasClass('selected')){
    
    // Count number of items selected
    var myaccount = $('.file.selected').length;
    
    // if only one file is selected
    if (myaccount == 1) {
      $('.displaying-results').text(myaccount + ' item selected');
      $('.btn-comments').removeClass('active');
    };
    
    // if more than one file is selected
    if (myaccount > 1) { 
      $('.btn-comments').removeClass('active');
    };
  } else {
    $('.file .flag-container').show();
    $('.file .file-utilities').show();
    $('.floating.context-menu .count').hide();
  };

  // detail view file
  if ($('.file-details-view').hasClass('selected')){
    
    // Count number of items selected
    var myaccount = $('.file-details-view.selected').length;
    
    // if only one file is selected
    if (myaccount == 1) {
      $('.displaying-results').text(myaccount + ' item selected');
      $('.btn-comments').removeClass('active');
    };
    
    // if more than one file is selected
    if (myaccount > 1) { 
      $('.btn-comments').removeClass('active');
    };
  } else {
    $('.floating.context-menu .count').hide();
  };
};


// ===== SELECT FILE ON SINGLE CLICK, OPEN FILE ON DOUBLE CLICK =====
// select file on single click, open file on double click
// var DELAY = 160, clicks = 0, timer = null;

// $(function(){
//   $('.file').click(function(e, evt) {
//       clicks++;  //count clicks

//       var selectedImg = $(this).find('img').prop('src');

//       if(clicks === 1) {
//         timer = setTimeout(function() {
//           if($(e.target).is('.file-heart, .btn, ul.context-menu, ul.context-menu li, ul.context-menu li span, ul.context-menu li .icon')) {
//             e.preventDefault();
//             return;
//           }
          
//           $(e.target).parentsUntil('.files-container').toggleClass('selected');
//           $('.context-menu').removeClass('show');
//           checkforhover();
//           clicks = 0; // after action performed, reset counter
//         }, DELAY);
//       } else {
//         clearTimeout(timer); // prevent single-click action
//         $('.overlay').addClass('show');
//         $('#item-detail-modal').addClass('show');
//         $('#item-detail-modal .modal-image-panel .img').css({"background-image": "url('" + selectedImg + "')"});
//         clicks = 0; // after action performed, reset counter

//         // file type
//         if ($(this).hasClass('file-type-image')) {
//           $('#item-detail-modal').addClass('file-type-image');
//         } else if ($(this).hasClass('file-type-report')) {
//           $('#item-detail-modal').addClass('file-type-report');
//         } else if ($(this).hasClass('file-type-video')) {
//           $('#item-detail-modal').addClass('file-type-video');
//         } else if ($(this).hasClass('file-type-color-card')) {
//           $('#item-detail-modal').addClass('file-type-color-card');
//         }
//       }
//   })

//   .on("dblclick", function(e){
//     e.preventDefault(); // cancel system double-click event
//   });
// });

// // select file from details view, open file on double click
// $(function(){
//   $('.file-details-view .thumb-container').click(function(e, evt) {
//       clicks++;  //count clicks

//       var selectedImg = $(this).find('img').prop('src');

//       if(clicks === 1) {
//         timer = setTimeout(function() {
//           if($(e.target).is('.file-utilites, .file-heart')) {
//             e.preventDefault();
//             return;
//           }
          
//           $(e.target).parentsUntil('.details-view').toggleClass('selected');
//           clicks = 0; // after action performed, reset counter
//         }, DELAY);
//       } else {
//         clearTimeout(timer); // prevent single-click action
//         $('.overlay').addClass('show');
//         $('#item-detail-modal').addClass('show');
//         $('#item-detail-modal .modal-image-panel .img').css({"background-image": "url('" + selectedImg + "')"});
//         clicks = 0; // after action performed, reset counter
//       }
//   })

//   .on("dblclick", function(e){
//     e.preventDefault(); // cancel system double-click event
//   });
// });
// ===== end SELECT FILE ON SINGLE CLICK, OPEN FILE ON DOUBLE CLICK =====


// ===== SELECT FILE ON CHECKBOX, OPEN FILE ON SINGLE CLICK =====
$('.file-checkbox').click(function() {
  $(this).parentsUntil('.files-container').toggleClass('selected');
});

multiFileSelect = function(e) {
  // Count number of items selected
  var myaccount = $('.file.selected').length;
  var selectedImg = $(e.target).find('img').prop('src');

  // if no files are selected
  if (myaccount == 0) {
    if($(e.target).is('.file-checkbox, .file-heart, .icon, .context-menu, .context-menu li, .context-menu li .icon, .context-menu li span')) {
      return;
    } else if(!($('body').hasClass('workspace-trash-view'))) {
      $('.overlay').addClass('show');
      $('#item-detail-modal').addClass('show');
      $('.item-detail-modal-controls').addClass('show');
      $('#item-detail-modal .modal-image-panel .img').css({"background-image": "url('" + selectedImg + "')"});

      // file type
      if ($(e.target).parent().hasClass('file-type-image')) {
        $('#item-detail-modal').addClass('file-type-image');
      } else if ($(e.target).parent().hasClass('file-type-report')) {
        $('#item-detail-modal').addClass('file-type-report');
      } else if ($(e.target).parent().hasClass('file-type-video')) {
        $('#item-detail-modal').addClass('file-type-video');
      } else if ($(e.target).parent().hasClass('file-type-color-card')) {
        $('#item-detail-modal').addClass('file-type-color-card');
      }
    };

  // if 1 file is selected
  } else if (myaccount == 1) {
    if($(e.target).is('.file-heart')) {
      return;
    } else {
      checkforhover();
      $('.page-content').addClass('has-files-selected');
      $('.displaying-results').text(myaccount + ' item selected');
      $(e.target).parent().addClass('selected');
    };

  // if 1 or more files are selected
  } else if (myaccount >= 1) {
    if($(e.target).is('.file-heart')) {
      return;
    } else {
      checkforhover();
      $('.page-content').addClass('has-files-selected');
      $('.displaying-results').text((myaccount + 1) + ' items selected');
      $(e.target).parent().addClass('selected');
    };
  };
};

$('.file').on('click', function(e) {
  multiFileSelect(e);
});


multiFileSelectDetailsView = function(e) {
  // Count number of items selected
  var myaccount = $('.file-details-view.selected').length;
  console.log(myaccount + "file detail");
  var selectedImg = $(e.target).children('img').prop('src');
  console.log(selectedImg);

  // if no files are selected
  if (myaccount == 0) {
    if($(e.target).is('.file-checkbox, .file-heart')) {
      return;
    } else if(!($('body').hasClass('workspace-trash-view'))) {
      $('.overlay').addClass('show');
      $('#item-detail-modal').addClass('show');
      $('.item-detail-modal-controls').addClass('show');
      $('#item-detail-modal .modal-image-panel .img').css({"background-image": "url('" + selectedImg + "')"});

      // file type
      if ($(e.target).parent().hasClass('file-type-image')) {
        $('#item-detail-modal').addClass('file-type-image');
      } else if ($(e.target).parent().hasClass('file-type-report')) {
        $('#item-detail-modal').addClass('file-type-report');
      } else if ($(e.target).parent().hasClass('file-type-video')) {
        $('#item-detail-modal').addClass('file-type-video');
      } else if ($(e.target).parent().hasClass('file-type-color-card')) {
        $('#item-detail-modal').addClass('file-type-color-card');
      }
    };

  // if 1 file is selected
  } else if (myaccount == 1) {
    if($(e.target).is('.file-heart')) {
      return;
    } else {
      checkforhover();
      $('.page-content').addClass('has-files-selected');
      $('.displaying-results').text(myaccount + ' item selected');
      $(e.target).parentsUntil('details-view').addClass('selected');
    };

  // if 1 or more files are selected
  } else if (myaccount >= 1) {
    if($(e.target).is('.file-heart')) {
      return;
    } else {
      checkforhover();
      $('.page-content').addClass('has-files-selected');
      $('.displaying-results').text((myaccount + 1) + ' items selected');
      $(e.target).parentsUntil('details-view').addClass('selected');
    };
  };
};

$('.file-details-view .thumb-container').on('click', function(e) {
  multiFileSelectDetailsView(e);
});
// ===== end SELECT FILE ON CHECKBOX, OPEN FILE ON SINGLE CLICK =====


// select all files
$('.select-all').click(function() {
  if ($('.file').length == $('.file.selected').length) {
    $('.file').removeClass('selected');
    $('.page-content').removeClass('has-files-selected');
  } else {
    $('.file').addClass('selected');
    $('.page-content').addClass('has-files-selected');
  }

  if ($('.file-details-view').length == $('.file-details-view.selected').length) {
    $('.file-details-view').removeClass('selected');
    $('.page-content').removeClass('has-files-selected');
  } else {
    $('.file-details-view').addClass('selected');
  }
});

// click anywhere on the screen to close the context menus and deselect all items
$('.page-content').click(function(e, evt) {
  if($('.file').hasClass('selected')) {
    if($(e.target).is('.btn-view-option, .select-all')) {
        return;
    } else {
      $(".file").removeClass("selected");
      $('.page-content').removeClass('has-files-selected');
      $(".context-menu").removeClass("show");
      $('.select-all').prop('checked', false);
      $("#floating-item-context-menu").removeClass("show");
      checkforhover();
    }
  }
});

$(".file").click(function(e) {
  e.stopPropagation();
  return false;
});


// ====================================================================================================
//   _____            _            _     __  __                      
//  / ____|          | |          | |   |  \/  |                     
// | |     ___  _ __ | |_ _____  _| |_  | \  / | ___ _ __  _   _ ___ 
// | |    / _ \| '_ \| __/ _ \ \/ / __| | |\/| |/ _ \ '_ \| | | / __|
// | |___| (_) | | | | ||  __/>  <| |_  | |  | |  __/ | | | |_| \__ \
//  \_____\___/|_| |_|\__\___/_/\_\\__| |_|  |_|\___|_| |_|\__,_|___/
// ====================================================================================================

//- item context menu
$('.file .btn-item-menu').on('click', function() {
  $(this).siblings('#item-context-menu').toggleClass('show');
});

// - board context menu
$(".board-row .icon-ellipsis").click(function(e){
  // event.preventDefault();
  $(".context-menu").removeClass("open"); 
  
  var posX = $(this).offset().left, posY = $(this).offset().top;
  $("#floating-board-context-menu").addClass('show');
  $("#floating-board-context-menu").css({"left": (e.pageX), "top":(e.pageY)});
});

// prevent link from loading when clicking the ellipsis/context menu on the link row
$('a.board-row').click(function(e, evt) {
  if($(e.target).is('.icon-ellipsis, .context-menu, .context-menu li')) {
    e.preventDefault();
    return;
  }
});

//- utility row settings context menu
$('.btn-settings').on('click', function() {
  $('#utility-row-settings-context-menu').toggleClass('show');
});

//- saved searches context menu
$('.btn-saved-searches').on('click', function() {
  $(this).toggleClass('active');
  $('#saved-searches-context-menu').toggleClass('show');
  $('body').toggleClass('overflow-hidden');
});

//- notifications context menu
$('.btn-notifications').on('click', function() {
  $('#message-notifications-context-menu').removeClass('show');
  $('#notifications-context-menu').toggleClass('show');
  $('body').toggleClass('overflow-hidden');
});

//- close context menu
$('.context-menu').click(function(e, evt) {
  if($(e.target).is('.toggle, form input, .context-menu .btn-view-option-container .btn-view-option, .context-menu .btn-view-option-container .btn-view-option .icon')) {
    // e.preventDefault();
    return;
  } else {
    $('.context-menu').removeClass('show');
  }
});

// floating item context menu
$(".file").contextmenu(function(e){
  $(this).addClass("selected");
  $("#floating-item-context-menu .block-ver-xxs:nth-of-type(1)").show();
  $("#floating-item-context-menu .block-ver-xxs:nth-of-type(2)").show();
  checkforhover();
  event.preventDefault();
  $(".context-menu").removeClass("open"); 
  
  var posX = $(this).offset().left, posY = $(this).offset().top;
  $("#floating-item-context-menu").addClass('show');
  $("#floating-item-context-menu").css({"left": (e.pageX), "top":(e.pageY)});

  // Count number of items selected
  var myaccount = $('.file.selected').length;
    
  // if more than one file is selected, hide 'open'
  if(myaccount > 1) {
    $("#floating-item-context-menu .block-ver-xxs:nth-of-type(1) span").text(myaccount + " items selected");
    $("#floating-item-context-menu .block-ver-xxs:nth-of-type(2)").hide();
  } else {
    $("#floating-item-context-menu .block-ver-xxs:nth-of-type(1)").hide();
  }
});

// floating board context menu
$(".board-row").contextmenu(function(e){
  event.preventDefault();
  $(".context-menu").removeClass("open"); 
  
  var posX = $(this).offset().left, posY = $(this).offset().top;
  $("#floating-board-context-menu").addClass('show');
  $("#floating-board-context-menu").css({"left": (e.pageX), "top":(e.pageY)});
});


// ====================================================================================================
//   _____      _ _                    _                             _   
//  / ____|    | | |                  | |                           | |  
// | |     ___ | | | __ _  __ _  ___  | |     __ _ _   _  ___  _   _| |_ 
// | |    / _ \| | |/ _` |/ _` |/ _ \ | |    / _` | | | |/ _ \| | | | __|
// | |___| (_) | | | (_| | (_| |  __/ | |___| (_| | |_| | (_) | |_| | |_ 
//  \_____\___/|_|_|\__,_|\__, |\___| |______\__,_|\__, |\___/ \__,_|\__|
//                         __/ |                    __/ |                
//                        |___/                    |___/                 
// ====================================================================================================

function collage(height) {
  $('.collage').collagePlus({
    'allowPartialLastRow' : true,
    'fadeSpeed'           : 1000,
    'targetHeight'        : height
  });
};

collage(400);

var resizeTimer = null;
$(window).bind('resize', function() {
  // hide all the images until we resize them
  // set the element you are scaling i.e. the first child nodes of ```.Collage``` to opacity 0
  $('.collage .Image_Wrapper').css("opacity", 0);
  // set a timer to re-apply the plugin
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout(collage, 200);
});


// ====================================================================================================
// __      ___                 _______ _ _         ____        _   _                 
// \ \    / (_)               |__   __(_) |       / __ \      | | (_)                
//  \ \  / / _  _____      __    | |   _| | ___  | |  | |_ __ | |_ _  ___  _ __  ___ 
//   \ \/ / | |/ _ \ \ /\ / /    | |  | | |/ _ \ | |  | | '_ \| __| |/ _ \| '_ \/ __|
//    \  /  | |  __/\ V  V /     | |  | | |  __/ | |__| | |_) | |_| | (_) | | | \__ \
//     \/   |_|\___| \_/\_/      |_|  |_|_|\___|  \____/| .__/ \__|_|\___/|_| |_|___/
//                                                      | |                          
//                                                      |_|                          
// ====================================================================================================

$('.btn-view-option-sm').on('click', function() {
  $(this).removeClass('disabled');
  $(this).siblings().addClass('disabled');
  $('.files-container .collage').show();
  $('.files-container .details-view').hide();
  collage(240);
});

$('.btn-view-option-md').on('click', function() {
  $(this).removeClass('disabled');
  $(this).siblings().addClass('disabled');
  $('.files-container .collage').show();
  $('.files-container .details-view').hide();
  collage(400);
});

$('.btn-view-option-lg').on('click', function() {
  $(this).removeClass('disabled');
  $(this).siblings().addClass('disabled');
  $('.files-container .collage').show();
  $('.files-container .details-view').hide();
  collage(1000);
});

$('.btn-view-option-details').on('click', function() {
  $(this).removeClass('disabled');
  $(this).siblings().addClass('disabled');
  $('.files-container .collage').hide();
  $('.files-container .details-view').show();
});


// ====================================================================================================
//  _____                    _____ _                   _                  
// |  __ \                  / ____| |                 | |                 
// | |__) |_ _  __ _  ___  | (___ | |_ _ __ _   _  ___| |_ _   _ _ __ ___ 
// |  ___/ _` |/ _` |/ _ \  \___ \| __| '__| | | |/ __| __| | | | '__/ _ \
// | |  | (_| | (_| |  __/  ____) | |_| |  | |_| | (__| |_| |_| | | |  __/
// |_|   \__,_|\__, |\___| |_____/ \__|_|   \__,_|\___|\__|\__,_|_|  \___|
//              __/ |                                                     
//             |___/                                                      
// ====================================================================================================

//- left-side panel
$('.btn-left-side-panel').on('click', function() {
  $('.page-content').toggleClass('show-left-side-panel');
});

// lhs accordion panels
$('.accordion-section .accordion-title').on('click', function() {
  $(this).parentsUntil('.scroll-container').toggleClass('open closed');
  $(this).children('.section-expand-icon').toggleClass('icon-plus icon-minus');
});

//- lhs show folder structure (from image library)
$('.btn-workspace-panel').on('click', function() {
  $(this).toggleClass('active');
  $('.page-content').toggleClass('show-workspace-panel');
});

//- comments panel
$('.btn-comments').on('click', function() {
  $('.page-content').toggleClass('show-comments-panel');
  $('.btn-comments').toggleClass('active');
  $('.btn-back-to-top').toggleClass('show-comments-panel');
});

// and/remove class when input has focus
$('.comments-panel .comment-input').focusin(function () {
  $('.comments-panel').addClass('comment-input-active');
});

$('.comments-panel .comment-input').focusout(function () {
  $('.comments-panel').removeClass('comment-input-active');
});

// hide "new" elements when you scroll to the bottom
$('.comments-panel .scroll-container').on('scroll', function() {
  if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight - 90) {
    setTimeout(function() {
      $('.btn-new-comments').addClass('visually-hidden');
    }, 300);

    setTimeout(function() {
      $('.btn-new-comments').addClass('hidden');
    }, 800);
  };
});

// close comments panel with arrow button
$('.comments-panel .icon-double-angle-right').on('click', function() {
  $('.page-content').removeClass('show-comments-panel');
  $('.btn-comments').removeClass('active');
  $('.btn-back-to-top').removeClass('show-comments-panel');
});

$('.filter-tag .icon-cross').on('click', function() {
  $(this).parent().remove();
});


// ====================================================================================================
//  ______ _ _ _                
// |  ____(_) | |               
// | |__   _| | |_ ___ _ __ ___ 
// |  __| | | | __/ _ \ '__/ __|
// | |    | | | ||  __/ |  \__ \
// |_|    |_|_|\__\___|_|  |___/
// ====================================================================================================

openExtendedFilter = function(filtername) {
  $('#btn-view-all-' + filtername).on('click', function() {
    $('.filter-extended').removeClass('show');
    $('.overlay').addClass('show');
    $('#filter-extended-'+ filtername).addClass('show');
    $('.page-content').removeClass('has-files-selected');
    $('.file').removeClass('selected');
  });
};

openExtendedFilter("products");
openExtendedFilter("brand");
openExtendedFilter("retailer");
openExtendedFilter("city");
openExtendedFilter("season-month");
openExtendedFilter("event");
openExtendedFilter("prints-graphics");
openExtendedFilter("fabrics-materials");


// ====================================================================================================
//  __  __           _       _     
// |  \/  |         | |     | |    
// | \  / | ___   __| | __ _| |___ 
// | |\/| |/ _ \ / _` |/ _` | / __|
// | |  | | (_) | (_| | (_| | \__ \
// |_|  |_|\___/ \__,_|\__,_|_|___/
// ====================================================================================================

downloadTimer = function(){
  $('#download-modal').removeClass('show minimise');
};

openModal = function(modalname) {
  $('.btn-' + modalname).on('click', function() {
    if(modalname != 'download') {
      $('.overlay').addClass('show');
    }

    $('#' + modalname + '-modal').addClass('show');

    setTimeout(function() {
      downloadTimer();
    }, 5000);

    var myaccount = $('.file.selected').length;

    if (myaccount > 1) {
      $('#add-to-board-modal').addClass('add-multiple-files');
      $('.num-of-files').text(myaccount + ' images');
    } else {
      return;
    }
  });
};

openModal('share');
openModal('save');
openModal('copy');
openModal('move');
openModal('download');
openModal('send');
openModal('print');
openModal('create-new-board');
openModal('duplicate-board');
openModal('rename-board');
openModal('save-search');

//- close modal with close button
$('.modal .close-modal').on('click', function() {
  if($('#item-detail-modal').hasClass('show')) {
    $(this).parentsUntil('body').removeClass('show');  
    $('.modal-overlay').removeClass('show');
    $('.filter-extended').removeClass('show');
    $('.btn-modal-tool').removeClass('active');
  } else {
    $(this).parentsUntil('body').removeClass('show');
    $('.overlay').removeClass('show');
    $('.item-detail-modal-controls').removeClass('show');
    $('.filter-extended').removeClass('show');
  }
});

// ...by clicking the overlay
$('.overlay').on('click', function() {
  $('.overlay').removeClass('show');
  $('.filter-extended').removeClass('show');
  $('.modal').removeClass('show');
  $('.item-detail-modal-controls').removeClass('show');
});

// ...with escape key
$(document).keyup(function(e) { 
  if (e.keyCode == 27) { 
    $('.modal').removeClass('show');
    $('.filter-extended').removeClass('show');
    $('#item-detail-modal').removeClass('fullscreen');
    $('.item-detail-modal-controls').removeClass('show');
    $('.overlay').removeClass('show');
  } 
});

//- minimise modal
$('.modal .minimise-modal').on('click', function() {
  $(this).parentsUntil('body').toggleClass('minimise');
});

// print modal layout options
$('.print-layout-tile').on('click', function() {
  $('.print-layout-tile').removeClass('active');
  $(this).addClass('active');
})


// ====================================================================================================
//  _____ _                   _____       _        _ _   __  __           _       _ 
// |_   _| |                 |  __ \     | |      (_) | |  \/  |         | |     | |
//   | | | |_ ___ _ __ ___   | |  | | ___| |_ __ _ _| | | \  / | ___   __| | __ _| |
//   | | | __/ _ \ '_ ` _ \  | |  | |/ _ \ __/ _` | | | | |\/| |/ _ \ / _` |/ _` | |
//  _| |_| ||  __/ | | | | | | |__| |  __/ || (_| | | | | |  | | (_) | (_| | (_| | |
// |_____|\__\___|_| |_| |_| |_____/ \___|\__\__,_|_|_| |_|  |_|\___/ \__,_|\__,_|_|                                                                                  
// ====================================================================================================

$('.btn-open').on('click', function() {
  $('.overlay').addClass('show');
  $('#item-detail-modal').addClass('show');
  $('.item-detail-modal-controls').addClass('show');
  
  // show actual selected image in the modal
  var selectedImg = $(this).parentsUntil('.collage').find('img').prop('src');
  $('#item-detail-modal .modal-image-panel .img').css({"background-image": "url('" + selectedImg + "')"});

  // file type
  if ($(this).parentsUntil('.collage').hasClass('file-type-image')) {
    $('#item-detail-modal').addClass('file-type-image');
  } else if ($(this).parentsUntil('.collage').hasClass('file-type-report')) {
    $('#item-detail-modal').addClass('file-type-report');
  } else if ($(this).parentsUntil('.collage').hasClass('file-type-video')) {
    $('#item-detail-modal').addClass('file-type-video');
  } else if ($(this).parentsUntil('.collage').hasClass('file-type-color-card')) {
    $('#item-detail-modal').addClass('file-type-color-card');
  }
});

// close item detail modal
$('#item-detail-modal .close-modal').on('click', function() {
  $(this).parentsUntil('body').removeClass('show');
  $('.overlay').removeClass('show');
  $('.item-detail-modal-controls').removeClass('show');
  $('#item-detail-modal .modal-image-panel .img').css({"background-image": "none"});
  $('#item-detail-modal').removeClass('file-type-image').removeClass('file-type-report').removeClass('file-type-video').removeClass('file-type-color-card');
});

// //- tabs
// $('.btn-modal-show-comments').on('click', function() {
//   $('.modal-section-other').addClass('show-comments').removeClass('show-related-images').removeClass('show-related-reports');
// });

// $('.btn-modal-show-related-images').on('click', function() {
//   $('.modal-section-other').removeClass('show-comments').addClass('show-related-images').removeClass('show-related-reports');
// });

// $('.btn-modal-show-related-reports').on('click', function() {
//   $('.modal-section-other').removeClass('show-comments').removeClass('show-related-images').addClass('show-related-reports');
// });

//- bottom panel
$('.icon-angle-up').on('click', function() {
  $('#item-detail-modal').toggleClass('show-bottom-panel');
});

//- commnents panel
$('.btn-modal-comments').on('click', function() {
  $('#item-detail-modal').removeClass('show-page-list-panel show-info-panel').toggleClass('show-comments-panel');
});

//- info panel
$('.btn-modal-info').on('click', function() {
  $('#item-detail-modal').removeClass('show-page-list-panel show-comments-panel').toggleClass('show-info-panel');
});

//- page list panel
$('.btn-modal-page-list').on('click', function() {
  $('#item-detail-modal').removeClass('show-comments-panel show-info-panel').toggleClass('show-page-list-panel');
});

// fullscreen
$('.btn-fullscreen').on('click', function() {
  $('#item-detail-modal').addClass('fullscreen');
  $('#item-detail-modal').removeClass('show-page-list-panel show-comments-panel');
  $('#item-detail-modal').fullScreen(true);
});

$('.btn-close-fullscreen').on('click', function() {
  $('#item-detail-modal').removeClass('fullscreen');
  $('#item-detail-modal').fullScreen(false);
});

// add to board
$('#item-detail-modal .btn-save').on('click', function() {
  $(this).addClass('active');
  $('.modal-overlay').addClass('show');
});

// send
$('#item-detail-modal .btn-send').on('click', function() {
  $(this).addClass('active');
  $('.modal-overlay').addClass('show');
});

// print
$('#item-detail-modal .btn-print').on('click', function() {
  $(this).addClass('active');
  $('.modal-overlay').addClass('show');
});


// ====================================================================================================
//  _______            _      _     _   
// |__   __|          | |    (_)   | |  
//    | | __ _  __ _  | |     _ ___| |_ 
//    | |/ _` |/ _` | | |    | / __| __|
//    | | (_| | (_| | | |____| \__ \ |_ 
//    |_|\__,_|\__, | |______|_|___/\__|
//              __/ |                   
//             |___/                    
// ====================================================================================================

$(document).ready(function() {
  $("#myTags").tagit({
    availableTags: [
      "Amelia Lewis",
      "Anna Glassman",
      "Julian Ramirez",
      "Sansan Chen",
      "Nicky Ashwell",
      "Hema Sivaram",
      "Sarah Freiser",
      "Andrew Harris",
      "Oleg Zolotnisky",
      "Peter Morrison",
      "Pathik Tanna",
      "Pedro Santos",
      "Hans Zhou",
      "Eugene Grabov",
      "Can Citak",
      "Vincent Pantano",
      "Hai Zheng",
      "Ahmed Radwan",
      "Parisa Vahdatinia",
      "Manu Paka",
      "Malaya Mallick",
      "Dani Miga",
      "Steve Weiss",
      "Igor Pokryshevskiy",
      "Alex Shishkevich",
      "Deepa Kini",
      "Robert Conn",
      "Aleksey Mezhva",
      "Samuel Elliott"
    ],
    autocomplete: {delay: 0, minLength: 0},
    // showAutocompleteOnFocus: true,
    removeConfirmation: true,
    placeholderText: "Recipients"
  });
});


// ====================================================================================================
//  ____             _      _          _______          
// |  _ \           | |    | |        |__   __|         
// | |_) | __ _  ___| | __ | |_ ___      | | ___  _ __  
// |  _ < / _` |/ __| |/ / | __/ _ \     | |/ _ \| '_ \ 
// | |_) | (_| | (__|   <  | || (_) |    | | (_) | |_) |
// |____/ \__,_|\___|_|\_\  \__\___/     |_|\___/| .__/ 
//                                               | |    
//                                               |_|    
// ====================================================================================================

$(document).ready(function() {
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.btn-back-to-top');

  //hide or show the "back to top" link
  $('.right-side-panel').scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('.right-side-panel').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });
});


// ====================================================================================================
//  _    _                _                           
// | |  | |              | |                          
// | |__| | ___  __ _  __| |_ __ ___   ___  _ __ ___  
// |  __  |/ _ \/ _` |/ _` | '__/ _ \ / _ \| '_ ` _ \ 
// | |  | |  __/ (_| | (_| | | | (_) | (_) | | | | | |
// |_|  |_|\___|\__,_|\__,_|_|  \___/ \___/|_| |_| |_|
// ====================================================================================================

var WSscroller = $(".right-side-panel")[0];
$(".right-side-panel").headroom({
  "scroller": WSscroller,
  "offset": 180
});

var ILscroller = $(".page-content")[0];
$(".page-content").headroom({
  // "scroller": ILscroller,
  "offset": 0
});

// $(".panel-filters").stick_in_parent({
//   inner_scrolling: true
// });


// ====================================================================================================
//  __  __                                     
// |  \/  |                                    
// | \  / | ___  ___ ___  __ _  __ _  ___  ___ 
// | |\/| |/ _ \/ __/ __|/ _` |/ _` |/ _ \/ __|
// | |  | |  __/\__ \__ \ (_| | (_| |  __/\__ \
// |_|  |_|\___||___/___/\__,_|\__, |\___||___/
//                              __/ |          
//                             |___/           
// ====================================================================================================

// $('.message-preview').click(function(e, evt) {
//   if($(e.target).is('.btn-send, .btn-delete-message')) {
//     // e.preventDefault();
//     return;
//   } else {
//     $(this).parentsUntil('.messages-row').toggleClass('message-closed message-open');

//     var height = $(this).siblings('.message-content-container').find('.message-content').height();

//     if ($(this).parentsUntil('.messages-row').hasClass('message-open')) {
//       $(this).siblings('.message-content-container').css({height: height + "px"})
//     } else {
//       $(this).siblings('.message-content-container').css({height: "0px"})
//     }
//   }
// });

// $('.btn-delete-message').on('click', function() {
//   $(this).parentsUntil('.messages-row').remove();
// });


// ====================================================================================================
//  _                       _                     _ 
// | |                     | |                   | |
// | |     __ _ _____   _  | |     ___   __ _  __| |
// | |    / _` |_  / | | | | |    / _ \ / _` |/ _` |
// | |___| (_| |/ /| |_| | | |___| (_) | (_| | (_| |
// |______\__,_/___|\__, | |______\___/ \__,_|\__,_|
//                   __/ |                          
//                  |___/                           
// ====================================================================================================

// disbled because it doesn't work with the collage layout

// $(function() {
//   $("img.lazy").lazyload();
// });