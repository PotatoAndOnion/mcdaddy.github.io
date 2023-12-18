var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000);    
}





// Get the modal element
const modal = document.getElementById('modal');

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName('close')[0];

// When the user clicks the image or "BUY" link, open the modal
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const buyLink = card.querySelector('li a');
  const image = card.querySelector('img');

  buyLink.addEventListener('click', () => openModal(card));
  image.addEventListener('click', () => openModal(card));
});

// Function to open the modal
function openModal(card) {
  const name = card.querySelector('.name').textContent;
  const colorway = card.querySelector('.colorway').textContent;
  const imageSrc = card.querySelector('img').getAttribute('src');
  const sizes = ''; // Replace this with actual sizes information

  document.getElementById('modalName').textContent = name;
  document.getElementById('modalColorway').textContent = colorway;
  document.getElementById('modalImage').setAttribute('src', imageSrc);
  document.getElementById('modalSizes').textContent = sizes;

  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
