const Alert = ({info, message, alertStyle}) => {
    switch(alertStyle){
        case "warning":
            alertStyle = "bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-yellow-900 w-52 px-4 py-3 shadow-md"
        break;
        case "danger":
            alertStyle = "bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 w-52 px-4 py-3 shadow-md"
        break;
        default:
            alertStyle = "bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 w-52 px-4 py-3 shadow-md"
    }
    
    return(
        <div className={alertStyle} role="alert">
            <p className="font-bold">{info}</p>
            <p className="text-sm">{message}</p>
        </div>
    )
}
export default Alert;