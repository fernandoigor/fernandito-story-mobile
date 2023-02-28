import { createContext, ReactNode, useState } from "react";

export interface UserLoginProps {
  email: string;
  password: string;
}
export interface UserRegisterProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface UserProps {
  firstName: string;
  token: string;
  signed: boolean;
}

interface AuthContextData {
  user: UserProps;
  login: ({ email, password }: UserLoginProps) => void;
  logout: () => void;
}

const initialState: AuthContextData = {
  user: {
    firstName: "",
    token: "",
    signed: false,
  },
  login() {},
  logout() {},
};

export const AuthContext = createContext<AuthContextData>(initialState);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [userData, setData] = useState({
    firstName: "",
    token: "",
    signed: false,
  });

  const login = async ({ email, password }: UserLoginProps) => {
    // const responseLogin = await api.post(`/auth/login`, {
    //   email: email.toLowerCase(),
    //   password: password,
    // });
    // if (responseLogin) {
    //   const { token, firstName } = responseLogin.data;
    //   setData((prev) => ({
    //     firstName,
    //     token,
    //   }));
    // }
    // return responseLogin;
    console.log({ email, password });
    setData({
      firstName: "Fernando",
      token: "12312312312313",
      signed: true,
    });
    console.log(userData);
  };

  function logout() {
    setData({
      firstName: "",
      token: "",
      signed: false,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user: userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export async function Register({
  firstName,
  lastName,
  email,
  password,
}: UserRegisterProps) {
  //   return await api.post("/auth/register", { username, email, password });
  console.log("registradno:", firstName, lastName, email, password);
}
