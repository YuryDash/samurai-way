import axios from "axios";

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
        return instance.post(`follow/${userID}`).then(response => response)
    },
    getProfile(userID: number) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
    }

}

export const authAPI = {
    userAuth() {
        return instance.get(`auth/me`)
    }
}

// axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
//     {withCredentials: true} ).then((response) => {
//     if (response.data.resultCode === 0) {
//         let {id, login, email} = response.data.data
//         this.props.setAuthUserDataAC(id, login, email)
//     }
// })