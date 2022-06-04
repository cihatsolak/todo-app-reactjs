import React from 'react'
import PropTypes from 'prop-types'
import './TodoFooter.css'

const TodoFooter = props => {
  return (
    <div className='content-footer'>
        <div className='left-item'>3 Kaldı</div>
        <div className='menu-item'>
            Tümü
        </div>
        <div className='menu-item'>
            Tamamlandı
        </div>
    </div>
  )
}

TodoFooter.propTypes = {}

export default TodoFooter