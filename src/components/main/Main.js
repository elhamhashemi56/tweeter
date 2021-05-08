
import useStyles from './styles'
import Header from './header/Header'
import Twitt from './twitt/Twitt'
import { Divider } from '@material-ui/core'

const Main = () =>{
    const classes= useStyles()
    return (
        <div className={classes.root}>
            <Header />
            <Divider orientation={'horizontal'}/>
            <Twitt />
        </div>
    )
}

export default Main