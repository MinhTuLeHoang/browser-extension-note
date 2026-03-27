import{c as i,p as n,n as s,j as e,H as d,S as p,u as o,a as x,r as g}from"./main-DAJouB1W.js";import{F as h,I as u}from"./info-BAKnqc2O.js";/**
 * @license lucide-react v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],f=i("ChevronRight",b);/**
 * @license lucide-react v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],y=i("Play",m);/**
 * @license lucide-react v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],v=i("Search",j),w=[{id:"home",title:"Start Browsing",description:"Go to your dashboard",icon:e.jsx(d,{size:20}),path:n.Home,color:"#4466ff",featured:!0},{id:"note",title:"Quick Note",description:"Capture ideas",icon:e.jsx(h,{size:20}),path:s.Home,color:"#00f3ff"},{id:"demo",title:"Demo Play",description:"Test features",icon:e.jsx(y,{size:20}),path:n.Demo,color:"#ff00e5"},{id:"intro",title:"Tutorial",description:"How to use",icon:e.jsx(u,{size:20}),path:s.Intro,color:"#aaff00"},{id:"settings",title:"Settings",description:"Preferences",icon:e.jsx(p,{size:20}),path:"chrome://extensions/?id=eeijfnjmjelapkebgockoeaadonbchdd",color:"#94a3b8"}],k=o.div`
	padding: 24px;
	display: flex;
	flex-direction: column;
	gap: 24px;
	height: 100%;
	box-sizing: border-box;
`,z=o.div`
	text-align: left;
	margin-top: 10px;
`,S=o.h1`
	font-size: 32px;
	font-weight: 800;
	margin: 0;
	background: linear-gradient(135deg, var(--neon-cyan), var(--neon-blue));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	filter: drop-shadow(0 0 8px rgba(0, 243, 255, 0.3));
	letter-spacing: -0.02em;
`,C=o.p`
	margin: 4px 0 0 0;
	color: var(--text-secondary);
	font-size: 14px;
`,I=o.div`
	position: relative;
	display: flex;
	align-items: center;
`,P=o.input`
	width: 100%;
	padding: 12px 16px 12px 42px;
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 12px;
	color: white;
	font-size: 14px;
	backdrop-filter: blur(10px);
	transition: all 0.3s ease;

	&::placeholder {
		color: rgba(255, 255, 255, 0.3);
	}

	&:focus {
		outline: none;
		border-color: var(--neon-cyan);
		box-shadow: 0 0 15px rgba(0, 243, 255, 0.15);
		background: rgba(255, 255, 255, 0.08);
	}
`,N=o.div`
	position: absolute;
	left: 14px;
	color: rgba(255, 255, 255, 0.5);
	display: flex;
	align-items: center;
	z-index: 10;
`,T=o.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
	margin-bottom: 20px;
`,_=o.div`
	background: rgba(255, 255, 255, 0.03);
	border: 1px solid rgba(255, 255, 255, 0.05);
	padding: 20px;
	border-radius: 18px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	cursor: pointer;
	transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	backdrop-filter: blur(10px);
	position: relative;
	overflow: hidden;

	&:hover {
		transform: translateY(-4px);
		background: rgba(255, 255, 255, 0.07);
		border-color: rgba(255, 255, 255, 0.2);
		box-shadow: 0 10px 25px -10px rgba(0, 0, 0, 0.5);

		.icon-bg {
			transform: scale(1.2);
			opacity: 1;
		}

		.arrow {
			transform: translateX(2px);
			opacity: 1;
		}
	}

	&.featured {
		grid-column: span 2;
		background: linear-gradient(135deg, rgba(68, 102, 255, 0.1), rgba(0, 243, 255, 0.05));
		border-color: rgba(68, 102, 255, 0.2);
	}
`,H=o.div`
	width: 40px;
	height: 40px;
	border-radius: 12px;
	background: ${t=>t.color||"var(--neon-blue)"}15;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${t=>t.color||"var(--neon-blue)"};
	margin-bottom: 4px;
	transition: all 0.3s ease;
`,L=o.div`
	font-weight: 600;
	font-size: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`,q=o.div`
	font-size: 12px;
	color: var(--text-secondary);
	line-height: 1.4;
`,$=o(f)`
	opacity: 0.3;
	transition: all 0.3s ease;
`,Q=()=>{const t=x(),[a,c]=g.useState(""),l=w.filter(r=>r.title.toLowerCase().includes(a.toLowerCase())||r.description.toLowerCase().includes(a.toLowerCase()));return e.jsxs(k,{children:[e.jsxs(z,{children:[e.jsx(S,{children:"Explore"}),e.jsx(C,{children:"Manage your quick notes"})]}),e.jsxs(I,{children:[e.jsx(P,{placeholder:"Search pages or tools...",value:a,onChange:r=>c(r.target.value)}),e.jsx(N,{children:e.jsx(v,{size:18})})]}),e.jsx(T,{children:l.map(r=>e.jsxs(_,{className:r.featured?"featured":"",onClick:()=>t(r.path),children:[e.jsx(H,{color:r.color,children:r.icon}),e.jsxs("div",{children:[e.jsxs(L,{children:[r.title,e.jsx($,{size:16,className:"arrow"})]}),e.jsx(q,{children:r.description})]})]},r.id))})]})};export{Q as default};
