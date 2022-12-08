let habbits = [];
const HABBIT_KEY = "HABBIT_KEY";

//utils========================
function loadData() {
  const habbitsStrng = localStorage.getItem("HABBIT_KEY");
  const habbitsArray = JSON.parse(habbitsStrng);
  if (Array.isArray(habbitsArray)) {
    habbits = habbitsArray;
  }
}

function saveData() {
  localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

//render
function rerenderMenu(activeHabbit) {
  if (!activeHabbit) {
    return;
  }
  for (const habbit of habbits) {
    existed = document.querySelector(`[manu-habbit-id="${habbit.id}"]`);
    if (!existed) {
      //создание
    }
    if (activeHabbit.id === habbit.id) {
      existed.classList.add("button-panel__item--active");
    } else {
      existed.classList.remove("button-panel__item--active");
    }
  }
}

function rerender(activeHabbitId) {
  const activeHabbit = habbits.find((habbit) => habbit.id === activeHabbitId);
  rerender(activeHabbit);
}

(() => {
  loadData();
})();
