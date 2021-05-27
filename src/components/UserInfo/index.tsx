import React from "react";
import { makeStyles } from "@material-ui/core";
import { UserIcon } from "..";

const useStyles = makeStyles({
    userInfoWrapp: {
        display: "flex",
        width: "100%",
    },
    userInfoSection: {
        width: "25%",
        padding: 20,
    },
    userCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    userHeader: {
        margin: "10px 0",
    },
});

interface UserInfoPops {
    myRewards: number;
    give: number;
}

const UserInfo = ({
    myRewards,
    give,
}: UserInfoPops) => {
    const classes = useStyles();

    return (
        <div className={classes.userInfoWrapp}>
            <div className={`${classes.userInfoSection} ${classes.userCard}`}>
                <UserIcon size="large" />
                <h3 className={classes.userHeader}>Jane Doe</h3>
            </div>
            <div className={classes.userInfoSection}>
                <h3 className={classes.userHeader}>My Rewards</h3>
                <h1 className={classes.userHeader}>${myRewards}</h1>
            </div>
            <div className={classes.userInfoSection}>
                <h3 className={classes.userHeader}>Give</h3>
                <h1 className={classes.userHeader}>${give}</h1>
            </div>
        </div>
    );
};

export default UserInfo;