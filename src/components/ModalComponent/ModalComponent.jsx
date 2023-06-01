import React from "react";

// Styles
import "./ModalComponent.css";

export default function ModalComponent(props) {
	const { closeModal, showModal, modalContent } = props;

	if (!showModal) {
		return null;
	}

	const { header, body, messageType } = modalContent;

	return (
		<div className="modal">
			<div className="modal-inner">
				<div>{header}</div>
				<div className={`${messageType}`}>{body}</div>
				<div>
					<button onClick={closeModal}>Close</button>
				</div>
			</div>
		</div>
	);
}
