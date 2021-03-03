import React from 'react'
import { render } from 'react-dom'

// app
import App from './App'

const component = <App />
// eslint-disable-next-line no-undef
const element = document.getElementById('app')

render(component, element)
