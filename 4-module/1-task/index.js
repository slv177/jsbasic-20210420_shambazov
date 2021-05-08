function makeFriendsList(friends) {
  let result = document.createElement('ul');

  friends.forEach(item => {
    result.insertAdjacentHTML('beforeend', `<li>${item.firstName}  ${item.lastName}</li>`);
  });
  return result;
}
