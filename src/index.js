import React from 'react'
import { render } from 'react-dom'

// root component
import App from './App'

// global css
import '@/css/index.css'

const component = <App />
// eslint-disable-next-line no-undef
const element = document.getElementById('app')

render(component, element)
