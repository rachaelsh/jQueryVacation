$(document).ready(function(){

  $("a").css("font-size", "26px");
  $("h2").css("font-size", "46px");
  $("h2").css("margin-bottom", "0px");

  $(".menu").on("click", function() {
    $(".menudropdown").slideToggle();
    // $(".linkbox").append("<br>hello");
    // $(".linkbox").append("<h1 class ='hello'><br>hello</h1>");
    // $(".linkbox").prepend("<h1 class ='hello'><br>hello</h1>");
    // $(".box").hide();
    // $("i").css("color", "red");
  });

  $(".fa-arrow-left").on("click", function() {
    $(".fa-arrow-left").after("<img id='extra1' class='box' src='http://theplanetd.com/images/2-Choose-Destination-Cheap.jpg' alt=''/>");

    $(".fa-arrow-left").css("display", "none");

  });

  $(".fa-arrow-right").on("click", function() {
    $(".box").last().after("<img id='extra2' class='box' src='http://www.nationalgeographicexpeditions.com/assets/images/2793/destinations-hub.jpg' alt=''/>");
    $(".fa-arrow-right").css("display", "none");
  });

  $(".scam").click(function(){
    $("#scammy").css("display", "block");
    $("body").css("overflow", "hidden");

  });

  $("#stopIt").click(function(){

  });
  var counter = 0;
  $("#stopIt").click(function(){
    counter++;
    if(counter %2 == 1){
      $("#nope").css("display", "block");
      $("#stopIt").text("PLEASE???");
    } else if (counter %2 == 0){
      $("#scammy").css("display", "none");

      $(".scam").css("display", "none");

      $(".container").css("background-image", "url('https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-294696.jpg')");
      $("h1").text("Cozy Inside Activities");
      $("h1").css("font-family", "Satisfy", "cursive");
      $("h1").css("color", "#473231");
      $("h1").css("font-size", "90px");
      $("h2").text("Warm Hugs...I mean links");
      $("h2").css("font-family", "Satisfy", "cursive");
      $("a").css("color", "$473231");      $("a").css("margin", "auto");
      $("#extra1").css("display", "none");
      $("#extra2").css("display", "none");
      $("#1").text("Blankets");
      $("#1").attr("href", "https://www.wayfair.com/Blankets-and-Throws-C415002.html");
      $("#1").attr("target", "_blank");
      $("#2").text("Scarves");
      $("#2").attr("href", "https://www.etsy.com/c/accessories/scarves-and-wraps/scarves");
      $("#2").attr("target", "_blank");
      $("#3").text("Tea");
      $("#3").attr("href", "http://www.republicoftea.com/");
      $("#3").attr("target", "_blank");
      $("#4").text("Socks");
      $("#4").attr("href", "http://www.sockittome.com/");
      $("#4").attr("target", "_blank");
      $("#5").text("Netflix");
      $("#5").attr("href", "https://www.netflix.com/search/romantic/suggestion/2");
      $("#5").attr("target", "_blank");
      $(".fa-arrow-left").css("display", "none");
      $(".fa-arrow-right").css("display", "none");

      $(".box").first().replaceWith("<img id='extra2' class='box' src='http://www.dailycrochet.com/wp-content/uploads/sites/845/2016/02/Dutch-Rabbits-by-Rachel-Borello-Carroll.jpg' alt=''/>");
      $(".box").last().replaceWith("<img id='extra2' class='box' src='https://latterdaysaint87.files.wordpress.com/2012/03/scriptures-heart.jpg' alt=''/>");
      $(".box img").after().replaceWith("<img id='extra2' class='box' src='http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2014/6/19/1/IG1B03F_Mini-Linzer-Cookies_s4x3.jpg.rend.sni12col.landscape.jpeg' alt=''/>");

    }
  });
});
