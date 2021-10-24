import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import React from "react";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default DialogsContainer;