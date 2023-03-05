import { useState } from "react";

const FieldInput = ({userObj, setUserObj}) => {

    const [isFieldClicked, setIsFieldClicked] = useState({
        pass: true,
        comment: true,
    });
    const handleOnChange = (e) => {
        setUserObj(prevState => {
            return {...prevState, [e.target.name] : e.target.value }
        });
    }

  return ( Object.keys(userObj).map((field, index) => {
        return <div key={index}>
                {
                    (field === 'comment' && !isFieldClicked[field]) 
                    ? <textarea name={field} onChange={handleOnChange} value={userObj[field]} />
                    : field !== 'app' && <input type={field === 'pass' && isFieldClicked[field] ? "password" : "text"} name={field} value={`${userObj[field]}`} onChange={handleOnChange} /> 
                }

                { (field === 'pass' || field === 'comment') && <input type="button" name={field} onClick={() => setIsFieldClicked({...isFieldClicked,[field] : !isFieldClicked[field]})} value={isFieldClicked[field] ? "Show" : "Hide"} /> }
        </div>
    }));
}

export default FieldInput