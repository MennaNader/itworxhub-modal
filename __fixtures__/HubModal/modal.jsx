import App from "../../src/app.jsx";
import React from "react";

export default [
  {
    component: App,
    name: "Modal",
    state: {
      open: true
    },
    props: {
      headerAction: (
        <div>
          <button>Hello Action</button>
        </div>
      ),
      headerTitle: "Modal",
      footerAction: (
        <div>
          <button>Hello Action</button>
        </div>
      ),
      footerAside: (
        <div>
          <button>Hello Aside</button>
        </div>
      ),
      children: (
        <div>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
        </div>
      )
    }
  },
  {
    component: App,
    name: "Centered Modal",
    state: {
      open: true
    },
    props: {
      headerAction: (
        <div>
          <button>Hello Action</button>
        </div>
      ),
      headerTitle: "Modal",
      headerAside: (
        <div>
          <button>Hello Aside</button>
        </div>
      ),
      footerAction: (
        <div>
          <button>Hello Action</button>
        </div>
      ),
      footerAside: (
        <div>
          <button>Hello Aside</button>
        </div>
      ),
      centered: true,
      children: (
        <div>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
        </div>
      )
    }
  },
  {
    component: App,
    name: "Modal with Inner Scroll",
    state: {
      open: true
    },
    props: {
      headerAction: (
        <div>
          <button>Hello Action</button>
        </div>
      ),
      headerTitle: "Modal",
      headerAside: (
        <div>
          <button>Hello Aside</button>
        </div>
      ),
      footerAction: (
        <div>
          <button>Hello Action</button>
        </div>
      ),
      footerAside: (
        <div>
          <button>Hello Aside</button>
        </div>
      ),
      fullHeight: true,
      children: (
        <div>
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
        </div>
      )
    }
  },
  {
    component: App,
    name: "Modal with outer Scroll",
    state: {
      open: true
    },
    props: {
      headerAction: (
        <div>
          <button>Hello Action</button>
        </div>
      ),
      headerTitle: "Modal",
      headerAside: (
        <div>
          <button>Hello Aside</button>
        </div>
      ),
      footerAction: (
        <div>
          <button>Hello Action</button>
        </div>
      ),
      footerAside: (
        <div>
          <button>Hello Aside</button>
        </div>
      ),
      children: (
        <div>
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
        </div>
      )
    }
  },
  {
    component: App,
    name: "Modal with No Footer",
    state: {
      open: true
    },
    props: {
      headerAction: (
        <div>
          <button>Hello Action</button>
        </div>
      ),
      headerTitle: "Modal",
      headerAside: (
        <div>
          <button>Hello Aside</button>
        </div>
      ),
      noFooter: true,
      children: (
        <div>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
        </div>
      )
    }
  },
  {
    component: App,
    name: "Alert Modal",
    state: {
      open: true
    },
    props: {
      headerTitle: "Modal",
      footerAction: (
        <div>
          <button>Okay?</button>
        </div>
      ),
      footerAside: (
        <div>
          <button>NO!</button>
        </div>
      ),
      alert: true,
      children: (
        <div>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
        </div>
      )
    }
  },
  {
    component: App,
    name: "Info Modal",
    state: {
      open: true
    },
    props: {
      headerTitle: "Modal",
      footerAction: (
        <div>
          <button>Okay?</button>
        </div>
      ),
      info: true,
      children: (
        <div>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
        </div>
      )
    }
  }
];
