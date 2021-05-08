
import useStyles from './styles'
import LeftSide from '../leftSide/LeftSide'
import { Divider } from '@material-ui/core'
import RightSide from '../rightSide/RightSide'
import Main from '../main/Main'

const Layots = () =>{

    const classes= useStyles()

    return(
        <div className={classes.root}>
            <LeftSide />
            <Divider orientation={'vertical'} className={classes.divider} />
            <Main/>
            <Divider orientation={'vertical'} className={classes.divider} />
            <RightSide />
        </div>
    )
    
}

export default Layots