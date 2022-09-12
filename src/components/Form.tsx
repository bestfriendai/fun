import React, { useState, useEffect } from 'react';

import '../styles/mobile/form.css';
import '../styles/desktop/form.css';
import { BsArrowRight } from 'react-icons/bs';

// import { useForm } from '../hooks/useForm';
import { useHasScrolled } from '../hooks/useHasScrolled';

function Form() {
	const [ classText, setClassText ] = useState('');
	const scrollContact = useHasScrolled(844);
	useEffect(
		() => {
			const { innerWidth } = window;
			if (innerWidth >= 1440) {
				if (scrollContact) {
					setClassText('active');
				} else if (!scrollContact) {
					setClassText('');
				}
			}
		},
		[ document.documentElement.scrollTop ]
	);
	// const initialState = {
	// 	name: '',
	// 	email: '',
	// 	message: ''
	// };

	// const { onChange, onSubmit, values } = useForm(sendMessageCallback, initialState);

	// async function sendMessageCallback() {
	// 	//send values to email
	// }

	return (
		<div className="form">
			<div className={`text ${classText}`}>
				<span>Send me a message!</span>
				<p>Got a question or proposal, or just want to say hello? Go ahead.</p>
			</div>
			{/* <form onSubmit={onSubmit}> */}
			<form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field" action="/success">
				<div hidden>
					<input name="bot-field" />
				</div>
				<input type="hidden" name="form-name" value="contact" />
				<div className="formRow">
					<label>
						<span>Your Name</span>
						<br />
						<input
							name="name"
							id="name"
							type="text"
							placeholder="Enter your name"
							// onChange={onChange}
							required
							className="input"
						/>
					</label>
				</div>
				<br />
				<div className="formRow">
					<label>
						<span>Email Address</span>
						<br />
						<input
							name="email"
							id="email"
							type="email"
							placeholder="Enter your email address"
							// onChange={onChange}
							required
							className="input"
						/>
					</label>
				</div>
				<br />
				<div className="formRow">
					<label>
						<span>Your Message</span>
						<br />
						<textarea
							name="message"
							id="message"
							placeholder="Hi, i think we need a frontend developer for our products at Company X. How soon can you hop on to discuss this?"
							minLength={20}
							className="input"
						/>
					</label>
				</div>

				<button type="submit">
					<span>SEND MESSAGE</span>
					<BsArrowRight className="icon" />
					<div className="btnDynamic">
						<span>SEND MESSAGE</span>
						<BsArrowRight className="icon" />
					</div>
				</button>
			</form>
		</div>
	);
}

export default Form;
