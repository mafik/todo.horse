// This file is a part of Clearly and provides bindings to MathJax.
// SPDX-License-Identifier: AGPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright (C) 2012-2024 Marek Rogalski

(function () {
  window.MathJax = {
    tex: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
    },
    svg: {
      fontCache: "global",
    },
    startup: {
      typeset: false,
    },
    loader: {
      load: ["input/tex", "input/asciimath", "output/chtml", "ui/menu"],
    },
  };

  var script = document.createElement("script");
  script.src = "/mathjax/tex-chtml.js";
  script.async = true;
  document.head.appendChild(script);

  $Clearly.typesetMath = function () {
    MathJax.typeset($Clearly.active);
    $Clearly.save();
  };

  $Clearly.nav.bind(
    { ctrl: false, shift: false, code: $Clearly.Keycodes["M"] },
    $Clearly.typesetMath,
  );
})();
