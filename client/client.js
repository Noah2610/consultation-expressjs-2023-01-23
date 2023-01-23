const pizzaOrderButton = document.querySelector("#pizza-order");
const pizzaSelection = document.querySelector("#pizza-selection");

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

    console.log(body);
}

pizzaOrderButton.addEventListener("click", () => {
    const pizza = pizzaSelection.value;
    orderPizza(pizza);
});
