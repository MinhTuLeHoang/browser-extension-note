import loadable from "@loadable/component";

export default loadable(() => import(/* webpackChunkName: "NoteIntroPage" */ "./NoteIntroPage.tsx"), {
	fallback: <p>loading . . . NoteIntroPage</p>
})