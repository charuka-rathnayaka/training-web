const mapDispatchtoProps = dispatch =>{
    
    return{
        GetData:(diary_data)=>dispatch({
            type:'Get Data',
            payload:diary_data
        }),
        NicknameChanged:(event)=>dispatch({
            type:'Nickname Changed',
            payload:event.target.value
        })
    }
}


export default mapDispatchtoProps;