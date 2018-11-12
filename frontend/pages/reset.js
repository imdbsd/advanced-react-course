import Reset from '../components/Reset';

const ResetPage = props => {
    console.log({token: props.query.resetToken})
    return(
        <div>
           <Reset resetToken={props.query.resetToken}/>
        </div>
    )
}

export default ResetPage;