import React from 'react'
import Menu from './menu'

const divStyle = {
    color: 'blue',
    background: 'red',
  };
  

export default props => (
    <aside className='main-sidebar'>
        <section className='sidebar' >
            <Menu />
        </section>
    </aside>
)
