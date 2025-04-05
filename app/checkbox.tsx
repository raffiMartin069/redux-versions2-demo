import React from 'react'
import { Checkbox } from "expo-checkbox";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { visibilityToggle } from './secretKeySlicer';

const MyCustomCheckbox = () => {

    const dispatch = useDispatch<AppDispatch>();
    const visibility = useSelector((state: RootState) => state.secretKey.isVisible);

    return (
        <Checkbox value={visibility} onValueChange={() => dispatch(visibilityToggle())} />
    )
}

export default MyCustomCheckbox