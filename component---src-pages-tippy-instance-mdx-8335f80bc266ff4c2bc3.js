(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{171:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return u}),t.d(a,"_frontmatter",function(){return E});t(86);var n=t(87),s=t.n(n),c=t(7),o=t.n(c),l=t(0),r=t.n(l),m=t(179),p=t(184),i={},u=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=p.a,t}return o()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=s()(e,["components"]);return r.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,t),components:a},r.a.createElement(m.MDXTag,{name:"p",components:a},"The Tippy instance is an individual tooltip object. It has a bunch of properties\nand methods that contain information and functionality to manipulate the tooltip\nprogrammatically."),r.a.createElement(m.MDXTag,{name:"h3",components:a},"Accessing an instance"),r.a.createElement(m.MDXTag,{name:"p",components:a},"If you pass an element or virtual element to ",r.a.createElement("code",{className:"language-text"},"tippy()"),", the instance is directly\nreturned:"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},r.a.createElement("span",{className:"token keyword"},"const")," button ",r.a.createElement("span",{className:"token operator"},"=")," ",r.a.createElement("span",{className:"token dom variable"},"document"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token func method"},"querySelector"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token string"},"'button'"),r.a.createElement("span",{className:"token punctuation"},")"),"\n",r.a.createElement("span",{className:"token keyword"},"const")," instance ",r.a.createElement("span",{className:"token operator"},"=")," ",r.a.createElement("span",{className:"token function"},"tippy"),r.a.createElement("span",{className:"token punctuation"},"("),"button",r.a.createElement("span",{className:"token punctuation"},")")))),r.a.createElement(m.MDXTag,{name:"p",components:a},"If you're passing a CSS selector string, NodeList, or an array of elements, then\nan array of instances get returned (since potentially many instances can be\ncreated):"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},r.a.createElement("span",{className:"token keyword"},"const")," instances ",r.a.createElement("span",{className:"token operator"},"=")," ",r.a.createElement("span",{className:"token function"},"tippy"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token string"},"'.btn'"),r.a.createElement("span",{className:"token punctuation"},")")," ",r.a.createElement("span",{className:"token comment"},"// Array")))),r.a.createElement(m.MDXTag,{name:"h3",components:a},r.a.createElement("code",{className:"language-text"},"_tippy")," property"),r.a.createElement(m.MDXTag,{name:"p",components:a},"Both the reference element and the popper element have the instance attached as\nthe ",r.a.createElement("code",{className:"language-text"},"_tippy")," property."),r.a.createElement(m.MDXTag,{name:"p",components:a},"Reference element:"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},r.a.createElement("span",{className:"token keyword"},"const")," button ",r.a.createElement("span",{className:"token operator"},"=")," ",r.a.createElement("span",{className:"token dom variable"},"document"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token func method"},"querySelector"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token string"},"'button'"),r.a.createElement("span",{className:"token punctuation"},")"),"\n",r.a.createElement("span",{className:"token function"},"tippy"),r.a.createElement("span",{className:"token punctuation"},"("),"button",r.a.createElement("span",{className:"token punctuation"},")"),"\n",r.a.createElement("span",{className:"token keyword"},"const")," instance ",r.a.createElement("span",{className:"token operator"},"=")," button",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token access property"},"_tippy")))),r.a.createElement(m.MDXTag,{name:"p",components:a},"Popper element (parent of tooltip):"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},r.a.createElement("span",{className:"token keyword"},"const")," popper ",r.a.createElement("span",{className:"token operator"},"=")," ",r.a.createElement("span",{className:"token dom variable"},"document"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token func method"},"querySelector"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token string"},"'.tippy-popper'"),r.a.createElement("span",{className:"token punctuation"},")"),"\n",r.a.createElement("span",{className:"token keyword"},"const")," instance ",r.a.createElement("span",{className:"token operator"},"=")," popper",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token access property"},"_tippy")))),r.a.createElement(m.MDXTag,{name:"p",components:a},"This is especially useful when listening to events on the tooltip and you need\nto find which reference element it's associated with."),r.a.createElement(m.MDXTag,{name:"h3",components:a},"Auto-initialization"),r.a.createElement(m.MDXTag,{name:"p",components:a},"If you're using auto-initialization (",r.a.createElement("code",{className:"language-text"},"data-tippy")," attribute), and you need to\naccess the instance immediately at runtime, make sure you wrap access in\n",r.a.createElement("code",{className:"language-text"},"setTimeout()"),":"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},r.a.createElement("span",{className:"token function"},"setTimeout"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token punctuation"},")")," ",r.a.createElement("span",{className:"token arrow operator"},"=>")," ",r.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",r.a.createElement("span",{className:"token keyword"},"const")," button ",r.a.createElement("span",{className:"token operator"},"=")," ",r.a.createElement("span",{className:"token dom variable"},"document"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token func method"},"querySelector"),r.a.createElement("span",{className:"token punctuation"},"("),r.a.createElement("span",{className:"token string"},"'button'"),r.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",r.a.createElement("span",{className:"token keyword"},"const")," instance ",r.a.createElement("span",{className:"token operator"},"=")," button",r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",{className:"token access property"},"_tippy"),"\n",r.a.createElement("span",{className:"token punctuation"},"}"),r.a.createElement("span",{className:"token punctuation"},")")))),r.a.createElement(m.MDXTag,{name:"h3",components:a},"Shape and properties"),r.a.createElement(m.MDXTag,{name:"p",components:a},r.a.createElement("code",{className:"language-text"},"instance")," is a plain object with these properties:"),r.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},r.a.createElement("pre",{className:"language-js"},r.a.createElement("code",{className:"language-js"},r.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",r.a.createElement("span",{className:"token definition property"},"id"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token number"},"1"),r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token comment"},"// 1 to Infinity, used for `aria-describedby` attribute"),"\n","  ",r.a.createElement("span",{className:"token definition property"},"reference"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token class class-name"},"HTMLButtonElement"),r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token comment"},"// <button>"),"\n","  ",r.a.createElement("span",{className:"token definition property"},"popper"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token class class-name"},"HTMLDivElement"),r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token comment"},'// <div class="tippy-popper">...</div>'),"\n","  ",r.a.createElement("span",{className:"token definition property"},"popperChildren"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token punctuation"},"{")," ",r.a.createElement("span",{className:"token comment"},"// Child elements of the parent popper element"),"\n","    ",r.a.createElement("span",{className:"token definition property"},"tooltip"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token class class-name"},"HTMLDivElement"),r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token comment"},'// <div class="tippy-tooltip">...</div>'),"\n","    ",r.a.createElement("span",{className:"token definition property"},"content"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token class class-name"},"HTMLDivElement"),r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token comment"},'// <div class="tippy-content">...</div>'),"\n","    ",r.a.createElement("span",{className:"token definition property"},"arrow"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token nil keyword"},"null")," ",r.a.createElement("span",{className:"token operator"},"|")," ",r.a.createElement("span",{className:"token class class-name"},"HTMLDivElement"),r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token comment"},'// <div class="tippy-arrow"></div>'),"\n","    ",r.a.createElement("span",{className:"token definition property"},"backdrop"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token nil keyword"},"null")," ",r.a.createElement("span",{className:"token operator"},"|")," ",r.a.createElement("span",{className:"token class class-name"},"HTMLDivElement"),r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token comment"},'// <div class="tippy-backdrop"></div>'),"\n","  ",r.a.createElement("span",{className:"token punctuation"},"}"),r.a.createElement("span",{className:"token punctuation"},","),"\n","  ",r.a.createElement("span",{className:"token definition property"},"popperInstance"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token nil keyword"},"null"),r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token comment"},"// Instance is lazily created"),"\n","  ",r.a.createElement("span",{className:"token definition property"},"props"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token punctuation"},"{")," ",r.a.createElement("span",{className:"token spread punctuation"},"...")," ",r.a.createElement("span",{className:"token punctuation"},"}"),r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token comment"},"// Instance props + attribute options merged together"),"\n","  ",r.a.createElement("span",{className:"token definition property"},"state"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",r.a.createElement("span",{className:"token definition property"},"isDestroyed"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token boolean"},"false"),r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token comment"},"// Has the instance been destroyed?"),"\n","    ",r.a.createElement("span",{className:"token definition property"},"isEnabled"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token boolean"},"true"),r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token comment"},"// Is the tippy enabled (can show or hide)?"),"\n","    ",r.a.createElement("span",{className:"token definition property"},"isVisible"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token boolean"},"false"),r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token comment"},"// Is the tippy currently showing (and not transitioning out)?"),"\n","    ",r.a.createElement("span",{className:"token definition property"},"isMounted"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token boolean"},"false"),r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token comment"},"// Is the tippy currently mounted to the DOM?"),"\n","    ",r.a.createElement("span",{className:"token definition property"},"isShown"),r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token boolean"},"false"),r.a.createElement("span",{className:"token punctuation"},",")," ",r.a.createElement("span",{className:"token comment"},"// Is the tippy fully shown after finishing transitioning in?"),"\n","  ",r.a.createElement("span",{className:"token punctuation"},"}"),r.a.createElement("span",{className:"token punctuation"},","),"\n","  ",r.a.createElement("span",{className:"token comment"},"// This object also contains methods. You'll learn in the next section."),"\n",r.a.createElement("span",{className:"token punctuation"},"}")))))},a}(r.a.Component);u.isMDXComponent=!0;var E={}},177:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.withMDXComponents=void 0;var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s=l(t(0)),c=l(t(57)),o=l(t(1));function l(e){return e&&e.__esModule?e:{default:e}}var r=(0,c.default)({}),m=r.Provider,p=r.Consumer;a.withMDXComponents=function(e){return function(a){var t=a.components,c=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(a,["components"]);return s.default.createElement(p,null,function(a){return s.default.createElement(e,n({components:t||a},c))})}};var i=function(e){var a=e.components,t=e.children;return s.default.createElement(m,{value:a},t)};i.propTypes={components:o.default.object.isRequired,children:o.default.element.isRequired},a.default=i},179:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(182);Object.defineProperty(a,"MDXTag",{enumerable:!0,get:function(){return c(n).default}});var s=t(177);function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"MDXProvider",{enumerable:!0,get:function(){return c(s).default}})},182:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),c=t(0),o=m(c),l=m(t(183)),r=t(177);function m(e){return e&&e.__esModule?e:{default:e}}var p={inlineCode:"code",wrapper:"div"},i=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,c.Component),s(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.parentName,s=e.props,c=void 0===s?{}:s,r=e.children,m=e.components,i=void 0===m?{}:m,u=e.Layout,E=e.layoutProps,N=i[t+"."+a]||i[a]||p[a]||a;return u?((0,l.default)(this,u),o.default.createElement(u,n({components:i},E),o.default.createElement(N,c,r))):o.default.createElement(N,c,r)}}]),a}();a.default=(0,r.withMDXComponents)(i)},183:function(e,a,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c=Object.defineProperty,o=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=m&&m(Object);e.exports=function e(a,t,i){if("string"!=typeof t){if(p){var u=m(t);u&&u!==p&&e(a,u,i)}var E=o(t);l&&(E=E.concat(l(t)));for(var N=0;N<E.length;++N){var k=E[N];if(!(n[k]||s[k]||i&&i[k])){var d=r(t,k);try{c(a,k,d)}catch(f){}}}return a}return a}}}]);
//# sourceMappingURL=component---src-pages-tippy-instance-mdx-8335f80bc266ff4c2bc3.js.map