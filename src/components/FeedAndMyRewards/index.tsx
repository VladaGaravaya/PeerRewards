import React from "react";
import { makeStyles, Tab, Tabs } from "@material-ui/core";
import { NewRewardModal, RewardItem } from "..";
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
        boxSizing: "border-box",
        minHeight: "calc(100vh - 295px)",
        backgroundColor: "#f7f9fa",
        borderTop: "2px solid #a1acb9",
        padding: "30px 0",
        marginTop: 3,
    },
    plusButton: {
        position: "absolute",
        borderRadius: 80,
        width: 80,
        height: 80,
        border: "2px solid #c8d1da",
        backgroundColor: "#ffffff",
        right: "4%",
        top: 14,

        '&:hover': {
            cursor: "pointer",
        }
    },
    plusIcon: {
        color: "#4e5b6a",
        width: "100%",
        height: "55%",
    },
});

interface FeedAndMyRewardsProps {
    myRewards: number;
    changeUserReward: (cost: number) => void;
}

const FeedAndMyRewards = ({ myRewards, changeUserReward }: FeedAndMyRewardsProps) => {
    const classes = useStyles();

    const [tabNum, setTabNum] = React.useState(0);
    const [openModal, setOpenModal] = React.useState(false);
    const [currentFeeds, setCurrentFeeds] = React.useState<RewardInfo[]>(() => getFilteredFeedsByDate(FEEDS));

    const handleChange = (_event: any, newValue: number) => {
        setTabNum(newValue);
    };

    const onClickOpenModal = () => setOpenModal(true);

    const onCloseModal = () => setOpenModal(false);

    const onAddReward = (item: RewardInfo) => {
        setCurrentFeeds(getFilteredFeedsByDate([...currentFeeds, item]));
        changeUserReward(item.cost!);
        onCloseModal();
    };

    const filteredFeeds = tabNum === 0
        ? currentFeeds
        : getFilteredFeedsByUser(currentFeeds, 'Jane Doe');

    return (
        <div className={classes.feedsAndRewardsWrapp}>
            <Tabs
                value={tabNum}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab label="Feed" aria-label="Feed"/>
                <Tab label="My Rewards" aria-label="My Rewards"/>
            </Tabs>
            <button
                className={classes.plusButton}
                onClick={onClickOpenModal}
            >
                <AddSharpIcon className={classes.plusIcon}/>
            </button>
            <div className={classes.feedWrapp}>
                {filteredFeeds.map((reward: RewardInfo) => <RewardItem key={reward.id} reward={reward} />)}
            </div>
            <NewRewardModal
                open={openModal}
                myRewards={myRewards}
                onClose={onCloseModal}
                onReward={onAddReward}
            />
        </div>
    );
};

export default FeedAndMyRewards;