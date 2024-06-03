import {configureStore} from '@reduxjs/toolkit'
import countSlice from './Slices/countSlice'

export const store = configureStore({
    reducer: {count: countSlice}
})