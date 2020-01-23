const axios = require('axios');

const renderModal = require('./modal.js')

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

        postsContainer.appendChild(concreteElement);
        concreteElement.addEventListener('click', (event) => {
          console.log(post);
          renderModal(src, description);

        });
      });
    });
}

module.exports = renderPost;