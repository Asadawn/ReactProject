import React from 'react'
function Users (props){
    let {img,uname,email}=props
    return(

    <div>

        <div>
            <div>
            <img src={img} alt={uname} />
            <h2 >{props.uname}</h2>
            <h3>{email}</h3>
            </div>
        </div>
    </div>
    )
}
export default Users;