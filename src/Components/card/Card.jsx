import React from 'react'

const Card = ({ src, alt, title, description }) => {
	return (
		<div>
			<div className="card">
				<img className="card-img" src={src} alt={alt} />
				<div className="card-container">
					<h4>
						<b>{title}</b>
					</h4>
					<p>{description}</p>
				</div>
				<div className="card-buttons">
					<button>about</button>
					<button>trailer</button>
				</div>
			</div>
		</div>
	)
}

export default Card
