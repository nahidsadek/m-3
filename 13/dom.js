function changeTextColor() {
    var paragraphs = document.querySelectorAll('.my-class');

    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = 'red';
      paragraphs[i].style.fontWeight = 'bold';
    }
  }