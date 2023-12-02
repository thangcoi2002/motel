import PropTypes from 'prop-types'
import './GlobalStyles.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired
}

export default GlobalStyles;
