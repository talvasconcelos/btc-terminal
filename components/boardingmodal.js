
import { Modal, Button, Input } from 'antd'

const BoardingModal = ({visible, change, click, url}) => {    
    return (
        <Modal
          visible={visible}
          title="Initial setup"
          onOk={click}
          onCancel={click}
        >
          <Input.TextArea onChange={change} value={url}/>
        </Modal>
        // <Dialog class={open ? 'mdc-dialog--open' : ''} onAccept={click}>
        //     <Dialog.Header>Initial setup</Dialog.Header>
        //     <Dialog.Body>                
                
        //         {/* <Button>Ok</Button> */}
        //         {/* <input type="url" name="url" value={url} onChange={change} /> */}
        //         {/* <input class='btn confirm' type='submit' value='Ok' onClick={click} /> */}
        //     </Dialog.Body>
        //     <Dialog.Footer>
        //         <Dialog.FooterButton cancel={true}>Decline</Dialog.FooterButton>
        //         <Dialog.FooterButton accept={true}>Accept</Dialog.FooterButton>
        //     </Dialog.Footer>
        // </Dialog>
        // <div class='overlay'>
        //     <div class='modal'>
        //         {children}
        //     </div>
        // </div>
    )
}

export default BoardingModal