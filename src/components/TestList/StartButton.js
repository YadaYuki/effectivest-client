import React from "react";
import { Button, Modal } from "@material-ui/core"
import "./StartButton.css";
export default class StartButton extends React.Component{
    // const {test_id} = props;
    // onClick→テスト情報入力モーダルが開く
    constructor(props){
        super(props);
        this.state = {
            open:false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.openModal.bind(this);
    }
    openModal (){
        this.setState({
            open:true
        });
    };
    closeModal(){
        this.setState({
            open:false
        });
    };
    render() {
        const open = this.state.open;
        return (
            <>
                <Button 
                    className="testStartButton" 
                    variant="contained"
                     color="primary"
                     onClick={this.openModal}
                     >
                    Start
        </Button>
                <Modal
                    open={open}
                    onClose={this.closeModal}
                >
                    <ModalContent />
                </Modal>
            </>
        );
    }
}
function ModalContent(){
    return (
        <div>
            <h1>Modal!</h1>
        </div>
    );
}