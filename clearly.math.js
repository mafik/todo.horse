/*
  This file is part of Clearly provides bindings to MathJax. This file
  is subject to GPLv3 (see http://www.gnu.org/licenses/).

  Authors: Marek Rogalski
 */

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
