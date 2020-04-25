import React from "react"

import style from "./content.module.css"

const Content = ({ from, scheldwoord }) => {


  return (
    <div className={style.container}>
      <p className={style.from}>{from}</p>
      <p className={style.from}>{scheldwoord}</p>
    </div>
  )
}

export default Content
