const pizzaOrderButton = document.querySelector("#pizza-order");
const pizzaSelection = document.querySelector("#pizza-selection");
const pizzaForm = document.querySelector("#pizza-form");
const messageEl = document.querySelector(".message");

async function orderPizza(pizza) {
    const response = await fetch("http://0.0.0.0:8090/pizza/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: `
            {
                "pizza": "${pizza}"
            }
        `,
    });
    const body = await response.text();

    messageEl.innerText = body;
}

pizzaForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const pizza = pizzaSelection.value;

    if (pizza) {
        orderPizza(pizza);
    } else {
        messageEl.innerText = "Please select a pizza!";
    }
});
