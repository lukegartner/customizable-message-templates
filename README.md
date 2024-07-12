![Alt text](/images/Screenshot-1.png?raw=true "Screenshot")

## Deployed Project

This project has been deployed using Vercel. Following the link is the easiest way to interact with the program.

[https://customizable-message-templates-goa2up957.vercel.app/](https://customizable-message-templates-goa2up957.vercel.app/)

## Running the Program

You will need NodeJS 18.7 or later

First, install the project's dependencies:

```bash
npm install
```

Then start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Decisions

This project uses components and utility functions to separate logic into more easily consumable chunks.

Much of the logic will be found in /components/MessageConstructor.jsx which interacts with json data in /data and the message template object stored in /utils/messageTemplates.js. The function that handles greetings based on time of day is found in /utils/getTimeOfDayGreeting.js

TailwindCss and DaisyUI were used to achieve familiar web design elements for ease of use at first glance.

## Technology used

This project was created using JavaScript and Next.JS. I used this as it has a great organization benefits and ease of scallability when converting to using a database and server in the future instead of static json files.

This project uses Tailwind Css and DaisyUI to quickly give ease of use and styling to the UI elements.

## Testing

This project used testing to handle errors and edge cases manually testing for various scenarios in the console and from the ui.

## Future Expansion

With more time dedicated to this project I would like to introduce a database to store the data and use Next.js's convenient server tools to fetch the json. I did not want to go outside the bounds of the instructions by doing this and instead used json files for this submission.

I would also like to add UI for adding new custom templates instead of just from the code and store them in the database for long term use. Currently custom messages can be created, but not fully functional message template editing form the UI.
