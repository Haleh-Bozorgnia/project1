# Project 1

By Haleh Bozorgnia

### Project description

- What is your API?
  https://openlibrary.org/search.json?title

- Example code of you testing it

```js
const url = `https://openlibrary.org/search.json?title=${type}`;
 $.ajax(url)
  .then((response) => {
    console.log(response.docs);
    console.log(response.docs[0])
  }
```

### API description

Search book by name and load the title of book, author name,ebook access, title,first publish year and image

-

### Mockup

![Mockup Item]()

### Details about Difficulties

### Daily Schedule

| Day | Task                    |
| --- | ----------------------- |
| 1   | Setup Basic Project     |
| 2   | Make API call           |
| 3   | Render data to the page |
| 4   | Add user interactivity  |
| 5   |                         |
