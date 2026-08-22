import React , {useState} from 'react';
import userContext from './userContext';

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null); // "These are the values I want to make available through userContext."
    return(
        // This line basically tells us that we are providing these 2 things user , setUser to all the components inside me
        
        <userContext.Provider value={{user, setUser}}> 
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;