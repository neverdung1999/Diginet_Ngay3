// import React, { useState, useEffect } from "react";
// import Tab1 from "../../components/Tab1/Tab1";
// import Tab2 from "../../components/Tab2/Tab2";
// import Tab3 from "../../components/Tab3/Tab3";
// import Tab4 from "../../components/Tab4/Tab4";
// // import axios from "axios";

// function Screen(props) {
//   console.log("Screen");
//   const { history, showContentTab, showTabbar, showUiSearch } = props;
//   // const [data, setData] = useState([]);
//   // const id = history.location.state.item.id;
//   //   const data = history.location.state.data;

//   // useEffect(() => {
//   //   console.log(123123123);
//   //   axios({
//   //     method: "get",
//   //     url: "https://api.appfast.io/v3?operationName=getContent&variables=%7B%22limit%22%3A20%2C%22start%22%3A0%2C%22where%22%3A%7B%22tag%22%3A%5B%22609e2238bbca91001079bbc6%22%5D%2C%22type%22%3A%5B%22photo%22%2C%22video%22%2C%22news%22%2C%22event%22%2C%22link%22%2C%22pdf%22%2C%22mp4%22%5D%2C%22projectId%22%3A%22604f2564831b6f001062735a%22%2C%22key%22%3A%22POST_CONTENT_crtooduucr%22%2C%22active%22%3Atrue%2C%22_cache%22%3Afalse%7D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22be56086ed0eff4528148a4e27b56e7b57df1367bdbb2e7cfe5a024c400189e6c%22%7D%7D",
//   //     data: null,
//   //   })
//   //     .then((res) => setData(res.data.data.contentFilter))
//   //     .catch((err) => console.log(err));
//   // }, []);

//   console.log(data);

//   const showContent = () => {
//     switch (showContentTab) {
//       case 1:
//         return (
//           <Tab1
//             data={data}
//             showUiSearch={showUiSearch}
//             showTabbar={showTabbar}
//           />
//         );
//       case 2:
//         return (
//           <Tab2
//             data={data}
//             showUiSearch={showUiSearch}
//             showTabbar={showTabbar}
//           />
//         );
//       case 3:
//         return <Tab3 data={data} />;
//       case 4:
//         return <Tab4 data={data} />;
//       default:
//         return <Tab1 data={data} />;
//     }
//   };

//   return <div>{showContent()}</div>;
// }

// export default Screen;
