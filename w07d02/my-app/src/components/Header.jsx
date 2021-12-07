const Header = (props) => {
  console.log('props', props);

  const ourChecker = true;

  return (
    <div>
      <h2>Header and Navbar</h2>
      <h2>Username: {props.username}</h2>
      { props.children }

      { ourChecker && <h2>Does this show up???</h2> }
    </div>
  );
};

export default Header;
