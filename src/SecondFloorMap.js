function SecondFloorMap({ rooms }) {
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
        width="1077"
        height="453"
        viewBox="0 0 1077 453"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {rooms.map((room) => (
          <g id="second floor" key={room.id}>
            <line
              id="Line 70"
              x1="183.935"
              y1="1.15457"
              x2="682.064"
              y2="1.15457"
              stroke="black"
            />
            <line
              id="Line 80"
              x1="764.116"
              y1="233.108"
              x2="798.154"
              y2="178.778"
              stroke="black"
            />
            <path
              id="stairs"
              d="M1034.67 313.231L1001.29 369.524M1034.54 313.43L1075.78 335.686M1075.91 335.476L1030.75 417.953M1030.95 418.078L987.094 392.55"
              stroke="black"
            />
            <line
              id="Line 84"
              x1="986.872"
              y1="392.686"
              x2="952.18"
              y2="452.252"
              stroke="black"
            />
            <line
              id="Line 87"
              x1="843.983"
              y1="314.756"
              x2="986.679"
              y2="392.65"
              stroke="black"
            />
            <line
              id="Line 91"
              x1="879.97"
              y1="299.882"
              x2="913.354"
              y2="244.243"
              stroke="black"
            />
            <line
              id="Line 92"
              x1="940.839"
              y1="334.586"
              x2="972.913"
              y2="277.639"
              stroke="black"
            />
            <line
              id="Line 93"
              x1="823.022"
              y1="266.5"
              x2="855.75"
              y2="211.516"
              stroke="black"
            />
            <line
              id="Line 98"
              x1="532.823"
              y1="311.422"
              x2="715.449"
              y2="312.093"
              stroke="black"
            />
            <line
              id="Line 99"
              x1="715.066"
              y1="312.158"
              x2="732.085"
              y2="323.285"
              stroke="black"
            />
            <line
              id="Line 100"
              x1="711.02"
              y1="312.571"
              x2="711.674"
              y2="245.15"
              stroke="black"
            />
            <line
              id="Line 102"
              x1="536.094"
              y1="244.655"
              x2="712.174"
              y2="244.655"
              stroke="black"
            />
            <line
              id="Line 103"
              x1="711.732"
              y1="244.703"
              x2="764.752"
              y2="269.576"
              stroke="black"
            />
            <line
              id="Line 105"
              x1="713.638"
              y1="203.917"
              x2="713.638"
              y2="165.952"
              stroke="black"
            />
            <path
              id="24"
              d="M776.65 71.6938L776.649 167.261M714.138 166.934H776.322M713.811 167.261V71.6938"
              stroke="black"
            />
            <line
              id="Line 110"
              x1="502.711"
              y1="220.436"
              x2="681.409"
              y2="220.436"
              stroke="black"
            />
            <line
              id="Line 111"
              x1="681.564"
              y1="220.936"
              x2="681.553"
              y2="95.2585"
              stroke="black"
            />
            <line
              id="Line 112"
              x1="682.064"
              y1="95.7584"
              x2="502.711"
              y2="95.7584"
              stroke="black"
            />
            <line
              id="Line 113"
              x1="503.211"
              y1="95.9129"
              x2="503.211"
              y2="220.936"
              stroke="black"
            />
            <path
              id="48"
              d="M473.583 158.097V95.2584M473.255 95.5856L381.615 95.5856M383.252 95.9129L383.259 158.097"
              stroke="black"
            />
            <path
              id="41"
              d="M473.91 221.263H383.579M383.252 221.591V158.097M382.925 157.77H473.91M473.583 158.097V220.936"
              stroke="black"
            />
            <path
              id="79"
              d="M383.579 221.263H318.776M319.104 220.936V158.097M318.776 157.77H383.579"
              stroke="black"
            />
            <line
              id="Line 124"
              x1="319.276"
              y1="95.9129"
              x2="319.276"
              y2="158.097"
              stroke="black"
            />
            <line
              id="Line 125"
              x1="318.122"
              y1="95.4129"
              x2="381.615"
              y2="95.4129"
              stroke="black"
            />
            <line
              id="Line 126"
              x1="318.776"
              y1="157.956"
              x2="249.392"
              y2="157.943"
              stroke="black"
            />
            <line
              id="Line 127"
              x1="248.892"
              y1="158.097"
              x2="248.892"
              y2="95.2583"
              stroke="black"
            />
            <line
              id="Line 128"
              x1="249.392"
              y1="95.4129"
              x2="318.122"
              y2="95.4129"
              stroke="black"
            />
            <line
              id="Line 129"
              x1="249.392"
              y1="157.943"
              x2="183.935"
              y2="157.943"
              stroke="black"
            />
            <line
              id="Line 131"
              x1="183.935"
              y1="95.4129"
              x2="248.737"
              y2="95.4129"
              stroke="black"
            />
            <path
              id="57"
              d="M183.607 158.097V95.9129M183.935 95.5856H114.55M114.877 95.2584V158.097M114.55 157.77H183.935"
              stroke="black"
            />
            <line
              id="Line 135"
              x1="184.409"
              y1="1.15811"
              x2="178.518"
              y2="18.8316"
              stroke="black"
            />
            <line
              id="Line 145"
              x1="345.114"
              y1="72.3483"
              x2="345.114"
              y2="1.65457"
              stroke="black"
            />
            <line
              id="Line 146"
              x1="515.957"
              y1="71.6938"
              x2="515.957"
              y2="1.65457"
              stroke="black"
            />
            <path
              id="62"
              d="M17.3032 187.391L54.6138 252.848M54.1611 252.73L113.073 217.383M112.963 217.836L74.3432 155.652"
              stroke="black"
            />
            <line
              id="Line 154"
              x1="54.7665"
              y1="252.767"
              x2="100.587"
              y2="335.243"
              stroke="black"
            />
            <line
              id="Line 155"
              x1="99.8703"
              y1="335.071"
              x2="133.908"
              y2="312.161"
              stroke="black"
            />
            <line
              id="Line 156"
              x1="133.687"
              y1="312.576"
              x2="133.687"
              y2="244.501"
              stroke="black"
            />
            <line
              id="Line 157"
              x1="134.187"
              y1="244.655"
              x2="339.723"
              y2="244.655"
              stroke="black"
            />
            <path
              id="src stairs"
              d="M340.05 244.501V342.032M339.723 341.705H389.47M389.143 342.032V245.155M389.47 245.483H357.396"
              stroke="black"
            />
            <line
              id="Line 162"
              x1="133.534"
              y1="312.076"
              x2="339.724"
              y2="312.773"
              stroke="black"
            />
            <line
              id="Line 163"
              x1="388.816"
              y1="311.422"
              x2="468.019"
              y2="311.422"
              stroke="black"
            />
            <line
              id="Line 164"
              x1="178.544"
              y1="66.4572"
              x2="178.544"
              y2="71.6938"
              stroke="black"
            />
            <line
              id="Line 165"
              x1="178.044"
              y1="71.8483"
              x2="183.935"
              y2="71.8483"
              stroke="black"
            />
            <line
              id="Line 171"
              x1="319.429"
              y1="221.436"
              x2="145.968"
              y2="220.777"
              stroke="black"
            />
            <line
              id="Line 172"
              x1="146.177"
              y1="220.505"
              x2="114.757"
              y2="157.666"
              stroke="black"
            />
            <line
              id="Line 173"
              x1="112.984"
              y1="217.36"
              x2="133.93"
              y2="244.852"
              stroke="black"
            />
            <path
              id="stairs001"
              d="M682.391 1L682.391 71.6938M682.718 18.3462H776.322M776.322 72.021H682.064M776.649 71.6938V18.0189"
              stroke="black"
            />
            <path
              id="12"
              d="M808.776 370.002L844.122 315.018M732.186 323.534L764.915 269.859M764.702 269.745L843.905 314.91M731.981 323.424L808.566 369.899"
              stroke="black"
            />
            <line
              id="Line 175"
              x1="808.644"
              y1="369.744"
              x2="951.995"
              y2="451.566"
              stroke="black"
            />
            <path
              id="01"
              d="M536.094 244.828H468.673M469.001 245.155V311.267M468.019 311.594H535.44M534.458 311.267V245.155"
              stroke="black"
            />
            <line
              id="Line 303"
              x1="182.626"
              y1="71.8483"
              x2="682.064"
              y2="71.8483"
              stroke="black"
            />
            <line
              id="Line 304"
              x1="713.733"
              y1="203.484"
              x2="1001.74"
              y2="369.745"
              stroke="black"
            />
            <line
              id="Line 305"
              x1="776.569"
              y1="166.172"
              x2="1075.05"
              y2="335.706"
              stroke="black"
            />
            <path
              id="r21"
              d="M798.25 179.044L855.853 211.445L823.124 266.756L764.54 232.718L798.25 179.044Z"
              className="empty"
            />
            <path
              id="r19"
              d="M856.18 211.772L913.455 244.173L880.072 299.485L823.451 266.756L856.18 211.772Z"
              className="empty"
            />
            <rect
              id="r01"
              x="469.328"
              y="245.155"
              width="64.8026"
              height="66.1118"
              className="empty"
            />
            <rect
              id="r41"
              x="383.579"
              y="158.097"
              width="89.6763"
              height="62.8389"
              className="empty"
            />
            <rect
              id="r79"
              x="319.431"
              y="158.097"
              width="63.4935"
              height="62.8389"
              className="empty"
            />
            <rect
              id="r49"
              x="319.431"
              y="95.9129"
              width="63.4935"
              height="61.5298"
              className="empty"
            />
            <rect
              id="r48"
              x="383.579"
              y="95.9129"
              width="89.6763"
              height="62.1843"
              className="empty"
            />
            <rect
              id="r54"
              x="249.392"
              y="95.9129"
              width="69.3846"
              height="61.5298"
              className="empty"
            />
            <rect
              id="r56"
              x="183.935"
              y="95.9129"
              width="64.8026"
              height="61.5298"
              className="empty"
            />
            <rect
              id="r57"
              x="115.205"
              y="95.9129"
              width="68.0755"
              height="61.5298"
              className="empty"
            />
            <rect
              id="r58"
              x="0.654602"
              y="44.2018"
              width="84.4398"
              height="62.1843"
              className="empty"
            />
            <line
              id="Line 324"
              x1="85.5944"
              y1="43.5472"
              x2="85.5944"
              y2="106.386"
              stroke="black"
            />
            <line
              id="Line 325"
              x1="85.0944"
              y1="44.0472"
              x2="2.28882e-05"
              y2="44.0472"
              stroke="black"
            />
            <line
              id="Line 326"
              x1="0.5"
              y1="43.5472"
              x2="0.5"
              y2="106.386"
              stroke="black"
            />
            <line
              id="Line 327"
              x1="0.654602"
              y1="106.541"
              x2="85.7489"
              y2="106.541"
              stroke="black"
            />
            <line
              id="Line 328"
              x1="85.2489"
              y1="43.5472"
              x2="85.2489"
              y2="18.0189"
              stroke="black"
            />
            <line
              id="Line 329"
              x1="85.0944"
              y1="18.1734"
              x2="178.044"
              y2="18.1734"
              stroke="black"
            />
            <line
              id="Line 330"
              x1="178.544"
              y1="18.0189"
              x2="178.544"
              y2="67.1117"
              stroke="black"
            />
            <line
              id="Line 331"
              x1="178.698"
              y1="66.9572"
              x2="85.7489"
              y2="66.9572"
              stroke="black"
            />
            <path
              id="r59"
              d="M0.654602 107.041H85.0944V149.261L17.0189 186.898L0.654602 165.952V107.041Z"
              className="empty"
            />
            <line
              id="Line 332"
              x1="0.5"
              y1="106.386"
              x2="0.499997"
              y2="165.952"
              stroke="black"
            />
            <line
              id="Line 333"
              x1="0.392746"
              y1="165.643"
              x2="17.4116"
              y2="187.244"
              stroke="black"
            />
            <line
              id="Line 334"
              x1="16.7771"
              y1="187.115"
              x2="85.5071"
              y2="149.15"
              stroke="black"
            />
            <line
              id="Line 335"
              x1="85.2489"
              y1="149.588"
              x2="85.2489"
              y2="106.386"
              stroke="black"
            />
            <path
              id="r62"
              d="M74.2939 155.806L112.586 217.336L54.3294 252.356L17.3461 187.226L74.2939 155.806Z"
              className="empty"
            />
          </g>
        ))}
      </svg>
    </>
  );
}

export default SecondFloorMap;
