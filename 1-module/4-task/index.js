// function checkSpam(str) {
//   const lowerStr = str.toLowerCase();
//   return lowerStr.includes('xxx') || lowerStr.includes('1xbet');
// }


function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  const BAD_WORDS = ['xxx', '1xbet'];

  for (let badWord of BAD_WORDS) {
    if (lowerStr.includes(badWord)) {
      return true;
    }
  }
  return false;
}

