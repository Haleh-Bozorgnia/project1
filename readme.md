# Project 1

By Haleh Bozorgnia

### Project description

- What is your API?
  https://openlibrary.org/search.json?title

- Example code of you testing it

```js
const url = `https://openlibrary.org/search.json?title=${type}`;
$.ajax(url).then((response) => {
  console.log(response.docs);
  console.log(response.docs[0]);
});
```

### API description

Search book with the world and return all books that contain that word in their title

### Mockup

![Mockup Item](https://i.imgur.com/X1w9MvR.png)

### Details about Difficulties

Finding the suitable API

### Daily Schedule

| Day | Task                    |
| --- | ----------------------- |
| 1   | Setup Basic Project     |
| 2   | Find API Make API call  |
| 3   | Make API call &         |
|     | Render data to the page |
| 4   | Add user interactivity  |
| 5   | Design                  |
| 6   | Edit readme file        |
| 7   | Make responsive         |
