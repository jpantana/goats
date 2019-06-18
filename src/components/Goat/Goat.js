import React from 'react';

import './Goat.scss';

class Goat extends React.Component {
  render() {
    const { goat } = this.props;
    return (
    <div className="Goat col-3 justify-content-center">
      <div className="card">
        <img className="card-img-top" src={goat.imageUrl} alt="pic of goat and it's name"/>
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">{goat.favPose}</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Goat;
