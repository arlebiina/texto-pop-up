function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}

showTime();

setInterval(function () {
	showTime();
}, 1000);

document.addEventListener('DOMContentLoaded', () => {
  const instruction = document.getElementById('instructions');
  const close_button = document.getElementById('close');
  
  setTimeout(() => {
    if(instructions){
      instructions.showModal();
    }
    
  }, 230);
  
  close_button.addEventListener('click', () => {
  instructions.close();
  });
 
  // adiciona a funcionalidade de fechar o diálogo ao clicar no botão close
  instructions.addEventListener('click', (event) => {
    instructions.close();
    if(event.target === instructions){
      instructions.close();
    }
  }
  );
});
