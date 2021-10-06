import React from 'react';
import s from "./Users.module.css";
import userPhoto from '../../assets/images/userAvatar.jpg'
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return <div>
            {
                this.props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(user.id)
                            }}> Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
                    <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users;