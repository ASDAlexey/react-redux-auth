export default function ({ dispatch }) {
    return next => action => {
        if (!action.payload || !action.payload.then) {
            return next(action);
        }
        action.payload
              .then((response) => {
                  // create a new action with the old type, but
                  // relace the prmise with the response data
                  const newAction = { ...action, payload: response };
                  dispatch(newAction);
              });
    };
}