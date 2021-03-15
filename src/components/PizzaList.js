// src/cemnnoopst / PizzaList.js;
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectPizzas } from "../store/pizzas/selectors";
import AddPizzaForm from "./AddPizzaForm";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../store/user/actions";

export default function PizzaList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>
      </p>
      <p>
        There are <strong>{pizzas.length}</strong> pizzas in total:
      </p>
      <p>TODO: the list of pizzas</p>
      <AddPizzaForm />
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
          </li>
        ))}
      </ul>
    </div>
  );
}

//   <button>{user.favorites.includes(pizza.id) ? "♥" : "♡"}</button>;
