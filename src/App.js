import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 0,
      b: 0,
      sum: 0,
    };
  }

  /**
   * Thực hiện tính tổng của 2 số a và b.
   */
  handleOnClickSumButton() {
    this.setState({
      sum: this.state.a + this.state.b
    });
  }

  /**
   * Gán giá trị mới cho biến tương ứng trong state khi thực hiện thay đổi giá trị trên textbox.
   */
  onInputChange(e, isVarA = true) {
    const eVal = e.target.value;
    let val = 0;

    if (eVal.length > 0) {
      val = parseInt(eVal);
    }

    if (isVarA) {
      this.setState({
        a: val
      });
    } else {
      this.setState({
        b: val
      });
    }
  }

  render() {
    return (
      <div className="container">
        <label htmlFor="txt-a" className="form-label mt-3">Số a:</label>
        <div className="input-group">
          <input type="number" className="form-control" id="txt-a" value={this.state.a} onChange={(e)=>{ this.onInputChange(e) }} />
        </div>
        <label htmlFor="txt-b" className="form-label mt-3">Số b:</label>
        <div className="input-group">
          <input type="number" className="form-control" id="txt-b" value={this.state.b} onChange={(e)=>{ this.onInputChange(e, false) }} />
        </div>
        <label className="form-label mt-3">Tổng:</label>
        <div className="input-group">
          <div className="alert alert-success w-100">{this.state.sum}</div>
        </div>
        <button type="button" className="btn btn-primary mt-3" onClick={() => { this.handleOnClickSumButton() }}>Tính tổng</button>
      </div>
    );
  }
}

export default App;
