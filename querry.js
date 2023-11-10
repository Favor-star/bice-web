$(document).ready(() => {
  $(".faq-question").click((e) => {
    $(e.target).next().slideToggle();
  });
  $(".faq-question").click((e) => {
    $(e.target).children().animate({ rotate: "+=180deg" });
  });
  $(".menu-icon").click(() => {
    $(".menu-div").css("display", "block");
    setTimeout(() => {
      $(".menu-div").css("transform", "translate(0%)");
    }, 200);
  });
});
$(".close-icon").click(() => {
  $(".menu-div").css("transform", "translate(120%)");
  setTimeout(() => {
    $(".menu-div").css("display", "none");
  }, 500);
});
$(".menu-div").click(() => {
  $(".menu-div").css("transform", "translate(120%)");
  setTimeout(() => {
    $(".menu-div").css("display", "none");
  }, 500);
})
