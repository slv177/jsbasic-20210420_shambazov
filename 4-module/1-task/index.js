function makeFriendsList(friends) {
  let result = document.createElement('ul');

  friends.map(item => {
    let newLi = document.createElement('li');
    newLi.insertAdjacentHTML('beforeend', `${item.firstName}  ${item.lastName}`);
    result.appendChild(newLi);
  });
  return result;
}
