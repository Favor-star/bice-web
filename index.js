$(document).ready(() => {
  $(".faq-question").click((e) => {
    $(e.target).next().slideToggle();
  });
  $(".faq-question").click((e) => {
   ($(e.target).children().animate({ rotate: "+=180deg" }));
  });
});
