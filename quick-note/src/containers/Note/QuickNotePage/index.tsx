import loadable from "@loadable/component";

export default loadable(() => import(/* webpackChunkName: "QuickNotePage" */ "./QuickNotePage"), {
	fallback: <p>loading . . . QuickNotePage</p>
})