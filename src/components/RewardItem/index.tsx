import React from "react";
import { makeStyles } from "@material-ui/core";
import { UserIcon } from "..";
import { RewardInfo } from "../../models/RewardInfo";
import moment from "moment";

const useStyles = makeStyles({
    rewardWrapp: {
        display: "flex",
        width: "100%",
        boxSizing: "border-box",
        paddingRight: 20,
    },
    rewardIconSection: {
        padding: 13,
    },
});

interface RewardItemPops {
    reward: RewardInfo;
}

const RewardItem = ({
    reward,
}: RewardItemPops) => {
    const classes = useStyles();

    const getTimeAgo = () => {
        const diff = Number(new Date()) - Number(new Date(reward.date));
        return diff > 24 * 60 * 60 * 1000 ? moment(reward.date).format("MMM DD, YYYY") : moment(reward.date).fromNow();
    };

    return (
        <div className={classes.rewardWrapp}>
            <div className={classes.rewardIconSection}>
                <UserIcon size="small" />
            </div>
            <div>
                <h4 style={{ marginBottom: 10 }}>{reward.userTo} rewarded by {reward.userBy}</h4>
                <h5 style={{ margin: 0 }}>{getTimeAgo()}</h5>
                <h3 style={{ marginTop: 25 }}>{reward.comment}</h3>
            </div>
        </div>
    );
};

export default RewardItem;