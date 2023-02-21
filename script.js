function myFunction() {
    var x = document.getElementById("bottom");
    if (x.className === "bottomHeader") {
      x.className += " responsive";
    } else {
      x.className = "bottomHeader"
    }
  }