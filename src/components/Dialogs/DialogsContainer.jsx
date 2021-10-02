import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let onAddMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                let onNewMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }

                return <Dialogs addMessage={onAddMessage}
                                updateNewMessageText={onNewMessageChange}
                                dialogsPage={state.dialogsPage}/>
            }
            }
        </StoreContext.Consumer>)
}

export default DialogsContainer;