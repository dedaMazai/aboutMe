import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollUiSchema } from '../types/ScrollUiSchema';

const initialState: ScrollUiSchema = {
    scroll: {},
};

export const ScrollUiSlice = createSlice({
    name: 'ScrollUi',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
            state.scroll[payload.position] = payload.position;
        },
    },
});

export const { actions: scrollUiActions } = ScrollUiSlice;
export const { reducer: scrollUiReducer } = ScrollUiSlice;
