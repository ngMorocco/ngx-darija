const assert = require('assert');
const t = require('../generate-routes-file-for-dynamic-routes');
const {removeSync, readFile} = require('fs-extra');
const sinon = require('sinon');
const TEMP_DIST_FILENAME = 'test_routes.txt';

describe('generate-routes-file-for-dynamic-routes', () => {

  describe('getDynamicRoutesFileContent', () => {
    it('should generate dynamic routes file correctly', async () => {
      sinon.stub(t, 'getVideoIds').callsFake(() => {
        return new Promise(resolve => resolve([1, 2, 3]));
      });
      const content = await t.getDynamicRoutesFileContent();
      assert.strictEqual(content, '/sessions/1\n/sessions/2\n/sessions/3\n');
    });
  });

  describe('generateDynamicRoutesFile', () => {
    afterEach(() => {
      // clean up
      removeSync(TEMP_DIST_FILENAME);
    });
    it('should write file content into dist file',  async () => {
      sinon.stub(t, 'getDistFilename').callsFake(() => {
        return TEMP_DIST_FILENAME;
      });
      sinon.stub(t, 'getDynamicRoutesFileContent').callsFake(() => {
        return new Promise(resolve => resolve('Some test file content'));
      });
      await t.generateDynamicRoutesFile();
      const content = await readFile(TEMP_DIST_FILENAME, 'utf-8');
      assert.strictEqual(content, 'Some test file content');
    });
  })

});