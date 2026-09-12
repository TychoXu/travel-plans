/* Dark mode toggle: shared by every page. Theme is remembered in localStorage. */
(function () {
	var KEY = "tp-theme";
	var root = document.documentElement;

	function current() {
		return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
	}

	function apply(theme) {
		if (theme === "dark") root.setAttribute("data-theme", "dark");
		else root.removeAttribute("data-theme");
		var btn = document.querySelector(".theme-toggle");
		if (btn) {
			var dark = theme === "dark";
			btn.textContent = dark ? "☀" : "☾";
			btn.setAttribute("aria-label", dark ? "切换到浅色模式" : "切换到深色模式");
			btn.setAttribute("title", dark ? "浅色模式" : "深色模式");
			btn.setAttribute("aria-pressed", dark ? "true" : "false");
		}
	}

	function build() {
		if (document.querySelector(".theme-toggle")) return;
		var btn = document.createElement("button");
		btn.type = "button";
		btn.className = "theme-toggle";
		btn.addEventListener("click", function () {
			var next = current() === "dark" ? "light" : "dark";
			try {
				localStorage.setItem(KEY, next);
			} catch (e) {}
			apply(next);
		});
		document.body.appendChild(btn);
		apply(current());
	}

	if (document.readyState === "loading")
		document.addEventListener("DOMContentLoaded", build);
	else build();

	/* Follow the system setting only while the user has not chosen manually. */
	if (window.matchMedia) {
		var mq = window.matchMedia("(prefers-color-scheme: dark)");
		var onChange = function (e) {
			var stored = null;
			try {
				stored = localStorage.getItem(KEY);
			} catch (err) {}
			if (!stored) apply(e.matches ? "dark" : "light");
		};
		if (mq.addEventListener) mq.addEventListener("change", onChange);
		else if (mq.addListener) mq.addListener(onChange);
	}
})();
