function ThirdFloorMap({ rooms }) {
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
        width="1142"
        height="494"
        viewBox="0 0 1142 494"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {rooms.map((room) => (
          <g id="third floor" key={room.id}>
            <line
              id="Line 178"
              x1="751.665"
              y1="23.3538"
              x2="855.221"
              y2="23.3538"
              stroke="black"
            />
            <line
              id="Line 179"
              x1="855.721"
              y1="23.1396"
              x2="855.721"
              y2="183.83"
              stroke="black"
            />
            <line
              id="Line 180"
              x1="855.47"
              y1="183.397"
              x2="1141.14"
              y2="347.659"
              stroke="black"
            />
            <line
              id="Line 181"
              x1="1141.32"
              y1="347.64"
              x2="1052.05"
              y2="492.619"
              stroke="black"
            />
            <line
              id="Line 182"
              x1="1052.09"
              y1="492.792"
              x2="788.853"
              y2="344.243"
              stroke="black"
            />
            <line
              id="Line 183"
              x1="789.313"
              y1="344.521"
              x2="789.313"
              y2="273.817"
              stroke="black"
            />
            <line
              id="Line 184"
              x1="789.516"
              y1="274.317"
              x2="712.385"
              y2="274.317"
              stroke="black"
            />
            <line
              id="Line 185"
              x1="712.885"
              y1="273.817"
              x2="712.885"
              y2="344.521"
              stroke="black"
            />
            <line
              id="Line 186"
              x1="712.385"
              y1="274.317"
              x2="665.249"
              y2="274.317"
              stroke="black"
            />
            <line
              id="Line 188"
              x1="665.249"
              y1="344.021"
              x2="712.385"
              y2="344.021"
              stroke="black"
            />
            <path
              id="02"
              d="M518.067 273.817V343.807M517.71 274.192L428.438 274.175M428.795 274.531V343.807M428.438 344.164H518.424"
              stroke="black"
            />
            <path id="Line 198" d="M428.438 274.174H371.6" stroke="black" />
            <line
              id="Line 200"
              x1="371.803"
              y1="343.093"
              x2="371.803"
              y2="371.66"
              stroke="black"
            />
            <path id="Line 201" d="M372.017 371.303H428.855" stroke="black" />
            <line
              id="Line 202"
              x1="428.652"
              y1="371.66"
              x2="428.652"
              y2="343.807"
              stroke="black"
            />
            <path
              id="66"
              d="M371.66 273.817V343.093M371.303 274.174H297.742M297.385 273.817V343.093M297.028 342.736L371.303 342.722"
              stroke="black"
            />
            <line
              id="Line 206"
              x1="297.445"
              y1="342.879"
              x2="261.736"
              y2="342.879"
              stroke="black"
            />
            <line
              id="Line 207"
              x1="297.445"
              y1="274.317"
              x2="261.736"
              y2="274.317"
              stroke="black"
            />
            <line
              id="Line 208"
              x1="261.819"
              y1="274.531"
              x2="261.819"
              y2="342.379"
              stroke="black"
            />
            <line
              id="Line 209"
              x1="261.736"
              y1="274.317"
              x2="196.746"
              y2="274.317"
              stroke="black"
            />
            <line
              id="Line 210"
              x1="196.829"
              y1="274.531"
              x2="196.829"
              y2="342.379"
              stroke="black"
            />
            <line
              id="Line 211"
              x1="196.746"
              y1="342.593"
              x2="262.45"
              y2="342.593"
              stroke="black"
            />
            <line
              id="Line 212"
              x1="196.739"
              y1="274.317"
              x2="145.318"
              y2="273.613"
              stroke="black"
            />
            <line
              id="Line 213"
              x1="145.408"
              y1="273.817"
              x2="145.408"
              y2="342.379"
              stroke="black"
            />
            <line
              id="Line 214"
              x1="145.325"
              y1="342.593"
              x2="196.746"
              y2="342.593"
              stroke="black"
            />
            <line
              id="Line 215"
              x1="155.555"
              y1="342.822"
              x2="109.133"
              y2="367.104"
              stroke="black"
            />
            <path
              id="Line 216"
              d="M109.306 366.838L57.7775 277.031"
              stroke="black"
            />
            <path
              id="Line 218"
              d="M125.982 240.608L145.633 273.637"
              stroke="black"
            />
            <path
              id="49"
              d="M126.339 240.608L57.7774 277.031L15.9978 205.97M125.982 240.608L85.7381 170.439"
              stroke="black"
            />
            <path
              id="47"
              d="M94.9148 118.483H1.00136L1.00134 47.4218M1.00134 47.7771H95.629M95.2706 48.1323L95.278 118.484"
              stroke="black"
            />
            <line
              id="Line 230"
              x1="95.129"
              y1="47.4218"
              x2="95.129"
              y2="19.5687"
              stroke="black"
            />
            <path
              id="Line 231"
              d="M94.9149 19.2117L196.329 19.2117"
              stroke="black"
            />
            <line
              id="Line 232"
              x1="95.3319"
              y1="72.6323"
              x2="196.746"
              y2="72.6323"
              stroke="black"
            />
            <line
              id="Line 247"
              x1="643.406"
              y1="72.6323"
              x2="693.399"
              y2="72.6323"
              stroke="black"
            />
            <line
              id="Line 251"
              x1="752.379"
              y1="72.6323"
              x2="855.221"
              y2="72.6323"
              stroke="black"
            />
            <line
              id="Line 252"
              x1="785.314"
              y1="73.1323"
              x2="785.314"
              y2="183.83"
              stroke="black"
            />
            <line
              id="Line 253"
              x1="785.231"
              y1="183.33"
              x2="855.221"
              y2="183.33"
              stroke="black"
            />
            <line
              id="Line 254"
              x1="785.314"
              y1="183.83"
              x2="785.314"
              y2="224.539"
              stroke="black"
            />
            <line
              id="Line 255"
              x1="785.069"
              y1="224.109"
              x2="840.478"
              y2="256.961"
              stroke="black"
            />
            <line
              id="Line 256"
              x1="839.805"
              y1="257.117"
              x2="879.085"
              y2="197.126"
              stroke="black"
            />
            <path
              id="46"
              d="M127.407 105.985V173.118M127.053 172.761H199.903M200.257 173.118V105.985M199.903 106.342L127.053 106.348"
              stroke="black"
            />
            <path
              id="36"
              d="M424.51 173.118L424.51 105.985M424.867 106.342H500.57M500.206 106.699L500.213 178.117M499.856 178.474H424.867"
              stroke="black"
            />
            <line
              id="Line 273"
              x1="424.367"
              y1="178.117"
              x2="424.367"
              y2="172.403"
              stroke="black"
            />
            <path
              id="67"
              d="M348.806 170.975V242.393M349.162 242.036H424.152"
              stroke="black"
            />
            <path
              id="01"
              d="M424.51 241.679V178.117M424.152 242.036H523.067M522.711 242.393V178.117M523.067 178.474H499.168"
              stroke="black"
            />
            <line
              id="Line 280"
              x1="522.21"
              y1="178.831"
              x2="522.21"
              y2="106.699"
              stroke="black"
            />
            <path
              id="Line 281"
              d="M522.71 106.342L499.559 106.342"
              stroke="black"
            />
            <line
              id="Line 282"
              x1="349.581"
              y1="242.179"
              x2="299.588"
              y2="242.179"
              stroke="black"
            />
            <line
              id="Line 283"
              x1="299.802"
              y1="241.679"
              x2="299.802"
              y2="173.118"
              stroke="black"
            />
            <line
              id="Line 284"
              x1="300.302"
              y1="242.191"
              x2="164.19"
              y2="242.179"
              stroke="black"
            />
            <line
              id="Line 285"
              x1="164.465"
              y1="241.917"
              x2="127.03"
              y2="172.641"
              stroke="black"
            />
            <line
              id="Line 286"
              x1="556.479"
              y1="108.841"
              x2="556.479"
              y2="242.393"
              stroke="black"
            />
            <line
              id="Line 287"
              x1="556.693"
              y1="241.893"
              x2="751.665"
              y2="241.893"
              stroke="black"
            />
            <path
              id="Line 289"
              d="M751.248 109.198L555.979 109.198"
              stroke="black"
            />
            <path
              id="44"
              d="M195.956 19.5686L195.972 72.418M195.972 1V19.5687M275.246 1.71418V73.1323M274.889 72.7752H196.329M195.614 1.35709H275.603"
              stroke="black"
            />
            <path
              id="48"
              d="M1 118.126V183.116L16.3259 206.486M95.2719 118.37V161.691M15.8661 206.367L85.9876 170.618L95.2719 161.334"
              stroke="black"
            />
            <path
              id="41"
              d="M348.806 173.118V106.699M347.735 106.342H274.174M274.174 172.761H348.449"
              stroke="black"
            />
            <path
              id="42"
              d="M274.889 72.7752H348.449M348.092 72.4181V1M275.603 1.35709H348.449"
              stroke="black"
            />
            <path
              id="39"
              d="M348.449 72.7752H424.867M425.224 73.1323V1.71415M347.735 1.35706H425.581"
              stroke="black"
            />
            <path
              id="37"
              d="M498.07 73.1323V1.71415M425.581 72.7752H497.713M424.867 1.35706H498.427"
              stroke="black"
            />
            <path
              id="26"
              d="M570.56 72.7752H642.692M643.049 73.1323V1.71415M569.846 1.35706H643.406"
              stroke="black"
            />
            <line
              id="Line 302"
              x1="643.109"
              y1="1.21423"
              x2="693.816"
              y2="1.21423"
              stroke="black"
            />
            <path
              id="21"
              d="M751.605 22.4254V73.1323M751.605 1V1.35709M751.605 1.35709V23.1396M751.605 1.35709H692.685M751.605 1.35709H751.962M693.042 73.1323L693.042 1.71418M693.399 72.7752H751.248"
              stroke="black"
            />
            <path
              id="38"
              d="M348.456 172.761H424.867M424.146 106.342H347.735M424.506 106.699V172.403M348.816 105.985V172.403"
              stroke="black"
            />
            <line
              id="Line 306"
              x1="712.682"
              y1="344.021"
              x2="789.813"
              y2="344.021"
              stroke="black"
            />
            <path
              id="03"
              d="M588.117 274.174L518.128 274.189M518.127 344.164H588.117M588.057 273.817V344.521"
              stroke="black"
            />
            <line
              id="Line 308"
              x1="665.332"
              y1="273.817"
              x2="665.332"
              y2="344.521"
              stroke="black"
            />
            <line
              id="Line 309"
              x1="588.414"
              y1="274.031"
              x2="664.832"
              y2="274.031"
              stroke="black"
            />
            <line
              id="Line 310"
              x1="588.414"
              y1="344.021"
              x2="664.832"
              y2="344.021"
              stroke="black"
            />
            <rect
              id="02_2"
              x="428.652"
              y="274.031"
              width="89.5585"
              height="70.2756"
              stroke="black"
            />
            <rect
              className="empty"
              id="r44"
              x="196.329"
              y="1.71423"
              width="78.56"
              height="70.704"
            />
            <rect
              className="empty"
              id="r42"
              x="275.603"
              y="1.71423"
              width="72.1323"
              height="70.704"
            />
            <rect
              className="empty"
              id="r39"
              x="348.449"
              y="1.71423"
              width="76.4174"
              height="70.704"
            />
            <rect
              className="empty"
              id="r37"
              x="425.581"
              y="1.71423"
              width="72.1323"
              height="70.704"
            />
            <rect
              className="empty"
              id="r27"
              x="497.713"
              y="1.71423"
              width="72.1323"
              height="70.704"
            />
            <rect
              className="empty"
              id="r26"
              x="569.846"
              y="1.71423"
              width="72.8465"
              height="70.704"
            />
            <rect
              className="empty"
              id="r21"
              x="693.399"
              y="1.71423"
              width="57.8487"
              height="70.704"
            />
            <rect
              className="empty"
              id="r36"
              x="424.867"
              y="106.699"
              width="74.9891"
              height="71.4181"
            />
            <rect
              className="empty"
              id="r38"
              x="349.163"
              y="106.699"
              width="74.9891"
              height="65.7047"
            />
            <rect
              className="empty"
              id="r67"
              x="349.163"
              y="173.118"
              width="74.9891"
              height="68.5614"
            />
            <rect
              className="empty"
              id="r41"
              x="274.174"
              y="106.699"
              width="74.2749"
              height="65.7047"
            />
            <line
              id="Line 337"
              x1="751.462"
              y1="242.393"
              x2="751.462"
              y2="108.841"
              stroke="black"
            />
            <path
              id="27"
              d="M498.427 1.35709H569.845M570.203 1L570.203 73.1323M569.845 72.7752L498.427 72.7752M498.07 73.1323V1"
              stroke="black"
            />
            <line
              id="Line 338"
              x1="273.96"
              y1="105.985"
              x2="273.96"
              y2="173.118"
              stroke="black"
            />
            <line
              id="Line 339"
              x1="200.614"
              y1="106.199"
              x2="273.46"
              y2="106.199"
              stroke="black"
            />
            <line
              id="Line 340"
              x1="200.614"
              y1="172.618"
              x2="273.46"
              y2="172.618"
              stroke="black"
            />
            <rect
              className="empty"
              id="r43"
              x="200.614"
              y="106.699"
              width="72.8465"
              height="65.7047"
            />
            <rect
              className="empty"
              id="r46"
              x="127.767"
              y="106.699"
              width="72.1323"
              height="65.7047"
            />
            <rect
              className="empty"
              id="r03"
              x="429.152"
              y="274.531"
              width="88.5585"
              height="69.2756"
            />
            <rect
              className="empty"
              id="r02"
              x="518.424"
              y="274.531"
              width="69.2756"
              height="69.2756"
            />
            <rect
              className="empty"
              id="r66"
              x="297.742"
              y="274.531"
              width="73.5607"
              height="67.8472"
            />
            <rect
              className="empty"
              id="r61"
              x="197.043"
              y="274.531"
              width="64.2763"
              height="67.8472"
            />
            <path
              className="empty"
              id="r49"
              d="M85.6305 170.975L125.625 240.608L57.7774 276.674L16.3549 206.327L85.6305 170.975Z"
            />
            <path
              className="empty"
              id="r48"
              d="M94.9149 118.84V160.977L85.9876 170.261L15.9978 205.613L1.35712 183.116V118.84H94.9149Z"
            />
            <rect
              className="empty"
              id="r47"
              x="1.35712"
              y="48.136"
              width="93.5578"
              height="69.9898"
            />
          </g>
        ))}
      </svg>
    </>
  );
}

export default ThirdFloorMap;
