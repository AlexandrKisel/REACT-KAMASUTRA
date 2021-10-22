import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/userAvatar.jpg";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import s from './Users.module.css'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.users}>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : undefined}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}
                             key={p}>{p}</span>
            })}
        </div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                             className={styles.userPhoto} alt='UserPhotoSmall'/>
                        </NavLink>
                        </div>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, user.id);
                                usersAPI.unfollow(user.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.unfollow(user.id);
                                    }
                                    props.toggleIsFollowingProgress(false, user.id);
                                })
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, user.id);
                                usersAPI.follow(user.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.follow(user.id);
                                    }
                                    props.toggleIsFollowingProgress(false, user.id);
                                })

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

export default Users;