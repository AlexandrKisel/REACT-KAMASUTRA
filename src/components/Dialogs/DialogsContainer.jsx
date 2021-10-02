import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onAddMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (<Dialogs addMessage={onAddMessage}
                     updateNewMessageText={onNewMessageChange}
                     dialogsPage={state.dialogsPage} />)
}

export default DialogsContainer;