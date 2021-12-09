// create your App component here
import React from 'react';

class App extends React.Component {
    state = {
        peopleInSpace: [],
    }
    render() {
        return (
        <div>
            <h1>Hello Space</h1>
            <h2>{this.state.peopleInSpace.map((person) => person.name)}</h2>
        </div>
        );
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then((response) => response.json())
        .then((data) => this.setState({ peopleInSpace: data.people }))
    };
}

export default App;