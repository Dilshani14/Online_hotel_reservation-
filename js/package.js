var rooms = [
  {
    title: "Room Only - 70% Special Offer",
    description: "This rate plan includes 70% discount on Room only basis ",
    price: "USD 234.11 per night",
    image: "/assets/package_room/room_1jpg",
  },
  {
    title: "Bed & Breakfast - 50% Special Offer",
    description:
      "This rate plan includes 50% discount on Bed & Breakfast basis .",
    price: "USD 197.60 per night ",
    image: "../assets/package_room/room_2jpg",
  },
  {
    title: "Half Board - 25% Special Offer",
    description: "This rate includes 25% discount on Half Board basis rates.",
    price: "USD 230.40 per night ",
    image: "assets/package_room/room_3jpg",
  },
  {
    title: "Full Board - 23% Special Offer",
    description: "This rate plan includes 23% discount on Full Board basis .",
    price: "USD 252.40 per night",
    image: "assets/package_room/room_4jpg",
  },
  {
    title: "Bed & Breakfast",
    description:
      "Indulge your taste for modern luxury combined with safari chic in the peaceful and hospitable environment that is Jetwing Yala. Further to the experience this...",
    price: " USD 282.30 per night",
    image: "assets/package_room/room_5jpg",
  },
  {
    title: "Room Only",
    description:
      "Indulge your taste for modern luxury combined with safari chic in the peaceful and hospitable environment that is Jetwing Yala. Each room has an en-suite...",
    price: " USD 267.30 per night",
    image: "../assets/package_room/room_6jpg",
  },
  {
    title: "Half Board",
    description:
      "Indulge your taste for modern luxury combined with safari chic in the peaceful and hospitable environment that is Jetwing Yala. Further to the experience this...",
    price: " USD 307.30 per night",
    image: "../assets/package_room/room_1jpg",
  },
  {
    title: "Full Board-",
    description:
      "Indulge your taste for modern luxury combined with safari chic in the peaceful and hospitable environment that is Jetwing Yala. Further to the experience, this...",
    price: "USD 377.30 per night ",
    image: "assets/package_room/room_2jpg",
  },
];

$(function () {
  var RoomSeries = (function (rooms) {
    "use strict";
    var $container = $(".card-container");

    function addRoom(Room) {
      var name,
        image,
        description,
        price,
        $room,
        $roomContainer,
        $roomMain,
        $imageMain,
        $image,
        $nameMain,
        $nameSub1,
        $nameSub2,
        $name,
        $description,
        $descriptionMain,
        $descriptionSub1,
        $description,
        $priceMain,
        $priceSub1,
        $priceSub2,
        $priceSub3,
        $lowerMain,
        $lowerSub;

      name = Room.name;
      image = Room.image;
      description = Room.description;
      price = Room.price;

      console.log()
      $room = $("<div>").addClass("container-fluid");

      $roomContainer = $("<div>").addClass("container view_pack");

      $roomMain = $("<div>").addClass("row ui_card_1");

      $imageMain = $("<div>").addClass("col-md-4 col-sm-8 col-xs-4 c_1");

      /* Thumbnail */
      $image = $("<img>").attr({
        src: image,
        alt: name + " Thumbnail",
        class: "img-fluid",
      });

      $image.appendTo($imageMain);
      $imageMain.appendTo($roomMain);

      /* Movie Title */
      $nameMain = $("<div>").addClass("col-md-8 col-sm-8 col-xs-12 c_2");
          $nameSub1 = $("<div>").addClass("row");
            $nameSub2 = $("<div>").addClass("col-md-12 c_5");
              $name = $("<h3>").addClass("title").text(name);

      $name.appendTo($nameSub2);
      $nameSub2.appendTo($nameSub1);
      $nameSub1.appendTo($nameMain);

          $descriptionMain = $("<div>").addClass("row");
            $descriptionSub1 = $("<div>").addClass("col-md-9 col-sm-9 col-xs-12 c_3");
              $description = $("<p>").addClass("description").text(description);

      $description.appendTo($descriptionSub1);

          $priceMain = $("<div>").addClass("col-md-3 col-sm-3 col-xs-12 c_4");
            $priceSub1 = $("<div>").addClass("price_");
              $priceSub2 = $("<span>").addClass("from_price").text("From");
                $priceSub3 = $("<span>").addClass("price").text(price);

      $priceSub2.appendTo($priceSub1);
      $priceSub3.appendTo($priceSub1);
      $priceSub1.appendTo($priceMain);

      $descriptionSub1.appendTo($descriptionMain);
      $priceMain.appendTo($descriptionMain);

      /* Prod Year */

      $lowerMain = $("<div>").addClass("row");
      $lowerSub = $("<div>").addClass("col-md-12 sm-12 col-xs-12 c_7");

      $lowerSub.appendTo($lowerMain);

      $descriptionMain.appendTo($nameMain);
      $lowerMain.appendTo($nameMain);

      $nameMain.appendTo($roomMain);
      /* Appending New Movie block in to container*/

      $roomMain.appendTo($roomContainer);
      $roomContainer.appendTo($room);
      $container.append($room);
    }

    for (let room in rooms) {
      var roomNew = rooms[room];

      /* Current TV Show */
      addRoom(roomNew);
    }
  })(rooms);
});
