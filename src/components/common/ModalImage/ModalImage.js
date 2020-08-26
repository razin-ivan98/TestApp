import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../../core/Modal";
import Button from "../../core/Button";
import TextInput from "../../core/TextInput";


import { ModalContent, Right, Image, Form } from "./ModalImage.styled";

const propTypes = {

};
const defaultProps = {

};

const ModalImage = (props) => {
	const {
		isOpened,
		onClose,
	} = props;

	const [name, setName] = useState("");
	const [comment, setComment] = useState("");

	return (
		<Modal onClose={onClose}>
			<ModalContent>
				<Image src="https://picsum.photos/id/237/300/200"/>
				
				<Right>
					<TextInput value={name} onChange={setName} placeholder="Введите Ваше имя"/>
					<TextInput value={name} onChange={setName} placeholder="Введите Ваше имя"/>
					<TextInput value={name} onChange={setName} placeholder="Введите Ваше имя"/>
					<TextInput value={name} onChange={setName} placeholder="Введите Ваше имя"/>

					<TextInput value={name} onChange={setName} placeholder="Введите Ваше имя"/>
					v
					v
					<TextInput value={name} onChange={setName} placeholder="Введите Ваше имя"/>
					<TextInput value={name} onChange={setName} placeholder="Введите Ваше имя"/>
					<TextInput value={name} onChange={setName} placeholder="Введите Ваше имя"/>
					<TextInput value={name} onChange={setName} placeholder="Введите Ваше имя"/>
					<TextInput value={name} onChange={setName} placeholder="Введите Ваше имя"/>
					<TextInput value={name} onChange={setName} placeholder="Введите Ваше имя"/>
					<TextInput value={name} onChange={setName} placeholder="Введите Ваше имя"/>
					<TextInput value={name} onChange={setName} placeholder="Введите Ваше имя"/>
					<TextInput value={name} onChange={setName} placeholder="Введите Ваше имя"/>

				</Right>
				<Form>
					<TextInput value={name} onChange={setName} placeholder="Введите Ваше имя"/>
					<TextInput value={comment} onChange={setComment} placeholder="Введите Ваш комментарий"/>
					<Button>Отправить комментарий</Button>
				</Form>
			</ModalContent>
		</Modal>
	);
};

ModalImage.propTypes = propTypes;
ModalImage.defaultProps = defaultProps;

export default ModalImage;
