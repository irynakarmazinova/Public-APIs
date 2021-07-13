async function getCountries() {
  const countries = await fetch("https://restcountries.eu/rest/v2/all");
  return countries.json();
}

async function init() {
  try {
    const countries = await getCountries();
    // console.log(countries);
    // -----------------------------------------------------------------
    // Здесь мы получаем массив данных c объектами стран с сервера

    // Тебе надо рассортировать данные по полю регион(region) и отрисовать в root, так же как в example: одна секция - один регион, потом название региона в заголовке, потом в параграфах все страны(поле name)

    // Убрал сложную подсказку

    // Давай разделим
    // 1. С помощью редюсера создай объект
    // {
    //	Africa: [..., "Egypt", ..., "Zimbabwe"],
    //  Asia: [..., "India", ...]
    // }
    // -----------------------------------------------------------------
    // сортируем
    const rootRef = document.getElementById("root");

    const a = countries.reduce((acc, { region, name }) => {
      if (!acc[region]) {
        acc[region] = [];
      }

      acc[region].push(name);

      return acc;
    }, {});

    // создаем разметку
    const b = Object.keys(a).reduce((acc, key) => {
      const value = a[key];
      const children = value.reduce(
        (valueAcc, name) => `${valueAcc} <p>${name}</p>`,
        ""
      );
      return `${acc} <section><h1>${key}</h1>${children}</section>`;
    }, "");

    rootRef.insertAdjacentHTML("beforeend", b);

    console.log(b);
  } catch (e) {
    console.error(e);
  }
}

init();
