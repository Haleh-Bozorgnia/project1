# Project 1

By Haleh Bozorgnia

### Project description

- What is your API?
  https://openlibrary.org/search.json?title

- Example code of you testing it

```js
const $searchForm = $("form");

$searchForm.on("submit", (event) => {
  event.preventDefault();

  //generate data from the target object
  const formData = new FormData(event.target);

  //get the data from the user input
  const bookTitle = formData.get("bookTitle").toLocaleLowerCase();
  // read API url
  const url = `https://openlibrary.org/search.json?title=${bookTitle}`;

  //empty out the input field
  const $resultDiv = $(".result");
  $('[name="bookTitle"]')[0].value = "";
  $resultDiv.empty();
  //use Jax to fetch data
  $.ajax(url).then((response) => {
    //print the output of URL
    console.log(response);
    console.log(response.docs);

    //getting the API output as an array
    let arr = response.docs;
    //loop over the respone array
    for (let i = 0; i < arr.length; i++) {
      //print all the neccessory field
      console.log(arr[i].title);
      const div = $("<div>");
      div.addClass("result-container");

      console.log(arr[i].author_name[0]);
      console.log(arr[i].first_publish_year);
      console.log(arr[i].ebook_access);

      //define the variable for image of author
      const imagename = arr[i].author_key[0];
      const $img = $("<img />");
      $img.addClass("myimg");
      // set  images
      $img.attr(
        "src",
        `https://covers.openlibrary.org/a/olid/${imagename}-M.jpg`
      );

      $img.attr("alt", `${arr[i].author_name[0]}`);
      div.html(`<div>Book Name: ${arr[i].title}</div>
                <div>Author Name: ${arr[i].author_name[0]}</div>
                <div>First pblish Year: ${arr[i].first_publish_year}</div>
                <div>Ebook Access: ${arr[i].ebook_access}</div> 
                <br>  
      `);
      $resultDiv.append(div, $img);
    }
  });
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
