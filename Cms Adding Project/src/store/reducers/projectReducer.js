const initState={
    projects:[
        {id:'1',title:'Project-1',content:'The LetScript Project has been started'},
        {id:'2',title:'Project-2',content:'The LetScript Project has been started'},
        {id:'3',title:'Project-3',content:'The LetScript Project has been started'},
    ]
}

const projectReducer=(state=initState,action)=>
{
    switch(action.type)
    {
        case 'CREATE_PROJECT':
           console.log('created Project',action.project);
           return state;
        case 'CREATE_PROJECT_ERROR':
           console.log('create project error',action.err);
           return state;
        default:
           return state;
    }
}

export default projectReducer;