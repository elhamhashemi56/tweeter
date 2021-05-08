import { Grid, Typography,Divider, ButtonBase } from '@material-ui/core'
import useStyles from './styles'

const follows=[
    {
      img:'images/zdf.jpg',
      name:'ZDF',
      id:'@ZDF'
    
    },
    {
        img:'images/spiegel.jpg',
        name:'DER SPIEGEL',
        id:'@derspiegel'
      
      },
      {
        img:'images/angela3.jpg',
        name:'Angela Merkel',
        id:'@angelamerkel'
      
      },
      {
        img:'images/Tagesschau.png',
        name:'Tagesschau',
        id:'@Tagesschau'
      
      },
]

const Follow = ({img,name,id}) =>{
    const classes= useStyles()
    return(
        
        <Grid container className={classes.loop}>
            <ButtonBase>
             <img src={img} className={classes.imgFollow}></img>
                <Grid item container direction={"column"} className={classes.prof}>
                   <Typography className={classes.nameFollow}>{name}</Typography>
                   <Typography className={classes.idFollow}>{id}</Typography>
                </Grid>
            </ButtonBase>
        </Grid>
        
    )}


const RightSide=()=>{

    const classes= useStyles()
    return(
        <div className={classes.root}>
           <Grid container >
               <img src={'images/ich.jpg'} className={classes.img}></img>
               <Grid item container direction={"column"} className={classes.prof}>
                   <Typography className={classes.profName}>Elham Hashemi</Typography>
                   <Typography className={classes.profId}>@Elham Hashemi12</Typography>
               </Grid>
           </Grid>

            <Grid item container direction={'column'} className={classes.followBox}>
                <Typography className={classes.follow}>Who to follow</Typography>
                <Divider orientation={'horizontal'} />
                {follows.map((item,index) =>{
                   return (
                    <div>
                     <Follow img={item.img} name={item.name} id={item.id} />
                     {/* {if(index !== follows.length-1){
                         <Divider orientation={'horizontal'} />
                     }} */}

                     {index !== follows.length-1 && <Divider orientation={'horizontal'}/>}
                    </div>
                   )
                })}
            </Grid>
             
        </div>
    )
}

export default RightSide