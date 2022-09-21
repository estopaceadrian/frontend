import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import DragonAvatar from './DragonAvatar';
import { BACKEND } from '../config';

class AccountDragonRow extends Component {
  state = {
    nickname: this.props.dragon.nickname,
    isPublic: this.props.dragons.isPublic,
    saleValue: this.props.dragons.saleValue,
    edit: false,
  };

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  save = () => {
    fetch(`${BACKEND.ADDRESS}/dragon/update`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dragonId: this.props.dragon.dragonId,
        nickname: this.state.nickname,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.type === 'error') {
          alert(json.message);
        } else {
          this.toggleEdit();
        }
      })
      .catch((error) => alert(error.message));
  };

  get SaveButton() {
    return <Button>Save</Button>;
  }
  get EditButton() {
    return <Button onClick={this.toggleEdit}>Edit</Button>;
  }

  updateSaleValue = (event) => {
    this.setState({ saleValue: event.target.value });
  };
  updateIsPublic = (event) => {
    this.setState({ isPublic: event.target.value });
  };

  updateNickname = (event) => {
    this.setState({ nickname: event.target.value });
  };

  toggleEdit = (event) => {
    this.setState({ edit: !this.state.edit });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.nickname}
          onChange={this.updateNickname}
          disabled={!this.state.edit}
        />
        <br />
        <DragonAvatar dragon={this.props.dragon} />

        <div>
          <span>
            Sale Value:{' '}
            <input
              type="number"
              disabled={!this.state.edit}
              value={this.state.saleValue}
              onChange={this.updateSaleValue}
            />
          </span>
          <span>
            Public:{' '}
            <input
              type="checkbox"
              disabled={!this.state.edit}
              value={this.state.isPublic}
              onChange={this.updateIsPublic}
            />
          </span>
          {this.state.edit ? this.SaveButton : this.EditButton}
        </div>
      </div>
    );
  }
}

export default AccountDragonRow;
