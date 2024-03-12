import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <img class="logo" src="../images/otherLogo.png" />
        <ul>
          <b>
            <li className="title">ABOUT</li>
          </b>

          <li>
            <a
              href="https://sites.google.com/site/gsmstenvironmental/past-officers?authuser=0"
              target="_blank"
            >
              Officers
            </a>
          </li>
          <li>
            <a
              href="https://sites.google.com/site/gsmstenvironmental/website-builder-about?authuser=0"
              target="_blank"
            >
              Activities
            </a>
          </li>
        </ul>
        <ul>
          <b>
            <li className="title">CONTACT US</li>
          </b>
          <li>
            <a href="https://www.instagram.com/ecosgsmst/" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeCwv_ksJfR5QCoHMS1A863r7e1_I7TausQyc88VoAKM6SLJQ/viewform"
              target="_blank"
            >
              Email
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
