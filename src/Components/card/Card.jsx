import React from 'react'
import Modal from 'react-modal'

const Card = ({ src, alt, title, description }) => {
	let subtitle
	const [modalIsOpen, setIsOpen] = React.useState(false)

	function openModal() {
		setIsOpen(true)
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = '#f00'
	}

	function closeModal() {
		setIsOpen(false)
	}
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
					<button onClick={openModal}>trailer</button>
					<Modal
						isOpen={modalIsOpen}
						onAfterOpen={afterOpenModal}
						onRequestClose={closeModal}
						style={{ backgroundColor: 'red' }}
						contentLabel="Example Modal"
					>
						<h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
						<button onClick={closeModal}>close</button>
						<div>I am a modal</div>
					</Modal>
				</div>
			</div>
		</div>
	)
}

export default Card
