import {Quqery, Query} from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';

const ALL_USER_QUERY = gql`
    query ALL_USER_QUERY{
        users {
            id
            name
            email
            permissions
        }
    }
`;
const Permissions = (props) => (
    <Query query={ALL_USER_QUERY}>
        {({data, loading, error}) => {
            return(
                <div>
                    <Error error={error}/>
                </div>
            )
        }}
    </Query>
)

export default Permissions;