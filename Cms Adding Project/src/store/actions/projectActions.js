export const createProject=(project)=>
{
    return(dispatch,getState,{ getFirebase, getFirestore })=>
    {
        const firestore=getFirestore();
        firestore.collection('projects').add({
            ...project,
            autherFirstName:'Let',
            autherLastName:'Script',
            authorId:1235,
            createAt : new Date()
        }).then(()=> {
            dispatch({type:'CREATE_PROJECT', project});     
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err});
        })
        
    }
};