export const initialloading = {};

export const loadingReducer = (state= initialloading, { type, payload }) => {
  const match = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);

  if (!match) return state;

  const [, actionName, actionType] = match;

  if (actionType === 'REQUEST') {
    return { ...state, [actionName]: payload || true };
  }

  const { [actionName]: an, ...rest } = state;

  return rest;
};
