const axios = require('axios');

function renderPost({ postTemplate, postsContainer }) {
  axios.get('/posts')
    .then(({ data } ) => {
      data.forEach((post) => {
        const { src, description } = post;
        const element = document.createElement('div');
       
        element.innerHTML = postTemplate.innerHTML;

        const image = element.querySelector('[data-field="photo"]');
        image.src = src;
        image.title = description;

        const concreteElement = element.firstElementChild;

        const modalTemplate = document.querySelector('#modal_template');
        const modalElement = document.createElement('div');
        modalElement.classList.add('postModal-wrapper')
        modalElement.innerHTML = modalTemplate.innerHTML;

        const imageModal = modalElement.querySelector('[data-field="photoModal"]');
        imageModal.src = src;

        postsContainer.appendChild(concreteElement);
        concreteElement.addEventListener('click', (event) => {
          console.log(post);
          document.body.appendChild(modalElement);

        });

        const closeButton = modalElement.querySelector('.btnClose');
        closeButton.addEventListener('click', function(e) {
          e.preventDefault;
          document.body.removeChild(modalElement);
        })
      });
    });
}

module.exports = renderPost;