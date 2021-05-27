import React, { useEffect } from "react";
import { makeStyles, Tab, Tabs } from "@material-ui/core";
import { RewardItem } from "..";
import { RewardInfo } from "../../models/RewardInfo";
import { FEEDS } from "../../contants";
import { getFilteredFeedsByDate, getFilteredFeedsByUser } from "../../helper";
import AddSharpIcon from '@material-ui/icons/AddSharp';

const useStyles = makeStyles({
    feedsAndRewardsWrapp: {
        position: "relative",
    },
    feedWrapp: {
        width: "100%",
        minHeight: "calc(100vh - 255px)",
        backgroundColor: "#f7f9fa",
        borderTop: "2px solid #a1acb9",
        padding: "10px 0",
        marginTop: 3,
    },
    plusButton: {
        position: "absolute",
        borderRadius: 80,
        width: 80,
        height: 80,
        border: "2px solid #c8d1da",
        backgroundColor: "#ffffff",
        right: 55,
        top: 14,
    },
    plusIcon: {
        color: "#4e5b6a",
        width: "100%",
        height: "55%",
    },
});

const FeedAndMyRewards = () => {
    const classes = useStyles();

    const [tabNum, setTabNum] = React.useState(0);

    const handleChange = (_event: any, newValue: number) => {
        setTabNum(newValue);
    };

    const filteredFeeds = tabNum === 0 ? getFilteredFeedsByDate(FEEDS) : getFilteredFeedsByDate(getFilteredFeedsByUser(FEEDS, 'Jane Doe'));

    return (
        <div className={classes.feedsAndRewardsWrapp}>
            <Tabs
                value={tabNum}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab label="Feed" />
                <Tab label="My Rewards" />
            </Tabs>
            <button className={classes.plusButton}><AddSharpIcon className={classes.plusIcon}/></button>
            <div className={classes.feedWrapp}>
                {filteredFeeds.map((reward: RewardInfo) => <RewardItem key={reward.id} reward={reward} />)}
            </div>
        </div>
    );
};

export default FeedAndMyRewards;