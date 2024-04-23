# BoolZapp - Vue.js Messaging App

BoolZapp is a web-based instant messaging application developed with Vue.js, partially replicating the interface and some features of WhatsApp. Users can view a list of contacts, select a contact to view their conversation, and send new messages.

## Key Features

- Interface divided into two panels: one for the contact list and one to display the conversation with the selected contact
- Dynamic display of contacts with name and profile picture
- Dynamic display of messages related to the selected contact
- Sending new messages via text input
- Implementation of additional milestones such as contact search, message deletion, display of the time and the last sent/received message

## Technologies Used

- Vue.js
- HTML
- CSS
- Luxon library for date management

## Installation

1. Clone this repository to your local machine
2. Open the terminal and navigate to the project directory
3. Install dependencies by running the command `npm install`

## Running the Application

After installing the dependencies, start the application by running the command `npm run serve` in the terminal. The application will be accessible at `http://localhost:8080` (or the URL specified by the development server) in your browser.

## Project Structure

- `src/App.vue`: Main application component
- `src/components/ContactList.vue`: Component for the contact list
- `src/components/MessageThread.vue`: Component for displaying the conversation
- `src/components/MessageInput.vue`: Component for new message input
- `src/data/contacts.js`: File containing contact data

## Notes

- Vertical scrollbars, both in the message panel and the contact list, can be disregarded
- Buttons and icons may not be functional, except for sending messages
- The structure of the contacts array might have the following format:

```
[
  {
    name: "Michele",
    avatar: "img/avatar_1.jpg",
    visible: true,
    messages: [
      {
        date: "10/01/2020 15:30:55",
        message: "Did you walk the dog?",
        status: "sent"
      },
      {
        date: "10/01/2020 15:50:00",
        message: "Remember to hang the laundry",
        status: "sent"
      },
      {
        date: "10/01/2020 16:15:22",
        message: "All done!",
        status: "received"
      }
    ]
  }
  // Other contacts...
]
```
