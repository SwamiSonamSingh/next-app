export default function PhotoLayout (props:{
    modal:React.ReactNode,
    children:React.ReactNode
}){
    return(
        <>
            {props.modal}
            {props.children}
        </>
    )
}