import React from 'react'
import NavBar from '../../components/navBar/navbar'
import Form from './components/form'
const Product: React.FC = () => {
    return (
        <React.Fragment>
            <NavBar>
                <Form />
            </NavBar>
        </React.Fragment>
    )
}
export default Product