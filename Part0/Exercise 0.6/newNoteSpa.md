## Exercise 0.6 diagram

```mermaid
sequenceDiagram
    participant browser
    participant server
    
    Note right of browser: User submits in the form on a web page. Function redrawNotes() is run and note rendered on page. Then function sendToServer() is run and      browser does POST HTTP Request to server.
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: responds with status code 201
    deactivate server
    
    Note right of browser: Browser sends JSONfile containing new note to the server. Server responds with status code 201 created. No further requests.
```
