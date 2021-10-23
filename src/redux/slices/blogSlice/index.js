import { createSlice } from '@reduxjs/toolkit'

export const STATE_KEY = 'blog'

const initialState = {
	allBlogs: [
		{
			id: 'tt1375666',
			resultType: 'Title',
			image:
				'https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg',
			title: 'Inception',
			description: '(2010)',
		},
		{
			id: 'tt5295894',
			resultType: 'Title',
			image:
				'https://imdb-api.com/images/original/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_Ratio0.6800_AL_.jpg',
			title: 'Inception: The Cobol Job',
			description: '(2010 Video)',
		},
		{
			id: 'tt5295990',
			resultType: 'Title',
			image:
				'https://imdb-api.com/images/original/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_Ratio0.6800_AL_.jpg',
			title: 'Inception: Jump Right Into the Action',
			description: '(2010 Video)',
		},
		{
			id: 'tt1686778',
			resultType: 'Title',
			image: 'https://imdb-api.com/images/original/nopicture.jpg',
			title: 'Inception: 4Movie Premiere Special',
			description: '(2010 TV Movie)',
		},
		{
			id: 'tt12960252',
			resultType: 'Title',
			image: 'https://imdb-api.com/images/original/nopicture.jpg',
			title: 'Inception Premiere',
			description: '(2010)',
		},
	],
	kjgmhjmfg: 'IDHLKD',
}

export const blogSlice = createSlice({
	name: STATE_KEY,
	initialState,
	reducers: {
		setAllBlogs: (state, action) => {
			const { allBlogs } = action.payload
			state.allBlogs = allBlogs
		},
	},
})

export const { setAllBlogs } = blogSlice.actions

export const getAllBlogs = state => state.blog.allBlogs

export default blogSlice.reducer
