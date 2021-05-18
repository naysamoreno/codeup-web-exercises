// var test = fetch("https://api.github.com/users/naysamoreno/events", {
//     headers: {'Authorization': PERSONAL_ACCESS_TOKEN}
//
// }).then(function(data){
//     console.log(data)
//     return data.json()
// }).then(function(data){
//     console.log(data)
// })(edited)
//

// function getGithubUsernames(userName) {
//     return fetch(`https://api.github.com/users/${userName}/events`, {headers: {Authorization: PERSONAL_ACCESS_TOKEN}})
// .then(response => response.json().then(data => {
//         console.log(data);
//         var latestPush = data[0].created_at
//         let date = new Date(latestPush);
//
//         console.log(date.toString());
//     }))
// }
// getGithubUsernames("naysamoreno")
//
//
// // bonus
// function wait (time) {
//     const myPromise = new Promise(function (resolve, reject) {
//         if(time.toString()
//     })
//     setTimeout(resolve, time * 1000)
// } else {
//     setTimeout(resolve, time;)
// }

// DAVID SOLUTION
const userLastCommit = username => {
    return fetch(`https://api.github.com/users/${username}/events`,
        {headers: {'Authorization': 'PERSONAL_ACCESS_TOKEN'}})
        .then(resp => resp.json())
        .then(data => {
                // console.log(data)
                let lastPush;
                for (let event of data) {
                    if (event.type === "PushEvent") {
                        lastPush = new Date(event.created_at);
                        break;
                    }
                }
                console.log(lastPush);
            }
        );
}

userLastCommit("naysamoreno");

// const wait = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     })
// }
const wait = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`You'll see this after ${ms/1000} second(s)`);
        }, ms);
    })
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));