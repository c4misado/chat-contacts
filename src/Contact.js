import React from 'react';
import './contact.css';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: this.props.online ? true : false
        }
        // this.handleClick= this.handleClick.bind(this);
    }
    handleClick = () => {
        let status = this.state.online;
        status == false ? status = true : status = false;
        this.setState({online: status}); 
    }
    render() {
        return (
            <div className={this.state.online ? 'online' : 'offline'}>
                <div classname="card">
                    <img src={this.props.avatar} alt="pic"></img>
                    <p>{this.props.name}</p>
                    <p>{this.props.online ? 'online' : 'offline'}</p>
                    <button onClick={this.handleClick}>{this.state.online == true ? 'online' : 'offline'}</button>
                </div>
            </div>
        )
    }
}

// export default Contact;