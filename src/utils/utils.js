
const logos = {
    'codeforces':'img/codeforces.png',
    'hackerearth':'img/hackerearth.svg',
    'hackerrank': 'img/hackerrank.svg',
    'codechef':'img/codechef.svg',
    'other':'img/other.png',
    'kaggle':'img/kaggle.png',
    'csacademy':'img/csacademy.png',
    'topcoder':'img/topcoder.svg',
    'atcoder':'img/atcoder.png',
    'leetcode':'img/leetcode.png',

}

export const getPlatformLogo = (platform) => {

    return logos[platform] || 'img/no_image.png'
}
