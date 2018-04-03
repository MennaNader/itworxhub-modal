import React from "react";
import ReactDOM from "react-dom";
import HubModal from "./modal.jsx";

export default class App extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>Open modal</button>
        <HubModal
          open={this.state.open}
          onCloseModal={this.onCloseModal}
          headerAction={this.props.headerAction}
          headerTitle={this.props.headerTitle}
          headerAside={this.props.headerAside}
          footerAction={this.props.footerAction}
          footerAside={this.props.footerAside}
          centered={this.props.centered}
          fullHeight={this.props.fullHeight}
          fullHeightMobile={this.props.fullHeightMobile}
          noFooter={this.props.noFooter}
          alert={this.props.alert}
          info={this.props.info}
        >
          {this.props.children}
        </HubModal>
      </div>
    );
  }
}
