function action(){
            window.localStorage['text'] = document.getElementById('text').value;
        }
function action1() {
            document.getElementById('text').value = window.localStorage['text'];
        }
        