export type AuthUser = Record<string, any>;

export type AuthState = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser | null;
};

// ----------------------------------------------------------

export enum Types {
  Initial = 'INITIALIZE',
  Signin = 'SIGNIN',
  Signout = 'SIGNOUT',
}

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser | null;
  signin: () => Promise<void>;
  signout: () => Promise<void>;
};

type AuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean;
    user: AuthUser | null;
  };
  [Types.Signin]: {
    user: AuthUser | null;
  };
  [Types.Signout]: undefined;
};
