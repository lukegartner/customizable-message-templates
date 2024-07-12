import { getTimeOfDayGreeting } from "./getTimeOfDayGreeting";

export const messageTemplates = {
  1000: {
    message: "Custom Message",
    populate: (guest, company, _, customMessage) => {
      return `${getTimeOfDayGreeting(company.timezone)}, ${guest.firstName} ${
        guest.lastName
      }. ${customMessage} -From ${company.company}`;
    },
  },
  1001: {
    message: "Welcome!",
    populate: (guest, company) => {
      return `${getTimeOfDayGreeting(company.timezone)} ${guest.firstName} ${
        guest.lastName
      }, and welcome to ${company.company}! Room ${
        guest.reservation.roomNumber
      } is now ready for you. Enjoy your stay, and let us know if you need anything.`;
    },
  },
  1002: {
    message: "Checkout Confirmation",
    populate: (guest, company) => {
      return `${getTimeOfDayGreeting(company.timezone)} ${guest.firstName} ${
        guest.lastName
      }, we hope you enjoyed your stay at ${
        company.company
      }! Your checkout is confirmed for room ${
        guest.reservation.roomNumber
      }.  Thank you we hope to see you again soon!`;
    },
  },
  1003: {
    message: "Beaches Closed - Dangerous Water Conditions",
    populate: (guest, company) => {
      return `${getTimeOfDayGreeting(company.timezone)} ${guest.firstName} ${
        guest.lastName
      }, ${
        company.city
      } authorities have notified us of dangerous water conditions.  Beaches are currently closed at ${
        company.company
      }. We will notify you when we are able to open our beaches!`;
    },
  },
  1004: {
    message: "Beaches Open and Safe",
    populate: (guest, company) => {
      return `${getTimeOfDayGreeting(company.timezone)} ${guest.firstName} ${
        guest.lastName
      }, the beaches at ${
        company.company
      } are now open!  Conditions are safe for swimming.`;
    },
  },
  1005: {
    message: "Beaches Open and Safe",
    populate: (guest, company, holiday) => {
      return `${getTimeOfDayGreeting(company.timezone)} ${guest.firstName} ${
        guest.lastName
      }, ${company.company} wishes you a happy ${holiday.holiday}!`;
    },
  },
};
