allwords = JSON.parse($("#data-question").val())._questions;
$(".textstyle6.StyleW10").each(function(index,e){$(this).val(allwords[index]._chineseWord)});