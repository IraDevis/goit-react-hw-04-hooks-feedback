(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),o=n(8),i=n(2),u=n(3),j=n(5),l=n(4),b=n(0),h=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:this.props.title}),this.props.children]})})}}]),n}(c.Component),d=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsx)(b.Fragment,{children:Object.keys(this.props.options).map((function(e){return Object(b.jsx)("button",{onClick:t.props.onLeaveFeedback,children:e},e)}))})}}]),n}(c.Component),p=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["Good: ",this.props.good]}),Object(b.jsxs)("li",{children:["Neutral: ",this.props.neutral]}),Object(b.jsxs)("li",{children:["Bad: ",this.props.bad]}),Object(b.jsxs)("li",{children:["Total: ",this.props.total()]}),Object(b.jsxs)("li",{children:["Positive feedback: ",this.props.positivePercentage(),"%"]})]})})}}]),n}(c.Component),O=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)("p",{children:this.props.message})}}]),n}(c.Component);O.defaultProps={message:""};var f=O,v=(n(14),n(15),function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={good:0,neutral:0,bad:0},t.handelClick=function(e){var n=e.target.textContent;t.setState(Object(o.a)({},n,t.state[n]+1))},t.countTotal=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPercentage=function(){return t.countTotal()?Math.round(t.state.good/t.countTotal()*100):0},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{title:"Please Leave Feedback",children:Object(b.jsx)(d,{options:this.state,onLeaveFeedback:this.handelClick})}),Object(b.jsx)(h,{title:"Statistics",children:this.countTotal()>0?Object(b.jsx)(p,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotal,positivePercentage:this.countPercentage}):Object(b.jsx)(f,{message:"No feedback given"})})]})}}]),n}(c.Component));s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7b861304.chunk.js.map