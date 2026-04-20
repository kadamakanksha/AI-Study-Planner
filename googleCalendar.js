const CLIENT_ID = "YOUR_CLIENT_ID_HERE";
const API_KEY = ""; // optional

const DISCOVERY_DOC = "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

function initClient() {
  gapi.load("client:auth2", () => {
    gapi.client.init({
      discoveryDocs: [DISCOVERY_DOC],
      clientId: CLIENT_ID,
      scope: SCOPES
    });
  });
}

function signIn() {
  gapi.auth2.getAuthInstance().signIn();
}

function addEvent(summary, date) {
  let event = {
    summary: summary,
    start: {
      date: date
    },
    end: {
      date: date
    }
  };

  gapi.client.calendar.events.insert({
    calendarId: "primary",
    resource: event
  }).then(() => {
    alert("Event added to Google Calendar!");
  });
}