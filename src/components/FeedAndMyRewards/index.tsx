import React from "react";
import { makeStyles, Tab, Tabs } from "@material-ui/core";
import { RewardItem } from "..";

const useStyles = makeStyles({
    feedWrapp: {
        width: "100%",
        minHeight: "calc(100vh - 255px)",
        backgroundColor: "#f7f9fa",
        borderTop: "2px solid #a1acb9",
        padding: "10px 0",
        marginTop: 3,
    },
});

const FeedAndMyRewards = () => {
    const classes = useStyles();

    const [tabNum, setTabNum] = React.useState(0);

    const handleChange = (_event: any, newValue: number) => {
        setTabNum(newValue);
    };

    return (
        <div>
            <Tabs
                value={tabNum}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab label="Feed" />
                <Tab label="My Rewards" />
            </Tabs>
            <div className={classes.feedWrapp}>
                <RewardItem reward={{
                    id: "1",
                    userTo: "David Greene",
                    userBy: "John Chen",
                    date: (new Date()).toISOString(),
                    comment: "Big thanks for your help in helping on the outage today!!",
                }}/>
                <RewardItem reward={{
                    id: "1",
                    userTo: "David Greene",
                    userBy: "John Chen",
                    date: (new Date()).toISOString(),
                    comment: "Big thanks for your help in helping on the outage today!!",
                }}/>
                <RewardItem reward={{
                    id: "1",
                    userTo: "David Greene",
                    userBy: "John Chen",
                    date: (new Date()).toISOString(),
                    comment: "Big thanks for your help in helping on the outage today!!",
                }}/>
                <RewardItem reward={{
                    id: "1",
                    userTo: "David Greene",
                    userBy: "John Chen",
                    date: (new Date()).toISOString(),
                    comment: "Big thanks for your help in helping on the outage today!!",
                }}/>
                <RewardItem reward={{
                    id: "1",
                    userTo: "David Greene",
                    userBy: "John Chen",
                    date: (new Date()).toISOString(),
                    comment: "Big thanks for your help in helping on the outage today!!",
                }}/>
                <RewardItem reward={{
                    id: "1",
                    userTo: "David Greene",
                    userBy: "John Chen",
                    date: (new Date()).toISOString(),
                    comment: "Big thanks for your help in helping on the outage today!!",
                }}/>
                <RewardItem reward={{
                    id: "1",
                    userTo: "David Greene",
                    userBy: "John Chen",
                    date: (new Date()).toISOString(),
                    comment: "Big thanks for your help in helping on the outage today!!",
                }}/>
            </div>
        </div>
    );
};

export default FeedAndMyRewards;