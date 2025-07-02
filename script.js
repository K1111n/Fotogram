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
      for(let index=0; index < myImgs.length; index++) {
      gallery.innerHTML += `<img onclick="toggleDialog(${index}); addDialog(event)" src="${myImgs[index]}" alt="goat" class="goat-pics">`
    }
    }

     function toggleDialog(index) {
          let dialogRef = document.getElementById("content");
          dialogRef.classList.toggle("d_none");
          dialogRef.classList.add("overlay");
          renderFiltered(index);
        }

    function offDialog(event) {
        let dialogRef = document.getElementById("content");
        dialogRef.classList.add("d_none");
        event.stopPropagation();
    }

    function addDialog(event) {
      let dialogRef = document.getElementById("content");
      dialogRef.classList.remove("d_none");
      event.stopPropagation();
    }

      function renderFiltered(index) {
        let dialogRef = document.getElementById("content");
          dialogRef.innerHTML = `
           <div class="close"><img onclick="offDialog(event)" src="/close_btn.png"></div>
           <p>${myImgsNames[index]}</p>
           <img src="${myImgs[index]}" alt="goat">
           <div class="buttons">
            <img onclick="previousBtn(${index})" src="/left_btn.png">
            <img onclick="nextBtn(${index})" src="/right_btn.png">
          </div>
           `
     }
 
     function previousBtn(index) {
      
          if (index == 0) {
            index = 11;
          }
          else {
            index--;
          }
          console.log(index);
         renderFiltered(index);
     }

     function nextBtn(index) {
      
          if (index == 11) {
            index = 0;
          }
          else {
            index++;
          }
          console.log(index);
         renderFiltered(index);
     }