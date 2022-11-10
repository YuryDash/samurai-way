import React from "react";

export const Profile = () => {
    return (
        <div className='profile--all'>
            <div className='theme__img'>
                <img src="https://img3.goodfon.ru/original/1280x800/0/78/interstellar-wormhole.jpg" alt=""/>
            </div>


            <div className="profile__my">
                <div className="profile__avatar">
                    <img src="https://img2.joyreactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg" alt="Just Avatar"/>
                </div>

                <div className="profile__info">
                    <div className="profile__title--name">
                        Yury Dashukevich
                    </div>
                    <div className="profile__info">
                        <div className="profile__info--date">Date of birth: <span> 12.06</span> </div>
                        <div className="profile__info--city">City: <span> Minsk</span></div>
                        <div className="profile__info--education">Education: <span> Auto Mechanical College</span></div>
                        <div className="profile__info--web">Web-site: <a href="#">https://img2.joyreactor.cc</a></div>
                    </div>
                </div>
            </div>


            <div className="posts">

                <div >New Post</div>
                <div>Post-1</div>
                <div>Post-2</div>
                <div>Post-3</div>
            </div>
        </div>

    )
}