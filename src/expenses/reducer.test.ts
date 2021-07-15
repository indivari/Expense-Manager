import { reducer } from "./ExpensesContainer";

describe("ExpensesReducer", () => {
  it("should populate expenses when load action is fired", () => {
    const currentState = {
      expenses: [],
    };
    const expenses = [
      { date: new Date(), category: "test", amount: 2 },
      { date: new Date(), category: "test", amount: 3 },
    ];
    const action = { type: "LOAD", expenses };
    const newState = reducer(currentState, action);

    expect(newState.expenses.length).toBe(2);
  });

  it("should remove expense when delete action is fired", () => {
    const expenses = [
      { _id: "abc", date: new Date(), category: "test", amount: 2 },
      { _id: "cde", date: new Date(), category: "test", amount: 3 },
    ];
    const currentState = {
      expenses,
    };
    const action = { type: "DELETE", id: "abc" };
    const newState = reducer(currentState, action);

    expect(newState.expenses.length).toBe(1);
  });

  it("should update expense when update action is fired", () => {
    const expenses = [
      { _id: "abc", date: new Date(), category: "test", amount: 2 },
      { _id: "cde", date: new Date(), category: "test", amount: 3 },
    ];
    const currentState = {
      expenses,
    };
    const updatedExpense = {
      _id: "cde",
      date: new Date(),
      category: "changed",
      amount: 31,
    };
    const action = { type: "UPDATE", expense: updatedExpense };
    const newState = reducer(currentState, action);

    const subject = newState.expenses.find((e) => e._id === "cde");
    expect(subject.category).toEqual("changed");
  });
});
