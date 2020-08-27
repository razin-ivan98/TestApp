import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import openModal from "../../../redux/actions/openModal";

import { Wrapper } from "./Galary.styled";

import Image from "../Image";

const propTyeps = {
	onOpenModal: PropTypes.func,
	images: PropTypes.array,
};

const Galary = (props) => {
	const {
		onOpenModal,
		images,
	} = props;

	return (
		<Wrapper>
			{images.map((item) => (
				<Image
					onClick={onOpenModal} src={item.url}
					id={item.id} key={item.id}
				/>
			))}
		</Wrapper>
	);
};

Galary.propTyeps = propTyeps;

const mapDispatchToProps = dispatch => {
	return {
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
