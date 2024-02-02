import {createContext} from 'react'

const userContext = createContext({
    userDetails : {
        name : "dummy name ",
        email: "dummyEmail"
    },
})
export default userContext;
// jaha se context export karna hai waha pe create context kro
// aur jaha pe context ko use karna hai waha par useContext import kro react se aur 
// aur ek variable bana ke useContext hook ke andar userContext likho
// const user = useContext(userContext)