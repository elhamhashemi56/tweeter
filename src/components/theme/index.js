import { createMuiTheme } from '@material-ui/core';

const colorPrimary='#55adee'

const Theme = createMuiTheme({
 palette:{
     primary:{
         main:colorPrimary
     }
 },
    overrides:{
        MuiTypography:{
            root:{
                fontFamily:"sans-serif",
                fontSize:"15px"
            }
        }
    }
});

export default Theme