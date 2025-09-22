export default {
  /**
  * @param {Request} request
  * @param {Env} env
  * @param {ExecutionContext} ctx
  * @returns {Response}
  */
  fetch(request, env, ctx) {
    // Redirect /<problem-id> to /problems/.../
    let url = new URL(request.url);
    console.log(url.pathname);
    let pattern_match = url.pathname.match(/^\/([1-9][0-9]{3,})$/);
    if (pattern_match) {
      let probid = pattern_match[1];
      let new_url = url.origin + '/problems/' + [...probid].join('/') + '/';
      return Response.redirect(new_url, 301); // permanent redirect
    }
    return fetch(request);
  },

};
