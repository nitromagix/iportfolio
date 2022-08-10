//

export const consoleLogger = (store) => (next) => (action) => {
  if (typeof action === "function") {
    action(store.dispatch, store.getState);
  } else {
    console.log("dispatch", store.getState());
    next(action);
    console.log("after dispatch", store.getState());
  }
};

