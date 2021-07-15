async function found() {
  const drinks = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  );
  return drinks.json();
}

async function onSearch(search) {
  try {
    const drinks = await found(search);
    console.log(drinks);
    // -----------------------------------------------------------------
    const rootRef = document.getElementById("root");

    // сортируем
    const allDrinks = drinks.reduce((acc, { strAlcoholic, strDrink }) => {
      console.log(acc);
    }, {});
    //
    // -----------------------------------------------------------------
  } catch (e) {
    console.error(e);
  }
}

onSearch();
