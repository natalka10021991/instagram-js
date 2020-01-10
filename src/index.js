require('./css/style.css');

const renderHeader = require('./components/header.js')
const renderPost = require('./components/post.js')

const headerTemplate = document.querySelector('#header_template');
const headerContainer = document.querySelector('#header_container');

const postTemplate = document.querySelector('#post_template');
const postsContainer = document.querySelector('#posts_container');

function renderApp() {
  renderHeader({headerTemplate, headerContainer});
  renderPost({postTemplate, postsContainer});
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    renderApp();
  }
}


