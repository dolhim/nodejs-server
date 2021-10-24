'use strict';


/**
 * health check point
 * Container Orchestration Tool에서 microservice의 정상 여부를 파악하기위해 호출
 *
 * no response value expected for this operation
 **/
exports.checkhealth = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

