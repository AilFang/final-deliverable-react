function WildWestMap({ rooms }) {
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
        width="521"
        height="781"
        viewBox="0 0 521 781"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {rooms.map((room) => (
          <g id="Wild West">
            <line
              id="Line 532"
              x1="106"
              y1="780.5"
              x2="521"
              y2="780.5"
              stroke="black"
            />
            <line
              id="Line 533"
              x1="106.5"
              y1="780"
              x2="106.5"
              y2="687"
              stroke="black"
            />
            <line
              id="Line 534"
              x1="106.5"
              y1="687"
              x2="106.5"
              y2="593"
              stroke="black"
            />
            <line
              id="Line 535"
              x1="107"
              y1="686.5"
              x2="223"
              y2="686.5"
              stroke="black"
            />
            <line
              id="Line 536"
              x1="222.5"
              y1="687"
              x2="222.5"
              y2="780"
              stroke="black"
            />
            <line
              id="Line 537"
              x1="222.5"
              y1="687"
              x2="222.5"
              y2="594"
              stroke="black"
            />
            <line
              id="Line 538"
              x1="222"
              y1="594.5"
              x2="106"
              y2="594.5"
              stroke="black"
            />
            <line
              id="Line 539"
              x1="258.5"
              y1="680"
              x2="258.5"
              y2="780"
              stroke="black"
            />
            <line
              id="Line 540"
              x1="258"
              y1="679.5"
              x2="373"
              y2="679.5"
              stroke="black"
            />
            <line
              id="Line 541"
              x1="373.5"
              y1="680"
              x2="373.5"
              y2="780"
              stroke="black"
            />
            <line
              id="Line 542"
              x1="373"
              y1="679.5"
              x2="488"
              y2="679.5"
              stroke="black"
            />
            <line
              id="Line 543"
              x1="488.5"
              y1="680"
              x2="488.5"
              y2="781"
              stroke="black"
            />
            <line
              id="Line 544"
              x1="520.5"
              y1="780"
              x2="520.5"
              y2="577"
              stroke="black"
            />
            <line
              id="Line 545"
              x1="488.5"
              y1="680"
              x2="488.5"
              y2="578"
              stroke="black"
            />
            <line
              id="Line 546"
              x1="488"
              y1="578.5"
              x2="373"
              y2="578.5"
              stroke="black"
            />
            <line
              id="Line 547"
              x1="373.5"
              y1="578"
              x2="373.5"
              y2="680"
              stroke="black"
            />
            <line
              id="Line 548"
              x1="373"
              y1="578.5"
              x2="258"
              y2="578.5"
              stroke="black"
            />
            <line
              id="Line 549"
              x1="258.5"
              y1="579"
              x2="258.5"
              y2="680"
              stroke="black"
            />
            <line
              id="Line 550"
              x1="258.5"
              y1="450"
              x2="258.5"
              y2="541"
              stroke="black"
            />
            <line
              id="Line 551"
              x1="258"
              y1="540.5"
              x2="373"
              y2="540.5"
              stroke="black"
            />
            <line
              id="Line 552"
              x1="373.5"
              y1="541"
              x2="373.5"
              y2="449"
              stroke="black"
            />
            <line
              id="Line 553"
              x1="372"
              y1="540.5"
              x2="488"
              y2="540.5"
              stroke="black"
            />
            <line
              id="Line 554"
              x1="488.5"
              y1="541"
              x2="488.5"
              y2="450"
              stroke="black"
            />
            <line
              id="Line 555"
              x1="488"
              y1="449.5"
              x2="374"
              y2="449.5"
              stroke="black"
            />
            <line
              id="Line 556"
              x1="373"
              y1="449.5"
              x2="258"
              y2="449.5"
              stroke="black"
            />
            <line
              id="Line 557"
              x1="258.5"
              y1="449"
              x2="258.5"
              y2="355"
              stroke="black"
            />
            <line
              id="Line 558"
              x1="258"
              y1="354.5"
              x2="374"
              y2="354.5"
              stroke="black"
            />
            <line
              id="Line 559"
              x1="373.5"
              y1="355"
              x2="373.5"
              y2="449"
              stroke="black"
            />
            <line
              id="Line 560"
              x1="374"
              y1="354.5"
              x2="489"
              y2="354.5"
              stroke="black"
            />
            <line
              id="Line 561"
              x1="488.5"
              y1="355"
              x2="488.5"
              y2="450"
              stroke="black"
            />
            <line
              id="Line 562"
              x1="106"
              y1="354.5"
              x2="223"
              y2="354.5"
              stroke="black"
            />
            <line
              id="Line 563"
              x1="222.5"
              y1="355"
              x2="222.5"
              y2="448"
              stroke="black"
            />
            <line
              id="Line 564"
              x1="223"
              y1="448.5"
              x2="107"
              y2="448.5"
              stroke="black"
            />
            <line
              id="Line 565"
              x1="106.5"
              y1="448"
              x2="106.5"
              y2="355"
              stroke="black"
            />
            <line
              id="Line 582"
              x1="107"
              y1="225.5"
              x2="223"
              y2="225.5"
              stroke="black"
            />
            <line
              id="Line 583"
              x1="222.5"
              y1="225"
              x2="222.5"
              y2="316"
              stroke="black"
            />
            <line
              id="Line 584"
              x1="223"
              y1="316.5"
              x2="107"
              y2="316.5"
              stroke="black"
            />
            <line
              id="Line 585"
              x1="107.5"
              y1="316"
              x2="107.5"
              y2="225"
              stroke="black"
            />
            <line
              id="Line 599"
              x1="24"
              y1="0.5"
              x2="143"
              y2="0.5"
              stroke="black"
            />
            <line
              id="Line 600"
              x1="142.5"
              y1="1"
              x2="142.5"
              y2="91"
              stroke="black"
            />
            <line
              id="Line 601"
              x1="143"
              y1="91.5"
              x2="24"
              y2="91.5"
              stroke="black"
            />
            <line
              id="Line 602"
              x1="24.5"
              y1="91"
              x2="24.5"
              y2="1"
              stroke="black"
            />
            <line
              id="Line 595"
              x1="142"
              y1="0.5"
              x2="260"
              y2="0.5"
              stroke="black"
            />
            <line
              id="Line 596"
              x1="259.5"
              y1="1"
              x2="259.5"
              y2="91"
              stroke="black"
            />
            <line
              id="Line 597"
              x1="260"
              y1="91.5"
              x2="142"
              y2="91.5"
              stroke="black"
            />
            <line
              id="Line 598"
              x1="142.5"
              y1="91"
              x2="142.5"
              y2="1"
              stroke="black"
            />
            <line
              id="Line 588"
              x1="374"
              y1="0.5"
              x2="490"
              y2="0.5"
              stroke="black"
            />
            <line
              id="Line 589"
              x1="489.5"
              y1="1"
              x2="489.5"
              y2="94"
              stroke="black"
            />
            <line
              id="Line 590"
              x1="490"
              y1="91.5"
              x2="374"
              y2="91.5"
              stroke="black"
            />
            <line
              id="Line 591"
              x1="374.5"
              y1="91"
              x2="374.5"
              y2="1"
              stroke="black"
            />
            <line
              id="Line 566"
              x1="106.5"
              y1="448"
              x2="106.5"
              y2="593"
              stroke="black"
            />
            <line
              id="Line 567"
              x1="489"
              y1="420.5"
              x2="521"
              y2="420.5"
              stroke="black"
            />
            <line
              id="Line 568"
              x1="520.5"
              y1="421"
              x2="520.5"
              y2="543"
              stroke="black"
            />
            <line
              id="Line 569"
              x1="520.5"
              y1="543"
              x2="520.5"
              y2="577"
              stroke="black"
            />
            <line
              id="Line 570"
              x1="259.5"
              y1="226"
              x2="259.5"
              y2="317"
              stroke="black"
            />
            <line
              id="Line 571"
              x1="259"
              y1="316.5"
              x2="374"
              y2="316.5"
              stroke="black"
            />
            <line
              id="Line 572"
              x1="374.5"
              y1="317"
              x2="374.5"
              y2="225"
              stroke="black"
            />
            <line
              id="Line 573"
              x1="373"
              y1="316.5"
              x2="489"
              y2="316.5"
              stroke="black"
            />
            <line
              id="Line 574"
              x1="489.5"
              y1="317"
              x2="489.5"
              y2="226"
              stroke="black"
            />
            <line
              id="Line 575"
              x1="489"
              y1="225.5"
              x2="375"
              y2="225.5"
              stroke="black"
            />
            <line
              id="Line 576"
              x1="374"
              y1="225.5"
              x2="259"
              y2="225.5"
              stroke="black"
            />
            <line
              id="Line 577"
              x1="259.5"
              y1="225"
              x2="259.5"
              y2="131"
              stroke="black"
            />
            <line
              id="Line 578"
              x1="259"
              y1="130.5"
              x2="375"
              y2="130.5"
              stroke="black"
            />
            <line
              id="Line 579"
              x1="374.5"
              y1="131"
              x2="374.5"
              y2="225"
              stroke="black"
            />
            <line
              id="Line 580"
              x1="375"
              y1="130.5"
              x2="490"
              y2="130.5"
              stroke="black"
            />
            <line
              id="Line 581"
              x1="489.5"
              y1="131"
              x2="489.5"
              y2="226"
              stroke="black"
            />
            <line
              id="Line 586"
              x1="477.5"
              y1="317"
              x2="477.5"
              y2="355"
              stroke="black"
            />
            <line
              id="Line 587"
              x1="489.5"
              y1="130"
              x2="489.5"
              y2="94"
              stroke="black"
            />
            <line
              id="Line 592"
              x1="374"
              y1="91.5"
              x2="260"
              y2="91.5"
              stroke="black"
            />
            <line
              id="Line 593"
              x1="259.5"
              y1="92"
              x2="259.5"
              y2="2.07866e-08"
              stroke="black"
            />
            <line
              id="Line 594"
              x1="260"
              y1="0.5"
              x2="374"
              y2="0.5"
              stroke="black"
            />
            <line
              id="Line 603"
              x1="107"
              y1="316.5"
              x2="-4.37112e-08"
              y2="316.5"
              stroke="black"
            />
            <line
              id="Line 604"
              x1="0.5"
              y1="316"
              x2="0.499996"
              y2="225"
              stroke="black"
            />
            <line id="Line 605" y1="225.5" x2="107" y2="225.5" stroke="black" />
            <line
              id="Line 606"
              x1="222.5"
              y1="225"
              x2="222.5"
              y2="131"
              stroke="black"
            />
            <line
              id="Line 607"
              x1="223"
              y1="130.5"
              x2="1"
              y2="130.5"
              stroke="black"
            />
            <line
              id="Line 608"
              x1="0.5"
              y1="130"
              x2="0.499996"
              y2="225"
              stroke="black"
            />
            <line
              id="Line 609"
              x1="0.5"
              y1="130"
              x2="0.499998"
              y2="91"
              stroke="black"
            />
            <line
              id="Line 610"
              x1="1"
              y1="91.5"
              x2="24"
              y2="91.5"
              stroke="black"
            />
            <line
              id="Line 611"
              x1="222.5"
              y1="449"
              x2="222.5"
              y2="595"
              stroke="black"
            />
            <rect
              className="empty"
              id="r35"
              x="25"
              y="1"
              width="117"
              height="90"
            />
            <rect
              className="empty"
              id="r32"
              x="143"
              y="1"
              width="116"
              height="90"
            />
            <rect
              className="empty"
              id="r31"
              x="260"
              y="1"
              width="114"
              height="90"
            />
            <rect
              className="empty"
              id="r29"
              x="375"
              y="1"
              width="114"
              height="90"
            />
            <rect
              className="empty"
              id="r28"
              x="375"
              y="131"
              width="114"
              height="94"
            />
            <rect
              className="empty"
              id="r27"
              x="260"
              y="131"
              width="114"
              height="94"
            />
            <rect
              className="empty"
              id="r24"
              x="260"
              y="226"
              width="114"
              height="90"
            />
            <rect
              className="empty"
              id="r23"
              x="375"
              y="226"
              width="114"
              height="90"
            />
            <rect
              className="empty"
              id="r26"
              x="108"
              y="226"
              width="114"
              height="90"
            />
            <rect
              className="empty"
              id="r22"
              x="107"
              y="355"
              width="115"
              height="93"
            />
            <rect
              className="empty"
              id="r21"
              x="259"
              y="355"
              width="114"
              height="94"
            />
            <rect
              className="empty"
              id="r04"
              x="374"
              y="355"
              width="114"
              height="94"
            />
            <rect
              className="empty"
              id="r07"
              x="259"
              y="450"
              width="114"
              height="90"
            />
            <rect
              className="empty"
              id="r06"
              x="374"
              y="450"
              width="114"
              height="90"
            />
            <rect
              className="empty"
              id="r08"
              x="259"
              y="579"
              width="114"
              height="100"
            />
            <rect
              className="empty"
              id="r03"
              x="374"
              y="579"
              width="114"
              height="100"
            />
            <rect
              className="empty"
              id="r09"
              x="259"
              y="680"
              width="114"
              height="100"
            />
            <rect
              className="empty"
              id="r02"
              x="374"
              y="680"
              width="114"
              height="100"
            />
            <rect
              className="empty"
              id="r11"
              x="107"
              y="687"
              width="115"
              height="93"
            />
            <rect
              className="empty"
              id="r12"
              x="107"
              y="595"
              width="115"
              height="91"
            />
            <line
              id="Line 612"
              x1="131.5"
              y1="317"
              x2="131.5"
              y2="355"
              stroke="black"
            />
          </g>
        ))}
      </svg>
    </>
  );
}

export default WildWestMap;
