import React from 'react'

const UserProfile = () => {

    const name = 'King Arthur'
    const hobby = 'Gathering knights for the Round Table'
    const funFact = 'Subverted the ways of democracy when the Lady of the Lake hucked a sword at him'

    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Hobby: {hobby}</h2>
            <h2>Fun Fact: {funFact}</h2>
        </div>
    )
}

export default UserProfile