import React from "react";

type PropsButtons = {
    count: number
}

export const ButtonsLike = (props: PropsButtons) => {
    return (
        <span>
            <button>LIKE{props.count}</button>
        </span>
    )

}
export const ButtonsDislike = (props: PropsButtons) => {
    return (
        <span>
            <button>DISLIKE{props.count}</button>
        </span>
    )

}