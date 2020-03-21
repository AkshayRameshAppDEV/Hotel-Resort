# Hotel-Resort
CS 6314 - Web Programming Languages - Final Project

**Instructions to compile the project:**

1. Fork the repo
2. Clone the repo
3. Open the repo in your favorite editor
4. cd `Hotel-Resort REPO`
5. Choose **Frontend(nfront)** or **Backend** to work on 

---

**Frontend Compile Instructions:**
1. `cd nfront`
2. `npm install`
3. `npm start`

---

**Backend Compile Instructions:**

1. `cd Backend`
2. `npm install`
3. `node app`
4. You should get the below message in the terminal

```
Resort app listening on port 5000 
Resort app db connection successful
```

5. Go to `localhost:5000` in your browser

(Once localhost connection is successful at port: 5000)

1. Testing POSTMAN API's 
```
 1. Goto `POST Create New user` on left bar
 2. On right side Click Body
 3. Copy paste the below JSON and Click the Send Blue button (It should give response when successful):
 {
	"firstName": {First Name},
	"lastName": {Last Name},
	"email": {Email}
}

4. To get users try localhost:5000/users, you will get list of all users.

 ```
 
---

 **Utilities:**

 1. Download MongoDB Compass for User Friendly DB Visulaization including table representation (https://www.mongodb.com/products/compass)
 2. In the MongoDB Compass --> New Connection: Paste `mongodb://localhost/ResortApp` and click connect.
 3. For only MAC OS
 
	**Start Service**: brew services start mongodb-community@4.2
	
	**Stop Service**: brew services stop mongodb-community@4.2



 **Planning:**
 
 Docs: https://docs.google.com/document/d/1uvlGkROn5JnN_gttVX3d2Tej06pMQ9Drd0wnXnnySj4/edit?ts=5e72fa41
