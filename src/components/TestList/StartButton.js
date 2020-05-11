import React from "react";
import { Button, Modal } from "@material-ui/core"
import "./StartButton.css";
import ModalContent from "./ModalContent";
export default class StartButton extends React.Component {
    // const {test_id} = props;
    // onClick→テスト情報入力モーダルが開く
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({
            open: true
        });
    };
    closeModal() {
        this.setState({
            open: false
        });
    };
    render() {
        const open = this.state.open;
        const { test_id, testname } = this.props;
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
                    <ModalContent {...{ testname, test_id }} />
                </Modal>
            </>
        );
    }
}
