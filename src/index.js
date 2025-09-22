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
    const new_url = url.origin + '/problems/' + [...probid].join('/') + '/';
    return Response.redirect(new_url, 301); // permanent redirect
  }
  const response = await fetch(request);
  if (response.status === 404) {
    url.pathname = "/";
    return await fetch(url);
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
