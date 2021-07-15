async function foundCountries(search) {
  const countries = await fetch(
    `https://restcountries.eu/rest/v2/name/${search}`
  );
  return countries.json();
}

async function onSearch(search) {
  try {
    const countries = await foundCountries(search);
    console.log(countries);
  } catch (e) {
    console.error(e);
  }
}

const inputRef = document.getElementById("search");

function onChangeInput({ target: { value } }) {
  // const { target: { value } } === event;

  if (value) {
    onSearch(value);
  }
}

inputRef.addEventListener("input", _.debounce(onChangeInput, 500));
