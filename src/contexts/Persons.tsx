import { createContext, ReactNode, useEffect, useState } from "react";

interface Person {
  id: number;
  name: string;
  image: string;
  status: string;
  url: string;
}

interface PersonsProps {
  persons: Person[];
}

interface PersonProviderProps {
  children: ReactNode;
}

export const PersonsContext = createContext({} as PersonsProps);

export function PersonsProvider({ children }: PersonProviderProps) {
  const [persons, setPersons] = useState<Person[]>([]);

  async function fetchPersons() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data);
    setPersons(data.results);
  }

  useEffect(() => {
    fetchPersons();
  }, []);

  console.log(persons);

  return (
    <PersonsContext.Provider value={{ persons }}>
      {children}
    </PersonsContext.Provider>
  );
}