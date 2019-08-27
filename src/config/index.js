let serverUrl;
if(process.env.NODE_ENV === 'production') {
    serverUrl = 'http://pacific-springs-96663.herokuapp.com'
  } else {
    serverUrl =  'http://localhost:3001'
  }

  export default serverUrl;