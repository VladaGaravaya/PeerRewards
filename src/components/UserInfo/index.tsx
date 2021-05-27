import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { UserIcon } from "..";

const useStyles = makeStyles({
    userInfoSection: {
        padding: 16,
    },
    userCard: {
        display: "flex",
        padding: 20,
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
        <Grid container>
            <Grid item xs={12} sm={3} className={`${classes.userInfoSection} ${classes.userCard}`}>
                <UserIcon size="large" />
                <h3 className={classes.userHeader}>Jane Doe</h3>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.userInfoSection}>
                <h3 className={classes.userHeader}>My Rewards</h3>
                <h1 className={classes.userHeader}>${myRewards}</h1>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.userInfoSection}>
                <h3 className={classes.userHeader}>Give</h3>
                <h1 className={classes.userHeader}>${give}</h1>
            </Grid>
        </Grid>
    );
};

export default UserInfo;