import React from 'react'
import { render } from 'react-dom'

// core
import App from './App'

const component = <App />
const element = document.getElementById('app')

render(component, element)