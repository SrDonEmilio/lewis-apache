jQuery(document).ready(function () {
  jQuery.getJSON("/json/geometrias.json", function (geometrias) {
    let items = [];
    jQuery.each(geometrias, function (key, val) {
      for (let i = 2; i <= 6; i++) {
        //console.log(val[i].length)
        items.push(
          `<p class="mdl-typography--headline">Número de Electrones: ${i}</p>`
        );
        for (let j = 0; j < val[i].length; j++) {
          //console.log(val[i][j])
          let name = val[i][j].nombre;
          let img = val[i][j].img;
          id = name.replace(/\s/g, "-");
          id = id.toLowerCase();
          //img = img.replace(/\s/g, '-')
          //console.log(name, id, img)
          items.push(
            `<div class="item-title" id="${val[i][j].nombre}">${val[i][j].nombre}</div>`
          );
          items.push(`<div class="imgGif"><img src="${img}" /></div>`);
        }
      }
    });

    $("<div/>", {
      html: items.join(""),
    }).appendTo(document.getElementById("menu-toggle"));
    console.log(items);

    jQuery(".item-title").click(function () {
      jQuery(this).next().slideToggle();
    });
  });
});
