import { useState } from "react";

export const Users = ({data}) => {
    const [userToShow, setUsersToShow] = useState(data.users);
    const [value, setValue] = useState("");

    const onChange = (e) => {
        let value = e.target.value;
        setValue(value);
        console.log(value);
    }

  return (
    <div>
        <div>
            <p>Filter here</p>
            <input type="text" value={value} onChange={onChange} />
        </div>
        <div>
            {data && data.map((user, i) => {
                const {name,username,email,website,phone} = user;
                return (
                    <div>
                        <div key={i}>
                            <p>Name: {name}</p>
                            <p>Username: {username}</p>
                            <p>Email: {email}</p>
                            <p>Phone: {phone}</p>
                            <p>Website: {website}</p>
                            <hr />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}