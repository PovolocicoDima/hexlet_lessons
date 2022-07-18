// my

export const getMutualFriends1 = (user1, user2) => {

    const firstFriends = user1.getFriends().map(friend => friend.id);
    const secondFriends = user2.getFriends().map(friend => friend.id);

    const mutualIds = firstFriends.filter((id) => {
        return secondFriends.includes(id)
    })

    const result = mutualIds.map((id) => {
        return user1.getFriends().filter(friend => {
            return friend.id === id
        })
    });

    return result.flat() || [];
}

// teacher

export const getMutualFriends = (user1, user2) => {
    const friends1 = user1.getFriends();
    const friends2 = user2.getFriends();
    const friends2Ids = friends2.map(({ id }) => id);
    return friends1.filter(({ id }) => friends2Ids.includes(id));
};