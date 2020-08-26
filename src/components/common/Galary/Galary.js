import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import requestImages from "../../../redux/actions/requestImages";
import openModal from "../../../redux/actions/openModal";


import { Wrapper } from "./Galary.styled";
import Button from "../../core/Button";

import Image from "../Image";

const propTyeps = {

};
const defaultProps = {
};

const Galary = (props) => {
	const {
		onUpdate,
		onOpenModal,
		images,
	} = props;

	return (
		<Wrapper>
			<Button onClick={onUpdate}>Update</Button>
			{images.map((item) => (
				<Image onClick={onOpenModal} src={item.url} id={item.id} key={item.id} />
			))}
		</Wrapper>
	);
};

Galary.propTyeps = propTyeps;
Galary.defaultProps = defaultProps;

const mapDispatchToProps = dispatch => {
	return {
		onUpdate: () => {
			dispatch(requestImages());
		},
		onOpenModal: (id) => {
			dispatch(openModal(id));
		}
	}
};
const mapStateToProps = state => {
	return {
		images: state.images,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Galary);
