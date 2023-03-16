import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import axios from "axios";

type PropsType = {
    users: UserType[]
    followUser: (userID:string) => void
    unFollowUser: (userID:string) => void
    setNewUsers: (users: any)=> void
}

export const Users = (props: PropsType) => {
    // const users = useSelector<RootStateType, UserType[]>(state => state.usersPage.users)

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {

        props.setNewUsers( response.data.items)
        return console.log('lol')
    } )

    // if (props.users.length === 0) {
    //     props.setNewUsers(   [
    //         {id: v1(), followed: true, fullName: "Snickers", status: "I'm a boss", location: {city: "Minsk", country: "Belarus"}},
    //         {id: v1(), followed: true, fullName: "Hottabych", status: "I'm a boss", location: {city: "Minsk", country: "Cyprus"}},
    //         {id: v1(), followed: false, fullName: "Saske", status: "I'm a boss", location: {city: "Minsk", country: "Tbilisi"}},
    //         {id: v1(), followed: true, fullName: "ALADDIN-BLEEET", status: "I'm a boss", location: {city: "Minsk", country: "KNDR"}},
    //     ])
    // }

    const mappedUsers = props.users.map(el => {
        return (
            <div className={s.user}
                 key={el.id}
                 style={{
                     display: "flex",
                     margin: "20px"
                 }}>
                <div className={s.user__but_img} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div className={s.user__img} style={{
                        width: '100px', height: '100px',
                        borderRadius: '50px',
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                        marginBottom: '10px'
                    }}>
                        <img style={{
                            width: '156px'
                        }}
                             src="https://encrypted-tbn0.gstatic.com/
                        images?q=tbn:ANd9GcSaLWL5VLlLXyl7N
                        zVjGZZhcGortMBllS2UVg&usqp=CAU"
                             alt="This is logo"/>
                    </div>

                    {
                        el.followed
                        ? <button onClick={()=> props.unFollowUser(el.id)}
                                  style={
                            {backgroundColor: 'orangered',transitionDuration:"0.5s"}
                        }>UNFOLLOW</button>

                        : <button onClick={()=> props.followUser(el.id)}
                                  style={{backgroundColor: 'yellowgreen',transitionDuration:"0.5s"}}>FOLLOW</button>
                    }

                </div>

                <div className={s.user__info}
                     style={{
                         border: "1px solid",
                         borderRadius: "5px",
                         padding: '15px',
                         marginLeft: '30px',
                         minWidth: "500px",
                         display: 'flex',
                         justifyContent: 'space-between'
                     }}>

                    <div className={s.user__description} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div className={s.user__name}>{el.name}</div>
                        <div className={s.user__status}>{el.status}</div>
                    </div>
                    <div className={s.user__live} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div className={s.user__country}>{'el.location.country'}</div>
                        <div className={s.user__city}>{'el.location.city'}</div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className={s.wrapper}>
            <h1>Users</h1>
            {mappedUsers}
            <button>Show more</button>
        </div>
    )
}