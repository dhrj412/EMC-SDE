// To fetch the Alienware value and move it to the first

let a1 = $("[data-slick-index=1]")[0].children[0];
let a2 = $("[data-slick-index=4]")[0].children[0];

$("[data-slick-index=1]").empty();
$("[data-slick-index=4]").empty();

$("[data-slick-index=4]").append(a1);
$("[data-slick-index=1]").append(a2);

// To display the Alienware section text beneath the strip
let d1 = $("div.fran.active")[0];
let d2 = $("div.fran.active")[3];

$("div.fran.active")[0].replaceWith(d2);
$("div.fran.active")[2].after(d1);

// to fetch all sort filters and render them underneath the section text
const list = $("nav.anav.active")
  .find("h5")
  .find("a");
list.map(index => {
  $(
    '<a classname="all-links-text" href=" "style="padding-right: 8px;">' +
      list[index].innerText +
      "</a>"
  ).insertBefore(".fran.active");
});

// to check checkboxes upon click
const chk = $("nav.anav.active")
  .find("ul")
  .find("input")
  .attr("checked", "checked");
