import React, { Component } from "react";
import Clock from "./components/Clock";
import "./App.css";

export default class extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <table className="links">
          <tbody>
            <tr>
              <td>
                <a href="https://twitter.com">
                  <img src="./links/twitter.svg" />
                </a>
              </td>

              <td>
                <a href="https://gmail.com">
                  <img src="./links/mail.svg" />
                </a>
              </td>

              <td>
                <a href="https://github.com">
                  <img src="./links/github.svg" />
                </a>
              </td>

              <td>
                <a href="https://youtube.com">
                  <img src="./links/youtube.svg" />
                </a>
              </td>

              <td>
                <a href="https://roblox.com">
                  <img src="./links/roblox.svg" />
                </a>
              </td>

              <td>
                <a href="https://reddit.com">
                  <img src="./links/reddit.svg" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
