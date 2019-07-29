var links = ['https://www.boredbutton.com/', 'https://www.inherentlyfunny.com/', 'https://www.youtube.com/', 'https://theuselessweb.com/', 'https://www.amazon.com/', 'https://www.worldsdumbestgame.com/', 'https://www.coolmathgames.com/0-worlds-hardest-game', 'https://noot.space/', 'http://doge2048.com/', 'https://www.csie.ntu.edu.tw/~b01902112/9007199254740992/'];
var button = $('button');
var paragraph =$('.no');



button.on('click', bored);
function bored() {
  var bored1 = Math.random();
  var bored2 = bored1 * links.length;
  var bored3 = Math.floor(bored2);
  var bored4 = links[bored3];
  var bored5 = bored4.link(bored4);

  paragraph.empty();
  paragraph.append(bored5);
  // window.open(links);
}
var attempt = bored();

console.log(attempt);
