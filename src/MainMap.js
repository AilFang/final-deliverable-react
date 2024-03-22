function MainMap({ rooms }) {
  console.log("Room value:", rooms);

  const processedRooms = rooms.map((room) => {
    const color = room.isChecked ? "fill" : "empty";
    console.log("Room color:", color);
    console.log("Room update:", room);
    return { ...room, color }; // Adding color property to each room object
  });
  return (
    <>
      <svg
        width="1031"
        height="439"
        viewBox="0 0 1031 439"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {processedRooms.map((room) => (
          <g id="main floor" key={room.id}>
            <line
              id="Line 2"
              x1="639.168"
              y1="1.63104"
              x2="639.168"
              y2="33.1831"
              stroke="black"
            />
            <path
              id="chorus room"
              d="M804.156 387.554L893.764 438.037M893.339 438.147L955.813 335.919M955.923 336.356L866.946 284.611M866.539 284.376L804.903 387.99"
              stroke="black"
            />
            <line
              id="Line 18"
              x1="638.271"
              y1="218.899"
              x2="736.082"
              y2="270.644"
              stroke="black"
            />
            <line
              id="Line 19"
              x1="721.706"
              y1="338.404"
              x2="675.008"
              y2="310.007"
              stroke="black"
            />
            <path
              id="counseling"
              d="M441.783 193.783H442.098M442.098 193.783L609.011 193.785M442.098 193.783L442.098 42.9643M442.098 193.783L442.098 194.099M609.324 194.099V42.9643M609.324 42.9643V42.6488M609.324 42.9643H609.64M609.324 42.9643H442.098M442.098 42.9643H441.783M442.098 42.9643L442.098 42.6488"
              stroke="black"
            />
            <path
              id="scr stairs"
              d="M338.292 246.16H362.903M363.218 245.847L362.587 334.192M362.903 333.875H315.574M315.89 334.19L315.89 305.162"
              stroke="black"
            />
            <path
              id="main stairs"
              d="M402.974 112.694V190.944M402.658 190.628H363.534M402.658 113.01L362.903 113.01"
              stroke="black"
            />
            <path
              id="ramp"
              d="M220.918 246.16H107.331M107.478 246.123L34.9086 284.617M35.2983 284.639L1.17743 274.05M95.488 218.357L38.0632 248.648M38.4644 248.673L1.23298 238.576M95.3408 218.394H140.776"
              stroke="black"
            />
            <line
              id="Line 54"
              x1="220.918"
              y1="305.031"
              x2="133.834"
              y2="305.031"
              stroke="black"
            />
            <line
              id="Line 55"
              x1="134.087"
              y1="304.963"
              x2="1.56826"
              y2="382.581"
              stroke="black"
            />
            <line
              id="Line 57"
              x1="363.534"
              y1="1.13104"
              x2="639.299"
              y2="1.13104"
              stroke="black"
            />
            <path
              id="MLLH"
              d="M107.331 193.152L1.31559 193.145M1 193.468V54.6385M1.31552 54.9541H81.4578M81.4578 76.4095H107.962M107.015 193.466L107.646 76.7233M81.1423 54.6385V76.725"
              stroke="black"
            />
            <path
              id="stairs"
              d="M81.1423 54.6386V33.1831M80.829 32.8676L167.282 33.4805M137.305 55.9006V76.725M107.962 76.4095H137.621"
              stroke="black"
            />
            <line
              id="Line 64"
              x1="639.799"
              y1="140.46"
              x2="639.799"
              y2="160.023"
              stroke="black"
            />
            <line
              id="Line 65"
              x1="639.43"
              y1="141.091"
              x2="639.43"
              y2="80.5113"
              stroke="black"
            />
            <path
              id="stair001"
              d="M639.301 32.8676L728.909 33.4942M729.222 33.1831V47.0661M638.983 32.5521V60.949M639.299 80.1958H728.907"
              stroke="black"
            />
            <path
              id="band room"
              d="M729.056 46.7878L865.992 119.989M780.909 204.379L748.095 250.445M748.32 250.54L639.781 192.484M866.115 119.795L807.428 220.131M639.614 192.837V160.023M729.222 47.0661V109.539M729.117 109.144L693.779 140.696M694.2 140.776H639.299M780.809 204.553L807.313 219.698"
              stroke="black"
            />
            <line
              id="Line 69"
              x1="866.073"
              y1="119.823"
              x2="900.149"
              y2="137.492"
              stroke="black"
            />
            <path
              id="orchestra room"
              d="M1030.03 206.704L967.643 309.702M967.919 309.856L842.342 240.441M900.194 138.091L842.769 240.319M900.068 137.658L1030.06 207.072"
              stroke="black"
            />
            <path
              id="11"
              d="M866.949 284.612L786.175 238.546M786.594 237.812L721.599 338.149M804.903 388.013L721.803 338.247"
              stroke="black"
            />
            <rect
              id="SRC"
              x="169.173"
              y="1.63104"
              width="193.73"
              height="216.447"
              fill="#C4C4C4"
            />
            <path
              id="MLLH_2"
              d="M1 54.9541H81.1423V76.4095H107.331L106.7 192.837H1V54.9541Z"
              fill="#C4C4C4"
            />
            <rect
              id="74"
              x="220.287"
              y="246.475"
              width="95.2873"
              height="58.0559"
            />
            <line
              id="Line 311"
              x1="220.918"
              y1="304.662"
              x2="316.205"
              y2="304.662"
              stroke="black"
            />
            <line
              id="Line 312"
              x1="220.156"
              y1="245.844"
              x2="220.156"
              y2="305.162"
              stroke="black"
            />
            <line
              id="Line 313"
              x1="220.918"
              y1="245.975"
              x2="316.205"
              y2="245.975"
              stroke="black"
            />
            <line
              id="Line 314"
              x1="316.074"
              y1="246.475"
              x2="316.074"
              y2="304.531"
              stroke="black"
            />
            <rect
              id="Main Office"
              x="441.152"
              y="218.709"
              width="196.885"
              height="90.87"
              fill="#C4C4C4"
            />
            <line
              id="Line 315"
              x1="441.021"
              y1="218.709"
              x2="441.021"
              y2="309.579"
              stroke="black"
            />
            <line
              id="Line 316"
              x1="440.521"
              y1="309.711"
              x2="638.668"
              y2="309.711"
              stroke="black"
            />
            <line
              id="Line 317"
              x1="638.168"
              y1="309.579"
              x2="638.168"
              y2="218.709"
              stroke="black"
            />
            <line
              id="Line 318"
              x1="638.666"
              y1="219.209"
              x2="440.519"
              y2="218.594"
              stroke="black"
            />
            <line
              id="Line 319"
              x1="364.166"
              y1="1.5"
              x2="169.174"
              y2="2.09813"
              stroke="black"
            />
            <line
              id="Line 320"
              x1="169.673"
              y1="1.63104"
              x2="169.673"
              y2="218.709"
              stroke="black"
            />
            <line
              id="Line 321"
              x1="169.173"
              y1="218.209"
              x2="363.534"
              y2="218.209"
              stroke="black"
            />
            <line
              id="Line 322"
              x1="363.034"
              y1="218.078"
              x2="363.034"
              y2="112.694"
              stroke="black"
            />
            <line
              id="Line 323"
              x1="363.034"
              y1="112.694"
              x2="363.034"
              y2="1.63102"
              stroke="black"
            />
            <rect
              // className={room.isChecked ? "empty" : "fill"}
              className={room.color}
              id="Counseling"
              x="442.414"
              y="43.2798"
              width="166.595"
              height="150.188"
              fill="#C4C4C4"
            />
            <path
              className={room.color}
              id="28"
              d="M729.538 47.3816L865.843 119.951L807.515 219.656L780.696 204.196L748.28 250.262L639.93 192.206V141.091C639.93 141.091 693.884 141.091 694.243 141.091C694.602 141.091 729.538 109.539 729.538 109.539V47.3816Z"
              fill="#C4C4C4"
            />
            <path
              id="23"
              d="M900.235 137.936L1029.6 207.035L967.756 309.58L842.81 240.48L900.235 137.936Z"
              fill="#C4C4C4"
            />
            <path
              id="16"
              d="M866.638 284.693L955.615 336.123L893.457 437.405L805.263 387.829L866.638 284.693Z"
              fill="#C4C4C4"
            />
            <path
              id="11_2"
              d="M786.332 238.587L866.474 284.338L804.947 387.829L721.965 337.976L786.332 238.587Z"
              fill="#C4C4C4"
            />
          </g>
        ))}
      </svg>
    </>
  );
}

export default MainMap;
