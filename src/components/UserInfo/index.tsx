import { makeStyles } from "@material-ui/core";
import React from "react";
import { UserIcon } from "..";

const useStyles = makeStyles({
    userIconWrapp: {
        borderRadius: 30,
        width: 30,
        height: 30,
    },
    icon: {

    },
});

const UserInfo = () => {
    const classes = useStyles();
    return (
        <div>
            <UserIcon size="large" />
        </div>
    );
};

export default UserInfo;