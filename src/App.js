import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { CurrentBlog, Home } from './screens'
import './App.scss'

function App() {
	return (
		<div className="App container">
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/blog/:id" component={CurrentBlog} />

				<Redirect to="/home" />
			</Switch>
		</div>
	)
}

export default App
