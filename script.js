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

    let gallery = document.getElementById("gallery");
    
    for(let i=0; i < myImgs.length; i++) {
      gallery.innerHTML += `<img onclick="toggleOverlay(i)" src="${myImgs[i]}" alt="goat" class="goat-pics">`
    }


 
   //   function renderFiltered(index){

   //          render(myImgsNames[index], myImgs[index])

   //   }

   //   function render(arrDescription, arrTitles) {
   //      let contentRef = document.getElementById("content");
   //      contentRef.innerHTML = "";
   //      for (let index = 0; index < arrTitles.length; index++) {
   //          contentRef.innerHTML += getNotesHtml(index, arrTitles, arrDescription);
   //      }
   //   }


   //   function getNotesHtml(index) {
   //      return `<p>${myImgsNames[index]}</p>
   //      <img src="${myImgs[index]}" alt="goat">`
   //   }

      // function toggleOverlay(index) {
      //    let overlayRef = document.getElementById("overlay");
      //    overlayRef.classList.toggle("d_none");
      // }