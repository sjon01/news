$(function() {
    function n(i) {
        i = new RegExp("[?&]" + i + "=([^&#]*)").exec(window.location.href);
        return console.log(i), null != i && i[1]
    }
    $(".remove_filter").on("click", function() {
        window.location = window.location.href.split("?")[0]
    }), $("#short_dropdown span").on("click", function() {
        var i, t = "";
        "" != $(this).data("value") && ("" != (i = n("price")) && (t += "?price=" + i), "" != (i = n("hair")) && (t += "" != t ? "&hair=" + i : "?hair=" + i), "" != (i = n("body_type")) && (t += "" != t ? "&body_type=" + i : "?body_type" + i), "" != (i = n("nationality")) && (t += "" != t ? "&nationality=" + i : "?nationality=" + i), t += "" != t ? "&sort=" + $(this).data("value") : "?sort=" + $(this).data("value"), document.location = t)
    }), $("input[name = 'price'],[name = 'hair_color'],[name = 'body'],[name = 'nationality']").on("click", function() {
        var i, n = "",
            o = "",
            t = "",
            a = "",
            c = "";
        $(".filterprice").find("input").each(function(i, t) {
            $(this).is(":checked") && ("" != o ? o += "-" : n += "?price=", o += $(this).val())
        }), "" != o && (n += o), $(".hair_color").find("input").each(function() {
            $(this).is(":checked") && ("" != t ? t += "-" : n += "" == n ? "?hair=" : "&hair=", t += $(this).val())
        }), "" != t && (n += t), $(".filterbody").find("input").each(function() {
            $(this).is(":checked") && ("" != a ? a += "-" : n += "" == n ? "?body_type=" : "&body_type=", a += $(this).val())
        }), "" != a && (n += a), $(".filternationality").find("input").each(function() {
            $(this).is(":checked") && ("" != c ? c += "-" : n += "" == n ? "?nationality=" : "&nationality=", c += $(this).val())
        }), "" != c && (n += c), "" != n ? document.location = n : (i = location.protocol + "//" + location.host + location.pathname, document.location = i)
    })
});