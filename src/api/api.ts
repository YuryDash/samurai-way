import axios from "axios";


// export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}
//         &count=${pageSize}`, {withCredentials: true}).then(response => response.data)
// }

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    userUnfollow(userID: number) {
        return instance.delete(`follow/${userID}`)
            .then(response => response)
    },
    userFollow(userID: number) {
        return instance.post(`follow/${userID}`).then(response => response)}
}
// axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
//     {}, {
//         withCredentials: true,
//         headers: {
//             'API-KEY': '5c459c90-c1a8-4f52-af57-db2b0c2fbb33'
//         }
//     }).then((response) => {
//     if(response.data.resultCode === 0) {
//         props.followUser(el.id)
//     }
// })
// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
//     {
//         withCredentials: true,
//         headers: {
//             'API-KEY': '5c459c90-c1a8-4f52-af57-db2b0c2fbb33'
//         }
//     }).then((response) => {
//     if(response.data.resultCode === 0) {
//         props.unFollowUser(el.id)
//     }
// })