import React, { useState } from "react";

// Styles.
// import "../../styles/common.css";
import "./UserDetailsFormComponent.css";
import ModalComponent from "../ModalComponent/ModalComponent";

export default function UserDetailsFormComponent() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		gender: "",
	});

	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState({
		header: "",
		body: "",
		messageType: "",
	});

	const closeModal = () => {
		setShowModal(false);
	};

	const inputChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		console.log(formData);
	};

	const validateForm = () => {
		const { firstName, lastName, email, password, gender } = formData;

		if (firstName.trim().length < 1) {
			throw new Error("Enter a valid first name");
		}

		if (lastName.trim().length < 1) {
			throw new Error("Enter a valid last name");
		}

		if (
			email.trim().length < 3 ||
			email.trim().length > 320 ||
			!email.includes("@")
		) {
			throw new Error("Enter a valid email");
		}

		if (password.length < 8) {
			throw new Error("Enter a valid password");
		}

		if (gender.length < 2) {
			throw new Error("Select your gender");
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.info("Submitting form...");

		try {
			validateForm();
			console.info("Form submitted");

			setModalContent({
				header: null,
				body: "Form submitted",
				messageType: "success",
			});
			setShowModal(true);
		} catch (error) {
			console.error(error);
			setModalContent({
				header: null,
				body: error.message,
				messageType: "error",
			});
			setShowModal(true);
		}
	};

	return (
		<div>
			<ModalComponent
				closeModal={closeModal}
				showModal={showModal}
				modalContent={modalContent}
			/>
			<form
				className=""
				onSubmit={submitHandler}>
				<div className=" ">
					<label
						htmlFor="firstName"
						className="">
						First name
					</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						className=""
						onChange={inputChangeHandler}
					/>
				</div>
				<div>
					<label
						htmlFor="lastName"
						className="">
						Last name
					</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						className=""
						onChange={inputChangeHandler}
					/>
				</div>
				<div>
					<label
						htmlFor="email"
						className="">
						Email
					</label>
					<input
						type="text"
						id="email"
						name="email"
						className=""
						onChange={inputChangeHandler}
					/>
				</div>
				<div>
					<label
						htmlFor="password"
						className="">
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						className=""
						onChange={inputChangeHandler}
					/>
				</div>

				<div>
					Gender
					<div>
						<input
							type="radio"
							id="male"
							name="gender"
							value="male"
							onChange={inputChangeHandler}
						/>
						<label htmlFor="male">Male</label>
					</div>
					<div>
						<input
							type="radio"
							id="female"
							name="gender"
							value="female"
							onChange={inputChangeHandler}
						/>
						<label htmlFor="female">Female</label>
					</div>
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}
