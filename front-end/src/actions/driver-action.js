import * as Types from "../constants/action-types";
import axios from 'axios'

export const setDriverProfile = (driverProfile) => {
    return {
        type: Types.SET_DRIVER_PROFILE,
        driverProfile
    }
}

export const actGetDriverProfile = (driverId) => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: 'http://localhost:5500/api/user/driver/' + driverId
        })
            .then(res => {
                dispatch(setDriverProfile(res.data))
            })
            .catch(err => console.log(err))
    }
}

export const actRemoveDriverProfile = () => {
    return (dispatch) => {
        dispatch(setDriverProfile({}))
    }
}
