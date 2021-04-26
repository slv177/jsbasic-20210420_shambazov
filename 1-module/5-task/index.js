function truncate(str, maxlength) {
  if (str.length > maxlength){
    const slice = str.slice(0, maxlength - 1);
    return `${slice}…`;
  }
  return str;
}
