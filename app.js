$("#clear").hide();
var clear = $("<button>Clear All</button>");
$(clear).prepend("#bottom-container").hide();

$("#btn-add").on("click", function () {
    var content = $("#input").val();
    var newItem = $("<div></div>")
    $(newItem).text(content);
    if (content != "") {
        var removeBtn = $("<button>Remove</button>");
        var subContainer = $("<div></div>")
        $(subContainer).prepend(removeBtn, "<br>");
        $(subContainer).prepend(newItem);

        var box = $("<input>").attr("type", "radio");
        var boxText = $("<label>Done</label>");
        $(subContainer).prepend(box);
        $(subContainer).prepend(boxText);
        $("#container").prepend(subContainer);

        $(subContainer).css({ "display": "flex", "justify-content": "space-around" });
    }
    else { alert("Please enter dailys tasks") }
    $("#clear").show().appendTo("#container");
    $("#clear").on("click", function () {
        $("#container").empty()
    })
    $("#input").val("");
    $(removeBtn).on("click", function () {
        $(subContainer).remove();
    })
    $(box).on("click", function () {
        $(newItem).css("text-decoration", "line-through")
    })

    $(clear).show().on("click", function () {
        $("#container").empty();
    })

})















/*$("#btn-add").click(function() {
    var content = $("#add-content").val()
    if (content != "") {
        var newItem = $("<li>")
        $(newItem).text()=$(content)

        var removeBtn = $("<button>")
        $(removeBtn).text("删除")
        var paragrahp = $("<br>")
        $("#container").prepend($(paragrahp))
        $("#container").prepend($(removeBtn))
        $("#container").prepend($(newItem))

        var box = $("<input>")
        box.attr("type", "checkbox")
        $("#container").prepend($(box))
        var boxText.text("已完成")
        $("#container").prepend($(boxText))

        $(removeBtn).click(function () {
            container.removeChild(newItem)
            container.removeChild(removeBtn)
            container.removeChild(box)
            container.removeChild(boxText)
        })
        $(box).click(function(){
            newItem.style.textDecoration=("line-through")
        })
    }
    else { alert("请输入新项目") }

})
*/
