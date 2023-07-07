function AlertButton(props) {
  return (
    <div>
      <button onClick={() => alert(`pressed ${props.message}`)}>
        {props.message}
      </button>
    </div>
  );
}

export default function Button() {
  return <AlertButton message={"hello"} />;
}
