export const getToken = () => {
  return JSON.parse(localStorage.getItem("userDetails"))?.token;
};

export const setUser = (userObject) => {
  localStorage.setItem("userDetails", JSON.stringify(userObject));
};

export const getUser = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  return userDetails;
};

export const clearLocalStorage = () => {
  localStorage.clear();
  window.location.reload();
};

export const setUserRegistrationId = (userObject) => {
  localStorage.setItem("curr_registered_id", JSON.stringify(userObject));
};

export const getUserRegistrationId = () => {
  return JSON.parse(localStorage.getItem("curr_registered_id"));
};
