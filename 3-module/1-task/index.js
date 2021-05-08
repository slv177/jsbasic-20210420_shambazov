function namify(users) {
  return users.map((item => {
    const {name} = item;
    return name;
  }));
}
