import React from 'react'
import Clisting from './Clisting'
import Details from '../Details/Details'
import Header from '../Homepage/Header'
const ListingDisplay = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <Header />
                    <Clisting />
                    {/* <Details/> */}
                </div>
            </div>
        </>
    )
}

export default ListingDisplay