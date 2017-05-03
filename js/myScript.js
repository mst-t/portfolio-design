var STOP_ANIMATION = 600;

var init = function(){
    $(".main-img").hide();
    $("body").fadeIn("normal");
};

// Display the main logo when the main image is clicked.
var getLogo = function(){
    $(".main-img").hide(); 
    $(".logo").fadeIn("slow");
};

// Prevent the animation from being triggered more than once.
var animated = false;

/* Click a small image and it becomes blurry.
 * The selected image becomes the main image of the web page.
 */
var selectImage = function(){
    if(!animated) {
        animated = true;

        var imgSrc = $(this).attr("src");
        var imgAlt = $(this).attr("alt");
        var imgId  = $(this).attr("id");

        $(".sub-img").removeClass("blur");
        $(this).addClass("blur");

        $(".logo, .main-img").hide();

        $(".main-img").attr({src: imgSrc, alt: imgAlt});
        $(".main-img").fadeIn("slow");

        setTimeout(function(){animated = false}, STOP_ANIMATION);
    }
};

$(function(){
    init();
    $(".sub-img").click(selectImage);
    $(".main-img").click(getLogo);
});
