import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/userAvatar.jpg";
import {NavLink} from "react-router-dom";
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
                             onClick={() => {
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
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          props.unfollow(user.id)
                                      }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          props.follow(user.id)
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