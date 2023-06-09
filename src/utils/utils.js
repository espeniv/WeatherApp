import rain from "../assets/rain.png";
import sun from "../assets/sun.png";
import cloud from "../assets/cloud.png";
import suncloud from "../assets/suncloud.png";

export const getDateDay = () => {
  const today = new Date();
  const day = String(today.getDate());
  return day;
};

export const getDateMonth = () => {
  const today = new Date();
  const month = String(today.getMonth() + 1);
  return month;
};

export const getWeekday = (daysFromNow = 0) => {
  //Hacky solution to use weatherForecasts' index without going out of array bounds
  const weekdays = [
    "Sun.",
    "Mon.",
    "Tue.",
    "Wed.",
    "Thu.",
    "Fri.",
    "Sat.",
    "Sun.",
    "Mon.",
    "Tue.",
    "Wed.",
    "Thu.",
    "Fri.",
    "Sat.",
  ];
  const today = new Date();
  const weekDay = today.getDay();
  return weekdays[weekDay + daysFromNow];
};

export const kelvinToCelsius = (kelvin) => {
  const celsius = kelvin - 273.15;
  return celsius;
};

export const getIcon = (data) => {
  if (data.description.includes("rain")) {
    return rain;
  }
  if (data.description.includes("few") || data.description.includes("clear")) {
    return sun;
  }
  if (data.description.includes("scattered")) {
    return suncloud;
  } else {
    return cloud;
  }
};
