import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";

type PropsType = {
    users: UserType[]
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    setNewUsers: (users: UserType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class UsersCo extends React.Component <PropsType, UserType[]> {
// на безе классовой компоненты создается обьект и взаимодействую дальше с этим обьектом

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setNewUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.setNewUsers(response.data.items)
        })
    }

    render() {
        let page = []
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        for(let i = 1; i <= pageCount; i++){
        page.push(i)
    }

        const mappedPage = page.map( el => {
            return <span
                onClick={ () => { this.onPageChanged(el) } }
                className={this.props.currentPage === el ? s.selectedPage : s.ordinaryPage}>{el}</span>
        } )

        const mappedUsers = this.props.users.map(el => {

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
                            {}
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
                                ? <button onClick={() => this.props.unFollowUser(el.id)}
                                          style={
                                              {backgroundColor: 'orangered', transitionDuration: "0.5s"}
                                          }>UNFOLLOW</button>

                                : <button onClick={() => this.props.followUser(el.id)}
                                          style={{
                                              backgroundColor: 'yellowgreen',
                                              transitionDuration: "0.5s"
                                          }}>FOLLOW</button>
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

                        <div className={s.user__description}
                             style={{
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
                <div>
                    {mappedPage}
                </div>
                {mappedUsers}
                <button>Show more</button>
            </div>
        )
    }

}