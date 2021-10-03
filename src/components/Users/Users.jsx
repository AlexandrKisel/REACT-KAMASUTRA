import React from 'react';
import s from "./Users.module.css";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {country: 'Belarus', city: 'Minsk'}
                },
                {
                    id: 2,
                    photoUrl: 'https://media.istockphoto.com/vectors/user-sign-icon-person-symbol-human-avatar-vector-id639085642',
                    followed: false,
                    fullName: 'Sasha',
                    status: 'I am a boss too',
                    location: {country: 'Russia', city: 'Moscow'}
                },
                {
                    id: 3,
                    photoUrl: 'https://icon-library.com/images/icon-avatar/icon-avatar-19.jpg',
                    followed: true,
                    fullName: 'Vasya',
                    status: 'I am a boss too',
                    location: {country: 'Ukraine', city: 'Kiev'}
                },
                {
                    id: 4,
                    photoUrl: 'https://w7.pngwing.com/pngs/304/305/png-transparent-man-with-formal-suit-illustration-web-development-computer-icons-avatar-business-user-profile-child-face-web-design.png',
                    followed: false,
                    fullName: 'Oleg',
                    status: 'I am a boss too',
                    location: {country: 'Poland', city: 'Warsaw'}
                },
            ]
        )
    }
    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={user.photoUrl} alt=""/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(user.id)
                            }}> Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
                <span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>
            </div>)
        }
    </div>
}


export default Users;