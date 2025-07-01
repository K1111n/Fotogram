let myImgsNames = ["First Goat",
     "Second Goat",
      "Third Goat",
       "Fourth Goat",
        "Fifth Goat",
         "Sixth Goat",
         "Seventh Goat",
           "Eighth Goat",
            "Ninth Goat",
             "Tenth Goat",
              "Eleventh Goat",
               "Twelfth Goat"];

let myImgs = ["/img/goats1.jpg",
    "/img/goats2.jpg",
    "/img/goats3.jpg",
    "/img/goats4.jpg",
     "/img/goats5.jpg", 
     "/img/goats6.jpg",
     "/img/goats7.jpg", 
     "/img/goats8.jpg", 
     "/img/goats9.jpg", 
     "/img/goats10.jpg", 
     "/img/goats11.jpg", 
     "/img/goats12.jpg"];

    
    function render() {
      let gallery = document.getElementById("gallery");
    for(let i=0; i < myImgs.length; i++) {
      gallery.innerHTML += `<img onclick="toggleDialog(${i})" src="${myImgs[i]}" alt="goat" class="goat-pics">`
      let currentValue = i;
    }
    }

     function toggleDialog(i) {
          let dialogRef = document.getElementById("content");
          dialogRef.classList.toggle("d_none");
          dialogRef.classList.add("overlay");
          dialogRef.innerHTML = `
           <div class="close"><img onclick="toggleDialog()" src="/close_btn.png"></div>
           <p>${myImgsNames[i]}</p>
           <img src="${myImgs[i]}" alt="goat">
           <div class="buttons">
            <img onclick="toggleDialog(currentValue - 1)" src="/left_btn.png">
            <img onclick="toggleDialog(currentValue + 1)" src="/right_btn.png">
          </div>
           `
     }
 