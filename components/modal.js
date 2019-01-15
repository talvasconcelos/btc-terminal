const Modal = ({children}) => {
    return (
        <div class='overlay'>
            <div class='modal'>
                {children}
            </div>
        </div>
    )
}

export default Modal