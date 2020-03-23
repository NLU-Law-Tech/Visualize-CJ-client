
let axios = require('axios');
axios = axios.create({
    baseURL: 'http://140.120.13.252:12001',
});

export function setAppLoading(isLoading){
    return{
        type:"SET_APP_LOADING",
        isLoading
    }
}

export function parseCJ(CJText='',FoucsPositions=[]) {
    // return (dispatch) => {
    //     axios.post('/parse-defendant-example')
    //     .then((res)=>{
    //         // console.log(res)
    //         let {data={}} = res,
    //         {defendants=[], tokens=[], marks=[]}= data;
    //         dispatch({
    //             type:'PARSE_CJ_RESULT',
    //             CJDefendants:defendants,
    //             CJTokens:tokens,
    //             CJMarks:marks
    //         })
    //     })
    // }
    return (dispatch) => {
        // clear data
        dispatch({
            type:'PARSE_CJ_RESULT',
            CJDefendants:[],
            CJTokens:[],
            CJMarks:[]
        })

        // in loading
        dispatch(setAppLoading(true))
        axios.post('/parse-defendant',{
            CJText,
            FoucsPositions
        })
        .then((res)=>{
            // console.log(res)
            let {data={}} = res,
            {defendants=[], tokens=[], marks=[]}= data;
            dispatch({
                type:'PARSE_CJ_RESULT',
                CJDefendants:defendants,
                CJTokens:tokens,
                CJMarks:marks
            })
        })
        .finally(()=>{
            dispatch(setAppLoading(false))
        })
    }
}

let initState = {
    CJDefendants:[],
    CJTokens:[],
    CJMarks:[],
    isLoading:false
}

export default function mainReducer(state = initState, action) {
    console.log(action)
    switch (action.type) {
        case 'SET_APP_LOADING':
            return Object.assign({},state,{
                isLoading:action.isLoading
            })
        case 'PARSE_CJ_RESULT':
            return Object.assign({},state,{
                CJDefendants:action.CJDefendants,
                CJTokens:action.CJTokens,
                CJMarks:action.CJMarks
            })
        default:
            return state
    }
}