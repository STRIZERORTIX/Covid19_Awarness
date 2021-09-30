let progress = document.getElementById('pbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
	let progressHeight = (window.pageYOffset / totalHeight) * 100;
	progress.style.height = progressHeight + "%";
}