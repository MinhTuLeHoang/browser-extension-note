import loadable from "@loadable/component";

export default loadable(() => import(/* webpackChunkName: "MenuPage" */ "./MenuPage"), {
	fallback: <p>loading . . . Menu Page</p>
})