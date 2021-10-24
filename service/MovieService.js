'use strict';


/**
 * 영화 목록 조회 
 * 영화 목록을 조회한다. 
 *
 * apikey String API 인증 키
 * credential String 사용자 인증 키
 * offset Integer 시작 레코드 번호 
 * limit Integer 한번에 가져오는 데이타 숫자 
 * genre String 장르 - all - drama - comedy - documentary - biography - musical (optional)
 * returns list
 **/
exports.getMovieList = function(apikey,credential,offset,limit,genre) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

