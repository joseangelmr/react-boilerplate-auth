import { connect } from 'react-redux'
import { Home } from './../../components'

const mapStateToProps = (state, ownProps) => {
    return {
        foo: state.app.foo
    }
}

export default connect(mapStateToProps)(Home)