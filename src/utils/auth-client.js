import client from "./api-client";

const localStorageKey = "__cove_token__";

function handleUserResponse(user) {
  window.localStorage.setItem(localStorageKey, user.id);
  delete user.token;
  return user;
}

function getUser() {
  const userId = getUserId();
  if (!userId) {
    return Promise.resolve(null);
  }
  return client(`login/${userId}`).catch(error => {
    logout();
    return Promise.reject(error);
  });
}

function login({ email, password }) {
  return client("login", { body: { email, password } })
    .then(handleUserResponse)
    .catch(error => console.log("CE", error));
}

function logout() {
  window.localStorage.removeItem(localStorageKey);
  return Promise.resolve();
}

function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

function getUserId() {
  return window.localStorage.getItem(localStorageKey);
}

export { login, logout, getToken, getUser };
