import React from 'react'
import { Link } from 'gatsby'

import instagram from '../img/social/instagram.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
              <div className="column is-4">
              
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                
                </div>
      
      </footer>
    )
  }
}

export default Footer
