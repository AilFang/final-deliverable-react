import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        {/* <a href="/">
          <img class="logo" src="../images/ecos-logo.png" />
        </a> */}
        <ul>
          <b>
            <li className="title">ABOUT</li>
          </b>

          <li>
            <a href="">Officers</a>
          </li>
          <li>
            <a href="">Activities</a>
          </li>
        </ul>
        <ul>
          <b>
            <li className="title">CONTACT US</li>
          </b>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Email</a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
