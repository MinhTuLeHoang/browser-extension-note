import loadable from "@loadable/component";

export default loadable(() => import(/* webpackChunkName: "HomePage" */ "./HomePage"), {
	fallback: <p>loading . . . Home Page</p>
})