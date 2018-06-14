import React from "react";
import ReactDOM from "react-dom";
import HubModal from "./index.js";

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
          headerAction={<button className="button cancel-link">Cancel</button>}
          headerTitle="Create Event"
          headerAside={<button className="button default-button FR small-button">Hi</button>}
          footerAction={<button className="button default-button FR small-button">Hi</button>}
          footerAside={<button className="button default-button FR small-button">Hi</button>}
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
