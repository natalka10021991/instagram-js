const axios = require('axios');

function renderHeader({headerTemplate, headerContainer}) {

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

module.exports = renderHeader;