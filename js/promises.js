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

function getGithubUsernames(userName) {
    return fetch(`https://api.github.com/users/${userName}/events`, {headers: {Authorization: PERSONAL_ACCESS_TOKEN}})
.then(response => response.json().then(data => {
        console.log(data);
        var latestPush = data[0].created_at
        let date = new Date(latestPush);

        console.log(date.toString());
    }))
}
getGithubUsernames("naysamoreno")


