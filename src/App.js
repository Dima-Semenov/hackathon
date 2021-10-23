import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Components/header/Header'
import { getAllBlogs, setAllBlogs } from './redux/slices/blogSlice'

import Home from './screens/home/container/index'

function App() {
	const dispatch = useDispatch()
	const value = useSelector(getAllBlogs)

	useEffect(() => {
		dispatch(setAllBlogs({ allBlogs: 'dfsgdklgkf' }))
		setTimeout(() => {
			dispatch(setAllBlogs({ allBlogs: 'kfkjfjjfjfj' }))
		}, 3000)
	}, [])

	return (
		<div className="App">
			{value}
			<Home />
			<Header />
		</div>
	)
}

export default App
