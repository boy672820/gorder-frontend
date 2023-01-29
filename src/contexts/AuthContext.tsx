import { createContext, ReactNode, useEffect, useReducer } from 'react';
import {
  AuthActions,
  AuthContextType,
  AuthPayload,
  AuthState,
  AuthUser,
  Types,
} from '../@types/auth';
import { AuthApi } from '../api';
import { getSession, setSession } from '../utils/auth';

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const reducer = (state: AuthState, action: AuthActions) => {
  switch (action.type) {
    case Types.Initial:
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case Types.Signin:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case Types.Signout:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
};

// ----------------------------------------------------------------------------------------------

const useAuthReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onInitAuth = (user: AuthUser) => {
    dispatch({
      type: Types.Initial,
      payload: {
        isAuthenticated: true,
        user,
      },
    });
  };

  const onInitUnauth = () => {
    dispatch({
      type: Types.Initial,
      payload: {
        isAuthenticated: false,
        user: null,
      },
    });
  };

  const onSignin = (payload: AuthPayload[Types.Signin]) =>
    dispatch({
      type: Types.Signin,
      payload,
    });

  const onSignout = () => {
    dispatch({ type: Types.Signout });
  };

  return {
    state,
    //
    onInitAuth,
    onInitUnauth,
    //
    onSignin,
    onSignout,
  };
};

// ----------------------------------------------------------------------------------------------

type AuthProviderProps = { children: ReactNode };

function AuthProvider({ children }: AuthProviderProps) {
  const { state, onInitAuth, onInitUnauth, onSignin, onSignout } = useAuthReducer();

  // --------------------------------------------------------------------------------------------

  useEffect(() => {
    (async () => {
      const token = getSession();

      if (token) {
        setSession(token);

        const user = await AuthApi.me();

        onInitAuth(user);
      } else {
        onInitUnauth();
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --------------------------------------------------------------------------------------------

  const signin = async (code: string) => {
    if (state.user) {
      return;
    }

    const { accessToken, refreshToken, ...user } = await AuthApi.signin(code);

    setSession({ accessToken, refreshToken });
    onSignin({ user });
  };

  const signout = async () => {
    setSession(null);
    onSignout();
  };

  // --------------------------------------------------------------------------------------------

  return (
    <AuthContext.Provider value={{ ...state, signin, signout }}>{children}</AuthContext.Provider>
  );
}

// ----------------------------------------------------------------------------------------------

const AuthContext = createContext<AuthContextType | null>(null);

export { AuthContext, AuthProvider };
