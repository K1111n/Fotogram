
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
        let contentRef = document.getElementById("content");
        if (index == 0) {
            contentRef.innerHTML += getNotesHtml(index);
        }
        }
     

     function getNotesHtml(index) {
        return `<img src="${myImgs[index]}" alt="goat">`
     }

     function toggleOverlay(index) {
        let overlayRef = document.getElementById("overlay");
        overlayRef.classList.toggle("d_none");
     }