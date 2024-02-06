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

// GET CURRENT DATE STRING
export const getCurrentDate = () => {
  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  var today = year + "-" + month + "-" + day;

  return today;
};

// GET DATE STRING
export const getDateString = (dateString) => {
  var date = new Date(dateString);

  return date.toDateString();
};

// PARSE INTEGER

export const parseAnswerInt = (element) => {
  if (!isNaN(element) && element != "") {
    return parseInt(element, 10);
  } else {
    return element;
  }
};

export const parseArrayAnswerInt = (string) => {
  var stringArray = string.split(",").map(function (element) {
    return parseAnswerInt(element);
  })

  return stringArray
};


// get date string

export const getDateValue = (originalDate)=>{
  return new Date(originalDate).toISOString().slice(0, 10);
}
