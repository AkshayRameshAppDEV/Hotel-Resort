import React from 'react';
import { Spinner, ListGroup } from 'react-bootstrap';
import '../styles/RoomList.css';

class RoomList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            rooms: []
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <div id="roomlistSpinner">
                    <Spinner animation="grow" />
                </div>
            )
        } else {

            return (
                <div>
                    <h1>RoomList Component</h1>
                    <this.listify rooms={this.state.rooms} />
                </div>
            )
        }
    }

    listify(props) {

        const rooms = props.rooms;
        const listItems = rooms.map((room) =>
            <li>{room}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

    componentDidMount() {
        // do api call

        let rooms = [];
        rooms.push('moscow', 'chennai', 'houston', 'dallas');

        this.setState({ rooms });

        this.setState({ loading: false });
    }
}

export default RoomList;