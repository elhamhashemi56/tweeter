
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width:'25%'

    },
    img:{
      width:'5rem',
      height:'5rem',
      borderRadius:'100%',
      marginLeft:'1rem',
      marginTop:'1rem'
      
    },
    profName:{
      color:'black',
      fontSize:'1.4rem'

    },
    prof:{
      marginTop:'2rem',
      marginLeft:'1.6rem',
      width:'max-content'
    },
    profId:{
      color:'gray',
      fontSize:'0.8rem'

    },
    followBox:{
      backgroundColor:'#ddffef',
      borderRadius:'1rem',
      marginTop:'3rem',
      // marginLeft:'-2rem',
      //   marginRight:'-5rem',
      
      
    },
    follow:{
      padding:'0.5rem 0.5rem',
      paddingLeft:'0.5rem',
      color:'black',
      fontWeight:'bold',
      fontSize:'1.6rem'
    },
    imgFollow:{
      width:'3rem',
      height:'3rem',
      borderRadius:'100%',
      marginLeft:'1rem',
      marginTop:'1rem'
    },
    nameFollow:{
      color:'black',
      fontSize:'1rem',
      fontWeight:'bold'

    },
    idFollow:{
      color:'gray',
      fontSize:'1rem'

    },
    loop:{
      marginBottom:'0.7rem'
    },
   


  });

export default useStyles