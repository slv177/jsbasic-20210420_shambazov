function toggleText() {
  const currentText = document.getElementById('text');
  const button = document.querySelector('.toggle-text-button');

  const onClick = () => {
    const state = (currentText.getAttribute('hidden'));
    if (state === null) {
      currentText.setAttribute('hidden', 'true');
    } else {
      currentText.removeAttribute('hidden');
    }
  };

  button.addEventListener('click', () => {
    onClick();
  });

}
