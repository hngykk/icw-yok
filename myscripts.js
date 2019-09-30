$(window).scroll(function() {
  $(".item-detail").each(function() {
    var divPos = $(this).offset().top;
    var divHeight = $(this).height();
    var topOfWindow = $(window).scrollTop();
    if (divPos < topOfWindow + divHeight && divPos + divHeight > topOfWindow) {
      $(this).addClass("slideRight");
    } else {
      $(this).removeClass("slideRight");
    }
  });
});
