

export default ({allContests}, { text, sortBy, platform }) => {
    return allContests.filter((contest) => {
        return (platform.toLowerCase().trim() === 'all' ||
            platform.toLowerCase().trim() === contest.platform) &&
            contest.name.trim().toLowerCase().includes(text.trim().toLowerCase());
    }).sort((contestA, contestB) => {
        let keyA, keyB;
        if (typeof contestA[sortBy] === 'string') {
            keyA = contestA[sortBy].trim().toLowerCase();
            keyB = contestB[sortBy].trim().toLowerCase();
        } else {
            keyA = contestA[sortBy];
            keyB = contestB[sortBy];
        }
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });
};

