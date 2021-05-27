import { makeStyles } from '@material-ui/core';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';

const useStyles = makeStyles({
    userIconSmall: {
        borderRadius: 30,
        width: 30,
        height: 30,
        backgroundColor: "#e0e6ec",
    },
    userIconLarge: {
        borderRadius: 100,
        width: 100,
        height: 100,
        backgroundColor: "#e0e6ec",
    },
    icon: {
        color: "#a1acb9",
        width: "100%",
        height: "55%",
        marginTop: "20%",
    },
});

interface UserIconProps {
    size: 'small' | 'large';
}

const UserIcon = ({ size }: UserIconProps) => {
    const classes = useStyles();

    return (
        <div className={size === 'small' ? classes.userIconSmall : classes.userIconLarge}>
            <PersonSharpIcon className={classes.icon} />
        </div>
    );
};

export default UserIcon;