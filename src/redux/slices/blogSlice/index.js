import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const STATE_KEY = 'blog'
const KEY = '67aa0da8c89889f506f05ef1d428dc04'

export const getAllBlogsFromApi = createAsyncThunk(
	'blog/getAll',
	async body => {
		const { page } = body
		const data = await fetch(
			`https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&page=${page}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		)
		return data.json()
	},
)

const initialState = {
	allBlogs: [],
	currentPage: 2,
	searchFilm: '',
}

export const blogSlice = createSlice({
	name: STATE_KEY,
	initialState,
	reducers: {
		setAllBlogs: (state, action) => {
			const { allBlogs } = action.payload
			state.allBlogs = allBlogs
		},
		setNextPage: state => {
			state.currentPage += 1
		},
		setSearchFilm: (state, action) => {
			const { search } = action.payload
			state.searchFilm = search
		},
	},
	extraReducers: builder => {
		builder.addCase(getAllBlogsFromApi.fulfilled, (state, action) => {
			const isSame = action.payload.results.find(item =>
				state.allBlogs.find(itemw => itemw.id === item.id),
			)

			if (!isSame) {
				state.allBlogs = [...state.allBlogs, ...action.payload.results]
			}
		})
		// builder.addCase(getAllBlogsFromApi.pending, (state, action) => {
		//   console.log("Pending")
		//   state.allBlogs = action.payload.results;
		// })
	},
})

export const { setAllBlogs, setNextPage, setSearchFilm } = blogSlice.actions

export const getAllBlogs = state => state.blog.allBlogs
export const getPages = state => state.blog.currentPage
export const getSearchFilm = state => state.blog.searchFilm

export default blogSlice.reducer
