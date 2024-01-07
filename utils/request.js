import axios from 'axios'

export const getRequest = async (endpoint, payload) => {
    try{
        const response = await axios.get(endpoint, payload, {
            withCredentials: true
        });
        return response
    }
    catch(err){
        const errorMessage = err?.response?.data?.errors[0]
        throw new Error(errorMessage ?? "Unknown Error...")
    }
}

export const postRequest = async (endpoint, payload) => {
    try{
        const response = await axios.post(endpoint, payload, {
            withCredentials: true,
        });
        return response
    }
    catch(err){
        const errorMessage = err?.response?.data?.errors[0]
        throw new Error(errorMessage ?? "Unknown Error...")
    }
}

