import React, { useState } from 'react'
import '../searchForm/searchForm.scss'

const SearchForm = () => {
  const [name, setName] = useState('');

	const handleChange = e => {
		const { value } = e.currentTarget
		setName(value);
	}

  const reset = () => {
		setName('');
	}

	const handleSubmit = e => {
		e.preventDefault()

		this.props.onSubmit(name.trim())
		if (!name) {
			alert('Поле не может быть пустым!')
			return
		}
		reset()
	}

  return (
    <div>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          className="SearchForm-input"
          name="name"
          onChange={handleChange}
          value={name}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
        />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
    </div>
  )
}

export default SearchForm;
