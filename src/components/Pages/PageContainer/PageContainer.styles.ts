import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    pageContainer: {
      height: `calc(100% - ${theme.spacing(2)}px)`,
      overflow: 'auto',
      paddingTop: theme.spacing(2),
      opacity: '0.8',
    },
    pageContainerIcon: {
      marginBottom: theme.spacing(2),
    },
    pageContainerTitle: {
      marginLeft: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
  })
);
