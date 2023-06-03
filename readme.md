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

### Technologies Used

- HTML5
- CSS
- JavaScript
- JQuery
- OpenLibrary API

### API description

Search book with the word and return all books that contain that word in their titles

### Mockup

![Mockup Item](https://i.imgur.com/X1w9MvR.png)

### Details about Difficulties

- Finding the suitable API
- Loading images

### Daily Schedule

| Day | Task                               |
| --- | ---------------------------------- |
| 1   | Basic Setup                        |
| 2   | Find API                           |
| 3   | Call API & Render data to the page |
| 4   | Add user interactivity             |
| 5   | Design                             |
| 6   | Edit readme file                   |
| 7   | Do responsive web design           |
| 8   | Work on loading images             |
