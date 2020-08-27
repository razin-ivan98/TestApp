import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import closeModal from "../../../redux/actions/closeModal";

import Comment from "../Comment";

import Modal from "../../core/Modal";
import Button from "../../core/Button";
import TextInput from "../../core/TextInput";
import Spinner from "../../core/Spinner";

import { ModalContent, Right, Image, Form, SpinnerWrapper } from "./ModalImage.styled";

const propTypes = {
	image: PropTypes.string,
	comments: PropTypes.array,
	onClose: PropTypes.func,
	modalLoader: PropTypes.bool,
};

const ModalImage = (props) => {
	const {
		image,
		comments,
		onClose,
		modalLoader,
	} = props;

	const [name, setName] = useState("");
	const [comment, setComment] = useState("");

	return (
		<Modal onClose={onClose}>
			<ModalContent>
				{!modalLoader && (<>
					<Image src={image}/>
					<Right>
						{comments.map((item) => (
							<Comment id={item.id} key={item.id}
								date={item.date}>
									{item.text}
							</Comment>)
						)}
					</Right>
					<Form>
						<TextInput value={name} onChange={setName}
							placeholder="Введите Ваше имя"
						/>
						<TextInput value={comment}
							onChange={setComment}
							placeholder="Введите Ваш комментарий"
						/>
						<Button>Отправить комментарий</Button>
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
		}
	}
};
const mapStateToProps = state => {
	return {
		image: state.modal.url,
		comments: state.modal.comments,
		modalLoader: state.modalLoader
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalImage);
