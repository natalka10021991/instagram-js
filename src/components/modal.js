const axios = require('axios');


function renderModal(src, description) {

  const modalTemplate = document.querySelector('#modal_template');
  const modalElement = document.createElement('div');
  modalElement.classList.add('postModal-wrapper')
  modalElement.innerHTML = modalTemplate.innerHTML;

  const imageModal = modalElement.querySelector('[data-field="photoModal"]');
  const imageDescriptionModal = modalElement.querySelector('[data-field="imageDescriptionModal"]');

  imageModal.src = src;
  imageDescriptionModal.innerHTML = description;

  document.body.appendChild(modalElement);

  const closeButton = modalElement.querySelector('.btnClose');
  closeButton.addEventListener('click', function(e) {
    e.preventDefault;
    document.body.removeChild(modalElement);
  })
}



module.exports = renderModal;