const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
import AsyncStorage from '@react-native-async-storage/async-storage';
export const login = createAsyncThunk(
    async (payload, { rejectWithValue }) => {
        try {
            const data = await authApi.login(payload)
            AsyncStorage.setItem('access_token', data.token)
            AsyncStorage.setItem('user', JSON.stringify(data.user))
            return data.user
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
export const update = createAsyncThunk(

    async (payload, { rejectWithValue }) => {
        try {
            const data = await userApi.updateInfoUser(payload)
            AsyncStorage.setItem('user', JSON.stringify(data.message))
            return data.message
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: JSON.parse(AsyncStorage.getItem('user')) || {}
    },
    reducers: {
        logout(state) {
            AsyncStorage.removeItem('user')
            AsyncStorage.removeItem('access_token')
            state.profile = {}
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.profile = action.payload
        },
        [update.fulfilled]: (state, action) => {
            state.profile = action.payload
        }
    }
})
const { reducer, actions } = userSlice
export const { logout } = actions
export default reducer
