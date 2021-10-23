import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

const Card = ({ id, src, title, description }) => {
  const history = useHistory();
  const [currentDes, setCurrentDes] = useState(description)

  useEffect(() => {
    if (currentDes?.length > 70) {
      setCurrentDes(prev => prev.slice(0, 70) + '...')
    }
  }, [currentDes])

  const openCurrentBlog = () => {
    history.push(`/blog/${id}`)
  }
  
	return (
    <div className="card">
      <div className="card__photo">
        <img
          src={src}
          onClick={openCurrentBlog}
          alt={`${title} photo`}
          className="card__img"
        />
      </div>

      <div className="card__content">
        <div>
          <h2 className="card__title">
            {title}
          </h2>
          <p className="card__description">
            {currentDes}
          </p>
        </div>

        <div>
          <button className="button" onClick={openCurrentBlog}>
            Details
          </button>
        </div>
      </div>
    </div>
	)
}

export default Card
