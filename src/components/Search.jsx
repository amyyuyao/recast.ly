class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitHandler(this.state.userInput);
  }

  handleInputChange(event) {
    this.setState({ userInput: event.target.value });
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Do something..."
              value={this.state.userInput}
              onChange={this.handleInputChange}
            />
            <button type="submit">🔎</button>
          </form>

      <div className="search-bar form-inline">
        <input className="form-control" type="text" />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>

    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
