import client from './api-client';

const localStorageKey = '__cove_token__';

function handleUserResponse(user) {
  window.localStorage.setItem(localStorageKey, user.id);
  // eslint-disable-next-line no-param-reassign
  delete user.token;
  return user;
}

function getUserId() {
  return window.localStorage.getItem(localStorageKey);
}

function logout() {
  window.localStorage.removeItem(localStorageKey);
  return Promise.resolve();
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
  return client('login', { body: { email, password } })
    .then(handleUserResponse)
    .catch(error => console.log('CE', error));
}

function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

export { login, logout, getToken, getUser };
