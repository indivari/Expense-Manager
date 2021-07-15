import { IExpense } from "./IExpense";

export const saveExpense = async (expense: IExpense): Promise<IExpense> => {
  const response = await fetch("http://localhost:3000/api/expenses", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });
  const savedExpense = await response.json();
  return savedExpense as any as IExpense;
};

export const deleteExpense = async (id: string | undefined): Promise<void> => {
  await fetch("http://localhost:3000/api/expenses/" + id, {
    method: "DELETE",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateExpense = async (expense: IExpense): Promise<void> => {
  await fetch(`http://localhost:3000/api/expenses/${expense._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });
};
