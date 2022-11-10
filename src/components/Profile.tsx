import React from "react";
import s from "../modules-css/Profile.module.css"


export const Profile = () => {
    return (
        <div className={s.profile}>
            <div>

            </div>


            <div>
                <div>
                    <img src="https://img2.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg" alt="Just Avatar"/>
                </div>

                <div>
                    <div>
                        Yury Dashukevich
                    </div>
                    <div>
                        <div>Date of birth: <span> 12.06</span> </div>
                        <div>City: <span> Minsk</span></div>
                        <div>Education: <span> Auto Mechanical College</span></div>
                        <div>Web-site: <a href="#">https://img2.joyreactor.cc</a></div>
                    </div>
                </div>
            </div>


            <div>

                <div >New Post</div>
                <div>Post-1</div>
                <div>Post-2</div>
                <div>Post-3</div>
            </div>
        </div>

    )
}