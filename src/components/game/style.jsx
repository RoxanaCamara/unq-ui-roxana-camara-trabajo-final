import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    espaciado: {
        margin: theme.spacing(3, 3, 2, 4),
    },
}));
