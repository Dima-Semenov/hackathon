import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { useDispatch } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'

import { getCurrentUser } from './redux/slices/blogSlice/auth/auth.operations'

import { CurrentBlog, Home } from './screens'
import './App.scss'
import './assets/scss/style.scss'
import AuthPage from './screens/authForm/AuthForm'

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getCurrentUser())
	}, [dispatch])
	return (
		<div className="App">
			<Switch>
				<Route path="/sign-up" component={AuthPage} exact />
				<Route path="/home" component={Home} />
				<Route path="/blog/:id" component={CurrentBlog} />

				<Redirect to="/home" />
			</Switch>
		</div>
	)
}

export default App
