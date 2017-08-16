// Create action type

// Usage
// createActionType('ACTIONNAME')
// ACTIONNAME.SUCCESS = ACTIONNAME_SUCCESS and so on.

export const createActionType = action => ({
  SUCCESS: `${action}_SUCCESS`,
  PENDING: `${action}_PENDING`,
  ERROR: `${action}_ERROR`,
});
