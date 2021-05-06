function makeFriendsList(friends) {
  let result = document.createElement('ul');

  friends.map(item => {
    result.insertAdjacentHTML('beforeend', `<li>${item.firstName}  ${item.lastName}</li>`);
  });
  console.log(result);
  return result;
}
