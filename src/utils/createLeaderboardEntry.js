import { auth, leaderboardRef, timestamp } from '../services/firebase';

export async function createLeaderboardEntry(name, rating, accuracy, time, score ) {
    
    let username = auth.currentUser ? auth.currentUser.displayName : 'Anon-User';

    let data = {
        user: username,
        score: score,
        time: (time / 10),
        date: timestamp,
        rating: rating,
        accuracy: accuracy
    };  
    console.log(time)
    if (time > 0) {
        console.log('Score posted to: ', name, '/', 'public')
        const docRef = leaderboardRef.doc(name).collection('public').doc();
        await docRef.set(data);
    }
};