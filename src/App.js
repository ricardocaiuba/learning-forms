import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstField: "Oi",
      secondField: "Oi again",
      checked: false,
      value: "2",
      valueTextArea: "Default text gain"
    };
  }

  handleChange = field => e => {
    this.setState({
      ...this.state,
      [field]: e.target.value
    });
  };

  handleChangeRef = e => {
    this.setState({
      ...this.state,
      checked: e.target.checked
    });
  };

  handleChangeSelect = e => {
    console.log(e.target.value);
    this.setState({
      ...this.state,
      value: e.target.value
    });
  };

  handleChangeSelect = event => {
    console.log(event.target.value);
    this.setState({
      ...this.state,
      valueTextArea: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Event", e);
  };

  handleChangeForm = e => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChangeForm}>
          <input
            type="text"
            name="firstField"
            value={this.state.firstField}
            onChange={this.handleChange("firstField")}
          />
          <br />
          <input
            type="text"
            name="secondField"
            value={this.state.secondField}
            onChange={this.handleChange("secondField")}
          />
          <hr />
          <label>
            <input type="checkbox" value="my-checkbox" defaultChecked />
            CheckBox
          </label>
          <br />
          <label>
            <input type="checkbox" value="my-checkbox2" defaultChecked />
            CheckBox - 2
          </label>
          <hr />
          <input type="radio" id="rd1" name="rd" value="1" />
          <label htmlFor="rd1">Radio 1</label>
          <input type="radio" id="rd2" name="rd" value="2" defaultChecked />
          <label htmlFor="rd2">Radio 2</label>
          <hr />
          <select value={this.state.value} onChange={this.handleChangeSelect}>
            <option value="1">Opção 1</option>
            <option value="2">Opção 2</option>
            <option value="3">Opção 3</option>
          </select>
          <hr />
          <textarea defaultValue="Textarea default" />
          <textarea
            id="noter-text-area"
            name="textarea"
            value={this.state.valueTextArea}
            onChange={this.handleChangeSelect}
          />
          <hr />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default App;
