import "./App.css";

function App() {
    const name: string = "chaudhuree";
    const age: number = 27;
    const isMarried: boolean = false;
    const getAge = (name: string): number => {
        if (name === "chaudhuree") {
            return 20;
        } else {
            return 0;
        }
    };
    const getage=getAge("chaudhuree")
    return (
        <div className="App">
            <p>hi, i am {name}</p>
    <p>i am {age} years old</p>
    <p>{isMarried ? "i am married" : "i am not married"}</p>
    <p>{getage}</p>
    </div>
);
}

export default App;
