const axios = require('axios');


function renderModal({ src, thumb, description }) {

 const modalTemplate = `<div class="postModal">
 <a href="#" class="btnClose">
   <img src="/icons/close.svg" alt="" class="btnClose-icon" > 
 </a>
 <div class="postModal-content">
   <div class="postModal-image">
     <div class="postModal-imageContainer postModal-imageContainer--bg">
         <img src="" alt="" data-field="photoModal-bg">
     </div>
     <div class="postModal-imageContainer postModal-imageContainer--main">
         <img src="" alt="" data-field="photoModal-main">
     </div>
   </div>
   
   <div class="postModal-description">
    <div class="postModal-userName" data-field="userNameModal">Natalia Bystrova</div>
     <button class="accountInfo-followMeButton">Подписаться</button>
     <div class="postModal-imageDescription" data-field="imageDescriptionModal"></div>
     <div class="postModal-comments">Cool</div>
     <div class="postModal-addInfo"><Likes/div>
   </div>
 </div>
</div>`

  //const modalTemplate = document.querySelector('#modal_template');
  const modalElement = document.createElement('div');
  modalElement.classList.add('postModal-wrapper')
  modalElement.innerHTML = modalTemplate;
  console.log(modalElement);

  const imageModal = modalElement.querySelector('[data-field="photoModal-main"]');
  const imageModalBg = modalElement.querySelector('[data-field="photoModal-bg"]');
  const imageDescriptionModal = modalElement.querySelector('[data-field="imageDescriptionModal"]');

  imageModal.src = thumb;
  imageModalBg.src = thumb;
  imageDescriptionModal.innerHTML = description;

  document.body.appendChild(modalElement);

  const element = document.createElement('img');
  const hiddenContainer = document.querySelector('.hidden-container');
  hiddenContainer.appendChild(element);

  element.onload = () => {
   console.log('onload');
   element.className = imageModal.className;
   imageModal.parentNode.replaceChild(element, imageModal);
  };
  element.src = src;

  const closeButton = modalElement.querySelector('.btnClose');
  closeButton.addEventListener('click', function(e) {
    e.preventDefault;
    document.body.removeChild(modalElement);
  })
}



module.exports = renderModal;