import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { AuthActions, AuthContextType, AuthState, Types } from '../@types/auth';

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

type AuthProviderProps = { children: ReactNode };

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {})();
  }, []);

  const signin = async () => {};
  const signout = async () => {};

  return (
    <AuthContext.Provider value={{ ...state, signin, signout }}>{children}</AuthContext.Provider>
  );
}

// ----------------------------------------------------------------------------------------------

const AuthContext = createContext<AuthContextType | null>(null);

export { AuthContext, AuthProvider };
