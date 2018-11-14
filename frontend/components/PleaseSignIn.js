import {Query} from 'react-apollo';
import {CURRENT_USER_QUERY} from './User';
import Signin from './Signin';

const PleaseSignIn = props => (
    <Query query={CURRENT_USER_QUERY}>
        {({data, loading}) => {
            if(loading) return <p>Loading...</p>
            if(!data.me){
                return (
                    <div>
                        <p>Please Sign in</p>
                        <Signin/>
                    </div>
                )
            }
            return props.children;
        }}
    </Query>
)

export default PleaseSignIn;