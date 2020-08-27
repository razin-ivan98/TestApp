import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import requestImages from "../../../redux/actions/requestImages";

import '../../../global.css';

import { Wrapper, Header, AppInner, Footer, SpinnerWrapper, ButtonWrapper } from "./App.styled";

import Spinner from "../../core/Spinner";
import Button from "../../core/Button";

import ModalImage from "../../common/ModalImage";
import Galary from "../../common/Galary";

const propTypes = {
    onUpdate: PropTypes.func,
    galaryLoader: PropTypes.bool,
};

const App = (props) =>  {
    const {
        modal,
        galaryLoader,
        onUpdate,
    } = props;

    return (
        <Wrapper>
            <Header>
                Test App
            </Header>
            <AppInner>
                <Galary />
                <ButtonWrapper>
                    <Button
                        width="100%" height="100%" border={true}
                        shape="ellips" onClick={onUpdate}>
                            Update
                    </Button>
                </ButtonWrapper>
                {galaryLoader && (
                    <SpinnerWrapper><Spinner /></SpinnerWrapper>
                )}
            </AppInner>
            <Footer>© 2018-2019</Footer>
            {modal && <ModalImage />}
        </Wrapper>
    );
};

App.propTypes = propTypes;

const mapDispatchToProps = dispatch => {
	return {
		onUpdate: () => {
			dispatch(requestImages());
		},
	}
};
const mapStateToProps = state => {
	return {
        modal: state.modal,
        galaryLoader: state.galaryLoader,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
