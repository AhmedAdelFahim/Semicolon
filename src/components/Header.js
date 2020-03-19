import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import {connect} from 'react-redux'
import {setSearchTextFilter, showFilterModel} from "../actions/filters";

const Header = (props) => {

    const handleChange = (e) => {
        props.dispatch(setSearchTextFilter(e.target.value))
    };

    return (
        <Navbar variant="" className="nav-bar">
            <Navbar.Brand   className="mr-auto brand">Semicolon;</Navbar.Brand >

            <Form inline>
                <FormControl onChange={handleChange} type="text" placeholder="Search By Name" className="mr-sm-2" value={props.text}/>
            </Form>
            <Button className="ml-auto filter-btn" variant="outline-info"  onClick={()=>{
                props.dispatch(showFilterModel());
            }}>Filter</Button>
        </Navbar>
    )
}

const mapStateToProps = (state) => {
    return {
        text: state.filters.text,
        filterModel: state.filters.filterModel
    }
}

export default connect(mapStateToProps)(Header);
