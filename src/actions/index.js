export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: data,
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}

export const changeState = (data) => {
    return {
        type: 'changeState',
        payload: data,
    }
}