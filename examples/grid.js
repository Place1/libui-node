var libui = require('../index.js');

libui.Ui.init();
var win = new libui.UiWindow('Forms window', 800, 600, false);
win.margined = 1;
win.onClosing(function () {
	libui.stopLoop();
});

var name = new libui.UiEntry();
var surname = new libui.UiEntry();
var age = new libui.UiSlider(0, 100);
var JSONData = new libui.UiMultilineEntry();

name.onChanged(setJSON);
surname.onChanged(setJSON);
age.onChanged(setJSON);

name.text = 'Andrea';
surname.text = 'Parodi';
age.value = 40;

var grid = new libui.UiGrid();
grid.padded = true;
grid.append(new libui.UiLabel('name'), 0, 0, 2, 1, 0, 0, 0, 1);
grid.append(new libui.UiLabel('surname'), 0, 1, 2, 1, 0, 0, 0, 1);
grid.append(new libui.UiLabel('age'), 0, 2, 2, 1, 0, 0, 0, 1);

grid.append(name, 2, 0, 2, 1, 0, 0, 0, 1);
grid.append(surname, 2, 1, 2, 1, 0, 0, 0, 1);
grid.append(age, 2, 2, 2, 1, 0, 0, 0, 1);

grid.append(JSONData, 4, 0, 1, 3, 1, 0, 1, 0);

win.setChild(grid);
win.show();
libui.startLoop();

function setJSON() {
	var data = {
		name: name.text,
		surname: surname.text,
		age: age.value
	};
	JSONData.text = JSON.stringify(data, null, 4);
}

