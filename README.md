# Hotel-Resort
CS 6314 - Web Programming Languages - Final Project

**Instructions to compile the project:**

1. Fork the repo
2. Clone the repo
3. Open the repo in your favorite editor
4. cd `Hotel-Resort REPO`
2. Type `npm install`
3. Type `node app`
4. You should get the below message in the terminal and type `localhost:3000` in your browser
```
Resort app listening on port 3000 
Resort app db connection successful
```
**Frontend Instructions:**
1. `cd Frontend/hotel-resort`
2. `npm install`
3. In package.json, 


If **Windows** change the scripts part: 


  "scripts": {
    "start": "set PORT=3060 react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }


If **MAC** change the scripts part: 


  "scripts": {
    "start": "PORT=3060 react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }

  
4. `npm start`


**Backend Instructions:**

(Once localhost connection is successful at port: 3000)

1. Testing POSTMAN API's 
```
 1. Goto `POST Create New user` on left bar
 2. On right side Click Body
 3. Copy paste the below JSON and Click the Send Blue button (It should give response when successful):
 {
	"firstName": "NAME",
	"lastName": "KS",
	"email": "name@gmail.com"
}

4. To get users try localhost:3000/users, you will get list of all users.

 ```

 **Utilities:**

 1. Download MongoDB Compass for User Friendly DB Visulaization including table representation (https://www.mongodb.com/products/compass)
 2. In the MongoDB Compass --> New Connection: Paste `mongodb://localhost/ResortApp` and click connect.