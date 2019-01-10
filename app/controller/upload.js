const Controller = require('egg').Controller;
const fs = require('mz/fs');
const log = console.log.bind(console);

module.exports = class extends Controller {
  async upload() {
    const { ctx } = this;
    log(ctx.request.body);
    log('got %d files', ctx.request.files.length);
    //const file = ctx.request.files[0];
    //const name = 'egg-multipart-test/' + path.basename(file.filename);
    for (const file of ctx.request.files) {
      log('field: ' + file.fieldname);
      log('filename: ' + file.filename);
      log('encoding: ' + file.encoding);
      log('mime: ' + file.mime);
      log('tmp filepath: ' + file.filepath);
      let result;
      try {
        result = await ctx.oss.put('egg-multipart-test/' + file.filename, file.filepath);
      } finally {
        await fs.unlink(file.filepath);
      }
      log(result)
    }


    // ctx.body = {
    //   url: result.url,
    //   requestBody: ctx.request.body,
    // }
  }
};