const mapDispatchtoProps = dispatch =>{
    
    return{
        TitleClicked:()=>dispatch({
            type:'Title Clicked'
        }),
        TitleChanged:(event)=>dispatch({
            type:'Title Changed',
            payload:event.target.value
        }),
        DescriptionChanged:(event)=>dispatch({
            type:'Desc Changed',
            payload:event.target.value
        }),
        EmptyTitleDesc:()=>dispatch({
            type:'Empty Form'
        }),
        GetData:(diary_data)=>dispatch({
            type:'Get Data',
            payload:diary_data
        })
    }
}


export default mapDispatchtoProps;