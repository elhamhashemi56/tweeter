import { Grid } from '@material-ui/core'
import useStyles from './styles'
import Button from '@material-ui/core/Button'

const Twitt = () =>{
    const classes= useStyles()
    return (
        <div>
        <Grid container>
            <img src={'images/ich.jpg'} className={classes.img}></img>
            <textarea placeholder={'Whats happening ?'} className={classes.inputTwitt}></textarea>
        </Grid>
        <Grid container direction={'row-reverse'}>
            <Button variant={'contained'} color={'primary'} className={classes.tweetBtn}>Tweet</Button>
            <button className={classes.tweetBtn}>Tweet</button>
            <p>list</p>
        </Grid>
        </div>
    )
}

export default Twitt