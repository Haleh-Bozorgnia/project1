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


