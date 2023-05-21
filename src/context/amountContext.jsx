import { createContext,useState,useReducer, useEffect} from "react";

export const  CheckOutContext = createContext();

//Reducer function 
const roomReducer = (state,action)=>{
    let newState;
    let roomType;
    let roomCount;

    switch(action.type){
        case 'ADD_ROOM':
            newState = [...state]
            roomType = action.room['roomType']
            roomCount = action.room['count'] + 1
            newState = newState.map( ele => {
                return ele['roomType'] === roomType ? {...ele,roomsBooked:roomCount,'adults':action.room['adults'], 'children':action.room['children']} : ele
            })
            break;

        case 'REMOVE_ROOM':
            newState = [...state]
            roomType = action.room['roomType'];
            roomCount = action.room['count'] - 1;
            newState = newState.map( ele => {
                return ele['roomType'] === roomType ? {...ele,roomsBooked:roomCount} : ele
            })
            break;
       
        default:
            return state
    }
    return newState;
}

export const  CheckOutState = ({children})=>{
     
    const [amount, setAmount] = useState(0)
    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckOut] = useState(new Date());

    //intial state for the useReducer hook
    const initialRoomState = [
        {   roomType:'Non A/C Room',
            roomsBooked:0,
            roomCost:1200,
            
        },
        {   roomType:'A/C Room',
            roomsBooked:0,
            roomCost:2000,
        },
        {   roomType:'Dormitory room',
            roomsBooked:0,
            roomCost:1200,
        }
    ]

    useEffect(()=>{
        
    },[])
    //use Reducer to set the intial state
    const [roomState, dispatch] = useReducer(roomReducer, initialRoomState)

    return (
        <CheckOutContext.Provider value={{amount,setAmount,checkIn,setCheckIn,checkOut,setCheckOut,roomState,dispatch}}>
            {children}
        </CheckOutContext.Provider>
    )
} 