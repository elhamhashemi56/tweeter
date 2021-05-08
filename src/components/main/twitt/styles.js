
import { makeStyles } from '@material-ui/core/styles';
//import Theme from '../theme';


const useStyles = makeStyles({
  img:{
    width:'3.5rem',
    height:'3.5rem',
    borderRadius:'100%',
    marginLeft:'1rem',
    marginTop:'1rem'
    
  },
  inputTwitt:{
    flex:1,
    marginLeft:'1rem',
    border:'none',
    marginTop:'2rem',
    fontSize:'1.7rem',
    "&:focus":{
      outline:'unset'
    },
  tweetBtn:{
     borderRadius: '1rem !important',
     height: '3rem !important',
     width: '5rem !important',
     marginRight: '1.5rem !important',
     marginLeft: '1.3rem !important',
    }
  }
    

  });

export default useStyles