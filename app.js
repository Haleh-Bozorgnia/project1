const $searchForm = $("form");

$searchForm.on("submit", (event) => {
  event.preventDefault();

  //generate data from the target object
  const formData = new FormData(event.target);

  //get the data from the user input
  const bookTitle = formData.get("bookTitle").toLocaleLowerCase();

  const $screen = $(".screen");
  const $result = $(".result");

  //empty out the input field
  $('[name="bookTitle"]')[0].value = "";

  $result.html(`<div> loading..</div>`);

  // read API url
  const url = `https://openlibrary.org/search.json?title=${bookTitle}`;

  $.ajax(url).then((response) => {
    const docs = response.docs[0];
    // console.log(docs);
    $result.html(`
    <div>
      title 1:${docs.title}
    </div>
    <div>
      Author Name: ${docs.author_name}
    </div>
    <div>
     First Publish Year: ${docs.first_publish_year}
    <div
    <div>
      Ebook Access: ${docs.ebook_access}
    </div>
  `);
    // console.log(response.docs);
  });
});
