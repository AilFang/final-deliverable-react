function WestWingMap({ rooms }) {
  console.log("Room value:", rooms);

  {
    rooms.map((room) => {
      const roomMatch = document.querySelector(`#${room.id}`);
      console.log("Rect value", roomMatch);
      if (roomMatch && room.isChecked) {
        roomMatch.setAttribute("class", "fill");
      } else if (roomMatch) {
        roomMatch.setAttribute("class", "empty");
      }
    });
  }
  return (
    <>
      <svg
        width="388"
        height="1001"
        viewBox="0 0 388 1001"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {rooms.map((room) => (
          <g id="west wing" transform="rotate(90deg)">
            <line
              id="Line 418"
              x1="12.5"
              y1="1"
              x2="75.5"
              y2="1"
              stroke="black"
            />
            <line
              id="Line 419"
              x1="75.5"
              y1="1"
              x2="166.5"
              y2="1"
              stroke="black"
            />
            <line
              id="Line 420"
              x1="166.5"
              y1="1"
              x2="361.5"
              y2="1"
              stroke="black"
            />
            <line
              id="Line 421"
              x1="362"
              y1="0.5"
              x2="362"
              y2="82.5"
              stroke="black"
            />
            <line
              id="Line 422"
              x1="362"
              y1="82.5"
              x2="362"
              y2="158.5"
              stroke="black"
            />
            <line
              id="Line 423"
              x1="362"
              y1="158.5"
              x2="362"
              y2="188.5"
              stroke="black"
            />
            <line
              id="Line 424"
              x1="362"
              y1="187.5"
              x2="362"
              y2="260.5"
              stroke="black"
            />
            <line
              id="Line 425"
              x1="362"
              y1="261.5"
              x2="362"
              y2="365.5"
              stroke="black"
            />
            <line
              id="Line 426"
              x1="362"
              y1="364.5"
              x2="362"
              y2="443.5"
              stroke="black"
            />
            <line
              id="Line 427"
              x1="362.5"
              y1="443"
              x2="386.5"
              y2="443"
              stroke="black"
            />
            <line
              id="Line 428"
              x1="387"
              y1="442.5"
              x2="387"
              y2="553.5"
              stroke="black"
            />
            <line
              id="Line 429"
              x1="387"
              y1="553.5"
              x2="387"
              y2="675.5"
              stroke="black"
            />
            <line
              id="Line 430"
              x1="387.5"
              y1="676"
              x2="270.5"
              y2="676"
              stroke="black"
            />
            <line
              id="Line 431"
              x1="347"
              y1="676.5"
              x2="347"
              y2="791.5"
              stroke="black"
            />
            <line
              id="Line 432"
              x1="345.5"
              y1="791"
              x2="385.5"
              y2="791"
              stroke="black"
            />
            <line
              id="Line 433"
              x1="385"
              y1="791.5"
              x2="385"
              y2="833.5"
              stroke="black"
            />
            <line
              id="Line 434"
              x1="385"
              y1="833.5"
              x2="385"
              y2="913.5"
              stroke="black"
            />
            <line
              id="Line 435"
              x1="385"
              y1="913.5"
              x2="385"
              y2="999.5"
              stroke="black"
            />
            <line
              id="Line 436"
              x1="384.5"
              y1="1000"
              x2="292.5"
              y2="1000"
              stroke="black"
            />
            <line
              id="Line 437"
              x1="293.5"
              y1="1000"
              x2="198.5"
              y2="1000"
              stroke="black"
            />
            <line
              id="Line 438"
              x1="201"
              y1="999.5"
              x2="201"
              y2="913.5"
              stroke="black"
            />
            <line
              id="Line 439"
              x1="200.5"
              y1="913"
              x2="292.5"
              y2="913"
              stroke="black"
            />
            <line
              id="Line 440"
              x1="293"
              y1="913.5"
              x2="293"
              y2="999.5"
              stroke="black"
            />
            <line
              id="Line 441"
              x1="293.5"
              y1="913"
              x2="384.5"
              y2="913"
              stroke="black"
            />
            <line
              id="Line 442"
              x1="293"
              y1="913.5"
              x2="293"
              y2="833.5"
              stroke="black"
            />
            <line
              id="Line 443"
              x1="293.5"
              y1="834"
              x2="384.5"
              y2="834"
              stroke="black"
            />
            <line
              id="Line 444"
              x1="199.5"
              y1="1000"
              x2="166.5"
              y2="1000"
              stroke="black"
            />
            <line
              id="Line 445"
              x1="166"
              y1="999.5"
              x2="166"
              y2="913.5"
              stroke="black"
            />
            <line
              id="Line 446"
              x1="166.5"
              y1="913"
              x2="83.5"
              y2="913"
              stroke="black"
            />
            <line
              id="Line 447"
              x1="85"
              y1="912.5"
              x2="85"
              y2="1000.5"
              stroke="black"
            />
            <line
              id="Line 448"
              x1="85.5"
              y1="1000"
              x2="166.5"
              y2="1000"
              stroke="black"
            />
            <line
              id="Line 449"
              x1="84.5"
              y1="1000"
              x2="0.5"
              y2="1000"
              stroke="black"
            />
            <line
              id="Line 450"
              x1="1"
              y1="999.5"
              x2="0.999996"
              y2="913.5"
              stroke="black"
            />
            <line
              id="Line 451"
              x1="0.5"
              y1="913"
              x2="83.5"
              y2="913"
              stroke="black"
            />
            <line
              id="Line 452"
              x1="1"
              y1="914.5"
              x2="0.999996"
              y2="833.5"
              stroke="black"
            />
            <line
              id="Line 453"
              x1="0.5"
              y1="831"
              x2="84.5"
              y2="831"
              stroke="black"
            />
            <line
              id="Line 454"
              x1="85"
              y1="830.5"
              x2="85"
              y2="913.5"
              stroke="black"
            />
            <line
              id="Line 455"
              x1="1"
              y1="833.5"
              x2="0.999999"
              y2="806.5"
              stroke="black"
            />
            <line
              id="Line 456"
              x1="1"
              y1="806.5"
              x2="0.999996"
              y2="723.5"
              stroke="black"
            />
            <line
              id="Line 457"
              x1="1.5"
              y1="724"
              x2="85.5"
              y2="724"
              stroke="black"
            />
            <line
              id="Line 458"
              x1="86"
              y1="724.5"
              x2="86"
              y2="804.5"
              stroke="black"
            />
            <line
              id="Line 459"
              x1="86.5"
              y1="804"
              x2="0.5"
              y2="804"
              stroke="black"
            />
            <line
              id="Line 460"
              x1="86.5"
              y1="804"
              x2="166.5"
              y2="804"
              stroke="black"
            />
            <line
              id="Line 461"
              x1="166"
              y1="803.5"
              x2="166"
              y2="724.5"
              stroke="black"
            />
            <line
              id="Line 462"
              x1="166.5"
              y1="724"
              x2="86.5"
              y2="724"
              stroke="black"
            />
            <line
              id="Line 463"
              x1="166"
              y1="723.5"
              x2="166"
              y2="639.5"
              stroke="black"
            />
            <line
              id="Line 464"
              x1="166.5"
              y1="639"
              x2="85.5"
              y2="639"
              stroke="black"
            />
            <line
              id="Line 465"
              x1="86"
              y1="638.5"
              x2="86"
              y2="724.5"
              stroke="black"
            />
            <line
              id="Line 466"
              x1="86.5"
              y1="639"
              x2="1.5"
              y2="639"
              stroke="black"
            />
            <line
              id="Line 467"
              x1="1"
              y1="638.5"
              x2="0.999996"
              y2="723.5"
              stroke="black"
            />
            <line
              id="Line 468"
              x1="1"
              y1="638.5"
              x2="0.999991"
              y2="443.5"
              stroke="black"
            />
            <line
              id="Line 469"
              x1="0.5"
              y1="443"
              x2="11.5"
              y2="443"
              stroke="black"
            />
            <line
              id="Line 470"
              x1="12"
              y1="443.5"
              x2="12"
              y2="336.5"
              stroke="black"
            />
            <line
              id="Line 471"
              x1="11.5"
              y1="336"
              x2="92.5"
              y2="336"
              stroke="black"
            />
            <line
              id="Line 472"
              x1="12"
              y1="335.5"
              x2="12"
              y2="261.5"
              stroke="black"
            />
            <line
              id="Line 473"
              x1="12.5"
              y1="261"
              x2="92.5"
              y2="261"
              stroke="black"
            />
            <line
              id="Line 474"
              x1="93"
              y1="261.5"
              x2="93"
              y2="335.5"
              stroke="black"
            />
            <line
              id="Line 475"
              x1="92.5"
              y1="336"
              x2="166.5"
              y2="336"
              stroke="black"
            />
            <line
              id="Line 477"
              x1="165.5"
              y1="261"
              x2="92.5"
              y2="261"
              stroke="black"
            />
            <line
              id="Line 478"
              x1="166"
              y1="262.5"
              x2="166"
              y2="335.5"
              stroke="black"
            />
            <line
              id="Line 479"
              x1="166"
              y1="263.5"
              x2="166"
              y2="184.5"
              stroke="black"
            />
            <line
              id="Line 480"
              x1="166.5"
              y1="184"
              x2="92.5"
              y2="184"
              stroke="black"
            />
            <line
              id="Line 481"
              x1="93"
              y1="184.5"
              x2="93"
              y2="261.5"
              stroke="black"
            />
            <line
              id="Line 482"
              x1="92.4995"
              y1="184"
              x2="12.4996"
              y2="183.915"
              stroke="black"
            />
            <line
              id="Line 483"
              x1="12"
              y1="184.5"
              x2="12"
              y2="261.5"
              stroke="black"
            />
            <line
              id="Line 484"
              x1="12"
              y1="157.5"
              x2="12"
              y2="184.5"
              stroke="black"
            />
            <line
              id="Line 485"
              x1="12"
              y1="158.5"
              x2="12"
              y2="41.5"
              stroke="black"
            />
            <line
              id="Line 486"
              x1="12.5"
              y1="41"
              x2="55.5"
              y2="41"
              stroke="black"
            />
            <line
              id="Line 487"
              x1="56"
              y1="1.5"
              x2="56"
              y2="41.5"
              stroke="black"
            />
            <line
              id="Line 488"
              x1="56"
              y1="41.5"
              x2="56"
              y2="82.5"
              stroke="black"
            />
            <line
              id="Line 489"
              x1="55.5"
              y1="83"
              x2="166.5"
              y2="83"
              stroke="black"
            />
            <line
              id="Line 490"
              x1="166"
              y1="82.5"
              x2="166"
              y2="1.5"
              stroke="black"
            />
            <line
              id="Line 491"
              x1="166"
              y1="81.5"
              x2="166"
              y2="157.5"
              stroke="black"
            />
            <line
              id="Line 492"
              x1="166.5"
              y1="158"
              x2="89.5"
              y2="158"
              stroke="black"
            />
            <line
              id="Line 493"
              x1="89"
              y1="158.5"
              x2="89"
              y2="83.5"
              stroke="black"
            />
            <line
              id="Line 494"
              x1="88.5"
              y1="158"
              x2="12.5"
              y2="158"
              stroke="black"
            />
            <line
              id="Line 495"
              x1="12"
              y1="0.5"
              x2="12"
              y2="41.5"
              stroke="black"
            />
            <line
              id="Line 496"
              x1="201.5"
              y1="184"
              x2="278.5"
              y2="184"
              stroke="black"
            />
            <line
              id="Line 497"
              x1="278"
              y1="184.5"
              x2="278"
              y2="260.5"
              stroke="black"
            />
            <line
              id="Line 498"
              x1="277.5"
              y1="184"
              x2="360.5"
              y2="184"
              stroke="black"
            />
            <line
              id="Line 499"
              x1="278.5"
              y1="261"
              x2="362.5"
              y2="261"
              stroke="black"
            />
            <line
              id="Line 500"
              x1="278.5"
              y1="261"
              x2="200.5"
              y2="261"
              stroke="black"
            />
            <line
              id="Line 501"
              x1="201"
              y1="183.5"
              x2="201"
              y2="260.5"
              stroke="black"
            />
            <line
              id="Line 502"
              x1="202"
              y1="0.5"
              x2="202"
              y2="157.5"
              stroke="black"
            />
            <line
              id="Line 503"
              x1="201.5"
              y1="158"
              x2="361.5"
              y2="158"
              stroke="black"
            />
            <line
              id="Line 504"
              x1="240"
              y1="261.5"
              x2="240"
              y2="336.5"
              stroke="black"
            />
            <line
              id="Line 505"
              x1="240.5"
              y1="336"
              x2="318.5"
              y2="336"
              stroke="black"
            />
            <line
              id="Line 506"
              x1="319"
              y1="336.5"
              x2="319"
              y2="260.5"
              stroke="black"
            />
            <line
              id="Line 507"
              x1="318.5"
              y1="336"
              x2="361.5"
              y2="336"
              stroke="black"
            />
            <line
              id="Line 508"
              x1="361.5"
              y1="443"
              x2="200.5"
              y2="443"
              stroke="black"
            />
            <line
              id="Line 509"
              x1="200"
              y1="442.5"
              x2="200"
              y2="528.5"
              stroke="black"
            />
            <line
              id="Line 510"
              x1="199.5"
              y1="528"
              x2="332.5"
              y2="528"
              stroke="black"
            />
            <line
              id="Line 511"
              x1="356.5"
              y1="552"
              x2="386.5"
              y2="552"
              stroke="black"
            />
            <line
              id="Line 512"
              x1="331.846"
              y1="528.139"
              x2="356.846"
              y2="552.139"
              stroke="black"
            />
            <line
              id="Line 513"
              x1="200"
              y1="527.5"
              x2="200"
              y2="585.5"
              stroke="black"
            />
            <line
              id="Line 514"
              x1="200"
              y1="586.5"
              x2="200"
              y2="662.5"
              stroke="black"
            />
            <line
              id="Line 515"
              x1="199.5"
              y1="662"
              x2="270.5"
              y2="662"
              stroke="black"
            />
            <line
              id="Line 516"
              x1="270"
              y1="662.5"
              x2="270"
              y2="676.5"
              stroke="black"
            />
            <line
              id="Line 517"
              x1="199.5"
              y1="586"
              x2="332.5"
              y2="586"
              stroke="black"
            />
            <line
              id="Line 518"
              x1="356.5"
              y1="560"
              x2="386.5"
              y2="560"
              stroke="black"
            />
            <line
              id="Line 519"
              x1="356.86"
              y1="559.847"
              x2="331.86"
              y2="585.847"
              stroke="black"
            />
            <line
              id="Line 520"
              x1="200"
              y1="661.5"
              x2="200"
              y2="791.5"
              stroke="black"
            />
            <line
              id="Line 521"
              x1="199.5"
              y1="792"
              x2="270.5"
              y2="792"
              stroke="black"
            />
            <line
              id="Line 522"
              x1="270"
              y1="791.5"
              x2="270"
              y2="740.5"
              stroke="black"
            />
            <line
              id="Line 523"
              x1="269.5"
              y1="740"
              x2="294.5"
              y2="740"
              stroke="black"
            />
            <line
              id="Line 524"
              x1="294"
              y1="740.5"
              x2="294"
              y2="791.5"
              stroke="black"
            />
            <line
              id="Line 525"
              x1="293.5"
              y1="791"
              x2="345.5"
              y2="791"
              stroke="black"
            />
            <line
              id="Line 526"
              x1="12.5"
              y1="443"
              x2="166.5"
              y2="443"
              stroke="black"
            />
            <line
              id="Line 527"
              x1="166"
              y1="443.5"
              x2="166"
              y2="638.5"
              stroke="black"
            />
            <rect
              className="empty"
              id="r73"
              x="56.5"
              y="1.5"
              width="109"
              height="81"
            />
            <rect
              className="empty"
              id="r64"
              x="278.5"
              y="184.5"
              width="83"
              height="76"
            />
            <line
              id="Line 528"
              x1="201"
              y1="260.5"
              x2="201"
              y2="336.5"
              stroke="black"
            />
            <line
              id="Line 529"
              x1="201.5"
              y1="336"
              x2="239.5"
              y2="336"
              stroke="black"
            />
            <rect
              className="empty"
              id="r63"
              x="201.5"
              y="184.5"
              width="76"
              height="76"
            />
            <rect
              className="empty"
              id="r62"
              x="93.5"
              y="184.5"
              width="72"
              height="76"
            />
            <rect
              className="empty"
              id="r81"
              x="12.5"
              y="184.5"
              width="80"
              height="76"
            />
            <rect
              className="empty"
              id="r51"
              x="12.5"
              y="261.5"
              width="80"
              height="74"
            />
            <rect
              className="empty"
              id="r52"
              x="93.5"
              y="261.5"
              width="72"
              height="74"
            />
            <rect
              className="empty"
              id="r59"
              x="240.5"
              y="261.5"
              width="78"
              height="74"
            />
            <rect
              className="empty"
              id="r21"
              x="86.5"
              y="639.5"
              width="79"
              height="84"
            />
            <rect
              className="empty"
              id="r09"
              x="1.5"
              y="831.5"
              width="83"
              height="81"
            />
            <rect
              className="empty"
              id="r12"
              x="1.5"
              y="724.5"
              width="84"
              height="79"
            />
            <rect
              className="empty"
              id="r13"
              x="86.5"
              y="724.5"
              width="79"
              height="79"
            />
            <rect
              className="empty"
              id="r22"
              x="1.5"
              y="639.5"
              width="84"
              height="84"
            />
            <rect
              className="empty"
              id="r08"
              x="1.5"
              y="913.5"
              width="83"
              height="86"
            />
            <rect
              className="empty"
              id="r07"
              x="85.5"
              y="913.5"
              width="80"
              height="86"
            />
            <rect
              className="empty"
              id="r04"
              x="202.5"
              y="913.5"
              width="90"
              height="86"
            />
            <rect
              className="empty"
              id="r03"
              x="293.5"
              y="913.5"
              width="91"
              height="86"
            />
            <rect
              className="empty"
              id="r02"
              x="293.5"
              y="835.5"
              width="91"
              height="77"
            />
            <path
              className="empty"
              id="art"
              d="M332 586L357 560H386.5V675.5H270.5V661.5H200.5V586H332Z"
            />
            <path
              className="empty"
              id="photo"
              d="M386.5 443.5V552H357L331.5 527.5L200.5 528V443.5H386.5Z"
            />
            <line
              id="Line 530"
              x1="270"
              y1="675.5"
              x2="270"
              y2="740.5"
              stroke="black"
            />
            <line
              id="Line 531"
              x1="294.5"
              y1="740"
              x2="346.5"
              y2="740"
              stroke="black"
            />
            <rect
              className="empty"
              id="breakroom"
              x="270.5"
              y="676.5"
              width="76"
              height="63"
            />
          </g>
        ))}
      </svg>
    </>
  );
}

export default WestWingMap;
