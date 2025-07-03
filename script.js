let myImgsNames = [
  "1st Goat",
  "2nd Goat",
  "3rd Goat",
  "4th Goat",
  "5th Goat",
  "6th Goat",
  "7th Goat",
  "8th Goat",
  "9th Goat",
  "10th Goat",
  "11th Goat",
  "12th Goat",
];

let myImgs = [
  "/img/goats1.jpg",
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
  "/img/goats12.jpg",
];

function render() {
  let gallery = document.getElementById("gallery");
  for (let index = 0; index < myImgs.length; index++) {
    gallery.innerHTML += `<img onclick="toggleDialog(${index}); dontcloseDialog(event)" src="${myImgs[index]}" alt="goat" class="goat-pics">`;
  }
}

function toggleDialog(index) {
  let dialogRef = document.getElementById("content");
  dialogRef.classList.toggle("d_none");
  renderFiltered(index);
}

function closeDialogbyPressingCloseOrBody(event) {
  let dialogRef = document.getElementById("content");
  dialogRef.classList.add("d_none");
  event.stopPropagation();
}

function dontcloseDialog(event) {
  let dialogRef = document.getElementById("content");
  dialogRef.classList.remove("d_none");
  event.stopPropagation();
}

function renderFiltered(index) {
  let dialogRef = document.getElementById("content");
  dialogRef.innerHTML = `
          <div class="close">
            <img onclick="closeDialogbyPressingCloseOrBody(event)" src="/close_btn.png">
          </div>
          <p>${myImgsNames[index]}</p>
          <img src="${myImgs[index]}" alt="goat">
          <div class="buttons">
            <img onclick="previousBtn(${index})" src="/left_btn.png">
            <img onclick="nextBtn(${index})" src="/right_btn.png">
          </div>
           `;
}

function previousBtn(index) {
  let lastindex = myImgs.length - 1;
  if (index == 0) {
    index = lastindex;
  } else {
    index--;
  }
  renderFiltered(index);
}

function nextBtn(index) {
  let lastindex = myImgs.length - 1;
  if (index == lastindex) {
    index = 0;
  } else {
    index++;
  }
  renderFiltered(index);
}
