/* eslint-disable @typescript-eslint/no-var-requires */
const { override, useBabelRc, disableEsLint } = require( 'customize-cra');

module.exports = override(
  disableEsLint(),
  useBabelRc()
);
