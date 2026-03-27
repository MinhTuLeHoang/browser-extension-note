import loadable from "@loadable/component";

export default loadable(() => import(/* webpackChunkName: "GeneralLayout" */ "./GeneralLayout"), {
	fallback: <p>loading . . . GeneralLayout</p>
})