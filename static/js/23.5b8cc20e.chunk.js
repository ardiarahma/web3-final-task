(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{495:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}n.d(t,"a",(function(){return o}))},508:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return a}))},523:function(e,t,n){"use strict";var a=n(27),o=n(495),r=n(101),i=n(47),s=n(2),c=n.n(s),l=n(78),p=n.n(l),d=n(491),u=n.n(d),f=n(767),h=n(501),b=n(492),m={tag:b.q,children:p.a.node.isRequired,right:p.a.bool,flip:p.a.bool,modifiers:p.a.object,className:p.a.string,cssModule:p.a.object,persist:p.a.bool,positionFixed:p.a.bool},g={flip:{enabled:!1}},v={up:"top",left:"left",right:"right",down:"bottom"},O=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.className,i=t.cssModule,s=t.right,l=t.tag,p=t.flip,d=t.modifiers,h=t.persist,m=t.positionFixed,O=Object(r.a)(t,["className","cssModule","right","tag","flip","modifiers","persist","positionFixed"]),j=Object(b.m)(u()(n,"dropdown-menu",{"dropdown-menu-right":s,show:this.context.isOpen}),i),y=l;if(h||this.context.isOpen&&!this.context.inNavbar){var x=(v[this.context.direction]||"bottom")+"-"+(s?"end":"start"),k=p?d:Object(o.a)({},d,{},g),N=!!m;return c.a.createElement(f.a,{placement:x,modifiers:k,positionFixed:N},(function(t){var n=t.ref,o=t.style,r=t.placement;return c.a.createElement(y,Object(a.a)({tabIndex:"-1",role:"menu",ref:n,style:o},O,{"aria-hidden":!e.context.isOpen,className:j,"x-placement":r}))}))}return c.a.createElement(y,Object(a.a)({tabIndex:"-1",role:"menu"},O,{"aria-hidden":!this.context.isOpen,className:j,"x-placement":O.placement}))},t}(c.a.Component);O.propTypes=m,O.defaultProps={tag:"div",flip:!0},O.contextType=h.a,t.a=O},524:function(e,t,n){"use strict";var a=n(27),o=n(101),r=n(493),i=n(47),s=n(2),c=n.n(s),l=n(78),p=n.n(l),d=n(491),u=n.n(d),f=n(501),h=n(492),b={children:p.a.node,active:p.a.bool,disabled:p.a.bool,divider:p.a.bool,tag:h.q,header:p.a.bool,onClick:p.a.func,className:p.a.string,cssModule:p.a.object,toggle:p.a.bool},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(r.a)(n)),n.getTabIndex=n.getTabIndex.bind(Object(r.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},n.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},n.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,n=Object(h.n)(this.props,["toggle"]),r=n.className,i=n.cssModule,s=n.divider,l=n.tag,p=n.header,d=n.active,f=Object(o.a)(n,["className","cssModule","divider","tag","header","active"]),b=Object(h.m)(u()(r,{disabled:f.disabled,"dropdown-item":!s&&!p,active:d,"dropdown-header":p,"dropdown-divider":s}),i);return"button"===l&&(p?l="h6":s?l="div":f.href&&(l="a")),c.a.createElement(l,Object(a.a)({type:"button"===l&&(f.onClick||this.props.toggle)?"button":void 0},f,{tabIndex:e,role:t,className:b,onClick:this.onClick}))},t}(c.a.Component);m.propTypes=b,m.defaultProps={tag:"button",toggle:!0},m.contextType=f.a,t.a=m},525:function(e,t,n){"use strict";var a=n(27),o=n(101),r=n(493),i=n(47),s=n(2),c=n.n(s),l=n(78),p=n.n(l),d=n(491),u=n.n(d),f=n(517),h=n.n(f),b=n(509),m=n.n(b),g=n(102),v=n.n(g),O=n(510),j=n.n(O),y=n(514),x=n.n(y),k=n(513),N=n(518),E=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,j()(m()(t),"refHandler",(function(e){Object(N.b)(t.props.innerRef,e),Object(N.a)(t.props.setReferenceNode,e)})),t}v()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){Object(N.b)(this.props.innerRef,null)},n.render=function(){return x()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),Object(N.c)(this.props.children)({ref:this.refHandler})},t}(s.Component);function C(e){return s.createElement(k.b.Consumer,null,(function(t){return s.createElement(E,h()({setReferenceNode:t},e))}))}var w=n(501),T=n(492),M=n(502),R={caret:p.a.bool,color:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,disabled:p.a.bool,onClick:p.a.func,"aria-haspopup":p.a.bool,split:p.a.bool,tag:T.q,nav:p.a.bool},P=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(r.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled||this.context.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},n.render=function(){var e,t=this,n=this.props,r=n.className,i=n.color,s=n.cssModule,l=n.caret,p=n.split,d=n.nav,f=n.tag,h=n.innerRef,b=Object(o.a)(n,["className","color","cssModule","caret","split","nav","tag","innerRef"]),m=b["aria-label"]||"Toggle Dropdown",g=Object(T.m)(u()(r,{"dropdown-toggle":l||p,"dropdown-toggle-split":p,"nav-link":d}),s),v=b.children||c.a.createElement("span",{className:"sr-only"},m);return d&&!f?(e="a",b.href="#"):f?e=f:(e=M.a,b.color=i,b.cssModule=s),this.context.inNavbar?c.a.createElement(e,Object(a.a)({},b,{className:g,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:v})):c.a.createElement(C,{innerRef:h},(function(n){var o,r=n.ref;return c.a.createElement(e,Object(a.a)({},b,((o={})["string"===typeof e?"ref":"innerRef"]=r,o),{className:g,onClick:t.onClick,"aria-expanded":t.context.isOpen,children:v}))}))},t}(c.a.Component);P.propTypes=R,P.defaultProps={"aria-haspopup":!0,color:"secondary"},P.contextType=w.a;t.a=P},571:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(495),o=n(27),r=n(493),i=n(47),s=n(2),c=n.n(s),l=n(78),p=n.n(l),d=n(520),u=n(492),f=["defaultOpen"],h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},n.toggle=n.toggle.bind(Object(r.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.toggle=function(e){this.setState({isOpen:!this.state.isOpen}),this.props.onToggle&&this.props.onToggle(e,!this.state.isOpen)},n.render=function(){return c.a.createElement(d.a,Object(o.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(u.n)(this.props,f)))},t}(s.Component);h.propTypes=Object(a.a)({defaultOpen:p.a.bool,onToggle:p.a.func},d.a.propTypes)},629:function(e,t,n){e.exports=n.p+"static/media/sygnet.dba7f081.svg"},766:function(e,t,n){"use strict";n.r(t);var a=n(508),o=n(149),r=n(150),i=n(152),s=n(151),c=n(2),l=n.n(c),p=n(489),d=n(759),u=n(756),f=n(571),h=n(525),b=n(523),m=n(524),g=n(532),v=n(629),O=n.n(v),j=n(521),y=n.n(j),x=n(155),k=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.children,Object(a.a)(e,["children"]),"Bearer "+localStorage.getItem("token"));return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.f,{className:"d-lg-none",display:"md",mobile:!0}),l.a.createElement(g.e,{full:{src:"./images/logo-yearbook.png",width:120,height:100,alt:""},minimized:{src:O.a,width:30,height:30,alt:""}}),l.a.createElement(d.a,{className:"d-md-down-none",navbar:!0},l.a.createElement(u.a,{className:"px-3"},l.a.createElement(p.NavLink,{to:"/dashboard",className:"nav-link"},"Dashboard")),l.a.createElement(u.a,{className:"px-3"},l.a.createElement(p.Link,{to:"/students",className:"nav-link"},"Student"))),l.a.createElement(d.a,{className:"ml-auto",navbar:!0},l.a.createElement(f.a,{nav:!0,direction:"down"},l.a.createElement(h.a,{nav:!0},l.a.createElement("img",{src:"../../assets/img/avatars/avatar.png",className:"img-avatar",alt:"avatar.png"})),l.a.createElement(b.a,{right:!0},l.a.createElement(m.a,{onClick:function(){y.a.get("https://cors-anywhere.herokuapp.com/http://yb-api.technow.id/api/logout",{headers:{Authorization:t}}).then((function(e){localStorage.clear(),x.a.push("/login")})).catch((function(e){console.log(e)}))}},l.a.createElement("i",{className:"fa fa-lock"})," Logout")))))}}]),n}(c.Component);k.defaultProps={},t.default=k}}]);
//# sourceMappingURL=23.5b8cc20e.chunk.js.map