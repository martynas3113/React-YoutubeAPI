## React-YoutubeAPI

Youtube videos app made by React.js with YoutubeAPI.

####  Features: 

<b> Frontend : </b>
- Fully responsive layout
- Search input validations (Only characters with length less than 20 symbols)
- Message for invalid input
- Search results limited to 20 videos
- Loads next 20 videos on scroll down


<b> Backend : </b>
- Node.js app to log user actions in UI :
  1) Logging search words
  2) Logging selected video info
  
- REST API end point created to log actions
- All user actions saved in MongoDB database

- Search keyword save format in database 
  
  ![search format](https://user-images.githubusercontent.com/60692659/107048214-5bbef880-67d1-11eb-9a3c-8bd55c4a1bc5.PNG)


- Selected video save format in database 
  
  ![selected vid](https://user-images.githubusercontent.com/60692659/107048406-945ed200-67d1-11eb-88d4-7bc226c106b3.PNG)
