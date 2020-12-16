import React from 'react';

export default function User(props) {
    const { userInfo } = props

    if (!userInfo) {
        return <h3> Working on fetching your team member&apos;s information...</h3>
    }

    return (
        <div className='friend container'>
            <h1>Welcome</h1>
            <h2>{userInfo.fname} {userInfo.lname}</h2>
            <p>Email:&nbsp;  {userInfo.email}</p>
            <p>Role:&nbsp;  {userInfo.role}</p>
        </div>
    )
}
