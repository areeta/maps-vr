window.onload = function () {
    document.getElementById("enter-aframe").addEventListener("click", function() {
        window.open("aframe.html");
    });
}

        var mouseClicked = 0;
    
     document.querySelector('#bathroom-option').addEventListener('mouseup', function() {
        mouseClicked++;
        changeToTheStart();
        deleteBoxesAndText("bathroom");
        document.querySelector('#bathroom-option').addEventListener('mouseup', function() { 
            if (mouseClicked == 3) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/tunnel.jpg');
            }  else if (mouseClicked == 4) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/outsideTunnel.jpg');
            } else if (mouseClicked == 5) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/elevator.jpg');
            } else if (mouseClicked == 6) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/bathroom.jpg');
            } 
        });
    });
    
    document.querySelector('#bunker-option').addEventListener('mouseup', function() {
        mouseClicked++;
        changeToTheStart();
        deleteBoxesAndText("bunker");
        document.querySelector('#bunker-option').addEventListener('mouseup', function() { 
            if (mouseClicked == 3) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/tunnel.jpg');
            }  else if (mouseClicked == 4) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/outsideTunnel.jpg');
            } else if (mouseClicked == 5) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/elevator.jpg');
            } else if (mouseClicked == 6) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/bunkerFromElevator.jpg');
            } else {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/bunker.jpg');
            } 
        });
    });
    
    document.querySelector('#cafe-option').addEventListener('mouseup', function() {
        mouseClicked++;
        changeToTheStart();
        deleteBoxesAndText("cafe");
        document.querySelector('#cafe-option').addEventListener('mouseup', function() { 
            if (mouseClicked == 2) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/tunnel.jpg');
            }  else if (mouseClicked == 3) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/outsideTunnel.jpg');
            } else if (mouseClicked == 4) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/elevator.jpg');
            } else {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/cafe.jpg');
            } 
        });
    });
    
    document.querySelector('#the-well-option').addEventListener('mouseup', function() {
        mouseClicked++;
        changeToTheStart();
        deleteBoxesAndText("the-well");
        document.querySelector('#the-well-option').addEventListener('mouseup', function() { 
            if (mouseClicked == 3) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/tunnel.jpg');
            }  else if (mouseClicked == 4) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/outsideTunnel.jpg');
            } else if (mouseClicked == 5) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/elevator.jpg');
            } else if (mouseClicked == 6) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/bunkerFromElevator.jpg');
            } else {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/the-well.jpg');
            } 
        });
    });
    
    document.querySelector('#elevator-option').addEventListener('mouseup', function() {
        mouseClicked++;
        changeToTheStart();
        deleteBoxesAndText("elevator");
        document.querySelector('#elevator-option').addEventListener('mouseup', function() { 
            if (mouseClicked == 3) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/tunnel.jpg');
            }  else if (mouseClicked == 4) {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/outsideTunnel.jpg');
            } else {
                document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/elevator.jpg');
            } 
        });
    });
    
    function changeToTheStart() {
        //Changed to the start background + deleted the opening
        document.querySelector('#sky-background').setAttribute('src', 'assets/aframe-pics/start.jpg');
        var openHead = document.querySelector('#opening');
        openHead.parentNode.removeChild(openHead);
    }
    
    function deleteBoxesAndText(locationNotDeleted) {
        
       //Deleting all of the boxes
       if (locationNotDeleted == "bathroom") {
           
            var box1 = document.querySelector('#cafe-option');
            box1.parentNode.removeChild(box1);
            var box2 = document.querySelector('#bunker-option');
            box2.parentNode.removeChild(box2);
            var box3 = document.querySelector('#the-well-option');
            box3.parentNode.removeChild(box3);
            var box4 = document.querySelector('#elevator-option');
            box4.parentNode.removeChild(box4);
            
            //Deleting all of the texts
            var cafe= document.querySelector('#cafe-text');
            cafe.parentNode.removeChild(cafe);
            var bunker = document.querySelector('#bunker-text');
            bunker.parentNode.removeChild(bunker);
            var theWell = document.querySelector('#the-well-text');
            theWell.parentNode.removeChild(theWell);
            var elevator = document.querySelector('#elevator-text');
            elevator.parentNode.removeChild(elevator);
            
       } else if (locationNotDeleted == "cafe") {
            
            var box1 = document.querySelector('#bathroom-option');
            box1.parentNode.removeChild(box1);
            var box2 = document.querySelector('#bunker-option');
            box2.parentNode.removeChild(box2);
            var box3 = document.querySelector('#the-well-option');
            box3.parentNode.removeChild(box3);
            var box4 = document.querySelector('#elevator-option');
            box4.parentNode.removeChild(box4);
            
            //Deleting all of the texts
            var bathroom = document.querySelector('#bathroom-text');
            bathroom.parentNode.removeChild(bathroom);
            var bunker = document.querySelector('#bunker-text');
            bunker.parentNode.removeChild(bunker);
            var theWell = document.querySelector('#the-well-text');
            theWell.parentNode.removeChild(theWell);
            var elevator = document.querySelector('#elevator-text');
            elevator.parentNode.removeChild(elevator);
            
      } else if (locationNotDeleted == "bunker") {
            
            var box1 = document.querySelector('#bathroom-option');
            box1.parentNode.removeChild(box1);
            var box2 = document.querySelector('#cafe-option');
            box2.parentNode.removeChild(box2);
            var box3 = document.querySelector('#the-well-option');
            box3.parentNode.removeChild(box3);
            var box4 = document.querySelector('#elevator-option');
            box4.parentNode.removeChild(box4);
            
            //Deleting all of the texts
            var bathroom = document.querySelector('#bathroom-text');
            bathroom.parentNode.removeChild(bathroom);
            var cafe = document.querySelector('#cafe-text');
            cafe.parentNode.removeChild(cafe);
            var theWell = document.querySelector('#the-well-text');
            theWell.parentNode.removeChild(theWell);
            var elevator = document.querySelector('#elevator-text');
            elevator.parentNode.removeChild(elevator);
            
      } else if (locationNotDeleted == "the-well") {
            
            var box1 = document.querySelector('#bathroom-option');
            box1.parentNode.removeChild(box1);
            var box2 = document.querySelector('#cafe-option');
            box2.parentNode.removeChild(box2);
            var box3 = document.querySelector('#elevator-option');
            box3.parentNode.removeChild(box3);
            var box4 = document.querySelector('#bunker-option');
            box4.parentNode.removeChild(box4);
            
            //Deleting all of the texts
            var bathroom = document.querySelector('#bathroom-text');
            bathroom.parentNode.removeChild(bathroom);
            var cafe = document.querySelector('#cafe-text');
            cafe.parentNode.removeChild(cafe);
            var bunker = document.querySelector('#bunker-text');
            bunker.parentNode.removeChild(bunker);
            var elevator = document.querySelector('#elevator-text');
            elevator.parentNode.removeChild(elevator);
            
      } else if (locationNotDeleted == "elevator") {
            
            var box1 = document.querySelector('#bathroom-option');
            box1.parentNode.removeChild(box1);
            var box2 = document.querySelector('#cafe-option');
            box2.parentNode.removeChild(box2);
            var box3 = document.querySelector('#the-well-option');
            box3.parentNode.removeChild(box3);
            var box4 = document.querySelector('#bunker-option');
            box4.parentNode.removeChild(box4);
            
            //Deleting all of the texts
            var bathroom = document.querySelector('#bathroom-text');
            bathroom.parentNode.removeChild(bathroom);
            var cafe = document.querySelector('#cafe-text');
            cafe.parentNode.removeChild(cafe);
            var theWell = document.querySelector('#the-well-text');
            theWell.parentNode.removeChild(theWell);
            var bunker = document.querySelector('#bunker-text');
            bunker.parentNode.removeChild(bunker);
      } 
    }
