var stairs = ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"];
for(i = 4; i >= 0; i--) {
    stairs[i] = "#";
    document.write(stairs.join("") + "<br />");
}