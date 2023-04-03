import { PersonsProvider } from "@/contexts/Persons"
import { PersonsCard } from "@/components/PersonsCard"
import { Header } from "./characters/Header"

export default function Home() {

  return (
    <PersonsProvider>
      <Header/>
      <PersonsCard />
    </PersonsProvider>
  )
}
