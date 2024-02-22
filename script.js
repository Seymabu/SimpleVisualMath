{\rtf1\ansi\ansicpg1254\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Bloklar ve i\uc0\u351 levleri tan\u305 mlayaca\u287 \u305 z\
\
const blocks = \{\
    add: \{\
        label: "+",\
        fn: (a, b) => a + b,\
    \},\
    subtract: \{\
        label: "-",\
        fn: (a, b) => a - b,\
    \},\
    multiply: \{\
        label: "*",\
        fn: (a, b) => a * b,\
    \},\
    divide: \{\
        label: "/",\
        fn: (a, b) => a / b,\
    \},\
\};\
\
// G\'f6rsel programlama aray\'fcz\'fcn\'fc olu\uc0\u351 turaca\u287 \u305 z\
\
const app = new Vue(\{\
    el: "#app",\
    data: \{\
        blocks,\
        selectedBlock: null,\
        inputs: [],\
        output: null,\
    \},\
    methods: \{\
        // Bir blo\uc0\u287 u se\'e7mek i\'e7in\
        selectBlock(block) \{\
            this.selectedBlock = block;\
        \},\
\
        // Bir girdi eklemek i\'e7in\
        addInput() \{\
            this.inputs.push(\{ value: "" \});\
        \},\
\
        // Hesaplamay\uc0\u305  yapmak i\'e7in\
        calculate() \{\
            const values = this.inputs.map(input => input.value);\
            const result = this.selectedBlock.fn(...values);\
            this.output = result;\
        \},\
    \},\
\});\
}