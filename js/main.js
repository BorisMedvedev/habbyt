let habbits = [];
const HABBIT_KEY = "HABBIT_KEY";

const page = {
  menu: document.querySelector(".button-panel__list"),
};

function loadData() {
  const habbitsString = localStorage.getItem(HABBIT_KEY);
  const habbitArray = JSON.parse(habbitsString);
  if (Array.isArray(habbitArray)) {
    habbits = habbitArray;
  }
}

function saveData() {
  localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

//render
function rerenderMenu(activeHabbit) {
  for (const habbit of habbits) {
    const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
    if (!existed) {
      const element = document.createElement("button");
      element.setAttribute("menu-habbit-id", habbit.id);
      element.classList.add("button-panel__btn", "btn-reset");
      element.addEventListener("click", () => rerender(habbit.id));
      element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}" />`;
      if (activeHabbit.id === habbit.id) {
        element.classList.add("button-panel__btn--active");
      }
      page.menu.append(element);
      continue;
    }
    if (activeHabbit.id === habbit.id) {
      existed.classList.add("button-panel__btn--active");
    } else {
      existed.classList.remove("button-panel__btn--active");
    }
  }
}

function rerender(activeHabbitId) {
  const activeHabbit = habbits.find((habbit) => habbit.id === activeHabbitId);
  rerenderMenu(activeHabbit);
}

(() => {
  loadData();
  rerender(habbits[0].id);
})();
