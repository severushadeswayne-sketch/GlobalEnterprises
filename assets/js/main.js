// Global Enterprises — small progressive enhancements. Everything works without JS.
(function () {
  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
  }

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Gallery filters
  var filterBar = document.querySelector(".filters");
  if (filterBar) {
    var tiles = document.querySelectorAll(".tile");
    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-filter]");
      if (!btn) return;
      var f = btn.dataset.filter;
      filterBar.querySelectorAll("button").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b === btn));
      });
      tiles.forEach(function (t) {
        t.hidden = !(f === "all" || t.dataset.cat === f);
      });
    });
  }

  // Lightbox
  var box = document.getElementById("lightbox");
  if (box && typeof box.showModal === "function") {
    var boxImg = box.querySelector("img");
    var boxCap = box.querySelector(".lightbox-caption");
    document.querySelectorAll(".tile button").forEach(function (b) {
      b.addEventListener("click", function () {
        var img = b.querySelector("img");
        boxImg.src = img.src;
        boxImg.alt = img.alt;
        boxImg.width = img.width;
        boxImg.height = img.height;
        boxImg.setAttribute("width", img.getAttribute("width"));
        boxImg.setAttribute("height", img.getAttribute("height"));
        boxCap.textContent = b.closest(".tile").querySelector("figcaption").firstChild.textContent.trim();
        box.showModal();
      });
    });
    box.querySelector(".lightbox-close").addEventListener("click", function () { box.close(); });
    box.addEventListener("click", function (e) { if (e.target === box) box.close(); });
  }
})();
