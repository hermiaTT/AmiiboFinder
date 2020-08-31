import "../styles/index.scss";

$(".charSubmit").click(function () {
  //clean everything in container
  $(".container").html("");
  //get user input
  const character = $("#amiiboByChar").val();
  console.log(character);
  //if input is Scott
  if (character == "Scott" || character == "scott") {
    alert("cute!");
  } else {
    getAmiibo(character);
  }
  $("#amiiboByChar").val("");
});

$(".mario").click(function () {
  $(".charSelection").removeClass("active");
  $(this).addClass("active");
  //clean everything in container
  $(".container").html("");
  getAmiibo("mario");
});

$(".zelda").click(function () {
  $(".charSelection").removeClass("active");
  $(this).addClass("active");
  //clean everything in container
  $(".container").html("");
  getAmiibo("zelda");
});

$(".peach").click(function () {
  $(".charSelection").removeClass("active");
  $(this).addClass("active");
  //clean everything in container
  $(".container").html("");
  getAmiibo("peach");
});

$(".zxy").click(function () {
  $(".charSelection").removeClass("active");
  $(this).addClass("active");
  //clean everything in container
  $(".container").html("");
  var FirstImage = $(
    "<div class='imageGallery'><img src = 'src/pictures/WechatIMG20779.png' ></div>"
  );
  var SecImage = $(
    "<div class='imageGallery'><img src = 'src/pictures/WechatIMG20780.png' ></div>"
  );
  var ThirdImage = $(
    "<div class='imageGallery'><img src = 'src/pictures/WechatIMG20781.png' ></div>"
  );
  var FourImage = $(
    "<div class='imageGallery'><img src = 'src/pictures/WechatIMG20782.png' ></div>"
  );
  $(".container")
    .append(FirstImage)
    .append(SecImage)
    .append(ThirdImage)
    .append(FourImage);
});

function getAmiibo(character) {
  $.ajax({
    url: "https://www.amiiboapi.com/api/amiibo?character=" + character,
    method: "GET",
    success: function (data, status, xhr) {
      if (status === "success") {
        var items = data.amiibo;
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          var series = item.amiiboSeries;
          var name = item.name;
          var image = item.image;
          var wrapper = $("<div></div>").addClass("imageGallery");
          image = $("<img src = '" + image + "' >");
          series = $("<div> 《" + series + "》 </div>").addClass("series");
          name = $("<div>" + name + "</div>").addClass("charName");
          wrapper.append(image).append(name).append(series);
          $(".container").append(wrapper);
        }
      } else {
        console.log("reddit error");
      }
    },
    error: function (err) {
      alert("Please enter a valid character!");
      console.log(err);
    },
  });
}
