const categorySelect = document.getElementById("category");
const setup = document.getElementById("setup");
const delivery = document.getElementById("delivery");
const button = document.getElementById("button");

async function getJoke() {
  button.disabled = true;
  setup.textContent = "Загрузка...";
  delivery.textContent = "";

  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/" + categorySelect.value);
    if (!response.ok) throw new Error("Ошибка сервера");
    const data = await response.json();
    if (data.error) throw new Error(data.message);

    if (data.type === "single") {
      setup.textContent = data.joke;
    } else {
      setup.textContent = data.setup;
      delivery.textContent = data.delivery;
    }
  } catch (error) {
    setup.textContent = "Не удалось загрузить шутку";
    console.error(error);
  } finally {
    button.disabled = false; 
  }
}

button.addEventListener("click", getJoke);
