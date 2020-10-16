import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
    container:{
        padding: '0 5%',
        width:'100%',
        margin:'0'
    },
    card:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:'50vh',
        padding:'10%',
        borderRadius:15,
        color:'white'
    },
    infoCard:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center'
    }
});
export default styles;