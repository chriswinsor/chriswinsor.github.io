function fadeIn() {
  document.getElementById("title").style.color = "azure";
  setTimeout(function () {document.getElementById("subtitle").style.color = "azure";}, 1000);
}

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(48.422346, -123.3863611),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
// API key AIzaSyCHsCCgvH79TkPBBgNxQZzm4Tan42ZZ6ns