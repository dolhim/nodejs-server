'use strict';
var lib = require('../lib/sharedLibrary');
var _gstructure = { data: {}, result: {} };

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
exports.getMovieList = async function(apikey,credential,offset,limit,genre) {
  try {
    await checkAccess();  // 간단 인증
    await getMovieData(); // 데이터 조회
    await populateResult(); // 비즈니스 로직
  } catch (error) {
    console.log('process error!')
  } finally {

  }

  return _gstructure.data;
}

////////////////////////////////////////////////////

async function checkAccess() {
  return true;
}

async function getMovieData(cachedData) {
  if (cachedData) {
    return cachedData;
  }
  _gstructure.data = await lib.fetchArray();
  return _gstructure.data;
}

async function populateResult() {
  _gstructure.result = _gstructure.data;
  return _gstructure.result;
}