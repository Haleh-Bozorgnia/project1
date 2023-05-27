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

    console.log(response.docs);
    let arr = response.docs;

    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].title);
      const div = $("<div>");

      console.log(arr[i].author_name);
      console.log(arr[i].first_publish_year);
      console.log(arr[i].ebook_access);
      console.log(arr[i].author_key[0]);

      div.html(`<h5>Book Name: ${arr[i].title}</h5>
                <h5>Author Name: ${arr[i].author_name}</h5>
                <h5>First pblish Year: ${arr[i].first_publish_year}</h5>
                <h5>Ebook Access: ${arr[i].ebook_access}</h>         
      `);
      $resultDiv.append(div);
      const imagename = arr[i].author_key[0];
      const img = $("<img />", {
        src: `https://covers.openlibrary.org/a/olid/${imagename}-S.jpg`,
      });
      img.appendTo(".screen");
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

  //===============================================
  //===============================================
  // https://covers.openlibrary.org/a/olid/OL229501A-S.jpg

  //  $.ajax(url).then((response) => {
  //     console.log(response);
  //     const $resultDiv = $(".result");

  //     // const doc = response.docs.map((d) => {
  //     //   return { title: d.title};
  //     // });
  //     // const div = $("<div>");

  //     console.log(response.docs);
  //     let arr2 = response.docs;
  //     for (let i = 0; i < arr2.length; i++) {
  //       console.log(arr[i].title);
  //       const div = $("<div>");

  //       console.log(arr[i].author_name);
  //       console.log(arr[i].first_publish_year);
  //       console.log(arr[i].ebook_access);
  //       const pic = "https://covers.openlibrary.org/b/olid/OL7440033M-S.jpg";

  //       div.html(`<h5>Book Name: ${arr[i].title}</h5>
  //                 <h5>Author Name: ${arr[i].author_name}</h5>
  //                 <h5>First pblish Year: ${arr[i].first_publish_year}</h5>
  //                 <h5>Ebook Access: ${arr[i].ebook_access}</h5
  //                 <img src=${pic}/>
  //       `);
  //       $resultDiv.append(div);
  //     }
});
