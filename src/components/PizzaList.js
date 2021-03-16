// src/cemnnoopst / PizzaList.js;
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import {
  selectPizzas,
  selectIngredients,
  selectPizzasWithThisIngredient,
} from "../store/pizzas/selectors";

import { useDispatch } from "react-redux";
import { toggleFavorite } from "../store/user/actions";
import { useState } from "react";

export default function PizzaList() {
  const dispatch = useDispatch();
  const [selectedIngredient, setSelectedIngredient] = useState("tomatoes");
  const user = useSelector(selectUser);
  const pizzas = useSelector(
    selectPizzasWithThisIngredient(selectedIngredient)
  );
  const ingredients = useSelector(selectIngredients);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>
      </p>
      <p>
        There are <strong>{pizzas.length}</strong> pizzas in total:
      </p>
      <p>The list of pizzas:</p>
      <ul>
        {ingredients.map((ingredient) => (
          <button onClick={() => setSelectedIngredient(ingredient)}>
            {ingredient}
          </button>
        ))}
      </ul>

      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <button
              onClick={() => {
                dispatch(toggleFavorite(pizza.id));
              }}
            >
              {user.favorites.includes(pizza.id) ? "♥" : "♡"}
            </button>
            <strong>{pizza.name}</strong>({pizza.description}) <br />
            <em>Bought {pizza.bought}</em>
            <em>Ingredients {pizza.ingredients}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

//   <button>{user.favorites.includes(pizza.id) ? "♥" : "♡"}</button>;
