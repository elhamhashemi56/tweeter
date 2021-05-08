
import { makeStyles } from '@material-ui/core/styles';
import Theme from '../theme';


const useStyles = makeStyles({
    root: {
      width:'18%',
    },
    logo:{
      height:'70px',
      width:'70px'
    },
    logoType:{
      fontSize:'3rem',
      paddingLeft:'15px',
      color:Theme.palette.primary.main
    },
    hashtag:{
      fontSize:'2rem',
      marginTop:'1rem',
      marginBottom:'1rem',
      marginLeft:'24px',
      fontWeight:'bold',
      color:'black'
      
    },
    hashtagLogo:{
      width:'40px',
      height:'40px',
      marginLeft:'10px',
      marginRight:'10px'

    },
    hashtagList:{
      fontSize:'1.5rem',
      color:'#545252'
    },
    buttonbase:{
      marginBottom:'0.15rem',
      width:'100% !important'
    }

  });

export default useStyles