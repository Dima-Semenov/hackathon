import React, { useEffect } from 'react'
import CardsContainer from './Components/card/CardsContainer'
import './assets/scss/style.scss'

import Header from './Components/header/Header'

import Home from './screens/home/container/index'

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<CardsContainer />
		</div>
	)
}

export default App
