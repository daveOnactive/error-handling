exports.getUsers = () => {
  const users = ['David', 'John', 'Lisa']

  const usersPromise = new Promise(res => res(users));
  
  return usersPromise;
}