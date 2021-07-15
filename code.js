async function found(code) {
  const countries = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${code}`
  );
  return countries.json();
}

async function onSearch(search) {
  try {
    const countries = await found(search);
    console.log(countries);
  } catch (e) {
    console.error(e);
  }
}

const inputRef = document.getElementById("search");

function onChangeInput({ target: { value } }) {
  if (value) {
    onSearch(value);
  }
}

inputRef.addEventListener("input", _.debounce(onChangeInput, 500));
