import React from "react";

import propTypes from "prop-types";

const Card = ({ movie }) => {
	return (
		<div className="col-md-4 mb-3">
			<div className="card">
				<img
					src={movie.Poster}
					alt={movie.Title}
					className="card-img-top"
					width="100%"
				/>
				<div className="card-body">
					<h4>
						{movie.Title} {movie.Year}
					</h4>
					<p>{movie.Type}</p>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	movie: propTypes.shape({
		Title: propTypes.string,
		Year: propTypes.string,
		Poster: propTypes.string,
		Type: propTypes.string,
	}),
};

export default Card;
