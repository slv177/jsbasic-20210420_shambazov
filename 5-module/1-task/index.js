function hideSelf() {
  const onClick = () => {
    button.setAttribute('hidden', 'true');
  };

  const button = document.querySelector('.hide-self-button');

  button.addEventListener('click', () => {
    onClick();
  });
}
