import React from 'react';


export default class FilterPlayers extends React.Component {
  constructor(){
    super();

  }

  render(){
      return(
        <div>
            <select>
                <option value="all">All</option>
                <option value="C">Center</option>
                <option value="G">Guard</option>
                <option value="F">Forward</option>
            </select>
        </div>

      )

  }

}