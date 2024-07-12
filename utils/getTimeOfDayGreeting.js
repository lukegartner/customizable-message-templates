// This function accepts a timezone string as an argument and returns acceptable greeting based on time of day in that timezone

export const getTimeOfDayGreeting = (timeZone) => {
  // Declares timezone id variable to be assigned by companies timezone
  let timeZoneId;

  //   Assigns Javascript timezone id to variable based on company's timezone.  Currently covers the four mainland timezones pacific/mountain/central/eastern.
  //   If timezone fails to convert to javascript timezoneId a greeting of Hello will be returned.
  if (timeZone === "US/Pacific") {
    timeZoneId = "America/Los_Angeles";
  } else if (timeZone === "US/Mountain") {
    timeZoneId = "America/Denver";
  } else if (timeZone === "US/Central") {
    timeZoneId = "America/Chicago";
  } else if (timeZone === "US/Eastern") {
    timeZoneId = "America/New_York";
  } else {
    return "Hello";
  }

  //   Number indicating time of day
  const timeOfDay = Number(
    new Date()
      .toLocaleString("en-US", {
        hour: "2-digit",
        hour12: false,
        timeZone: timeZoneId,
      })
      .slice(0, 2)
  );

  // Converts time of day to appropriate greeting
  // Currently supports the following greeings
  // 4am - 11:59am = "Good Morning"
  // 12pm - 4:59pm = "Good Afternoon"
  // 5pm - 9:59pm = "Good Evening"
  // 10pm - 3:59am = "Thank you for recieving this overnight message"
  // A generic "Hello" in the case of an errors
  console.log(timeOfDay);
  if (timeOfDay >= 4 && timeOfDay < 12) {
    return "Good Morning";
  } else if (timeOfDay >= 12 && timeOfDay < 17) {
    return "Good Afternoon";
  } else if (timeOfDay >= 17 && timeOfDay < 22) {
    return "Good Evening";
  } else if (timeOfDay >= 22 || timeOfDay < 4) {
    return "Thank you for recieving this overnight message";
  } else {
    return "Hello";
  }
};
