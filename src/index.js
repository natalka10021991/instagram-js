require('./css/style.css');

const axios = require('axios');

const headerTemplate = document.querySelector('#header_template');
const headerContainer = document.querySelector('#header_container');

function renderHeader() {

  axios.get('/user')
  .then(({ data} ) =>{
 
   headerContainer.innerHTML = headerTemplate.innerHTML;
 
   const {
     user_name,
     user_nic,
     description,
     folowers,
     following,
     posts_count,
     src
   } = data;
 
   headerContainer.querySelector('[data-field="username"]').innerHTML = user_name;
   headerContainer.querySelector('[data-field="posts_count"]').innerHTML = posts_count;
   headerContainer.querySelector('[data-field="folowers"]').innerHTML = folowers;
   headerContainer.querySelector('[data-field="following"]').innerHTML = following;
   headerContainer.querySelector('[data-field="description"]').innerHTML = description;
   headerContainer.querySelector('[data-field="logo"]').src = src; 
  });
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    renderHeader();
  }
}
