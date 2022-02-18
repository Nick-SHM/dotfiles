window.MathJax = {
    tex: {
        inlineMath: [["$", "$"]],
        displayMath: [["$$", "$$"]],
        processEscapes: true,
        processEnvironments: true,
        packages: { "[+]": ["physics"] },
        macros: {
            C: "\\mathbb{C}",
            I: "\\mathbb{I}",
            N: "\\mathbb{N}",
            Q: "\\mathbb{Q}",
            R: "\\mathbb{R}",
            Z: "\\mathbb{Z}",

            e: "\\mathrm{e}",
            ii: "\\mathrm{i}",

            vv: ["\\vb*{#1}", 1],
            VV: ["\\vb{#1}", 1],
            mm: ["\\vb*{#1}", 1],
            MM: ["\\vb{#1}", 1],

            // deprecated, but kept for compatibility
            eps: "\\varepsilon",
            ph: "\\varphi",

            opn: ["\\operatorname{#1}", 1],

            id: "\\operatorname{Id}",
            sgn: "\\operatorname{sgn}",

            set: ["\\{ {#1} \\}", 1],
            Set: ["\\left\\{ {#1} \\right\\}", 1],
            angb: ["\\langle {#1} \\rangle", 1],
            Angb: ["\\left\\langle {#1} \\right\\rangle", 1],

            ceil: ["\\lceil {#1} \\rceil", 1],
            Ceil: ["\\left\\lceil {#1} \\right\\rceil", 1],
            floor: ["\\lfloor {#1} \\rfloor", 1],
            Floor: ["\\left\\lfloor {#1} \\right\\rfloor", 1],

            qwhere: "\\qq{where}",
            Qwhere: "\\qq*{where}",

            Id: "\\vb{I}",
            trsp: "\\mathrm{T}",
            adj: "\\operatorname{adj}",
            diag: "\\operatorname{diag}",
            Span: "\\operatorname{span}",

            DD: "\\mathrm{D}",
        },
    },
    loader: { load: ["[tex]/physics"] },
};
