function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
      <p>{props.role}</p>
    </header>
  );
}

export default Header;