function GroundFloorMap({ rooms }) {
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
        width="1139"
        height="420"
        viewBox="0 0 1139 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {rooms.map((room) => (
          <g id="ground floor">
            <line
              id="Line 341"
              x1="112.173"
              y1="20.3843"
              x2="112.173"
              y2="222.429"
              stroke="black"
            />
            <line
              id="Line 342"
              x1="111.673"
              y1="222.674"
              x2="264.683"
              y2="222.674"
              stroke="black"
            />
            <line
              id="Line 343"
              x1="264.183"
              y1="223.174"
              x2="264.183"
              y2="159.802"
              stroke="black"
            />
            <line
              id="Line 344"
              x1="264.683"
              y1="159.557"
              x2="137.67"
              y2="159.557"
              stroke="black"
            />
            <line
              id="Line 345"
              x1="137.427"
              y1="159.057"
              x2="137.427"
              y2="222.429"
              stroke="black"
            />
            <line
              id="Line 346"
              x1="136.927"
              y1="159.557"
              x2="111.673"
              y2="159.557"
              stroke="black"
            />
            <line
              id="Line 347"
              x1="264.683"
              y1="159.302"
              x2="341.931"
              y2="159.302"
              stroke="black"
            />
            <line
              id="Line 348"
              x1="341.689"
              y1="159.802"
              x2="341.689"
              y2="223.174"
              stroke="black"
            />
            <line
              id="Line 349"
              x1="341.189"
              y1="222.929"
              x2="264.683"
              y2="222.929"
              stroke="black"
            />
            <line
              id="Line 350"
              x1="341.431"
              y1="159.057"
              x2="341.431"
              y2="20.3843"
              stroke="black"
            />
            <line
              id="Line 351"
              x1="341.189"
              y1="20.8843"
              x2="189.664"
              y2="20.8843"
              stroke="black"
            />
            <line
              id="Line 352"
              x1="189.421"
              y1="20.3843"
              x2="189.421"
              y2="159.057"
              stroke="black"
            />
            <line
              id="Line 353"
              x1="188.921"
              y1="20.8843"
              x2="111.673"
              y2="20.8843"
              stroke="black"
            />
            <line
              id="Line 354"
              x1="188.921"
              y1="89.4751"
              x2="111.673"
              y2="89.4751"
              stroke="black"
            />
            <line
              id="Line 355"
              x1="135.941"
              y1="257.47"
              x2="135.941"
              y2="329.043"
              stroke="black"
            />
            <line
              id="Line 356"
              x1="135.441"
              y1="328.543"
              x2="213.432"
              y2="328.543"
              stroke="black"
            />
            <line
              id="Line 357"
              x1="212.932"
              y1="329.043"
              x2="212.932"
              y2="257.47"
              stroke="black"
            />
            <line
              id="Line 358"
              x1="213.432"
              y1="257.97"
              x2="135.441"
              y2="257.97"
              stroke="black"
            />
            <line
              id="Line 359"
              x1="213.432"
              y1="257.715"
              x2="291.423"
              y2="257.715"
              stroke="black"
            />
            <line
              id="Line 360"
              x1="291.18"
              y1="258.215"
              x2="291.18"
              y2="329.043"
              stroke="black"
            />
            <line
              id="Line 361"
              x1="291.423"
              y1="328.797"
              x2="213.432"
              y2="328.797"
              stroke="black"
            />
            <line
              id="Line 362"
              x1="135.441"
              y1="328.797"
              x2="74.5343"
              y2="328.797"
              stroke="black"
            />
            <line
              id="Line 363"
              x1="74.777"
              y1="329.043"
              x2="74.777"
              y2="58.4075"
              stroke="black"
            />
            <line
              id="Line 364"
              x1="75.277"
              y1="58.9075"
              x2="1.00004"
              y2="58.9075"
              stroke="black"
            />
            <line
              id="Line 365"
              x1="1.2428"
              y1="58.4075"
              x2="1.2428"
              y2="1.74555"
              stroke="black"
            />
            <line
              id="Line 366"
              x1="1"
              y1="1.24548"
              x2="111.673"
              y2="1.24548"
              stroke="black"
            />
            <line
              id="Line 367"
              x1="112.173"
              y1="1"
              x2="112.173"
              y2="20.3843"
              stroke="black"
            />
            <line
              id="Line 368"
              x1="341.931"
              y1="20.6299"
              x2="523.91"
              y2="20.6299"
              stroke="black"
            />
            <line
              id="Line 369"
              x1="523.91"
              y1="20.6299"
              x2="644.239"
              y2="20.6299"
              stroke="black"
            />
            <line
              id="Line 370"
              x1="644.739"
              y1="20.3843"
              x2="644.739"
              y2="88.975"
              stroke="black"
            />
            <line
              id="Line 371"
              x1="644.239"
              y1="88.7296"
              x2="523.167"
              y2="88.7296"
              stroke="black"
            />
            <line
              id="Line 372"
              x1="523.41"
              y1="88.2296"
              x2="523.41"
              y2="20.3844"
              stroke="black"
            />
            <line
              id="Line 373"
              x1="437.006"
              y1="328.543"
              x2="517.968"
              y2="328.543"
              stroke="black"
            />
            <line
              id="Line 374"
              x1="518.211"
              y1="329.043"
              x2="518.211"
              y2="258.215"
              stroke="black"
            />
            <line
              id="Line 375"
              x1="518.711"
              y1="258.715"
              x2="437.006"
              y2="258.715"
              stroke="black"
            />
            <line
              id="Line 376"
              x1="437.506"
              y1="258.215"
              x2="437.506"
              y2="329.043"
              stroke="black"
            />
            <line
              id="Line 377"
              x1="518.711"
              y1="328.543"
              x2="601.158"
              y2="328.543"
              stroke="black"
            />
            <line
              id="Line 378"
              x1="600.658"
              y1="328.297"
              x2="600.658"
              y2="258.216"
              stroke="black"
            />
            <line
              id="Line 379"
              x1="600.415"
              y1="258.715"
              x2="518.711"
              y2="258.715"
              stroke="black"
            />
            <line
              id="Line 380"
              x1="601.158"
              y1="328.543"
              x2="679.149"
              y2="328.543"
              stroke="black"
            />
            <line
              id="Line 381"
              x1="679.392"
              y1="329.043"
              x2="679.392"
              y2="248.523"
              stroke="black"
            />
            <line
              id="Line 382"
              x1="679.892"
              y1="247.278"
              x2="720.001"
              y2="247.278"
              stroke="black"
            />
            <line
              id="Line 383"
              y1="-0.5"
              x2="346.633"
              y2="-0.5"
              transform="matrix(0.86784 0.496844 -0.494049 0.869434 719.259 247.778)"
              stroke="black"
            />
            <line
              id="Line 384"
              y1="-0.5"
              x2="237.902"
              y2="-0.5"
              transform="matrix(0.496425 -0.86808 0.866473 0.499224 1020.82 420)"
              stroke="black"
            />
            <line
              id="Line 385"
              y1="-0.5"
              x2="380.241"
              y2="-0.5"
              transform="matrix(-0.861457 -0.50783 0.505015 -0.863111 1138.92 213.482)"
              stroke="black"
            />
            <line
              id="Line 386"
              x1="811.362"
              y1="20.8843"
              x2="644.239"
              y2="20.8843"
              stroke="black"
            />
            <line
              id="Line 387"
              y1="-0.5"
              x2="136.934"
              y2="-0.5"
              transform="matrix(-0.509882 0.860245 -0.858565 -0.512705 968.829 114.324)"
              stroke="black"
            />
            <line
              id="Line 388"
              y1="-0.5"
              x2="198.282"
              y2="-0.5"
              transform="matrix(0.861588 0.507608 -0.504794 0.86324 899.009 232.121)"
              stroke="black"
            />
            <line
              id="Line 389"
              y1="-0.5"
              x2="64.1243"
              y2="-0.5"
              transform="matrix(-0.509665 0.860373 -0.858695 -0.512487 843.301 244.795)"
              stroke="black"
            />
            <line
              id="Line 391"
              y1="-0.5"
              x2="63.38"
              y2="-0.5"
              transform="matrix(-0.492211 0.870476 -0.868892 -0.495002 930.948 295.493)"
              stroke="black"
            />
            <line
              id="Line 393"
              y1="-0.5"
              x2="64.2614"
              y2="-0.5"
              transform="matrix(0.531695 -0.846936 0.845138 0.534547 754.912 267.907)"
              stroke="black"
            />
            <line
              id="Line 394"
              y1="-0.5"
              x2="402.609"
              y2="-0.5"
              transform="matrix(-0.8671 -0.498135 0.495337 -0.868701 1052.76 364.083)"
              stroke="black"
            />
            <line
              id="Line 395"
              x1="703.66"
              y1="164.03"
              x2="679.149"
              y2="164.03"
              stroke="black"
            />
            <line
              id="Line 396"
              x1="679.649"
              y1="164.276"
              x2="679.649"
              y2="248.523"
              stroke="black"
            />
            <line
              id="Line 398"
              y1="-0.5"
              x2="62.7321"
              y2="-0.5"
              transform="matrix(-0.497294 0.867582 -0.86597 -0.500095 988.884 329.043)"
              stroke="black"
            />
            <line
              id="Line 399"
              y1="-0.5"
              x2="207.758"
              y2="-0.5"
              transform="matrix(-0.868767 -0.495221 0.49243 -0.870352 900.494 232.121)"
              stroke="black"
            />
            <line
              id="Line 400"
              x1="719.501"
              y1="129.98"
              x2="719.501"
              y2="20.3844"
              stroke="black"
            />
            <line
              id="Line 401"
              x1="477.858"
              y1="224.911"
              x2="644.239"
              y2="224.911"
              stroke="black"
            />
            <line
              id="Line 402"
              y1="-0.5"
              x2="101.395"
              y2="-0.5"
              transform="matrix(0.000209289 -1 1 0.000210859 644.239 224.665)"
              stroke="black"
            />
            <line
              id="Line 404"
              x1="477.616"
              y1="123.27"
              x2="477.616"
              y2="225.411"
              stroke="black"
            />
            <line
              id="Line 406"
              x1="601.158"
              y1="258.461"
              x2="679.892"
              y2="258.461"
              stroke="black"
            />
            <line
              id="Line 407"
              y1="-0.5"
              x2="138.084"
              y2="-0.5"
              transform="matrix(-0.521774 0.853083 -0.851339 -0.524615 879.697 61.3896)"
              stroke="black"
            />
            <rect
              id="LLLH"
              x="189.664"
              y="21.1299"
              width="151.525"
              height="137.927"
              className="empty"
            />
            <rect
              id="r64"
              x="112.416"
              y="21.1299"
              width="76.5053"
              height="67.8452"
              className="empty"
            />
            <rect
              id="r63"
              x="112.416"
              y="89.7206"
              width="76.5053"
              height="69.3363"
              className="empty"
            />
            <rect
              id="r5657"
              x="137.67"
              y="159.802"
              width="126.271"
              height="62.6263"
              className="empty"
            />
            <rect
              id="r53"
              x="264.683"
              y="159.802"
              width="76.5053"
              height="62.6263"
              className="empty"
            />
            <rect
              id="r54"
              x="213.432"
              y="258.215"
              width="77.2481"
              height="70.0818"
              className="empty"
            />
            <rect
              id="r55"
              x="136.184"
              y="258.215"
              width="76.5053"
              height="70.0818"
              className="empty"
            />
            <rect
              id="r48"
              x="437.749"
              y="258.961"
              width="80.2192"
              height="69.3363"
              className="empty"
            />
            <rect
              id="r44"
              x="518.711"
              y="258.961"
              width="81.7047"
              height="69.3363"
              className="empty"
            />
            <rect
              id="r42"
              x="601.158"
              y="258.961"
              width="77.9909"
              height="69.3363"
              className="empty"
            />
            <line
              id="Line 408"
              x1="291.423"
              y1="257.715"
              x2="344.903"
              y2="257.715"
              stroke="black"
            />
            <line
              id="Line 409"
              x1="344.66"
              y1="258.215"
              x2="344.66"
              y2="328.297"
              stroke="black"
            />
            <line
              id="Line 410"
              x1="344.66"
              y1="329.043"
              x2="344.66"
              y2="361.847"
              stroke="black"
            />
            <line
              id="Line 411"
              x1="344.903"
              y1="362.347"
              x2="290.68"
              y2="362.347"
              stroke="black"
            />
            <line
              id="Line 412"
              x1="291.18"
              y1="329.043"
              x2="291.18"
              y2="361.847"
              stroke="black"
            />
            <line
              id="Line 413"
              x1="344.16"
              y1="328.543"
              x2="437.006"
              y2="328.543"
              stroke="black"
            />
            <line
              id="Line 414"
              x1="341.931"
              y1="96.6761"
              x2="392.44"
              y2="96.6761"
              stroke="black"
            />
            <line
              id="Line 415"
              x1="392.94"
              y1="96.4307"
              x2="392.94"
              y2="169.495"
              stroke="black"
            />
            <line
              id="Line 416"
              x1="392.44"
              y1="169.249"
              x2="341.931"
              y2="169.249"
              stroke="black"
            />
            <line
              id="Line 417"
              x1="477.858"
              y1="123.516"
              x2="644.239"
              y2="123.516"
              stroke="black"
            />
          </g>
        ))}
      </svg>
    </>
  );
}

export default GroundFloorMap;
