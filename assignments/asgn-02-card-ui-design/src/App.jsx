import "./App.css";
import DemoCard1 from "./components/DemoCard1";

function App() {
  const propsList1 = [
    {
      topic: "UX Research",
      outline:
        "Conduct UX research to explore user preferences, behaviors, and expectations for effective and engaging card designs.",
    },
    {
      topic: "Bootcamp",
      outline:
        "Join our intensive bootcamp program to master modern web development skills through hands-on projects and expert mentorship.",
    },
    {
      topic: "Coffee Chat",
      outline:
        "Join us for informal networking sessions over coffee, where professionals share experiences and insights in a relaxed atmosphere.",
    },
  ];

  const cards1 = [];
  for (let i = 0; i < propsList1.length; i++) {
    const props = propsList1[i];
    cards1.push(<DemoCard1 key={props.topic} {...props}></DemoCard1>);
  }

  return (
    <>
      <h1>Demo Card 1</h1>
      <div className="cards-wrapper-1">{cards1}</div>
    </>
  );
}

export default App;
