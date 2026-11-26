const form = document.getElementById("form");
const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const result = document.getElementById("result");
const info = document.getElementById("info");

async function convert() {
  const amount = Number(amountInput.value);
  const from = fromSelect.value;
  const to = toSelect.value;

  result.textContent = "Загрузка...";
  info.textContent = "";

  try {
    const response = await fetch("https://open.er-api.com/v6/latest/" + from);
    if (!response.ok) throw new Error("Ошибка сервера");
    const data = await response.json();
    if (data.result !== "success") throw new Error("API вернул ошибку");

    const rate = data.rates[to];
    const total = amount * rate;

    result.textContent = amount + " " + from + " = " + total.toFixed(2) + " " + to;
    info.textContent = "1 " + from + " = " + rate + " " + to
      + ". Обновлено: " + new Date(data.time_last_update_utc).toLocaleDateString("ru-RU");
  } catch (error) {
    result.textContent = "Не удалось получить курс";
    console.error(error);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  convert();
});

convert();
