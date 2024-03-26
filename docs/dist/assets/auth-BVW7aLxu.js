import{u as r,j as e}from"./index-Bh6drHFT.js";const i={title:"Authentication",description:"undefined"};function a(n){const t={a:"a",blockquote:"blockquote",code:"code",div:"div",h1:"h1",header:"header",p:"p",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"authentication",children:["Authentication",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authentication",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"Currently, only an EOA (Externally Owned Account) can be the owner of a CyberWallet."}),`
`]}),`
`,e.jsxs(t.p,{children:["In theory, CyberWallet can use any authentication model to verify the owner's identity. However, we currently use the ",e.jsx(t.a,{href:"https://github.com/zerodevapp/kernel/blob/main/src/validator/ECDSAValidator.sol",children:e.jsx(t.code,{children:"ECDSAValidator"})})," as the default validator to validate signatures by ",e.jsx(t.a,{href:"https://github.com/zerodevapp/kernel/blob/eafc8f7694b641c28d64c0631b062d0df167ee22/src/Kernel.sol#L87C106-L87C106",children:"ZeroDev Kernel Validation mechanism"}),"."]}),`
`,e.jsx(t.p,{children:"Each CyberWallet has one owner, and the signature is verified using ECDSA. Therefore, the owner of a CyberWallet cannot be another smart contract wallet because a smart contract wallet cannot sign messages using ECDSA. However, this can be supported by using other validators in the future."})]})}function s(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{s as default,i as frontmatter};