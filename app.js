const $searchForm = $("form");

$searchForm.on("submit", (event) => {
  event.preventDefault();

  //generate data from the target object
  const formData = new FormData(event.target);

  //get the data from the user input
  const bookTitle = formData.get("bookTitle").toLocaleLowerCase();

  const $screen = $(".screen");
  // const $result = $("#result");

  //empty out the input field
  // $('[name="bookTitle"]')[0].value = "";

  // $result.html(`<div> loading..</div>`);

  // read API url
  const url = `https://openlibrary.org/search.json?title=${bookTitle}`;

  $.ajax(url).then((response) => {
    console.log(response);
    const $resultDiv = $(".result");

    // const doc = response.docs.map((d) => {
    //   return { title: d.title};
    // });
    // const div = $("<div>");

    console.log(response.docs);
    let arr = response.docs;
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].title);
      const div = $("<div>");

      console.log(arr[i].author_name);
      console.log(arr[i].first_publish_year);
      console.log(arr[i].ebook_access);

      div.html(`<h5>Book Name: ${arr[i].title}</h5>
                <h5>Author Name: ${arr[i].author_name}</h5>
                <h5>First pblish Year: ${arr[i].first_publish_year}</h5>
                <h5>Ebook Access: ${arr[i].ebook_access}</h5
      `);
      $resultDiv.append(div);
    }

    // console.log(response);

    //   $result.html(`
    //   <div>
    //     title 1:${docs.title}
    //   </div>
    //   <div>
    //     Author Name: ${docs.author_name}
    //   </div>
    //   <div>
    //    First Publish Year: ${docs.first_publish_year}
    //   <div
    //   <div>
    //     Ebook Access: ${docs.ebook_access}
    //   </div>
    // `);
  });
});
