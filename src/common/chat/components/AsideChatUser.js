import React from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ChatBoxes } from "../lib/ChatBoxes";
import * as ChatActions from "../ChatActions";
import { HtmlRender } from "../../../common/utils/components";

class AsideChatUser extends React.Component {
  state = {
    chatId: "chatbox-user-" + Date.now()
  };

  openChatBox = e => {
    e.preventDefault();
    let user = this.props.user;
    let [firstname, lastname] = user.username.split(/ /);
    let id = this.state.chatId;
    if (!user.status !== "ofline") {
      ChatBoxes.addBox(id, {
        title: user.username,
        first_name: firstname,
        last_name: lastname,
        status: user.status || "online",
        alertmsg:
          user.status === "busy"
            ? user.username + " is in a meeting. Please do not disturb!"
            : "",
        alertshow: user.status === "busy"
        //you can add your own options too
      });
    }
  };

  render() {
    const user = this.props.user;
    return (
      <dt>
        <OverlayTrigger
          placement="right"
          overlay={
            <Popover id="popover-1-popover">
              <div className="usr-card">
                <img src={user.picture} alt={user.username} />
                <div className="usr-card-content">
                  <h3>{user.username}</h3>

                  <HtmlRender html={user.role} />
                </div>
              </div>
            </Popover>
          }
        >
          <a
            href="/#"
            className="usr"
            onClick={this.openChatBox}
            data-chat-id={this.state.chatId}
            data-chat-status={user.status}
          >
            <i />
            {user.username}
          </a>
        </OverlayTrigger>
      </dt>
    );
  }
}

export default connect(
  state => {
    const { chat } = { ...state };
    return {
      chat
    };
  },
  dispatch => {
    return bindActionCreators(ChatActions, dispatch);
  }
)(AsideChatUser);
