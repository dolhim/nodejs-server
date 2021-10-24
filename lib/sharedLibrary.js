const { reject } = require("async");

exports.mongoDBCheck = function (callback) {
    console.log('mongodb checked.')
    if (true) {
        callback(null);
    } else {
        callback('mongodb connect error!', false);
    }
}

exports.cacheServerCheck = function (callback) {
    console.log('cacheserver checked.')
    callback(null, true);
}

exports.fetchArray = () => {
    // 임시 데이터
    const arr = [{
        "id": 37090,
        "imdb_code": "tt0103312",
        "title": "Young Soul Rebels",
        "year": 1991,
        "rating": 6.1,
        "runtime": 105,
        "genres": [
            "Drama",
            "Music"
        ]
    }, {
        "id": 37091,
        "title": "The Lumber Baron",
        "year": 2019,
        "rating": 6.5,
        "runtime": 120,
        "genres": [
            "Drama",
            "History",
            "Mystery"
        ]
    }, {
        "id": 37087,
        "title": "Found",
        "year": 2005,
        "rating": 4.7,
        "runtime": 87,
        "genres": [
            "Drama",
            "Mystery",
            "Thriller"
        ]
    }];

    return new Promise((resolve, reject) => {
        resolve(arr);
    });
}