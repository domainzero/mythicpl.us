var q = ['This page was not prepared!','Me not that kind of orc.','This 404 is merely a setback!','Work is da poop!','Mrglglglgrlglglll!','Thrall\'s balls! It looks like you\'re lost!'];
document.getElementById('quote').innerHTML = '<em>' + q[Math.floor(Math.random()*q.length)] + '</em> Use your hearthstone and head back home.';

document.getElementById('hearth').addEventListener('click', function() {
    document.getElementById('castbar').classList.add('castbar--active');
    setTimeout(function() { window.location.href = '/'; }, 1000);
});
