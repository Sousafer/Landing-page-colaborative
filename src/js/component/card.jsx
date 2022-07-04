import React from "react";

const CardB = () => {
	return (
        <div className="container row">
            <div className="card col-sm-4">
                <img src="https://picsum.photos/500/325" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go 1</a>
            </div>
            </div>
            <div className="card col-sm-4">
                <img src="https://picsum.photos/500/325" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go 2</a>
            </div>
            </div>
            <div className="card col-sm-4">
                <img src="https://picsum.photos/500/325" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go 3</a>
            </div>
            </div>
        </div>
);
};

export default CardB;