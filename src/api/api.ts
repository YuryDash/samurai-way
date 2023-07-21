import axios from "axios";

type ResponseType<T = {}>= {
    resultCode: number
    messages: Array<string>
    data: T
}

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
        return instance.get(`profile/` + userID)
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean){
        console.log(rememberMe)
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}

export  const profileAPI = {
    getProfile(userID: number) {
        return instance.get(`profile/${userID}`)
    },
    getStatus(userID: number) {
        return instance.get(`profile/status/${userID}` )
    },
    updateStatus(statusValue: string) {
        return instance.put(`profile/status/`, {status: statusValue})
    }
}

// axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
//     {withCredentials: true} ).then((response) => {
//     if (response.data.resultCode === 0) {
//         let {id, login, email} = response.data.data
//         this.props.setAuthUserDataAC(id, login, email)
//     }
// })