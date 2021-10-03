import PropTypes from 'prop-types';
import shortid from 'shortid';
import Star from './Star';

function Stars({ count }) {
	if(!typeof count === 'number' || count > 5 || count < 1) {
		return
	}

	const stars = [];
	let i = 0;

	while (i < count) {
		stars.push(<Star key={shortid.generate()} />)
		i++
	}

	return (
		<ul className="card-body-stars u-clearfix">
			{stars}
		</ul>
	)
}

Stars.defaultProps = {
	count: 0
}

Stars.propTypes = {
	items: PropTypes.number
}

export default Stars;