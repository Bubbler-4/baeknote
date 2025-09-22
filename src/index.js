/**
* @param {Request} request
* @returns {Promise<Response>}
*/
async function handleRequest(request) {
  // Redirect /<problem-id> to /problems/.../
  const url = new URL(request.url);
  console.log(url.pathname);
  const pattern_match = url.pathname.match(/^\/([1-9][0-9]{3,})$/);
  if (pattern_match) {
    const probid = pattern_match[1];
    url.pathname = '/problems/' + [...probid].join('/') + '/';
    // response = await Response.redirect(url, 301); // permanent redirect
  } else {
    // response = await fetch(request);
  }
  const response = await fetch(url);
  if (url.status === 404) {
    // Now this page does not exist
    url.pathname = "/not_found/";
    const response = await fetch(url);
    return response;
  }
  return response;
}

export default {
  /**
  * @param {Request} request
  * @param {Env} env
  * @param {ExecutionContext} ctx
  * @returns {Response}
  */
  fetch(request, env, ctx) {
    return handleRequest(request);
  },
};





