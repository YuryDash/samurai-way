import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {Posts} from "./MyPosts/Posts/Posts";


export const Profile = () => {
    return (
        <div className={s.profile}>
            <div>

            </div>


            <div className={s.my__data}>
                <div className={s.avatar}>
                    <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/escanor-of-pride-nanatsu-no-taizai-kitaru-normin.jpg" alt="Just Avatar"/>
                </div>

                <div>
                    <div>
                        Yury Dashukevich
                    </div>
                    <div>
                        <div>Date of birth: <span> 12.06</span> </div>
                        <div>City: <span> Minsk</span></div>
                        <div>Education: <span> Auto Mechanical College</span></div>
                        <div>Web-site: <a href="src/components/Profile/Profile#">https://img2.joyreactor.cc</a></div>
                    </div>
                </div>
            </div>


            <div>
                <MyPosts/>
                <Posts/>
            </div>
        </div>

    )
}