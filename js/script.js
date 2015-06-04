var deviceAgent = navigator.userAgent.toLowerCase();
    var iOS = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (iOS) {
        $('label').click(function (event) {
            $('#' + $(event.target).attr('for')).attr('checked', true).change();
        });
    }

$("li").click(function(e) {
  e.preventDefault();
  $("li").removeClass("selected");
  $(this).addClass("selected");
});