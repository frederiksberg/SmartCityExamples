# SmartCityExamples
Examples of using the web-socket service from SmartCity

# Setup
To test the above examples you'll need a http-server, because most browsers wont allow web-socket connections from a file.
The easiest way is to use [Node](https://nodejs.org/en/) and [http-server](https://www.npmjs.com/package/http-server)

Simply install it by running 
```bash
npm install http-server -g
```
Then navigate into the example folder you want to test and run
```bash
http-server
```
You should now be able to see the example on 
```bash
http://localhost:8080
```
