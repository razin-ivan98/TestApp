import React, { useState } from "react";

import '../../../global.css';

import { Wrapper, Header, AppInner, Footer } from "./App.styled";

import Image from "../Image";
import ModalImage from "../../common/ModalImage";


const App = () =>  {
    const [opened, setOpened] = useState(null);

    const onOpenImage = (id) => {
        setOpened(true);
    };
    const onCloseModal = () => {
        setOpened(null);
    }
    return (
        <Wrapper>
            <Header>
                Test App
            </Header>
            <AppInner>
                <Image onClick={onOpenImage} src="https://picsum.photos/id/237/300/200"/>
                <Image onClick={onOpenImage} src="https://picsum.photos/id/237/300/200"/>
                <Image onClick={onOpenImage} src="https://picsum.photos/id/237/300/200"/>
                <Image onClick={onOpenImage} src="https://picsum.photos/id/237/300/200"/>
                <Image onClick={onOpenImage} src="https://picsum.photos/id/237/300/200"/>
                <Image onClick={onOpenImage} src="https://picsum.photos/id/237/300/200"/>
                <Image onClick={onOpenImage} src="https://picsum.photos/id/237/300/200"/>

            </AppInner>
            <Footer>
            © 2018-2019
            </Footer>
            {opened && <ModalImage onClose={onCloseModal}>

            </ModalImage>}
        </Wrapper>
    );
}


export default App;