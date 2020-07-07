const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

const port = process.env.PORT || 3000;


app.use((request, response, next) => {
    console.log(request.headers)
    request.activityId = uuidv4();
    next();
  })
  
  app.use((request, response, next) => {
    const startTime = new Date().getTime();
    
    next();

    const endTime = new Date().getTime();

    var timeDifference = endTime - startTime;
    console.log("ActivityId="+request.activityId+"Request Executed: Time Taken "+ timeDifference +"ms " );
  })
  

app.get('/', (request, response) => {
  response.send('Hello from Express!');
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
})