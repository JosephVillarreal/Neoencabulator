import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    titleBar: {
        height: '100px'
    },
    contentBody: {
        display: 'flex',
        height: '100%'
    },
    navigationBar: {
        height: '100%',
        width: '100px',
        padding: '5px'
    },
    workspaceContent: {
        width: '100%',
        height: '100%',
        padding: '5px'
    }
});

export default useStyles;