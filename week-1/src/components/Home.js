import React, { Component } from "react";
import About from "./About";
import Title from "./Title";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      Message: "Welcome to Store",
    };
  }

  changeMessage() {
    this.setState({
      Message: "Discription",
    });
  }
  changePageTitle() {
    this.setState({
      page: (
        <div>
          <Title name="Mindset" author="Dr Carol S.Dweck" />
          <Title name="The Lord of the Rings" author="J.R.R. Tolkien" />
          <Title name="Quiet" author="susan cain" />
        </div>
      ),
    });
  }
  changePageAbout() {
    this.setState({
      page: <About />,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
        <button onClick={() => this.changeMessage()}>Discription</button>

        <h1>{this.state.page}</h1>
        <button onClick={() => this.changePageTitle()}>
          change Page to title
        </button>
        <h1>{this.state.About}</h1>
        <button onClick={() => this.changePageAbout()}>
          change Page to About
        </button>
      </div>
    );
  }
}

export default Home;
