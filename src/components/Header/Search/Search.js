import React, { Component } from "react";

import "./Search.css";

import SearchIcon from "react-icons/lib/md/search";

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.search = this.search.bind(this)
  }

  handleInput(val) {
    console.log(val);
    return encodeURI(val);
  }
  // handleInput = (val) => {
  //   return encodeURI(val)
  // }

  search(arr, str) {
    // console.log('hi')
    if (arr.includes(str)) {
      return arr.map(x => x.includes(str));
    } else return "nada";
  }

  render() {
    // console.log(this.props)
    return (
      <section className="Search__parent">
        <div className="Search__content">
          <input
            placeholder="Search Your Feed"
            onChange={e => this.handleInput(e.target.value)}
          />

          <SearchIcon
            id="Search__icon"
            onClick={this.search(this.props.posts, "temp")}
          />
        </div>
      </section>
    );
  }
}
