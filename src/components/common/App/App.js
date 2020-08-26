import React from "react";

import { connect } from "react-redux";

import '../../../global.css';

import { Wrapper, Header, AppInner, Footer, SpinnerWrapper } from "./App.styled";

import Spinner from "../../core/Spinner";

import ModalImage from "../../common/ModalImage";
import Galary from "../../common/Galary";

const App = (props) =>  {
    //const [opened, setOpened] = useState(null);

    // const onOpenImage = (id) => {
    //     setOpened(true);
    // };
    // const onCloseModal = () => {
    //     setOpened(null);
    // }

    const {
        modal,
        galaryLoader,
    } = props;

    return (
            <Wrapper>
                <Header>
                    Test App
                </Header>
                <AppInner>
                    <Galary />
                    {galaryLoader && <SpinnerWrapper><Spinner /></SpinnerWrapper>}
                </AppInner>
                <Footer>
                    © 2018-2019
                </Footer>
                {modal && <ModalImage>
                    </ModalImage>}
            </Wrapper>
    );
};

const mapStateToProps = state => {
	return {
        modal: state.modal,
        galaryLoader: state.galaryLoader,
	}
}

export default connect(mapStateToProps, null)(App);
