import React from "react";


const User = (props) => {
    // console.log(props.data)
    const { data } = props
    return (
        <>
            <h4>User component</h4>
            <h4>{data.name}</h4>
            <h4>{data.Age}</h4>
            <h4>{data.gender}</h4>
        </>
    )
}
export default User;