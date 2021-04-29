function isEmpty(obj) {
  for (const property in obj) {
    return false;
  }
  return true;
}
