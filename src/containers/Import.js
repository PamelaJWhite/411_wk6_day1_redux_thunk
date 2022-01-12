import { connect } from 'react-redux'
import Import from '../components/Import'
// import { fetchMakes } from '../redux/actions' //we'll need this to remove a car

const mapStateToProps = (state) => {
    return{
        makes: state.makes
    }
}

export default connect(mapStateToProps)(Import)
