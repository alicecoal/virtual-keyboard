const KEYS_RU = [
    ['ё', 'Ё', 'Ё', 'ё'], ['1', '!', '1', '!'], ['2', '"', '2', '"'], ['3', '№', '3', '№'], ['4', ';', '4', ';'], ['5', '%', '5', '%'], ['6', ':', '6', ':'], ['7', '?', '7', '?'], ['8', '*', '8', '*'], ['9', '(', '9', '('], ['0', ')', '0', ')'], ['-', '_', '-', '_'], ['=', '+', '=', '+'], ['Backspace', 'Backspace', 'Backspace', 'Backspace'],
    ['Tab', 'Tab', 'Tab', 'Tab'], ['й', 'Й', 'Й', 'й'], ['ц', 'Ц', 'Ц', 'ц'], ['у', 'У', 'У', 'у'], ['к', 'К', 'К', 'к'], ['е', 'Е', 'Е', 'е'], ['н', 'Н', 'Н', 'н'], ['г', 'Г', 'Г', 'г'], ['ш', 'Ш', 'Ш', 'ш'], ['щ', 'Щ', 'Щ', 'щ'], ['з', 'З', 'З', 'з'], ['х', 'Х', 'Х', 'х'], ['ъ', 'Ъ', 'Ъ', 'ъ'], ['\\', '/', '\\', '/'], ['Del', 'Del', 'Del', 'Del'],
    ['Caps Lock', 'Caps Lock', 'Caps Lock', 'Caps Lock'], ['ф', 'Ф', 'Ф', 'ф'], ['ы', 'Ы', 'Ы', 'ы'], ['в', 'В', 'В', 'в'], ['а', 'А', 'А', 'а'], ['п', 'П', 'П', 'п'], ['р', 'Р', 'Р', 'р'], ['о', 'О', 'О', 'о'], ['л', 'Л', 'Л', 'л'], ['д', 'Д', 'Д', 'д'], ['ж', 'Ж', 'Ж', 'ж'], ['э', 'Э', 'Э', 'э'], ['Enter', 'Enter', 'Enter', 'Enter'],
    ['Shift', 'Shift', 'Shift', 'Shift'], ['я', 'Я', 'Я', 'я'], ['ч', 'Ч', 'Ч', 'ч'], ['с', 'С', 'С', 'с'], ['м', 'М', 'М', 'м'], ['и', 'И', 'И', 'и'], ['т', 'Т', 'Т', 'т'], ['ь', 'Ь', 'Ь', 'ь'], ['б', 'Б', 'Б', 'б'], ['ю', 'Ю', 'Ю', 'ю'], ['.', ',', '.', ','], ['↑', '↑', '↑', '↑'], ['Shift', 'Shift', 'Shift', 'Shift'],
    ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ['Win', 'Win', 'Win', 'Win'], ['Alt', 'Alt', 'Alt', 'Alt'], [' ', ' ', ' ', ' '], ['Alt', 'Alt', 'Alt', 'Alt'], ['←', '←', '←', '←'], ['↓', '↓', '↓', '↓'], ['→', '→', '→', '→'], ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']];
  const KEYS_EN = [
    ['`', '~', '`', '~'], ['1', '!', '1', '!'], ['2', '@', '2', '@'], ['3', '#', '3', '#'], ['4', '$', '4', '$'], ['5', '%', '5', '%'], ['6', '^', '6', '^'], ['7', '&', '7', '&'], ['8', '*', '8', '*'], ['9', '(', '9', '('], ['0', ')', '0', ')'], ['-', '_', '-', '_'], ['=', '+', '=', '+'], ['Backspace', 'Backspace', 'Backspace', 'Backspace'],
    ['Tab', 'Tab', 'Tab', 'Tab'], ['q', 'Q', 'Q', 'q'], ['w', 'W', 'W', 'w'], ['e', 'E', 'E', 'e'], ['r', 'R', 'R', 'r'], ['t', 'T', 'T', 't'], ['y', 'Y', 'Y', 'y'], ['u', 'U', 'U', 'u'], ['i', 'I', 'I', 'i'], ['o', 'O', 'O', 'o'], ['p', 'P', 'P', 'p'], ['[', '{', '[', '{'], [']', '}', ']', '}'], ['\\', '|', '\\', '|'], ['Del', 'Del', 'Del', 'Del'],
    ['Caps Lock', 'Caps Lock', 'Caps Lock', 'Caps Lock'], ['a', 'A', 'A', 'a'], ['s', 'S', 'S', 's'], ['d', 'D', 'D', 'd'], ['f', 'F', 'F', 'f'], ['g', 'G', 'G', 'g'], ['h', 'H', 'H', 'h'], ['j', 'J', 'J', 'j'], ['k', 'K', 'K', 'k'], ['l', 'L', 'L', 'l'], [';', ':', ';', ':'], ['\'', '"', '\'', '"'], ['Enter', 'Enter', 'Enter', 'Enter'],
    ['Shift', 'Shift', 'Shift', 'Shift'], ['z', 'Z', 'Z', 'z'], ['x', 'X', 'X', 'x'], ['c', 'C', 'C', 'c'], ['v', 'V', 'V', 'v'], ['b', 'B', 'B', 'b'], ['n', 'N', 'N', 'n'], ['m', 'M', 'M', 'm'], [',', '<', ',', '<'], ['.', '>', '.', '>'], ['/', '?', '/', '?'], ['↑', '↑', '↑', '↑'], ['Shift', 'Shift', 'Shift', 'Shift'],
    ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ['Win', 'Win', 'Win', 'Win'], ['Alt', 'Alt', 'Alt', 'Alt'], [' ', ' ', ' ', ' '], ['Alt', 'Alt', 'Alt', 'Alt'], ['←', '←', '←', '←'], ['↓', '↓', '↓', '↓'], ['→', '→', '→', '→'], ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']];
  const KEY_CODES = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
  if (!localStorage.getItem('language')) localStorage.setItem('language', 'RU');

  const bodyContent = 
  `<div class="container">
    <div class="main">
      <p class="title">Virtual Keyboard created on Windows OS</p>
      <textarea autofocus spellcheck="false" id="text" class="input-text" placeholder="Write the text..."></textarea>
      <div class="keyboard" id="keyboard"></div>
    </div>
    <p class="description">To switch language press Shift + Alt</p>                      
    </div>`;

  const createHTML = () => {
    document.body.insertAdjacentHTML('afterbegin', bodyContent);
    const KEYBOARD = document.querySelector('#keyboard');  
    for (let i = 0; i < 64; i += 1) {
    let j;
    if (i == 14) j = 50; 
    if (i == 13) j = 100; 
    if (i == 41 || i == 54 || i == 42) j = 88; 
    if (i == 58) j = 350; 
    const kol = `<div id="Key${i}" class="key" style="width: ${j}px;">
    <span class="EN ${localStorage.getItem('language') === 'RU' ? 'hidden' : ''}">
        <span class="keyDown">${KEYS_EN[i][0]}</span>
        <span class="shift hidden">${KEYS_EN[i][1]}</span>
        <span class="caps hidden">${KEYS_EN[i][2]}</span>
        <span class="shift-caps hidden">${KEYS_EN[i][3]}</span>
    </span>
    <span class="RU ${localStorage.getItem('language') === 'EN' ? 'hidden' : ''}">
        <span class="keyDown">${KEYS_RU[i][0]}</span>
        <span class="shift hidden">${KEYS_RU[i][1]}</span>
        <span class="caps hidden">${KEYS_RU[i][2]}</span>
        <span class="shift-caps hidden">${KEYS_RU[i][3]}</span>
    </span>
    </div>`;
    KEYBOARD.insertAdjacentHTML('beforeend', kol);
    }
  };
  createHTML();
  
  let pressKey = [];
  let keyPressMouse = false;
  let k = 0;
  let CapsPress = false;
  let ShiftPress = false;
  const INPUT_TEXT = document.querySelector('#text');
  
  const addSymbol = (text, typeKey, posKeyInAlph, alphType, posCursor, specSymbol) => {
    let returnVal;
    if (!specSymbol) {
      returnVal = text.slice(0, posCursor) + alphType[posKeyInAlph][typeKey] + text.slice(posCursor);
    } else {
      returnVal = text.slice(0, posCursor) + specSymbol + text.slice(posCursor);
    }
    return returnVal;
  };
  const delSymbol = (text, posCursor, deleteType) => {
    if (deleteType && !posCursor) return text;
    return deleteType ? text.slice(0, posCursor - 1) + text.slice(posCursor)
      : text.slice(0, posCursor) + text.slice(posCursor + 1);
  };
  
  const switchLanguage = () => {
    if (localStorage.getItem('language') === 'RU') localStorage.setItem('language', 'EN'); else localStorage.setItem('language', 'RU');
    if (localStorage.getItem('language') === 'RU') {
      for (let i = 0; i < 64; i += 1) {
        document.querySelector(`#Key${i} > span.EN`).classList.add('hidden');
        document.querySelector(`#Key${i} > span.RU`).classList.remove('hidden');
      }
    } else {
      for (let i = 0; i < 64; i += 1) {
        document.querySelector(`#Key${i} > span.EN`).classList.remove('hidden');
        document.querySelector(`#Key${i} > span.RU`).classList.add('hidden');
      }
    }
  };
  const keyDown = () => {
    for (let i = 0; i < 64; i += 1) {
      document.querySelector(`#Key${i} > span.EN > span.keyDown`).classList.remove('hidden');
      document.querySelector(`#Key${i} > span.RU > span.keyDown`).classList.remove('hidden');
      document.querySelector(`#Key${i} > span.EN > span.shift`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.RU > span.shift`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.EN > span.caps`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.RU > span.caps`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.EN > span.shift-caps`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.RU > span.shift-caps`).classList.add('hidden');
    }
  };
  const keyShift = () => {
    for (let i = 0; i < 64; i += 1) {
      document.querySelector(`#Key${i} > span.EN > span.keyDown`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.RU > span.keyDown`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.EN > span.shift`).classList.remove('hidden');
      document.querySelector(`#Key${i} > span.RU > span.shift`).classList.remove('hidden');
      document.querySelector(`#Key${i} > span.EN > span.caps`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.RU > span.caps`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.EN > span.shift-caps`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.RU > span.shift-caps`).classList.add('hidden');
    }
  };
  const keyCaps = () => {
    for (let i = 0; i < 64; i += 1) {
      document.querySelector(`#Key${i} > span.EN > span.keyDown`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.RU > span.keyDown`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.EN > span.shift`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.RU > span.shift`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.EN > span.caps`).classList.remove('hidden');
      document.querySelector(`#Key${i} > span.RU > span.caps`).classList.remove('hidden');
      document.querySelector(`#Key${i} > span.EN > span.shift-caps`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.RU > span.shift-caps`).classList.add('hidden');
    }
  };
  const keyShiftCaps = () => {
    for (let i = 0; i < 64; i += 1) {
      document.querySelector(`#Key${i} > span.EN > span.keyDown`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.RU > span.keyDown`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.EN > span.shift`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.RU > span.shift`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.EN > span.caps`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.RU > span.caps`).classList.add('hidden');
      document.querySelector(`#Key${i} > span.EN > span.shift-caps`).classList.remove('hidden');
      document.querySelector(`#Key${i} > span.RU > span.shift-caps`).classList.remove('hidden');
    }
  };
  const func = (i) => {
    keyPressMouse = i;
    document.querySelector(`#Key${i}`).classList.add('key-down');
  };
  const func2 = (i) => {
    let type = false;
    const cursorPosition = INPUT_TEXT.selectionStart;
    if (!ShiftPress && !CapsPress) type = 0;
    if (ShiftPress && !CapsPress) type = 2;
    if (!ShiftPress && CapsPress) type = 3;
    if (ShiftPress && CapsPress) type = 4;
    INPUT_TEXT.value = localStorage.getItem('language') === 'EN' ? addSymbol(INPUT_TEXT.value, type, i, KEYS_EN, cursorPosition)
      : addSymbol(INPUT_TEXT.value, type, i, KEYS_RU, cursorPosition);
    INPUT_TEXT.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  };
  const mouseClickEvent = () => {
    for (let i = 0; i < 64; i += 1) {
      if (i !== 29) {
        document.querySelector(`#Key${i}`).addEventListener('mousedown', () => { func(i); });
        document.querySelector(`#Key${i}`).addEventListener('mouseup', () => {
          document.querySelector(`#Key${i}`).classList.remove('key-down');
        });
      }
    }
    document.addEventListener('mouseup', () => {
      if (keyPressMouse === false) return;
      if ((keyPressMouse === 42 || keyPressMouse === 54)) ShiftPress = !ShiftPress;
      if (!ShiftPress && !CapsPress) keyDown();
      if (ShiftPress && !CapsPress) keyShift();
      if (!ShiftPress && CapsPress) keyCaps();
      if (ShiftPress && CapsPress) keyShiftCaps();
      document.querySelector(`#Key${keyPressMouse}`).classList.remove('key-down');
      keyPressMouse = false;
    });
    document.querySelector('#Key29').addEventListener('mousedown', () => {
      CapsPress = !CapsPress;
      if (CapsPress) document.querySelector('#Key29').classList.add('key-down'); else document.querySelector('#Key29').classList.remove('key-down');
    });
    document.querySelector('#Key42').addEventListener('mousedown', () => {
      ShiftPress = !ShiftPress;
    });
    document.querySelector('#Key54').addEventListener('mousedown', () => {
      ShiftPress = !ShiftPress;
    });
  
    for (let i = 0; i < 64; i += 1) {
      if ((i >= 0 && i < 13)
      || (i > 14 && i < 28)
      || (i > 29 && i < 41)
      || (i > 42 && i < 54)
      || (i === 58)
      || (i > 59 && i < 63)) {
        document.querySelector(`#Key${i}`).addEventListener('mousedown', () => { func2(i); });
      }
      if (i === 14) {
        document.querySelector('#Key14').addEventListener('mousedown', () => {
          const cursorPosition = INPUT_TEXT.selectionStart;
          INPUT_TEXT.value = addSymbol(INPUT_TEXT.value, false, 14, KEYS_EN, cursorPosition, '    ');
          INPUT_TEXT.setSelectionRange(cursorPosition + 4, cursorPosition + 4);
        });
      }
      if (i === 41) {
        document.querySelector('#Key41').addEventListener('mousedown', () => {
          const cursorPosition = INPUT_TEXT.selectionStart;
          INPUT_TEXT.value = addSymbol(INPUT_TEXT.value, false, 41, KEYS_EN, cursorPosition, '\n');
          INPUT_TEXT.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
        });
      }
      if (i === 13) {
        document.querySelector('#Key13').addEventListener('mousedown', () => {
          const cursorPosition = INPUT_TEXT.selectionStart;
          INPUT_TEXT.value = delSymbol(INPUT_TEXT.value, cursorPosition, true);
          if (cursorPosition) INPUT_TEXT.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
        });
      }
      if (i === 28) {
        document.querySelector('#Key28').addEventListener('mousedown', () => {
          const cursorPosition = INPUT_TEXT.selectionStart;
          INPUT_TEXT.value = delSymbol(INPUT_TEXT.value, cursorPosition, false);
          INPUT_TEXT.setSelectionRange(cursorPosition, cursorPosition);
        });
      }
    }
  };
  
  document.addEventListener('mousedown', () => {
    if (!ShiftPress && !CapsPress) keyDown();
    if (ShiftPress && !CapsPress) keyShift();
    if (!ShiftPress && CapsPress) keyCaps();
    if (ShiftPress && CapsPress) keyShiftCaps();
  });
  
  window.onblur = () => {
    k = 0;
    ShiftPress = false;
    document.querySelector('#Key56').classList.remove('key-down');
    if (pressKey.length !== 0) {
      for (let i = 0; i < pressKey.length; i += 1) {
        document.querySelector(`#Key${pressKey[i]}`).classList.remove('key-down');
      }
    }
    pressKey = [];
    if (CapsPress) keyCaps(); else keyDown();
  };
  
  document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    e.preventDefault();
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight' || e.code === 'AltLeft' || e.code === 'AltRight') k += 1;
    if (k === 2) switchLanguage();
  
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') ShiftPress = !ShiftPress;
    if (e.code === 'CapsLock') CapsPress = !CapsPress;
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight' || e.code === 'CapsLock') {
      if (!ShiftPress && !CapsPress) keyDown();
      if (ShiftPress && !CapsPress) keyShift();
      if (!ShiftPress && CapsPress) keyCaps();
      if (ShiftPress && CapsPress) keyShiftCaps();
    }
  
    if (KEY_CODES.includes(e.code)) {
      document.querySelector(`#Key${KEY_CODES.indexOf(e.code)}`).classList.toggle('key-down');
    }
    if (e.code !== 'CapsLock') pressKey.push(KEY_CODES.indexOf(e.code));
  });
  
  document.addEventListener('keyup', (e) => {
    if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight' || e.code === 'AltLeft' || e.code === 'AltRight') && k) k -= 1;
  
    if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && ShiftPress) ShiftPress = !ShiftPress;
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      if (!ShiftPress && !CapsPress) keyDown();
      if (ShiftPress && !CapsPress) keyShift();
      if (!ShiftPress && CapsPress) keyCaps();
      if (ShiftPress && CapsPress) keyShiftCaps();
    }
  
    const numOfKey = KEY_CODES.indexOf(e.code);
    if (KEY_CODES.includes(e.code) && e.code !== 'CapsLock') {
      document.querySelector(`#Key${numOfKey}`).classList.remove('key-down');
    }
  
    if (pressKey.includes(numOfKey)) pressKey.splice(pressKey.indexOf(numOfKey), 1);
  });
  
  mouseClickEvent();
  
  document.addEventListener('keydown', (e) => {
    e.preventDefault();
    const numberOfKey = KEY_CODES.indexOf(e.code);
    let type = false;
    const cursorPosition = INPUT_TEXT.selectionStart;
    if ((numberOfKey >= 0 && numberOfKey < 13)
    || (numberOfKey > 14 && numberOfKey < 28)
    || (numberOfKey > 29 && numberOfKey < 41)
    || (numberOfKey > 42 && numberOfKey < 54)
    || (numberOfKey === 58)
    || (numberOfKey > 59 && numberOfKey < 63)) {
      if (!ShiftPress && !CapsPress) type = 0;
      if (ShiftPress && !CapsPress) type = 2;
      if (!ShiftPress && CapsPress) type = 3;
      if (ShiftPress && CapsPress) type = 4;
      INPUT_TEXT.value = localStorage.getItem('language') === 'EN' ? addSymbol(INPUT_TEXT.value, type, numberOfKey, KEYS_EN, cursorPosition)
        : addSymbol(INPUT_TEXT.value, type, numberOfKey, KEYS_RU, cursorPosition);
      INPUT_TEXT.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
    }
    if (numberOfKey === 14) {
      INPUT_TEXT.value = addSymbol(INPUT_TEXT.value, type, numberOfKey, KEYS_EN, cursorPosition, '    ');
      INPUT_TEXT.setSelectionRange(cursorPosition + 4, cursorPosition + 4);
    }
    if (numberOfKey === 41) {
      INPUT_TEXT.value = addSymbol(INPUT_TEXT.value, type, numberOfKey, KEYS_EN, cursorPosition, '\n');
      INPUT_TEXT.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
    }
    if (numberOfKey === 13) {
      INPUT_TEXT.value = delSymbol(INPUT_TEXT.value, cursorPosition, true);
      if (cursorPosition) INPUT_TEXT.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
    }
    if (numberOfKey === 28) {
      INPUT_TEXT.value = delSymbol(INPUT_TEXT.value, cursorPosition, false);
      INPUT_TEXT.setSelectionRange(cursorPosition, cursorPosition);
    }
  });
  document.addEventListener('mousedown', () => {
    document.querySelector('#text').focus();
  });
  document.addEventListener('mouseup', () => {
    document.querySelector('#text').focus();
  });