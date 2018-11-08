import Items from '../components/Items'
const home = props => (
    <div>
        <Items page={parseFloat(props.query.page) || 1}/>
    </div>
)

export default home;