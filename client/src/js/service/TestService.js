import HTTPService from './HTTPService.js';

/* Simple service tester class
 *    use as template for making api calls
 */
class TestService extends HTTPService {
  ping(callback) {
    this.get('ping', callback);
  }
}

export default TestService;