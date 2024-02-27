/**
 * Contains the miscellaneous route handlers.
 * @author Muhammad Rabiu <https://github.com/Sirmooooh>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
