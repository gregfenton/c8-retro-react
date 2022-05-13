export function LeftMenuBar(props) {
  const switchPage = props.switchPage;

  return (
    <div
      style={{
        padding: 3,
        borderWidth: 2,
        borderColor: 'red',
        borderStyle: 'solid',
        height: '500px',
      }}
    >
      <button onClick={() => switchPage("main")}>main</button>
      <button onClick={() => switchPage("details")}>details</button>
    </div>
  );
}
