import React from "react";
import s from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = {
    users: UserType[]
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: PropsType) => {

    let page = []
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }

    const mappedPage = page.slice(0, 15).map(el => {
        return <span
            key={el}
            onClick={() => {
                props.onPageChanged(el)
            }}
            className={props.currentPage === el ? s.selectedPage : s.ordinaryPage}>{el}</span>
    })

    const mappedUsers = props.users.map(el => {

        return (
            <div className={s.user} key={el.id}>

                <div className={s.user__but_img}>
                    <div className={s.user__img}>
                        <NavLink to={'/profile/' + el.id}>
                            {
                                el.photos.small === null
                                    ? <img
                                        src="data:image/jpeg;base64,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"
                                        alt="This is logo"/>
                                    : <img alt={'just img'} src={el.photos.small}></img>
                            }
                        </NavLink>
                    </div>
                    {
                        el.followed
                            ? <button onClick={() => {

                                //withCredentials передается ВТОРЫМ параметром в delete!!! В post третьим!
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {
                                           'API-KEY': '5c459c90-c1a8-4f52-af57-db2b0c2fbb33'
                                        }
                                    }).then((response) => {
                                        if(response.data.resultCode === 0) {
                                            props.unFollowUser(el.id)
                                        }
                                })
                            }}
                                      style={
                                          {backgroundColor: 'orangered', transitionDuration: "0.5s"}
                                      }>UNFOLLOW</button>

                            : <button onClick={() => {

                                //withCredentials передается третьим параметром в post!!! В get вторым!
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                                    {}, {
                                    withCredentials: true,
                                        headers: {
                                            'API-KEY': '5c459c90-c1a8-4f52-af57-db2b0c2fbb33'
                                        }
                                    }).then((response) => {
                                    if(response.data.resultCode === 0) {
                                        props.followUser(el.id)
                                    }
                                })

                            }}
                                      style={{
                                          backgroundColor: 'yellowgreen',
                                          transitionDuration: "0.5s"
                                      }}>FOLLOW</button>
                    }

                </div>

                <div className={s.user__info}>

                    <div className={s.user__description}
                    >
                        <div className={s.user__name}>{el.name}</div>
                        <div className={s.user__status}>{el.status}</div>
                    </div>
                    <div className={s.user__live}>
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
            <div>
                {mappedPage}
            </div>
            {mappedUsers}
        </div>
    )
}
