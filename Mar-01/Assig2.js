function sum() {
  var input_field1 = document.getElementById("inp1");
  var input_field2 = document.getElementById("inp2");
  var sum_value = parseInt(input_field1.value) + parseInt(input_field2.value);
  var output_field = document.getElementById("result");
  output_field.innerText = sum_value;
}
