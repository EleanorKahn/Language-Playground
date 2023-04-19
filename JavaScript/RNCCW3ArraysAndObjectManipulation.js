const INSTRUMENT_TYPE_STRING = 0;
const INSTRUMENT_TYPE_PERCUSSION = 1;
const INSTRUMENT_TYPE_WIND = 2;

const instruments = [
  { 
    id: 0,
    name: 'guitar',
    type: INSTRUMENT_TYPE_STRING
  },
  { 
    id: 1,
    name: 'xylophone',
    type: INSTRUMENT_TYPE_PERCUSSION
  },
  {
    id: 2,
    name: 'zither',
    type: INSTRUMENT_TYPE_STRING
  },
  { 
    id: 3,
    name: 'bagpipes',
    type: INSTRUMENT_TYPE_WIND
  },
];

const sortItems = (objArr) => {
    return (
      [...objArr].sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)

    );
} 

console.log(sortItems(instruments));
console.log(instruments); 

const getType = (objArr, type) => objArr.filter((itemType) => itemType.type === type);
console.log(getType(instruments, INSTRUMENT_TYPE_STRING)); 

const getNames = (objArr) => objArr.map(instrument => instrument.name);
console.log(getNames(instruments));

console.log(getNames(getType(instruments, INSTRUMENT_TYPE_STRING)));