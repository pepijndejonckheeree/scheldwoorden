import React from "react"

import style from "./form.module.css"

const Form = () => {
  return (
    <form method="POST" action="/post" className={style.form}>
      <label htmlFor="scheldwoord" className={style.wrapper}>
        <span className={style.label}>Scheld hem maar eens goed uit</span>
        <textarea
          rows="5"
          id="scheldwoord"
          name="scheldwoord"
          className={style.area}
        ></textarea>
      </label>
      <label htmlFor="from" className={style.wrapper}>
        <span className={style.label}>Van:</span>
        <input
          type="text"
          id="from"
          name="from"
          className={style.text}
          placeholder="Uw liefste..."
        />
      </label>
      <input
        type="submit"
        value="Maak een link voor deze scheldpartij"
        className={style.button}
      />
    </form>
  )
}

export default Form
