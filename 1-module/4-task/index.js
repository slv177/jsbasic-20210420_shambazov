function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes('xxx') || lowerStr.includes('1xbet');
}


// function checkSpam(str) {
//   const lowerStr = str.toLowerCase();
//   const badWords = ['xxx', '1xbet'];
//
//   for (let badWord in badWords) {
//     if (lowerStr.includes(badWord)) {
//       return true;
//     }
//   }
//   return false;
// }

