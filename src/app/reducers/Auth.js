import { server } from "../server/Server";
import { AUTH_ACTION } from "../types/Types";

const initialState = {
  loading: false,
  error: false,
  isAuthenticated: false,
  account: {}
};

const AUTH_TOKEN_KEY = 'jhi-authenticationToken';

const auth = (state = initialState, action) =>{
    switch (action.type) {
    case AUTH_ACTION.ERROR_MESSAGE:
      return {
        ...state, error: true 
      }

      case AUTH_ACTION.LOGIN:
      return {
        ...state, isAuthenticated: true
      }
    default:
      return state
  }
}



export const loginBB = (username, password, rememberMe = false) => async (dispatch) => {
  const result = await dispatch({
    type: AUTH_ACTION.LOGIN,
    payload: { errorMessage: "Funciona!!!"  } //server.post('api/authenticate', { username, password, rememberMe }),
  });

  const bearerToken = result.value.headers.authorization;
  if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
    const jwt = bearerToken.slice(7, bearerToken.length);
    if (rememberMe) {
      Storage.local.set(AUTH_TOKEN_KEY, jwt);
    } else {
      Storage.session.set(AUTH_TOKEN_KEY, jwt);
    }
  }
};


export const loginDispatch = ()  => ({
  type: AUTH_ACTION.LOGIN  
})

export const login = (username, password, rememberMe = false) => dispatch => {
  dispatch(loginDispatch())  
}
export default auth;
