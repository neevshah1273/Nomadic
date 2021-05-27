import {makeStyles} from '@material-ui/core/styles';


export default makeStyles((theme)=>({
    root: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '1 0 auto',
      },
      cover: {
        //width: 350,
      },
}));