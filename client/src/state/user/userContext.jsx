import { createContext, useState, useContext } from "react";

const UserContext = createContext({
  user: { role: "", id: "" },
  changeUser: () => {},
});

export function UserContextProvider({ children }) {
  //
  const [user, setUser] = useState({ role: "null", id: "null" });

  function changeUser(newUser) {
    console.log(
      "@UserContextProvider ----- changeUser function ---- user =",
      user,
      "----- newUser =",
      newUser
    );
    setUser((prevUser) => ({ ...prevUser, ...newUser }));
  }

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  //
  const { user, changeUser } = useContext(UserContext);

  return { user, changeUser };
}
