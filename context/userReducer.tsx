export const initialState = [];

export function reducer(state:any, action:any) {
    switch (action.type) {
      case 'setUser':
        console.log({ ...state, user: action.payload });
        return [...state, { user: action.payload }];
      default:
        throw new Error();
    }
  }