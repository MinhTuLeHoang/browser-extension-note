import{c as z,i,f as j,j as e,u as o,r as g,S as H,H as N,O as T}from"./main-DAJouB1W.js";import{F as M,I as R}from"./info-BAKnqc2O.js";/**
 * @license lucide-react v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],F=z("Menu",_);/**
 * @license lucide-react v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],B=z("PanelLeftClose",O),W="#0033C9",S="#001F3E",A="#E3173C",L="rgba(0, 31, 62, 0.8)",u="#CCD2D8",V=10,c=i`
	/* font-family: SFProDisplay, SF Pro Display; */
	font-style: normal;
`;i`
	padding: 0;
	margin: 0;
	box-sizing: border-box;
`;i`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	background-color: ${L};
	z-index: ${t=>t.$zIndex||V};
`;i`
	&::-webkit-scrollbar {
		display: none;
	}
`;const f=i`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
`,q=i`
	${f}
	-webkit-line-clamp: 1;
`,G=i`
	${f}
	-webkit-line-clamp: 2;
`,U=i`
	${f}
	-webkit-line-clamp: 3;
`;j`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;j`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;const a=6;i`
	.datepicker {
		position: static !important;
	}
	.datepicker.ios {
		background: transparent !important;
		.datepicker-scroll {
			li {
				display: flex !important;
				flex-direction: row !important;
				justify-content: center !important;
				align-items: center !important;
			}
			li:nth-child(${a}) {
				${c}
				color: ${S} !important;
				text-align: center !important;
				font-size: 24px !important;
				font-weight: 400 !important;
				line-height: 36px !important;
			}
			li:nth-child(${a-1}),
			li:nth-child(${a+1}) {
				${c}
				color: ${u} !important;
				text-align: center !important;
				font-size: 18px !important;
				font-style: normal !important;
				font-weight: 400 !important;
				line-height: 28px !important;
			}
			li:nth-child(${a-2}),
			li:nth-child(${a+2}) {
				${c}
				color: ${u} !important;
				text-align: center !important;
				font-size: 14px !important;
				font-weight: 400 !important;
				line-height: 18px !important;
			}
			li:nth-child(${a-3}),
			li:nth-child(${a+3}) {
				${c}
				color: ${u} !important;
				text-align: center !important;
				font-size: 14px !important;
				font-weight: 400 !important;
				line-height: 18px !important;
			}
		}
		.datepicker-wheel {
			border: none !important;
		}
		.datepicker-content {
			padding: 0 !important;
			justify-content: center !important;
		}
		.datepicker-viewport::after {
			background: transparent !important;
		}
	}
`;const k=t=>{const{children:n,size:r="Small",color:s=S,bold:p=!0,align:h="left",...l}=t,x=Y(r);return e.jsx(K,{as:x,$size:r,$headingColor:s,$bold:p,$align:h,...l,children:n})},$=i`
	${t=>{if(t.$maxLines===1)return q;if(t.$maxLines===2)return G;if(t.$maxLines===3)return U}}
`,K=o.h3`
	${c}
	font-weight: ${t=>t.$bold?700:400};
	color: ${t=>t.$headingColor};
	text-align: ${t=>t.$align};
	${t=>Q(t.$size)}
	${$}
`,Q=t=>t==="Large"?i`
			font-size: 24px;
			line-height: 36px;
		`:t==="Medium"?i`
			font-size: 18px;
			line-height: 28px;
		`:i`
		font-size: 16px;
		line-height: 24px;
	`,Y=t=>t==="Large"?"h1":t==="Medium"?"h2":"h3";o.label`
	${c};
	display: ${t=>t.$displayBlock?"block":"inline-block"};
	font-weight: ${t=>t.$bold?700:400};
	color: ${t=>t.$labelColor};
	${t=>Z(t.$size)}
	text-align: ${t=>t.$align};
	${$}
`;const Z=t=>t==="Large"?i`
			font-size: 16px;
			line-height: 20px;
		`:t==="Medium"?i`
			font-size: 14px;
			line-height: 18px;
		`:t==="Small"?i`
			font-size: 12px;
			line-height: 16px;
		`:i`
		font-size: 10px;
		line-height: 12px;
	`;o.p`
	${c};
	font-weight: ${t=>t.$bold?700:400};
	color: ${t=>t.$paragraphColor};
	font-size: ${t=>t.$size==="Large"?"16px":"14px"};
	line-height: ${t=>t.$size==="Large"?"24px":"22px"};
	text-align: ${t=>t.$align};
	${$}
`;const J=i`
	filter: blur(0px);
	transition: filter 0.7s ease-out;
`,X=i`
	filter: blur(4px);
	clip-path: inset(0);
`,tt=o.img`
	max-width: 100%;
	width: ${t=>t.$imgWidth};
	height: ${t=>t.$imgHeight};
	${t=>{if(t.$blurTransition)return t.$loaded?J:X}}
`,d="https://simg.zalopay.com.vn/zst/zpi/images/design-system",et=`${d}/placeholder169-1.svg`,it=`${d}/placeholder11-1.svg`,nt=`${d}/placeholder21-1.svg`,ot=`${d}/placeholder31-1.svg`,rt=`${d}/placeholder41-1.svg`,st=`${d}/icon-placeholder-1.svg`,lt=(t,n)=>{if(t)return st;switch(n){case"16:9":return et;case"1:1":return it;case"2:1":return nt;case"3:1":return ot;case"4:1":return rt;default:return}},at=(t,n,r,s)=>{if(r&&s)return{width:r,height:s};if(t)return{width:"1",height:"1"};switch(n){case"16:9":return{width:"16",height:"9"};case"1:1":return{width:"1",height:"1"};case"2:1":return{width:"2",height:"1"};case"3:1":return{width:"3",height:"1"};case"4:1":return{width:"4",heigth:"1"};default:return{}}},ct=t=>{const{imgWidth:n,src:r,alt:s,width:p,height:h,placeholderRatio:l="1:1",placeholderSrc:x,imgHeight:C="auto",iconPlaceholder:y=!1,blurTransition:I=!0,...P}=t,b=x||lt(y,l),D=at(y,l,p,h),{src:w,error:E}=dt(r,b||"");return e.jsx(tt,{src:w,alt:s,$imgWidth:n,$imgHeight:C,$loaded:w!==b||E,$blurTransition:I,...D,...P})},dt=(t,n)=>{const[r,s]=g.useState(n||t),[p,h]=g.useState(!1);return g.useEffect(()=>{const l=new window.Image;l.src=t,l.onload=()=>{s(t)},l.onerror=()=>{h(!0)}},[t]),{src:r,error:p}},pt=""+new URL("note-logo-cut-pr-NFYDK.png",import.meta.url).href,ht=o.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`,v=180,kt=()=>{const[t,n]=g.useState(!1);return e.jsxs(gt,{children:[e.jsxs(xt,{children:[e.jsx(F,{onClick:()=>n(!t),style:{cursor:"pointer"}}),e.jsx(k,{children:"Popup"}),e.jsx(H,{style:{cursor:"pointer"}})]}),e.jsx(mt,{open:t,onClick:()=>n(!1)}),e.jsxs(ft,{open:t,children:[e.jsxs(ht,{style:{gap:"8px"},children:[e.jsx(ct,{src:pt,alt:"Company Logo",width:"36px",height:"36px"}),e.jsx(k,{size:"Medium",bold:!0,children:"Quick Note"})]}),e.jsx(yt,{}),e.jsxs(m,{onClick:()=>n(!1),children:[e.jsx(N,{size:20})," Home"]}),e.jsxs(m,{onClick:()=>n(!1),children:[e.jsx(M,{size:20})," Documents"]}),e.jsxs(m,{onClick:()=>n(!1),children:[e.jsx(R,{size:20})," About"]}),e.jsxs($t,{onClick:()=>n(!1),children:[e.jsx(B,{size:20})," Close"]})]}),e.jsx(ut,{children:e.jsx(T,{})})]})},gt=o.div`
	/* display: flex;
	flex-direction: column; */
	position: relative;
	overflow: hidden;
	height: 100%;
`,xt=o.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	border-bottom: 1px solid #ddd;
`,ut=o.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: gray;
`,mt=o.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: ${L};
	opacity: ${t=>t.open?"1":"0"};
	visibility: ${t=>t.open?"visible":"hidden"};
	transition: opacity 0.3s ease, visibility 0.3s ease;
	z-index: 5;
`,ft=o.div`
	position: absolute;
	top: 0;
	left: ${t=>t.open?"0":`-${v}px`};
	width: ${v}px;
	height: 100%;
	background: white;
	box-shadow: ${t=>t.open?"2px 0 5px rgba(0, 0, 0, 0.2)":"none"};
	transition: left 0.3s ease;
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	z-index: 10;
	box-sizing: border-box;
`,m=o.button`
	display: flex;
	align-items: center;
	background: none;
	border: none;
	padding: 8px;
	margin-left: -8px;
	font-size: 16px;
	width: calc(100% + 16px);
	cursor: pointer;
	text-align: left;
	gap: 8px;
	&:hover {
		color: ${W};
	}
`,$t=o.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background: none;
	border: none;
	padding: 8px;
	font-size: 16px;
	cursor: pointer;
	width: 100%;
	margin-top: auto;
	gap: 4px;
	&:hover {
		color: ${A};
	}
`,yt=o.hr`
	width: 100%;
	border: none;
	border-top: 1px solid #ddd;
`;export{kt as default};
