import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { closeModal, submitComment } from "../../../redux/actions";

import Comment from "../Comment";

import { Modal, Button, TextInput, Spinner } from "../../core";

import { ModalContent, Right, BigImage, Form, SpinnerWrapper } from "./ModalImage.styled";

const propTypes = {
	id: PropTypes.number,
	image: PropTypes.string,
	comments: PropTypes.array,
	onClose: PropTypes.func,
	onSubmitComment: PropTypes.func,
	modalLoader: PropTypes.bool,
	vh: PropTypes.number,
};

const ModalImage = (props) => {
	const {
		id,
		image,
		comments,
		onClose,
		onSubmitComment,
		modalLoader,
		vh,
	} = props;

	const [name, setName] = useState("");
	const [commentText, setCommentText] = useState("");

	const submitCommentHandle = (e) => {
		e.preventDefault();
		const comment = {
			imageId: id,
			text: commentText,
			author: name,
		};
		setCommentText("");

		onSubmitComment(comment);
	};

	return (
		<Modal vh={vh} onClose={onClose}>
			<ModalContent>
				{!modalLoader && (<>
					<BigImage src={image}/>
					<Right>
						{comments.map((item) => (
							<Comment id={item.id} key={item.id}
								date={item.date}
							>
								{item.text}
							</Comment>)
						)}
					</Right>
					<Form>
						<TextInput value={name} onChange={setName}
							placeholder="Введите Ваше имя"
						/>
						<TextInput value={commentText}
							onChange={setCommentText}
							placeholder="Введите Ваш комментарий"
						/>
						<Button onClick={submitCommentHandle}>
							Отправить комментарий
						</Button>
					</Form>
				</>)}
				{modalLoader && <SpinnerWrapper><Spinner /></SpinnerWrapper>}
			</ModalContent>
		</Modal>
	);
};

ModalImage.propTypes = propTypes;

const mapDispatchToProps = dispatch => {
	return {
		onClose: () => {
			dispatch(closeModal());
		},
		onSubmitComment: (comment) => {
			dispatch(submitComment(comment));
		}
	}
};
const mapStateToProps = state => {
	return {
		image: state.modal.url,
		comments: state.modal.comments,
		id: state.modal.id,
		modalLoader: state.modalLoader,
		vh: state.screen.height,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalImage);
