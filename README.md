# Roman-Numerals: Convertor
This application converts  number to roman numeral and roman numeral to normal number. It converts numbers between 1 and 3999.

To Run
============
* backend
1. `> cd backend `
2. `> yarn or npm install `,  install all dependency .
3. `> yarn start or npm start`, start server.


* Frondend
1. `> cd frontend`
2. `> yarn  or npm install`,  install all dependency .
3. `> yarn start or npm start`, start the server.

## Approach

### Features
With the time given, I have chosen a combination of features, decided on how
the structure of the application should look like and focus on the functionalities of the app. I then followed agile development approach to develop the application.

With this tool, users can:
- convert a normal number (1 up to 3999) to roman digits.
- Convert a roman number to normal number

### Main frameworks and libraries
- Frontend: HTML, CSS, ES6, JavaScript, React
- Server: Node.js, Express.js.


### Application architecture
In the backend I made two endpoints  which respectively send to the frontend the ouput of the conversion of normal number to roman number and vice versa.
On the client the user has to fill an input field with the type of number they want to convert. The user input is then send to server where conversion happens and the result will be send back.

The server uses Node.js to create a server and the frontend uses `axios`  with the help of `proxy` for making http calls to communicate with the server.

### Future improvements
I am still working to imporve the app to make it robust.
Improve UI for better user experience.
Add unit test as well as end to end test with mocha.

## Licence
.  MIT

## Authour

Ameer