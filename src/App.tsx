import React, { Component } from "react";
import Clock from "./components/Clock";
import Link from "./components/Link";
import Notifications from "./components/Notifications";
import { notificationHolders } from "./notifications";
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
                <Link
                  link="https://twitter.com"
                  image="./links/twitter.svg"
                  notificationHolder={notificationHolders.Twitter}
                />
              </td>

              <td>
                <Link
                  link="https://gmail.com"
                  image="./links/mail.svg"
                />
              </td>

              <td>
                <Link
                  link="https://github.com"
                  image="./links/github.svg"
                />
              </td>

              <td>
                <Link
                  link="https://youtube.com"
                  image="./links/youtube.svg"
                />
              </td>

              <td>
                <Link
                  link="https://roblox.com"
                  image="./links/roblox.svg"
                />
              </td>

              <td>
                <Link
                  link="https://reddit.com"
                  image="./links/reddit.svg"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Notifications />
      </div>
    );
  }
}
