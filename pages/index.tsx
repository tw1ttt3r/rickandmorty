import { useEffect } from "react"
import all from "@/lib/all"
import byControl from "@/lib/dataControl"
import { useState } from "react"

export default function Home() {

  const [ data, setData ] = useState<any>({})

  const [ dataByControl, setDataByControl ] = useState<any>({})

  const [ current, setCurrent ] = useState<any>({})

  useEffect(
    () => {
      try{
        all()
          .then( res => res.json() )
          .then( res => setData(res) )
      } catch(e: any) {
        throw Error(e)
      }
    },
    []
  )

  const getDataByControl = (url: string, control: string) => {
    try {
      byControl(url)
        .then( res => res.json() )
        .then( res => setDataByControl({ ...dataByControl, [control]: res }) )
      setCurrent({ ...current, control })
    } catch(e: any) {
      throw Error(e)
    }
  }

  return (
    <>
      <ul className="flex justify-between">
        <>
          {
            Object.entries(data).map(([ key, value ]: any) => <li onClick={ () => getDataByControl(value, key) } className="grow text-center cursor-pointer" key={key}> <span>{ key }</span> </li>)
          }
        </>
      </ul>
      <section>
        <>
          {
            JSON.stringify(dataByControl[current.control])
          }
        </>
      </section>
    </>
  )
}
