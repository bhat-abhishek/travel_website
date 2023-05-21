import { createContext,useState} from "react";

export const  sideBarContext = createContext();

export const SideBarState = (props)=>{
    
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu =  ()=>{
        setShowMenu(!showMenu);
    }

    return (
        <sideBarContext.Provider value={{showMenu,toggleMenu}}>
            {props.children}
        </sideBarContext.Provider>
    )
}

