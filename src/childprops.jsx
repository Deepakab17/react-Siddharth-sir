import React from 'react'

const ChildProps = ({name,age}) => {
  return (
    <div>this is Child
        <h1>My name is {name}</h1>
        <h2>My age is {age}</h2>
    </div>
  )
}

export default ChildProps