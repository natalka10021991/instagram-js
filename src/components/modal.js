const axios = require('axios');


function renderModal({ src, thumb, description }) {

  const modalTemplate = document.querySelector('#modal_template');
  const modalElement = document.createElement('div');
  modalElement.classList.add('postModal-wrapper')
  modalElement.innerHTML = modalTemplate.innerHTML;

  const imageModal = modalElement.querySelector('[data-field="photoModal"]');
  const imageDescriptionModal = modalElement.querySelector('[data-field="imageDescriptionModal"]');

  imageModal.src = thumb;
  imageDescriptionModal.innerHTML = description;

  document.body.appendChild(modalElement);

  // const image = new Image();
  // image.onload = () => {
  //   imageModal.src = src;
  // };
  // image.src = src;
  // console.log(image);

  const element = document.createElement('img');
  const hiddenContainer = document.querySelector('.hidden-container');
  hiddenContainer.appendChild(element);
  element.onload = () => {
    console.log('onload');
    // imageModal.src = src;
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