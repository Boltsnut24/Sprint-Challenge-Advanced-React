import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard.js';

class PlayerList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({players: res.data})
      })
      .catch(err => console.log(err));
  }

  render(){
    return(
      <div>Players
        <PlayerCard players={this.state.players} />
      </div>
    )
  }
}

export default PlayerList;