import { Route, Routes } from 'react-router-dom';

function ShowMyMainNavThingy(props) {
  return <p>MAIN</p>;
}
function ShowMyDetailsNavThingy(props) {
  return <p>DETAILS!!!!</p>;
}

export function NavBar() {
  return (
    <div
      style={{
        padding: 3,
        borderWidth: 2,
        borderColor: 'blue',
        borderStyle: 'solid',
        gridRow: 1,
        gridColumn: '1/3',
      }}
    >
      <Routes>
        <Route path='/' element={<ShowMyMainNavThingy />} />
        <Route path='details' element={<ShowMyDetailsNavThingy />} />
      </Routes>
    </div>
  );
}

// When React see this:
//   <Foo fred={3} barney={[1,2,3]} />
//
// it actually ends up running this:
//    Foo({fred: 3, barney: [1,2,3]})
