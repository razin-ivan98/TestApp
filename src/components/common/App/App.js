import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import '../../../global.css';

import { Wrapper, Header, AppInner, Footer } from "./App.styled";

import { Alert } from "../../core";

import ModalImage from "../../common/ModalImage";
import Galary from "../../common/Galary";

const propTypes = {
    onUpdate: PropTypes.func,
    galaryLoader: PropTypes.bool,
    vh: PropTypes.number,
};

const App = (props) =>  {
    const {
        modal,
        alert,
        vh,
    } = props;

    return (
        <Wrapper vh={vh}>
            <Header>
                Test App
            </Header>
            <AppInner>
                {alert && <Alert type={alert.type}>{alert.text}</Alert>}
                <Galary />
            </AppInner>
            <Footer>© 2018-2019</Footer>
            {modal && <ModalImage />}
        </Wrapper>
    );
};

App.propTypes = propTypes;

const mapStateToProps = state => {
	return {
        modal: state.modal,
        alert: state.alert,
        vh: state.screen.height,
	}
}

export default connect(mapStateToProps, null)(App);
