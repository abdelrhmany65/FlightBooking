import { BOOKING, DELETE } from "./actionType"

const ival ={

    data: []
}

const BookingReducer = (state = ival, action) =>{
    switch (action.type) {
        case BOOKING:
            const NewData = [...state.data]
            NewData.push(action.payload)
            return{data:NewData}

        case DELETE:
            const filterdata = state.data.filter((d) => d.id !== action.payload);
            return{data:filterdata}
        default:
            return state;
    }
}

export default BookingReducer;

