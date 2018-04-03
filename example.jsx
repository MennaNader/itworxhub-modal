import React from "react";
import ReactDOM from "react-dom";
import HubModal from "./index.jsx";

export default class Start extends React.Component {
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
          headerAction={<button>Hi</button>}
          headerTitle="Hi"
          headerAside={<button>Hi</button>}
          footerAction={<button>Hi</button>}
          footerAside={<button>Hi</button>}
          headerClose
          centered
          fullHeight
          fullHeightMobile
          noFooter
          alert
          info
          small
          xsmall
          large
        >
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>{" "}
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>{" "}
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>{" "}
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>{" "}
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
        </HubModal>
      </div>
    );
  }
}
ReactDOM.render(<Start />, document.getElementById("root"));
