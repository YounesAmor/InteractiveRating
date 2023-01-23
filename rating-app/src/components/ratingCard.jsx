import React, { Component } from "react";
import Button from "./button";
// import ThankYouPage from "./thankYou";
import { useNavigate } from "react-router-dom";

function myParams(Component) {
  return (props) => <Component navHook={useNavigate()} />;
}

class MainInteractiveCard extends Component {
  state = {
    rating: "",
  };
  handleClickChange = (e) => {
    this.setState({ rating: e.target.value });
  };
  submitForm = () => {
    if (this.state.rating === "") {
      alert("Please choose a rating");
    } else {
      this.props.navHook("/thankyou", {
        state: {
          rating: this.state.rating,
        },
      });
    }
  };
  render() {
    return (
      <div className="bg-darkBlue lg:w-[400px] lg:h-[400px] sm:w-[350px] sm:h-[450px]">
        <div className="m-[30px] text-left">
          <div
            id="svg-wrapper"
            className="border rounded-full p-2.5 bg-mediumGrey inline-block border-transparent mb-[30px]"
          >
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                fill="#FC7614"
              />
            </svg>
          </div>
          <p className="text-3xl text-white font-Overpass mb-[20px]">
            How did we do?
          </p>
          <p className="text-md text-lightGrey font-Overpass mb-[30px]">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="mb-[30px]">
            <ul className="flex flex-row justify-around">
              <Button value="1" onClick={this.handleClickChange} />
              <Button value="2" onClick={this.handleClickChange} />
              <Button value="3" onClick={this.handleClickChange} />
              <Button value="4" onClick={this.handleClickChange} />
              <Button value="5" onClick={this.handleClickChange} />
            </ul>
          </div>
          <div>
            <button
              className="bg-orange border rounded-full border-transparent w-full p-2 text-white font-Overpass text-md hover:bg-white hover:text-orange"
              onClick={this.submitForm}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default myParams(MainInteractiveCard);
