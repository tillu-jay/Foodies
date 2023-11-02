import { useState } from "react";

const User = ({ name }) => {
    const [count] = useState(0)
    const [count2] = useState(1)

    return (
        <div className="user-card">
            <h1>Count: {count} (Functional)</h1>
            <h1>Count 2: {count2} (Functional)</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Dehradun</h3>
            <h4>Contact: www.jaytillu.in</h4>
        </div>
    )
}

export default User;