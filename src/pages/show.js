import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Content from "../components/content"
import ShareUrl from "../components/shareUrl"
import Vuist from "../components/vuist"
import SEO from "../components/seo"

import { useQueryParam, StringParam } from "use-query-params"

import style from "./show.module.css"

const ShowPage = ({ location }) => {
  const [id] = useQueryParam("id", StringParam)
  const [scheldwoord, setScheldwoord] = useState(null)

  const domain = location.origin ? location.origin : ""

  
  useEffect(() => {
    const getData = async () => {
      const r = await fetch(`/.netlify/functions/show?id=${id}`)
      const data = await r.json()
      setScheldwoord(data)
    }
    getData()
  }, [id])

  return (
    <Layout>
      <SEO title="Deel dit vuistje" />
      {scheldwoord ? (
        <>
          <Vuist />
          <ShareUrl value={`${domain}/scheldwoord/${id}`} />
          <Content {...scheldwoord} />
        </>
      ) : (
        <p className={style.loading}>Scheldwoorden aan het bedenken.</p>
      )}
    </Layout>
  )
}

export default ShowPage
