import React from 'react'

const Header = ({ data, logoutHandler }) => {
    return (
        <div className="flex items-end justify-between">
            <h1 className="text-2xl">Hello <span className="text-3xl font-semibold">{data?.name} 👋</span> </h1>
            <button className="cursor-pointer bg-red-700 text-white px-5 py-2 text-lg font-medium rounded-md active:scale-95" onClick={logoutHandler}>Log out</button>
        </div>
    )
}

export default Header
