import React from "react";
import s from "./Dialogs.module.css"


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Andrzej</div>
                <div className={s.dialog}>Piotrek</div>
                <div className={s.dialog}>Bartek</div>
                <div className={s.dialog}>Franek</div>
                <div className={s.dialog}>Janek</div>
                <div className={s.dialog}>Adam</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello my friend</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}