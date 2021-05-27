import { RewardInfo } from "./models/RewardInfo";

export const getFilteredFeedsByUser = (arr: RewardInfo[], userName: string) => {
    return arr.filter((reward: RewardInfo) => reward.userTo === userName)
};

export const getFilteredFeedsByDate = (arr: RewardInfo[]) => {
    return arr.sort((a: RewardInfo, b: RewardInfo) => +(new Date(b.date)) - +(new Date(a.date)));
};