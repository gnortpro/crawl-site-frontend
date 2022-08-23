import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SliceState {
    isCollapsed: boolean;
}

const initialState: SliceState = {
    isCollapsed: false,
};

const sideBarSlice = createSlice({
    name: 'sideBarSlice',
    initialState,
    reducers: {
        toggleCollapse: state => {
            state.isCollapsed = !state.isCollapsed;
        },
        setCollapse: (state, action?: PayloadAction<boolean>) => {
            state.isCollapsed = action.payload;
        },
        handleChangePasswordStart: () => {},
    },
});

export const { reducer, actions } = sideBarSlice;
