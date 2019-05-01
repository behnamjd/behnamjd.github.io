window.notes = new Array();

// If data exist in database, Load data
if( window.localStorage.getItem('notes') ){
window.notes = JSON.parse(window.localStorage.getItem('notes'));
}

loadnotes();

function addnote(){
    var text = $('#text').val();
	
	if(text=='')
	{
		return;
	}
	
    window.notes.push(text);
    $('#text').val('');
    savenotes();
    loadnotes();
}


function deletenote(i){
  window.notes.splice(i, 1);
  savenotes();
  loadnotes();
}

function loadnotes(){
  $('.list').html('');
  for (var i = 0; i < window.notes.length; i++) {
    $('.list').append('<div class="list-item"><span>'+window.notes[i]+'</span><a href="#?" onclick="deletenote('+i+');">Delete</a></div>');
  }
}

function savenotes(){  
  window.localStorage.setItem('notes', JSON.stringify(window.notes));
}
