class TeamFace {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('mouseover', () => this.rotate());
  }

  rotate() {
    $(this.element).animate({  borderSpacing: -360 }, {
      step: function(now) {
        $(this).css('-webkit-transform','rotate('+now+'deg)'); 
        $(this).css('-moz-transform','rotate('+now+'deg)');
        $(this).css('transform','rotate('+now+'deg)');
      },
      duration:'slow'
  },'linear');
  }
}

let value = 0;
let teamFaces = document.querySelectorAll('.team-face');
Array.from(teamFaces).map(teamface => new TeamFace(teamface));