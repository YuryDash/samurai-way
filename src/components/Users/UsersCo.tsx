import React from "react";
import s from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";

type PropsType = {
    users: UserType[]
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged:(pageNumber:number) => void
}

export const UsersCo = (props: PropsType) => {

    let page = []
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }

    const mappedPage = page.map(el => {
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
                    <div className={s.user__img}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaLWL5VLlLXyl7N
                        zVjGZZhcGortMBllS2UVg&usqp=CAU" alt="This is logo"/></div>
                    {
                        el.followed
                            ? <button onClick={() => props.unFollowUser(el.id)}
                                      style={
                                          {backgroundColor: 'orangered', transitionDuration: "0.5s"}
                                      }>UNFOLLOW</button>

                            : <button onClick={() => props.followUser(el.id)}
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
            <button>Show more</button>
        </div>
    )
}
