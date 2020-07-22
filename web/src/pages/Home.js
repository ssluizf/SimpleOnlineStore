import React from 'react'
import Card from '../components/Card'

function Home() {
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s12 m12 l7" id="card-grid">
          <Card />
        </div>
        <div className="col l4 push-l1 hide-on-med-and-down">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">Shopping for</span>
                <p>Just a SimpleOnlineStore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Home