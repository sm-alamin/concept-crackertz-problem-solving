function tallestFriend ( height ) {
    //Write your code here
    //Don't forget to return
    const tallestFriendSorted = height.sort((a,b) => b - a);
    const tallestFriendHeight = tallestFriendSorted[0];
    return tallestFriendHeight;
}
const height = [157, 134, 188 ];
const tallest = tallestFriend(height);
console.log(tallest);