import { Grid, Typography } from '@material-ui/core'
import useStyles from './styles'
import HomeIcon from '@material-ui/icons/Home';

const Header = () =>{
    const classes= useStyles()
    return (
        
           <Grid container className={classes.header}>
                <HomeIcon />
                <Typography className={classes.homeTitr}>Home</Typography>

           </Grid>
       
    )
}

export default Header