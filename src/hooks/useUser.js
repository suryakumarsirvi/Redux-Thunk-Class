import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersData } from "../store/features/users.slice";

export const useUser = () => {
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.users);

    useEffect(()=>{
        dispatch(fetchUsersData());
    },[]);

    return users
}