import RandomCharacter from "@/components/RandomCharacter"

export default function Home() {
  return (
    <>
      <header className="w-full">
        <nav className="w-full">
          <h1 className="text-white text-2xl flex justify-center">Rick y Morty</h1>
        </nav>
      </header>
      <section className="h-full flex flex-col justify-center items-center">
        <RandomCharacter />
      </section>
    </>
  )
}
