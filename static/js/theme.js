(function () {
  var root = document.documentElement;
  var key = "mark-academic-theme";
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function storedTheme() {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(key, theme);
    } catch (error) {
      return;
    }
  }

  function preferredTheme() {
    return media.matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      var next = theme === "dark" ? "浅色模式" : "深色模式";
      button.setAttribute("aria-label", "切换" + next);
      button.setAttribute("title", "切换" + next);
      button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    });
  }

  applyTheme(storedTheme() || root.dataset.theme || preferredTheme());

  document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
    button.addEventListener("click", function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark";
      setStoredTheme(next);
      applyTheme(next);
    });
  });

  media.addEventListener("change", function () {
    if (!storedTheme()) {
      applyTheme(preferredTheme());
    }
  });
})();
