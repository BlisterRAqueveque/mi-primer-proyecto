/**
 * @description
 * index.js
 *  Levanta el servidor
 */

import app from './app.js';

const main = () => {
  const port = app.get('port');

  app.listen(port);

  console.log(`Server listening on port ${port}`);
};

main();
