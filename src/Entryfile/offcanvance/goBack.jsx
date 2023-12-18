import React from 'react'

export default function goBack() {
  return (
    <div> <li>
    <Link
      onClick={() => localStorage.setItem("firstload", "true")}
      to="/home/role-add"
    >
      <i className="la la-home" /> <span>Back to Home</span>
    </Link>
  </li></div>
  )
}
