// import React, { Component } from 'react'
import Style from "./container.module.scss"
import React from 'react'

export default function Container({className = "", children}) {
    return (
        <div className={`${Style.Container} ${className}`}>
          {
            children
          }
        </div>
      )
}
