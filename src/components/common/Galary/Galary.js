import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { openModal, requestImages } from "../../../redux/actions";

import { Spinner, Button } from "../../core";

import { Wrapper, SpinnerWrapper, ButtonWrapper } from "./Galary.styled";

import Image from "../Image";

const propTyeps = {
	onUpdate: PropTypes.func,
	onOpenModal: PropTypes.func,
	images: PropTypes.array,
};

const Galary = (props) => {
	const {
		galaryLoader,
		onOpenModal,
		onUpdate,
		images,
	} = props;

	return (
		<>
			<Wrapper>
				{images.map((item) => (
					<Image
						onClick={onOpenModal} src={item.url}
						id={item.id} key={item.id}
					/>
				))}
			</Wrapper>
			{galaryLoader && (
				<SpinnerWrapper><Spinner /></SpinnerWrapper>
			)}
			<ButtonWrapper>
				<Button
					width="100%" height="100%" border={true}
					shape="ellips" onClick={onUpdate}
				>
					Update
				</Button>
			</ButtonWrapper>
		</>
	);
};

Galary.propTyeps = propTyeps;

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
		galaryLoader: state.galaryLoader,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Galary);
