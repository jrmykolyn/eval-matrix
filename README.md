# How to use this project

### Install node dependencies

```js
npm install
```

### Run Webpack Dev Server

```js
npm start
```

### Routes

Home

```
http://localhost:8080/#start
```

Name Entry

```
http://localhost:8080/#name
```

Question

```
http://localhost:8080/#question/<question-id>
```

Score Screen

```
http://localhost:8080/#score
```

Question Summary

```
http://localhost:8080/#question-summary
```


### Console Interface

- All functionality is avaible through a route level static `Controller` singleton object on the console command line
- I'm too lazy to document it all, look at the class if you want to learn about all the functions. Here are a few helpful ones:


Simulate completed test

```js
Controller.resetData(true); // true flag tells it to randomize all answers
```

Export/Import

```js
const e = Controller.export(); // Exported as Base64 encoded JSON
Controller.import(e);
```

Restore from localStorage

```js
Controller.restoreFromLocalStorage('Joe Bob');
// Exact string match of name entered in first screen
// Tests are backed up to localStorage after every answer is selected. 
```


### Notes

- Questions are currently just copy and pastes of the spreadsheet. We need to rework `all` of them so that they have a short and concise title with a clear description on how to evaluate.
- It is NOT responsive, it presumes your browser window will be at least 1040px wide. Maybe il fix this later. Prob not worth the effort.
- We probably need to consolidate/prune some of these, going through this whole test takes too long. 
- This was hacked together for internal use.
- It was only tested in chrome
- It makes many presumptions that data is valid or will crash and burn
- Corners were cut in code quality, many things could be refactored to be more logical/efficient
- Yup, I used a super primative hash routing system. Couldn't be bothered to create something more robust.
- Yes, the code is `linty` in places. I will fix it later, maybe.  
- Refreshing the page wipes out the current test. (Though it can be restored from localStorage, see above)
- There is certainly a ton more than can be done to improve on this. If we were to add a backend we could track change over time and compare candidates. Consider this a `draft`.
- Its built in React because I felt like it. 
- Score value is an arbitrary number, internally scores are expressed as a percent. Weights are taken into account when creating the score (Which is why some categories have a higher max than others)
- It is possible I buggered up the math at least once, someplace. Let me know if you find anything.
- I bet you didn't read this far, if you did, here is a video reward for you: https://www.youtube.com/watch?v=PGNiXGX2nLU
