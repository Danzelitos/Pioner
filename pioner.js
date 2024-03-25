const burger = document.querySelector('.btn-burger');

burger.addEventListener('click', function(){
	const navigation = document.querySelector('.navigation');
	this.classList.toggle('active');
	navigation.classList.toggle('open')
})


const arrowDownList = document.querySelectorAll('.arrow-down');
const optionList = document.querySelectorAll('.check_list');

arrowDownList.forEach((arrowDown, index) => {
  arrowDown.addEventListener('click', function() {
    const currentList = optionList[index];
    currentList.classList.toggle('openList');
    arrowDown.classList.toggle('arrow-up');
    
    if (currentList.classList.contains('openList')) {
      currentList.style.maxHeight = currentList.scrollHeight + "px";
    } else {
      currentList.style.maxHeight = 0;
    }
  });
});
