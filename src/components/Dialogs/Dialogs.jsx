import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>);

    let newMessage = React.createRef();

    let addMessage = () => {
        // props.addMessage();

        props.dispatch(addMessageActionCreator());
        console.log(props.dialogsPage);
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        // props.updateNewMessageText(text);
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onMessageChange} ref={newMessage} value={props.dialogsPage.newMessageText}/>
            </div>
            <div>
                <button onClick={addMessage}>Add message
                </button>
            </div>
        </div>
    )
}

export default Dialogs;