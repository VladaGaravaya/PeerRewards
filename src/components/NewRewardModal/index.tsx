import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { RewardInfo } from '../../models/RewardInfo';
import { FormControl, FormHelperText, InputAdornment, makeStyles, MenuItem, OutlinedInput, TextField } from '@material-ui/core';
import { USERS } from '../../contants';

const useStyles = makeStyles({
    label: {
        fontWeight: 600,
        fontSize: 17,
        margin: "10px 0",
    },
});

interface NewRewardModalProps {
    open: boolean;
    myRewards: number;
    onClose: () => void;
    onReward: (item: RewardInfo) => void;
}

const NewRewardModal = ({
    open,
    myRewards,
    onClose,
    onReward,
}: NewRewardModalProps) => {
    const classes = useStyles();

    const [userTo, setUserTo] = React.useState<string>();
    const [reward, setReward] = React.useState<number>();
    const [comment, setComment] = React.useState<string>();

    const handleReward = (e: any) => {
        e.preventDefault();

        if (!reward || !userTo || !!(reward && reward > myRewards)) {
            return;
        }
        onReward({
            id: Math.random(),
            userTo,
            cost: +reward,
            comment,
            date: (new Date()).toISOString(),
            userBy: 'Jane Doe',
        });
        resetModal();
    };

    const resetModal = () => {
        setUserTo(undefined);
        setReward(undefined);
        setComment(undefined);
    };

    const handleClose = () => {
        onClose();
        resetModal();
    }

    return (
        <Dialog maxWidth="xs" open={open} onClose={handleClose}>
            <form onSubmit={handleReward}>
                <DialogContent>
                    <FormControl fullWidth variant="outlined">
                        <label className={classes.label}>To</label>
                        <TextField
                            select
                            value={userTo}
                            onChange={(e: any) => setUserTo(e.target.value)}
                            variant="outlined"
                            required
                        >
                            {USERS.map((user: string) => (
                                <MenuItem key={user} value={user}>
                                    {user}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                    <FormControl fullWidth variant="outlined" error={!!(reward && reward > myRewards)}>
                        <label className={classes.label}>Reward</label>
                        <OutlinedInput
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            value={reward}
                            type="number"
                            aria-describedby="reward"
                            required
                            onChange={(e: any) => setReward(e.target.value)}
                        />
                        {!!(reward && reward > myRewards) && <FormHelperText id="reward">You enter more than your rewards.</FormHelperText>}
                    </FormControl>
                    <FormControl fullWidth variant="outlined">
                        <label className={classes.label}>Why?</label>
                        <OutlinedInput
                            multiline
                            rows={4}
                            value={comment}
                            onChange={(e: any) => setComment(e.target.value)}
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Reward
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default NewRewardModal;