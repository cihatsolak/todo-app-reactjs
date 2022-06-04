import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'

const Header = ({ children }) => {
    return (
        <div className='bg-image'>
            <div className='bg-content'>
                <div className='header-title'>TODO</div>
                {children}
            </div>
        </div>
    )
}

Header.propTypes = {
    children: PropTypes.node.isRequired
}

export default Header