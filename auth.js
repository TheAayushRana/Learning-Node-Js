const register = function (username) {
  console.log(`User ${username} is registered`);
};

const login = function (username) {
  console.log(`Username ${username} is logged in`);
};

module.exports = {
  register,
  login,
};
