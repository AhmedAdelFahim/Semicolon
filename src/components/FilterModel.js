import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import {sortBy,setPlatform,hideFilterModel} from "../actions/filters";
import {connect} from 'react-redux'

const FilterModel = (props) => {

    const handleChangeSortBy = (e) => {
        props.dispatch(sortBy(e))

    };

    const handleChangePlatform = (e) => {
        props.dispatch(setPlatform(e))
    };

    const closeModel = () => {
        props.dispatch(hideFilterModel())
    }

    return (
        <>
            <Modal show={props.filters.filterModel} onHide={closeModel}>
                <Modal.Header closeButton>
                    <Modal.Title>Filter Contests</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-row justify-content-between">
                        <Dropdown onSelect={handleChangeSortBy}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {props.filters.sortBy || 'Sort By'}
                            </Dropdown.Toggle>

                            <Dropdown.Menu >
                                <Dropdown.Item eventKey="name">Name</Dropdown.Item>
                                <Dropdown.Item eventKey="startTime">Start Date</Dropdown.Item>
                                <Dropdown.Item eventKey="endTime">End Date</Dropdown.Item>
                                <Dropdown.Item eventKey="platform">Platform</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown onSelect={handleChangePlatform}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {props.filters.platform || 'Platform'}
                            </Dropdown.Toggle>

                            <Dropdown.Menu >
                                <Dropdown.Item eventKey="All">All</Dropdown.Item>
                                <Dropdown.Item eventKey="Codeforces">Codeforces</Dropdown.Item>
                                <Dropdown.Item eventKey="Codechef">Codechef</Dropdown.Item>
                                <Dropdown.Item eventKey="hackerrank">Hackerrank</Dropdown.Item>
                                <Dropdown.Item eventKey="hackerearth">Hackerearth</Dropdown.Item>
                                <Dropdown.Item eventKey="topcoder">Topcoder</Dropdown.Item>
                                <Dropdown.Item eventKey="csacademy">Csacademy</Dropdown.Item>
                                <Dropdown.Item eventKey="kaggle">Kaggle</Dropdown.Item>
                                <Dropdown.Item eventKey="leetcode">Leetcode</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModel}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeModel}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(FilterModel);
