import { BOOKING , DELETE} from './actionType'


export const booking = (data) => {
    return{
        type: BOOKING,
        payload: data
    }
}

export const delet = (id) =>{
    return{
        type: DELETE,
        payload: id
    }
}