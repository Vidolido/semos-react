import { useState } from "react";
import Dropdown from "./DropDown";
import FieldInput from "./FieldInput";
import ShowLoggedUsers from "./ShowLoggedUsers";

const MainComponent = () => {
    const [loggedUsers, setLoggedUsers] = useState([]);
    const initialObj = {
        user: "",
        pass: "",
        comment: "",
        app: ""
    }
    const [userObj, setUserObj] = useState(initialObj);

    const apps = [
        { id: 1, name: "Facebook" },
        { id: 2, name: "Instagram" },
        { id: 3, name: "Twitter" },
    ];

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setLoggedUsers([...loggedUsers, userObj]);
        setUserObj(initialObj);
    };

    const onDropDownChange = (e) => {
        setUserObj(prevState => {
            return {...prevState, [e.target.name] : e.target.value}
        });
    };
    console.log(loggedUsers)
    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <div>MainComponent</div>
                <FieldInput userObj={userObj} setUserObj={setUserObj} />
                <Dropdown options={apps} onDropDownChange={onDropDownChange} />
                <button>Submit</button>
            </form>
            <ShowLoggedUsers loggedUsers={loggedUsers} />
        </>
    );
};

export default MainComponent;