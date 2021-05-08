
import { makeStyles } from '@material-ui/core/styles';
import Theme from '../theme';


const useStyles = makeStyles({
    root: {
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      // border: 0,
      // borderRadius: 3,
      // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      display: 'flex',
      height :'100vh',
      width:'100%'

    },
   
    divider:{
      height:'100%',
      width: 1,
      backgroundColor:Theme.palette.primary.main

    }

  });

export default useStyles