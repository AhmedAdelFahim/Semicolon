import Spinner from "react-bootstrap/Spinner";
import React from "react";

const LoadingSpinner = () => {
    return (<div className="text-center mt-lg-5" > <Spinner className="spinner-border " animation="border" role="status">
        <span className="sr-only">Loading...</span>
    </Spinner> </div>)
}

export default LoadingSpinner
