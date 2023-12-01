export const getToken = () => {
    return JSON.parse(localStorage.getItem("userDetails"));
  };
  console.log("My Token", getToken);
  
  export const setUser = (userObject) => {
    localStorage.setItem("userDetails", JSON.stringify(userObject));
  };
  
  export const getUser = () => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    return userDetails;
  };
  