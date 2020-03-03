window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementsByClassName("navbar").style.padding = "6rem";
    document.getElementsByClassName("navbar").style.borderBottom= "solid 1px #17a9bd";
    document.getElementsByClassName("logo").style.height = "20%";
    document.getElementsByClassName("logo").style.width = "20%";
  } else {
    document.getElementsByClassName("navbar").style.padding = "20px 10px";
    document.getElementsByClassName("navbar").style.borderBottom= "solid 10px #17a9bd";
    document.getElementsByClassName("logo").style.height = "80%";
    document.getElementsByClassName("logo").style.width = "80%";
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myIcon");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
// Contact Us Button Information
  // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 36.732120, lng: -119.785760};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

  // Back to top Button
  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

