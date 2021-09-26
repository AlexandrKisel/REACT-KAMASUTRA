const store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 34},
                {id: 3, message: 'Hi, how are you?', likesCount: 20},
                {id: 4, message: 'Hello!', likesCount: 5}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'I\'m ok, thank you'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Hello'},
                {id: 6, message: 'Goodbye'}
            ],
            newMessageText: 'it-kamasutra.com'
        },
    },

    rerenderEntireTree() {
        console.log('State  changed')
    },

    addPost() {
        let newPost = {
            id: 5,
            message: store.state.profilePage.newPostText,
            likesCount: 0
        };
        store.state.profilePage.posts.push(newPost);
        store.state.profilePage.newPostText = '';
        store.rerenderEntireTree(store);
    },

    updateNewPostText(newText) {
        store.state.profilePage.newPostText = newText;
        store.rerenderEntireTree(store);
    },

    addMessage() {
        let newMessage = {
            id: 7,
            message: store.state.dialogsPage.newMessageText
        };
        store.state.dialogsPage.messages.push(newMessage);
        store.state.dialogsPage.newMessageText = '';
        store.rerenderEntireTree(store);
    },

    updateNewMessageText(newText) {
        store.state.dialogsPage.newMessageText = newText;
        store.rerenderEntireTree(store);
    },

    subscribe(observer) {
        store.rerenderEntireTree = observer; //наблюдатель
    }
}

export default store;

// store - OOP