import React from 'react'
import { isAuthenticated } from 'authenticare/client'

// TODO: implement or import a proper isAuthenticated function = DONE
export function IfAuthenticated ({ children }) {
  return isAuthenticated()
    ? <React.Fragment>{ children }</React.Fragment>
    : null
}

export function IfNotAuthenticated ({ children }) {
  return !isAuthenticated()
    ? <React.Fragment>{ children }</React.Fragment>
    : null
}
