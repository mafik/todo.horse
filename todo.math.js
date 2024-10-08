// This file is a part of todo.horse and provides bindings to MathJax.
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
      load: ["input/asciimath"],
    },
    options: {
      menuOptions: {
        settings: {
          assistiveMml: false,
          texHints: false,
          collapsible: false,
          explorer: false,
        },
      },
    },
  };

  var script = document.createElement("script");
  script.src = "/mathjax/tex-svg.js";
  script.async = true;
  document.head.appendChild(script);

  $TODO.typesetMath = function () {
    MathJax.typeset($TODO.active);
    $TODO.save();
  };

  $TODO.nav.bind(
    { ctrl: false, shift: false, code: $TODO.Keycodes["M"] },
    $TODO.typesetMath,
  );
})();
