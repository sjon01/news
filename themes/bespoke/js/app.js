if ("loading" in HTMLImageElement.prototype) {
    let e = document.querySelectorAll('img[loading="lazy"]');
    e.forEach(e => {
        e.src = (void 0 !== e.dataset.src ? e.dataset : e).src
    })
} else {
    let e = document.createElement("script");
    e.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js", document.body.appendChild(e)
}
window.addEventListener("load", function() {
    var e, t, n, o = document.getElementById("main"),
        o = (null != typeof o && null != o && (o = new Splide("#main", {
            type: "loop",
            pagination: !1,
            arrows: !1,
            cover: !0,
            breakpoints: {
                991: {
                    perPage: 1,
                    padding: "8%",
                    arrows: !0,
                    focus: "center",
                    cover: !1,
                    autoplay: !0,
                    flickMaxPages: 3,
                    updateOnMove: !0
                }
            }
        }), e = new Splide("#thumbnail", {
            isNavigation: !0,
            direction: "ttb",
            height: "45rem",
            wheel: !0,
            perPage: 4,
            pagination: !1,
            dragMinThreshold: {
                mouse: 4,
                touch: 10
            }
        }), o.sync(e), o.mount(), e.mount()), document.getElementById("reviewSlider"));
    null != typeof o && null != o && (t = new Splide("#reviewSlider", {
        fixedWidth: 270,
        pagination: !1,
        arrows: !1,
        autoplay: !1,
        type: "loop",
        gap: 55,
        breakpoints: {
            767: {
                gap: 6,
                arrows: !1
            }
        }
    }), n = t.root.querySelector(".slider-dots"), t.on("mounted move", function() {
        var e = t.Components.Controller.getEnd() + 1,
            e = Math.min((t.index + 1) / e, 1);
        n.style.width = String(100 * e) + "%"
    }), t.mount())
});
let menu = () => {
        let t = window.location.origin + window.location.pathname,
            o = document.querySelectorAll(".nav-min-menu > .have-child > a");
        document.querySelectorAll(".nav-min-menu a").forEach(e => {
            e.href === t && e.parentElement.classList.add("active")
        }), o.forEach(n => {
            n.addEventListener("click", e => {
                function t() {
                    window.innerWidth < 993 ? setTimeout(() => {
                        document.querySelector(".nav-min-close").style.position = "fixed"
                    }, 250) : document.querySelector(".nav-min-close").style.position = "absolute"
                }
                e.preventDefault(), n.parentElement.classList.toggle("active"), n.nextElementSibling.classList.toggle("active"), o.forEach(e => {
                    e !== n && (e.parentElement.classList.remove("active"), e.nextElementSibling.classList.remove("active"))
                }), t(), window.addEventListener("resize", t)
            })
        }), document.querySelector(".header-min-navToggle").addEventListener("click", () => {
            document.querySelector(".nav-min").classList.add("active")
        }), document.querySelector(".nav-min-close").addEventListener("click", () => {
            document.querySelector(".nav-min").classList.remove("active"), document.querySelector(".nav-min-close").style.position = "absolute", document.querySelectorAll(".child-menu").forEach(e => {
                e.classList.remove("active")
            })
        }), document.querySelectorAll(".child-menu-close").forEach(e => {
            e.addEventListener("click", () => {
                e.parentElement.classList.remove("active"), e.parentElement.parentElement.previousElementSibling.classList.remove("active")
            })
        })
    },
    btnFilter = (menu(), document.querySelector(".btn-filter"));
if (null != typeof btnFilter && null != btnFilter) {
    let e = () => {
        btnFilter.addEventListener("click", e => {
            document.querySelector(".filter").classList.add("active"), e.target.classList.add("active"), document.querySelector(".filter-btns").classList.add("active")
        }), document.querySelector(".filter-close").addEventListener("click", () => {
            document.querySelector(".filter").classList.remove("active"), document.querySelector(".btn-filter").classList.remove("active"), document.querySelector(".filter-btns").classList.remove("active")
        })
    };
    e()
}
let moreBtn = document.querySelectorAll(".btn-readMore"),
    accordion = (null != typeof moreBtn && null != moreBtn && Object.keys(moreBtn).forEach(e => {
        moreBtn[e].addEventListener("click", e => {
            e.target.classList.contains("collapsed") ? e.target.classList.remove("collapsed") : e.target.classList.add("collapsed"), document.querySelector(".cms-elps").classList.toggle("active")
        })
    }), document.querySelector("#accordionExample"));
if (null != typeof accordion && null != accordion) {
    let n = accordion.querySelectorAll(".accordion-button"),
        o = accordion.querySelectorAll(".accordion-collapse"),
        e = () => {
            Object.keys(n).forEach((e, t) => {
                991 < window.innerWidth || 0 == t ? n[e].classList.remove("collapsed") : n[e].classList.add("collapsed")
            }), Object.keys(o).forEach((e, t) => {
                991 < window.innerWidth ? (o[e].classList.add("show"), o[e].removeAttribute("data-bs-parent")) : (0 == t ? o[e].classList.add("show") : o[e].classList.remove("show"), o[e].setAttribute("data-bs-parent", "#accordionExample"))
            })
        };
    e(), window.addEventListener("resize", e)
}

function update_booking_image(e, t) {
    document.querySelector("#booking_image_" + t).setAttribute("src", e.options[e.selectedIndex].dataset.filename)
}