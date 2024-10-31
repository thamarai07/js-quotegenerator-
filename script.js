const url = "http://api.quotable.io/quotes/random";

async function fetchqoute() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    if (data[0].content) {
      localStorage.setItem("data", data[0].content);
    }
    if (data[0]) {
      const ptag = document.querySelector(".qoute__wrap p");
      const locq = localStorage.getItem("data");
      if (locq) {
        ptag.innerHTML = locq;
      }else{
        ptag.innerHTML = data[0].content
      }
    } else {
      ptag.innerHTML = "Loading";
    }
  } catch (e) {
    console.log(e);
  }
}
