export const addPizza = ({ name, description, ingredients }) => ({
  type: "pizzas/add",
  payload: { name, description, id: Math.random(), ingredients },
});
