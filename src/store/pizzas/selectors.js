// export const selectPizzas = (reduxState) => reduxState.pizzas.allPizzas;

export const selectPizzas = (reduxState) => {
  // I need to clone my array because otherwise .sort will edit the state directly!
  const clonedPizzas = [...reduxState.pizzas.allPizzas];

  return clonedPizzas.sort((a, b) => {
    return b.bought - a.bought;
  });
};

// export const selectNumberOfPizzas = (reduxState) => {
//   return reduxState.pizzas.allPizzas.length;
// };

// export const selectMostBoughtPizza = (reduxState) => {
//   if (reduxState.pizzas.allPizzas.length === 0) {
//     return null;
//   }

//   return reduxState.pizzas.allPizzas.reduce((mostBought, nextPizza) => {
//     return mostBought.bought >= nextPizza.bought ? mostBought : nextPizza;
//   });
// };

export const selectIngredients = (reduxState) => {
  // declare an empty array - all ingredients
  const allIngredients = [];
  // loop over all pizzas
  reduxState.pizzas.allPizzas.forEach((pizza) => {
    pizza.ingredients.forEach((ingredient) => {
      if (!allIngredients.includes(ingredient)) {
        allIngredients.push(ingredient);
      }
    });
  });
  return allIngredients;
  //for each pizza loop over the ingredients of the pizza
  // for each ingredient check whether the ingredient is part of all ingredients => if not, add it
  // return all ingredients
};

export const selectPizzasWithThisIngredient = (ingredient) => (reduxState) => {
  return reduxState.pizzas.allPizzas.filter((pizza) =>
    pizza.ingredients.includes(ingredient)
  );
};
