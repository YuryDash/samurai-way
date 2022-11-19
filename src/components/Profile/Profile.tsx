import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {Posts} from "./MyPosts/Posts/Posts";


// const Arr = [
//     {id: 1, name:'My Friend: ', message: "Hello my friend, how a u?",},
//     {id: 2, name:'My Friends: ', message: "Helloo my friend, how a u?",},
//     {id: 3, name:'My Friendd: ', message: "Hellooo my friend, how a u?",},
// ]
// const Arr2 = [
//     {id: 2, name:'My Name: ', message: "Hello, i'am fine and u?",}
// ]


export const Profile = () => {
    return (
        <div>
            <div className={s.my__data}>
                <div className={s.avatar}>
                    <img
                        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/escanor-of-pride-nanatsu-no-taizai-kitaru-normin.jpg"
                        alt="Just Avatar"/>
                </div>

                <div className={s.info}>
                    <div>
                        Yury Dashukevich
                    </div>
                    <div >
                        <div>Date of birth: <span> 12.06</span></div>
                        <div>City: <span> Minsk</span></div>
                        <div>Education: <span> Auto Mechanical College</span></div>
                        <div>Web-site: <a href="src/components/Profile/Profile#">https://img2.joyreactor.cc</a></div>
                    </div>
                </div>
            </div>

            <div>
                <MyPosts/>
            </div>
            <div>
                <Posts message={'Hello my friends'}/>
                <Posts message={'First post'}/>
                <Posts message={"dsfsdfsdf"}/>

            </div>
        </div>

    )
}