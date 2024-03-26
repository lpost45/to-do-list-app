function newItem() {

    let list = $('#list');
    let li = $('<li></li>');
    let inputValue = $("#input").val();
    li.append(inputValue);
    inputValue === "" ? alert("You must write something") : $("#list").append(li);

    li.on("dblclick", function() {
        li.addClass("strike")
    });

    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);
    function deleteListItem() {
        li.addClass("delete");
    }
    crossOutButton.on("click", deleteListItem);

    $("#list").sortable();
}