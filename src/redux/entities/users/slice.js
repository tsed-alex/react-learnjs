import { normalizedUsers } from '../../../../materials/normalized-mock';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ids: normalizedUsers.map((item) => item.id),
    entities: normalizedUsers.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {})
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    selectors: {
        selectUserEntities: (state) => state.entities
    }
});

export const { selectUserEntities } = usersSlice.selectors;
