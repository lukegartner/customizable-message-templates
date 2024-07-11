"use client";

import guests from "@/data/guests.json";
import companies from "@/data/companies.json";
import messages from "@/data/messages.json";
import holidays from "@/data/holidays.json";
import { useState } from "react";
import MessageDisplay from "./MessageDisplay";
import { messageTemplates } from "@/utils/messageTemplates";

const MessageConstructor = () => {
  // This state value contains the message constructed based on input values
  const [message, setMessage] = useState("");
  // This state value contains the selcted message tempate to polulate required variale select elements
  const [selectedMessageTemplate, setSelectedMessageTemplate] = useState({
    id: "",
    companyIds: [],
    message: "",
    variables: [],
  });

  // This function creates a message based on input values
  const createMessage = (formData) => {
    // ids for the input selections
    const guestId = Number(formData.get("guest"));
    const companyId = Number(formData.get("company"));
    const messageId = Number(formData.get("message"));
    const holidayId = Number(formData.get("holiday"));

    // Finds guest and company objects by from json file by id
    const guest = guests.find((guest) => guest.id === guestId);
    const company = companies.find((company) => company.id === companyId);
    const holiday = holidays.find((holiday) => holiday.id === holidayId);

    // sets message the selected message template using a function stored in message Templates object
    setMessage(messageTemplates[messageId].populate(guest, company, holiday));
  };
  return (
    <>
      <form action={createMessage}>
        {/* input container */}
        <div>
          {/* Select Message Template */}
          <select
            className="select w-full max-w-xs"
            name="message"
            defaultValue=""
            required
            onChange={(e) => {
              setSelectedMessageTemplate(
                messages.find((message) => {
                  return message.id === e.target.value;
                })
              );
            }}
          >
            <option disabled value="">
              Select Message
            </option>
            {/* displays all messages as options in select element */}
            {messages.map((message) => {
              return (
                <option
                  key={message.id}
                  value={message.id}
                >{`${message.message}`}</option>
              );
            })}
          </select>

          {/* Select Guest */}
          {selectedMessageTemplate.variables.includes("guest") && (
            <select
              className="select w-full max-w-xs"
              name="guest"
              defaultValue=""
              required
            >
              <option disabled value="">
                Select Guest
              </option>
              {/* Displays all guests as options in select element */}
              {guests.map((guest) => {
                return (
                  <option
                    key={guest.id}
                    value={guest.id}
                  >{`${guest.firstName} ${guest.lastName}`}</option>
                );
              })}
            </select>
          )}

          {/* Select Company */}
          {selectedMessageTemplate.variables.includes("company") && (
            <select
              className="select w-full max-w-xs"
              name="company"
              defaultValue=""
              required
            >
              <option disabled value="">
                Select Company
              </option>
              {/* Displays only companies whos company id is contained in the selected message template*/}
              {companies
                .filter((company) =>
                  selectedMessageTemplate.companyIds.includes(company.id)
                )
                .map((company) => {
                  return (
                    <option
                      key={company.id}
                      value={company.id}
                    >{`${company.company}`}</option>
                  );
                })}
            </select>
          )}

          {/* Select Holiday */}
          {selectedMessageTemplate.variables.includes("holiday") && (
            <select
              className="select w-full max-w-xs"
              name="holiday"
              defaultValue=""
              required
            >
              <option disabled value="">
                Select Holiday
              </option>
              {holidays.map((holiday) => {
                return (
                  <option
                    key={holiday.id}
                    value={holiday.id}
                  >{`${holiday.holiday}`}</option>
                );
              })}
            </select>
          )}
        </div>
        {/* Create Message Button */}
        <button className="btn btn-primary mt-2 mx-2">Create Message</button>
      </form>
      <MessageDisplay message={message} />
    </>
  );
};

export default MessageConstructor;
