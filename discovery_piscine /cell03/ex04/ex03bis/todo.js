$(document).ready(function () {
  const $list = $("#ft_list");

  const addTodoNode = (name, txt) => {
    const $node = $("<div></div>").text(txt);
    $node.on("click", function () {
      const check = confirm("Do you want to delete");
      if (check) {
        $node.remove();
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      }
    });
    $list.prepend($node);
  };

  $("#newTodoBtn").on("click", function () {
    let txt = prompt("Please Enter TODO LIST :");
    if (txt === null || txt === "") {
      return;
    }
    const name = new Date().getTime();
    document.cookie = `${name}=${txt}`;
    addTodoNode(name, txt);
  });

  const check = document.cookie;
  if (check.length > 0) {
    const cookies = check.split(";");
    cookies.forEach((element) => {
      const parts = element.trim().split("=");
      addTodoNode(parts[0], parts[1]);
    });
  }
});
