const axios = require('axios');

const renderModal = require('./modal.js')

function renderPost({ postTemplate, postsContainer }) {
  axios.get('/posts')
    .then(({ data } ) => {
      data.forEach((post) => {
        const { thumb, description } = post;
        const element = document.createElement('div');
       
        element.innerHTML = postTemplate.innerHTML;

        const bg = element.querySelector('[data-field="bg"]');
        const image = element.querySelector('[data-field="photo"]');
        image.src = thumb;
        image.title = description;
        bg.src = thumb;

        const concreteElement = element.firstElementChild;

        postsContainer.appendChild(concreteElement);
        concreteElement.addEventListener('click', (event) => {
          renderModal(post);
        });
      });
    });
}

module.exports = renderPost;