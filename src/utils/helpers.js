

// SUB: GET CURRENT PAGE
export const getPage = (path = "dashboard/") => {
  return window.location.pathname.split(path)[1]
    ? window.location.pathname.split(path)[1]
    : window.location.pathname.split("/")[1];
};



// SUB: CONFIRM PAGE LOCATION
export const checkInLocation = (val) => {
  return new RegExp("^" + val).test(getPage());
};
