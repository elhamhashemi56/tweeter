import { ButtonBase, Grid, Typography } from '@material-ui/core'
import useStyles from './styles'

const hashtagArr=[
    'Hashtag1',
    'Hashtag2',
    'Hashtag3',
    'Hashtag4',
    'Hashtag5',
    'Hashtag7',
    'Hashtag8',
    'Hashtag9',
    'Hashtag10',

]

const LeftSide = () =>{
    const classes= useStyles()

    return(
        <div className={classes.root}>
             
            <Grid container direction={'row'} alignItems={'center'} >
                <Grid item>
                   <img src={'images/Twitter-Logo.png'} className={classes.logo} />
                </Grid>
                <Grid item>
                   <Typography className={classes.logoType}>Twitter</Typography>
                </Grid>
            </Grid> 
            <Typography className={classes.hashtag}>Hot Hashtags</Typography>

            <Grid container direction={'column'} >
                {hashtagArr.map(item=>
                {
                  return ( <ButtonBase className={classes.buttonbase} >
                    <Grid container alignItems={'center'}>
                        <img src={'images/hashtag3.jpg'} className={classes.hashtagLogo} ></img>
                        <Typography className={classes.hashtagList} >{item}</Typography>
                    </Grid>
                </ButtonBase>)
                })
                }
            </Grid>

        </div>
    )
    
}

export default LeftSide