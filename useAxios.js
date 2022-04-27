import React, { useState, useEffect, useRef } from "react";
import './App.css';
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios){
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });

    const [trigger, setTrigger] = useState(0); //refetch를 하려면 뭔가 바껴야 하는데 계속 바뀌는 뭔가를 만들어줘야함.
    if(!opts.url){
        return;
    }

    const refetch = () => {
        setState({
        ...state,
        loading:true,
        });
        setTrigger(Date.now());
    }

    useEffect( ()=> {
        axiosInstance(opts).then(data => {
        setState({
            ...state,
            loading: false,
            data
        });
        }).catch(error => {
        setState({...state, loading: false, error});
        });
    }, [trigger]);

    return {...state, refetch};
}

export default useAxios;