const book = "j%20k%20rowling";
const type = "love";
const url = `https://openlibrary.org/search.json?title=${type}`;
$.ajax(url).then((response) => {
  console.log(response.docs);
  console.log(response.docs[0]);
  console.log(response.docs[0].author_name);
  console.log(response.docs[0].ebook_access);
  console.log(response.docs[0].first_publish_year);
  console.log(response.docs[0].title);
});
